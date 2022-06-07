var drawer = null;
var create = function () {
    alert("pressed button");
    var can = document.createElement('canvas');
    can.width = window.innerWidth;
    can.height = window.innerHeight - 100;
    document.body.appendChild(can);
    drawer = new Drawer(can);
};
