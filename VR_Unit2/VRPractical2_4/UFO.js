class UFO {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.startX = x;
    this.dx = 0.05;
    this.dy = -0.13;
    this.rotY = 0;
    this.beamOpacity = 0.25;
    this.dOpacity = 0.005;

    this.obj = document.createElement("a-entity");
   
    let disc = document.createElement("a-cylinder");
    disc.setAttribute("radius", 2.6);
    disc.setAttribute("height", 0.35);
    disc.setAttribute("src", "#metalTex");
    this.obj.append(disc);

   
    let upperHull = document.createElement("a-sphere");
    upperHull.setAttribute("scale", { x: 2.1, y: 0.45, z: 2.1 });
    upperHull.setAttribute("position", { x: 0, y: 0.2, z: 0 });
    upperHull.setAttribute("color", "grey");
    this.obj.append(upperHull);

    let dome = document.createElement("a-sphere");
    dome.setAttribute("radius", 1.05);
    dome.setAttribute("position", { x: 0, y: 0.45, z: 0 });
    dome.setAttribute("color", "cyan");
    dome.setAttribute("opacity", 0.65);
    this.obj.append(dome);

  
    let base = document.createElement("a-cylinder");
    base.setAttribute("radius", 1.15);
    base.setAttribute("height", 0.2);
    base.setAttribute("position", { x: 0, y: -0.22, z: 0 });
    base.setAttribute("color", "grey");
    this.obj.append(base);

    
    let light1 = document.createElement("a-sphere");
    light1.setAttribute("radius", 0.16);
    light1.setAttribute("position", { x: 2.3, y: 0.08, z: 0 });
    light1.setAttribute("color", "yellow");
    this.obj.append(light1);

    let light2 = document.createElement("a-sphere");
    light2.setAttribute("radius", 0.16);
    light2.setAttribute("position", { x: -2.3, y: 0.08, z: 0 });
    light2.setAttribute("color", "red");
    this.obj.append(light2);

    let light3 = document.createElement("a-sphere");
    light3.setAttribute("radius", 0.16);
    light3.setAttribute("position", { x: 0, y: 0.08, z: 2.3 });
    light3.setAttribute("color", "blue");
    this.obj.append(light3);

    let light4 = document.createElement("a-sphere");
    light4.setAttribute("radius", 0.16);
    light4.setAttribute("position", { x: 0, y: 0.08, z: -2.3 });
    light4.setAttribute("color", "green");
    this.obj.append(light4);

    let light5 = document.createElement("a-sphere");
    light5.setAttribute("radius", 0.16);
    light5.setAttribute("position", { x: 1.6, y: 0.08, z: 1.6 });
    light5.setAttribute("color", "yellow");
    this.obj.append(light5);

    let light6 = document.createElement("a-sphere");
    light6.setAttribute("radius", 0.16);
    light6.setAttribute("position", { x: -1.6, y: 0.08, z: -1.6 });
    light6.setAttribute("color", "orange");
    this.obj.append(light6);

    
    this.beam = document.createElement("a-cone");
    this.beam.setAttribute("radius-bottom", 2.2);
    this.beam.setAttribute("radius-top", 0.5);
    this.beam.setAttribute("height", 7);
    this.beam.setAttribute("position", { x: 0, y: -3.6, z: 0 });
    this.beam.setAttribute("color", "cyan");
    this.beam.setAttribute("opacity", this.beamOpacity);
    this.obj.append(this.beam);

    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    scene.append(this.obj);
  }

fall() {
    this.rotY += 2;
    this.x += this.dx;
    this.y += this.dy;

    
    if (this.y < 1) {
      this.y = rnd(80, 100);
    }

  
    if (this.x > this.startX + 4 || this.x < this.startX - 4) {
      this.dx = -this.dx;
    }

   
    this.beamOpacity += this.dOpacity;
    if (this.beamOpacity > 0.4 || this.beamOpacity < 0.15) {
      this.dOpacity = -this.dOpacity;
    }
    this.beam.setAttribute("opacity", this.beamOpacity);

    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    this.obj.setAttribute("rotation", { x: 0, y: this.rotY, z: 0 });
  }
}