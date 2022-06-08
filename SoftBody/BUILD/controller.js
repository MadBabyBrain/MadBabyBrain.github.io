var drawer = null;
var create = function () {
    var can = document.createElement('canvas');
    can.setAttribute("id", "drawing");
    can.width = window.innerWidth - 10;
    can.height = window.innerHeight - 110;
    document.getElementById("container").appendChild(can);
    drawer = new Drawer(can);
};
