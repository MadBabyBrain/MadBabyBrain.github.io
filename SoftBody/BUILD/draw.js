"use strict";
exports.__esModule = true;
var Drawer = /** @class */ (function () {
    function Drawer(canvas) {
        this.canvas = canvas;
    }
    Drawer.prototype.draw = function (action) {
        var context = this.canvas.getContext('2d');
        action.Objects.forEach(function (obj) {
            obj.forEach(function (point) {
                context.fillStyle = point.Color;
                context.beginPath();
                switch (action.isRectangle) {
                    case true:
                        context.rect(point.Position.x - (0.5 * point.Size.width), point.Position.y * (0.5 * point.Size.height), (0.5 * point.Size.width), (0.5 * point.Size.height));
                        break;
                    case false:
                        context.ellipse(point.Position.x, point.Position.y, point.Size.width, point.Size.height, 0, 0, 360, false);
                        break;
                    default:
                        break;
                }
                context.closePath();
            });
        });
    };
    return Drawer;
}());
exports["default"] = Drawer;
