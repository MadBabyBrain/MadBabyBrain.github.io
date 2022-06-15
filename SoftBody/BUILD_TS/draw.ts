import { Action } from "./Types/Action";
import { Object as custObj } from "./Types/Object";

class Drawer {

    private canvas : HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }

    public draw(action: Action) {
        const context = this.canvas.getContext('2d');
        
        action.Objects.forEach((obj: Array<custObj>) => {
            obj.forEach((point: custObj) => {
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
            })
        })
    }
}

export { Drawer }