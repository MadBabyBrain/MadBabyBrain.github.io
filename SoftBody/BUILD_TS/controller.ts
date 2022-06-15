import { Action } from './Types/Action.js'
import Drawer from './draw.js'

let drawer: Drawer | null = null;

let scene : Action;


let create = () => {
    if (!document.getElementById('drawing')) {
        let can = document.createElement('canvas') as HTMLCanvasElement;
        can.setAttribute('id', 'drawing');
        can.width = window.innerWidth - 10;
        can.height = window.innerHeight - 110;
        document.getElementById("container").appendChild(can);
        drawer = new Drawer(can);

        scene = { bgColor: "white", Objects: [[{ Position: { x: 100, y: 100 }, Size: { width: 10, height: 10}, Color: '#000000' }]], Width: 0, Height: 0, isRectangle: true };

    }
}

let draw = (action: Action) => {
    drawer.draw(action);
    requestAnimationFrame(() => draw(action));
}