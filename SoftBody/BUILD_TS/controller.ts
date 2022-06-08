let drawer: Drawer | null = null;

let create = () => {
    let can = document.createElement('canvas') as HTMLCanvasElement;
    can.setAttribute("id", "drawing");
    can.width = window.innerWidth - 10;
    can.height = window.innerHeight - 110;
    document.getElementById("container").appendChild(can);
    drawer = new Drawer(can);
}