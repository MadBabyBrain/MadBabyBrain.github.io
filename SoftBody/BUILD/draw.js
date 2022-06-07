var Drawer = /** @class */ (function () {
    function Drawer(canvas) {
        this.canvas = canvas;
    }
    Drawer.prototype.draw = function (action) {
        var context = this.canvas.getContext('2d');
        context.fillStyle = action.color;
        context.beginPath();
        switch (action.type) {
            case "rect":
                context.rect(action.position.x - (0.5 * action.size.width), action.position.y * (0.5 * action.size.height), (0.5 * action.size.width), (0.5 * action.size.height));
                break;
            case "elips":
                context.ellipse(action.position.x, action.position.y, action.size.width, action.size.height, 0, 0, 360, false);
                break;
            default:
                break;
        }
        context.closePath();
    };
    return Drawer;
}());
