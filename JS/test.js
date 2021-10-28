

var level = 1;
var prestige_level = 500;
var prestige_mult = 0;

var enemy = {
    hp: 8
}

var player = {
    damage: 0,
    click: 1
}

var shop = {
    money: 0,
    DPScost: 5,
    CLICKcost: 1
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

    if (localStorage.getItem('level')) {
        console.log('level exists in storage')
        level = localStorage.getItem('level');
    }

    enemy_hp.innerHTML = enemy.hp;
    player_click_dmg.innerHTML = player.click;
    player_dps.innerHTML = player.damage;
    shop_money.innerHTML = shop.money;
    shop_DPS_cost.innerHTML = shop.DPScost;
    shop_CLICK_cost.innerHTML = shop.CLICKcost;
    prestige_val.innerHTML = '+' + (prestige_mult * 100) + '%';
    curr_pres_level.innerHTML = "Level : " + prestige_level;
    title.innerHTML = 'Level: ' + level;
}

window.onbeforeunload = () => {
    console.log('Unloading page')
    localStorage.setItem('level', level);
    localStorage.setItem('prestige_level', prestige_level);
    localStorage.setItem('prestige_mult', prestige_mult);
    localStorage.setItem('enemy', enemy);
    localStorage.setItem('player', player);
    localStorage.setItem('shop', shop);
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

