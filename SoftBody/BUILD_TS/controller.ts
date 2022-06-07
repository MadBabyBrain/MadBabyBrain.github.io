let drawer: Drawer | null = null;

let create = () => {
    alert("pressed button")
    let can = document.createElement('canvas') as HTMLCanvasElement;
    can.width = window.innerWidth;
    can.height = window.innerHeight - 100;
    document.body.appendChild(can);
    drawer = new Drawer(can);
}