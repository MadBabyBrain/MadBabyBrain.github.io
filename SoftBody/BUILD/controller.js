var drawer = null;
var create = function () {
    var can = document.createElement('canvas');
    document.insertBefore(document.getElementsByClassName("container").item(0), can);
    drawer = new Drawer(can);
};
