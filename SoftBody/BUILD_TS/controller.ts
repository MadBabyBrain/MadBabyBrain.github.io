let drawer: Drawer | null = null;

let create = () => {
    let can = document.createElement('canvas') as HTMLCanvasElement;
    document.getElementById("container").appendChild(can);
    drawer = new Drawer(can);
}