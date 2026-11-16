class Rocket{
    constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.1;
    this.obj = document.createElement("a-entity");
     let top= document.createElement("a-cone");
    top.setAttribute("radius-top","0");
    top.setAttribute("radius-bottom","0.5");
    top.setAttribute("height","1");
    top.setAttribute("color","red");
    top.setAttribute("position","0 0 -2");
    this.obj.append(top);
    let body = document.createElement("a-cylinder");
    body.setAttribute("radius","0.5");
    body.setAttribute("height","2");
    body.setAttribute("color","white");
    body.setAttribute("position","0 -1.5 -2");
    this.obj.append(body);
    let bottom= document.createElement("a-cone");
    bottom.setAttribute("radius-top","0");
    bottom.setAttribute("radius-bottom","0.25");
    bottom.setAttribute("height","2");
    bottom.setAttribute("color","orange");
    bottom.setAttribute("position","0 -3.5 -2");
    bottom.setAttribute("rotation","-180 0 0");
    this.obj.append(bottom);
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append( this.obj );
    }
  fall(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    if(this.y > 50){
      this.y = rnd(10,20);
    }
}
  }