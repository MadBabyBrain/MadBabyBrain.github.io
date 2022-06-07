let drawer: Drawer | null = null;

let create = () => {
    let can = document.createElement('canvas') as HTMLCanvasElement;
    document.getElementsByClassName("container").item(0).appendChild(can);
    drawer = new Drawer(can);
}