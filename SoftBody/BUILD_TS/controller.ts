let drawer: Drawer | null = null;

let create = () => {
    let can = document.createElement('canvas') as HTMLCanvasElement;
    document.insertBefore(document.getElementsByClassName("container").item(0), can)
    drawer = new Drawer(can);
}