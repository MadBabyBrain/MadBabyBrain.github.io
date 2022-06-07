var drawer = null;
var create = function () {
    var can = document.createElement('canvas');
    can.width = window.innerWidth;
    can.height = window.innerHeight - 100;
    document.getElementById("container").appendChild(can);
    drawer = new Drawer(can);
};
