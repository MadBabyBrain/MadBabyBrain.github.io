let drawer: Drawer | null = null;

let create = () => {
    let can = document.createElement('canvas') as HTMLCanvasElement;
    can.width = window.innerWidth;
    can.height = window.innerHeight - 100;
    document.getElementById("container").appendChild(can);
    drawer = new Drawer(can);
}