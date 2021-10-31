

var level;
var prestige_level;
var prestige_mult;

var enemy = {
    hp: 0
}

var player = {
    damage: 0,
    click: 0
}

var shop = {
    money: 0,
    DPScost: 0,
    CLICKcost: 0
}

var main;
var enemy_hp;
var player_click_dmg;
var player_dps;
var shop_money;
var shop_DPS_cost;
var shop_CLICK_cost;
var prestige_val;
var curr_pres_level;
var title;

var off_start_date



window.onload = () => {

    enemy_hp = document.getElementById('e_health_value');
    player_click_dmg = document.getElementById('p_click_damage_value');
    player_dps = document.getElementById('p_dps_value');
    shop_money = document.getElementById('shop_money_value');
    shop_DPS_cost = document.getElementById('shop_DPS_cost_value');
    shop_CLICK_cost = document.getElementById('shop_CLICK_cost_value');
    prestige_val = document.getElementById('prestige_val');
    curr_pres_level = document.getElementById('curr_pres_level');
    title = document.getElementById('title');

    if (localStorage.getItem('off_start_date')) { var seconds = Math.floor((Date.now() / 1000) - parseInt(localStorage.getItem('off_start_date'))); }
    if (localStorage.getItem('level')) { level = parseInt(localStorage.getItem('level')); } else { level = 1 }
    if (localStorage.getItem('prestige_level')) { prestige_level = parseInt(localStorage.getItem('prestige_level')); } else { prestige_level = 500 }
    if (localStorage.getItem('prestige_mult')) { prestige_mult = parseInt(localStorage.getItem('prestige_mult')); } else { prestige_mult = 0 }
    if (localStorage.getItem('enemy')) { enemy.hp = parseInt(localStorage.getItem('enemy')); } else { enemy.hp = 8 }
    if (localStorage.getItem('player_click')) { player.click = parseInt(localStorage.getItem('player_click')); } else { player.click = 1 }
    if (localStorage.getItem('player_dmg')) { player.damage = parseInt(localStorage.getItem('player_dmg')); } else { player.damage = 0 }
    if (localStorage.getItem('shop_money')) { shop.money = parseInt(localStorage.getItem('shop_money')); } else { shop.money = 0 }
    if (localStorage.getItem('shop_dmg_cost')) { shop.DPScost = parseInt(localStorage.getItem('shop_dmg_cost')); } else { shop.DPScost = 5 }
    if (localStorage.getItem('shop_click_cost')) { shop.CLICKcost = parseInt(localStorage.getItem('shop_click_cost')); } else { shop.CLICKcost = 1 }

    var accum_health = 0;
    var accum_level = level;
    var accum_money = 0;
    while (accum_health < (player.damage * seconds)) {
        accum_health += ((1 / 10) * Math.pow(accum_level, 2) + 6);
        accum_level++;
        accum_money += accum_level;
    }
    accum_health -= ((1 / 10) * Math.pow(accum_level, 2) + 6);
    accum_money -= accum_level;
    accum_level--;

    level = accum_level;
    shop.money += Math.floor(parseInt(accum_money));
    enemy.hp = ((1 / 10) * Math.pow(level, 2) + 6);

    enemy_hp.innerHTML = enemy.hp;
    player_click_dmg.innerHTML = Math.floor(player.click + (player.click * prestige_mult));
    player_dps.innerHTML = Math.floor(player.damage + (player.damage * prestige_mult));
    shop_money.innerHTML = shop.money;
    shop_DPS_cost.innerHTML = shop.DPScost;
    shop_CLICK_cost.innerHTML = shop.CLICKcost;
    prestige_val.innerHTML = '+' + (prestige_mult * 100) + '%';
    curr_pres_level.innerHTML = "Level : " + prestige_level;
    title.innerHTML = 'Level: ' + level;
}

window.onbeforeunload = () => {
    off_start_date = Date.now() / 1000
    localStorage.setItem('off_start_date', off_start_date);
    localStorage.setItem('level', level);
    localStorage.setItem('prestige_level', prestige_level);
    localStorage.setItem('prestige_mult', prestige_mult);
    localStorage.setItem('enemy', enemy.hp);
    localStorage.setItem('player_click', player.click);
    localStorage.setItem('player_dmg', player.damage);
    localStorage.setItem('shop_money', shop.money);
    localStorage.setItem('shop_dmg_cost', shop.DPScost);
    localStorage.setItem('shop_click_cost', shop.CLICKcost);
}

var increaseDPS = () => {
    if (shop.money >= shop.DPScost) {
        shop.money -= shop.DPScost;
        player.damage++;
        shop.DPScost = Math.floor((Math.pow(1 / 10, 4) * Math.pow(player.damage, 2)) + ((6 / 5) * player.damage) + 5);

        player_dps.innerHTML = Math.floor(player.damage + (player.damage * prestige_mult));
        shop_money.innerHTML = shop.money;
        shop_DPS_cost.innerHTML = shop.DPScost;
    }
}


var increaseCLICK = () => {
    if (shop.money >= shop.CLICKcost) {
        shop.money -= shop.CLICKcost;
        player.click++;
        shop.CLICKcost = Math.floor((Math.pow(1 / 10, 4) * Math.pow(player.click, 2)) + ((6 / 5) * player.click) + 1);

        player_click_dmg.innerHTML = Math.floor(player.click + (player.click * prestige_mult));
        shop_money.innerHTML = shop.money;
        shop_CLICK_cost.innerHTML = shop.CLICKcost;
    }
}

var prestige = () => {
    if (level >= prestige_level) {
        prestige_mult += (level - prestige_level) / 100;
        prestige_level = Math.floor(prestige_level * 1.5);
        level = 0;
        player.damage = 0;
        player.click = 1;
        enemy.hp = 8;
        shop.money = 0;
        shop.CLICKcost = 1;
        shop.DPScost = 5;

        enemy_hp.innerHTML = enemy.hp;
        player_click_dmg.innerHTML = Math.floor(player.click + (player.click * prestige_mult));
        player_dps.innerHTML = Math.floor(player.damage + (player.damage * prestige_mult));
        shop_money.innerHTML = shop.money;
        shop_DPS_cost.innerHTML = shop.DPScost;
        shop_CLICK_cost.innerHTML = shop.CLICKcost;
        prestige_val.innerHTML = '+' + (prestige_mult * 100) + '%';
        curr_pres_level.innerHTML = "Level : " + prestige_level;
        title.innerHTML = 'Level: ' + level;
    }
}

var onclick = (e) => {
    // console.log('fuck');

    if (enemy.hp <= 0) {
        shop.money += level;
        shop_money.innerHTML = shop.money;
        level++;
        enemy.hp = (1 / 10) * Math.pow(level, 2) + 6;
        title.innerHTML = 'Level: ' + level;
    }

    enemy_hp.innerHTML = Math.floor(enemy.hp);
    // player_click_dmg.innerHTML = player.click;

    enemy.hp -= (player.click + (player.click * prestige_mult));
}


setInterval(update = () => {
    // console.log('cum');

    if (enemy.hp <= 0) {
        shop.money += level;
        shop_money.innerHTML = shop.money;
        level++;
        enemy.hp = (1 / 10) * Math.pow(level, 2) + 6;
        title.innerHTML = 'Level: ' + level;
    }

    enemy_hp.innerHTML = Math.floor(enemy.hp);

    enemy.hp -= ((player.damage + (player.damage * prestige_mult)) / 100)
}, 10);

