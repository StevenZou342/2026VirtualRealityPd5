class Rocket {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.14;
    this.rotY = 0;

   
    this.obj = document.createElement("a-entity");

   
    let nose = document.createElement("a-cone");
    nose.setAttribute("radius-top", 0);
    nose.setAttribute("radius-bottom", 0.5);
    nose.setAttribute("height", 1.2);
    nose.setAttribute("color", "red");
    nose.setAttribute("position", { x: 0, y: 3.45, z: 0 });
    this.obj.append(nose);

    
    let body = document.createElement("a-cylinder");
    body.setAttribute("radius", 0.5);
    body.setAttribute("height", 2.5);
    body.setAttribute("src", "#metalTex");
    body.setAttribute("position", { x: 0, y: 1.6, z: 0 });
    this.obj.append(body);


    
    let windowGlass = document.createElement("a-sphere");
    windowGlass.setAttribute("radius", 0.22);
    windowGlass.setAttribute("color", "cyan");
    windowGlass.setAttribute("position", { x: 0, y: 1.7, z: 0.42 });
    this.obj.append(windowGlass);

    
    let sideFins = document.createElement("a-box");
    sideFins.setAttribute("width", 1.7);
    sideFins.setAttribute("height", 0.9);
    sideFins.setAttribute("depth", 0.08);
    sideFins.setAttribute("color", "red");
    sideFins.setAttribute("position", { x: 0, y: 0.8, z: 0 });
    this.obj.append(sideFins);

    
    let frontBackFins = document.createElement("a-box");
    frontBackFins.setAttribute("width", 0.08);
    frontBackFins.setAttribute("height", 0.9);
    frontBackFins.setAttribute("depth", 1.7);
    frontBackFins.setAttribute("color", "red");
    frontBackFins.setAttribute("position", { x: 0, y: 0.8, z: 0 });
    this.obj.append(frontBackFins);

    
    let nozzle = document.createElement("a-cone");
    nozzle.setAttribute("radius-top", 0.25);
    nozzle.setAttribute("radius-bottom", 0.4);
    nozzle.setAttribute("height", 0.4);
    nozzle.setAttribute("color", "grey");
    nozzle.setAttribute("position", { x: 0, y: 0.2, z: 0 });
    this.obj.append(nozzle);

    
    let flame = document.createElement("a-cone");
    flame.setAttribute("radius-top", 0.35);
    flame.setAttribute("radius-bottom", 0);
    flame.setAttribute("height", 1.4);
    flame.setAttribute("color", "orange");
    flame.setAttribute("position", { x: 0, y: -0.6, z: 0 });
    this.obj.append(flame);

    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    scene.append(this.obj);
  }

  launch() {
    this.rotY += 6;
    this.y += this.dy;

    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    this.obj.setAttribute("rotation", { x: 0, y: this.rotY, z: 0 });

    if (this.y > 70) {
      this.y = rnd(0, 10);
    }
  }
}