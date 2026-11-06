class house{
  constructor(x,y,z){
  this.obj = document.createElement("a-entity");

  let base = document.createElement("a-box");
  base.setAttribute("color","brown");
  base.setAttribute("width","2");
  base.setAttribute("height","2");
  base.setAttribute("depth","2");
  base.setAttribute("position","0 1 0");
  this.obj.append(base);

  let roof = document.createElement("a-cylinder");
  roof.setAttribute("color","red");
  roof.setAttribute("radius","1.4");
  roof.setAttribute("height","2.2");
  roof.setAttribute("segments-radial","3");
  roof.setAttribute("rotation","270 0 0");
  roof.setAttribute("position","0 2.7 0");
  this.obj.append(roof);

  this.obj.setAttribute("position",{x:x, y:0, z:z});
  scene.append(this.obj);
  }
}