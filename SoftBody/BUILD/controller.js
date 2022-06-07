var drawer = null;
var create = function () {
    var can = document.createElement('canvas');
    document.getElementsByClassName("container").item(0).appendChild(can);
    drawer = new Drawer(can);
};
