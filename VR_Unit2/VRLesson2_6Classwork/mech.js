class Mech {
  constructor(x, y, z) {
    this.X = x;
    this.Y = y;
    this.Z = z;
    this.obj = mechTemplate.cloneNode(true);
    this.obj.setAttribute("position", { x: x, y: y, z: z });
    scene.append(this.obj);
  }
}
