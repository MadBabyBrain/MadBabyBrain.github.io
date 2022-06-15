"use strict";
exports.__esModule = true;
var draw_1 = require("./draw");
var drawer = null;
var scene;
var create = function () {
    if (!document.getElementById('drawing')) {
        var can = document.createElement('canvas');
        can.setAttribute('id', 'drawing');
        can.width = window.innerWidth - 10;
        can.height = window.innerHeight - 110;
        document.getElementById("container").appendChild(can);
        drawer = new draw_1.Drawer(can);
        scene = { bgColor: "white", Objects: [[{ Position: { x: 100, y: 100 }, Size: { width: 10, height: 10 }, Color: '#000000' }]], Width: 0, Height: 0, isRectangle: true };
    }
};
var draw = function (action) {
    drawer.draw(action);
    requestAnimationFrame(function () { return draw(action); });
};
