var drawer = null;
var create = function () {
    var can = document.createElement('canvas');
    document.getElementById("container").appendChild(can);
    drawer = new Drawer(can);
};
