class Snowflake{
  constructor(x,z){
    // Challenge 5: Create animation variables y and dy for the Snowflake to fall.  Set them to appropriate values.
    this.a=20;
    this.ay=0.007;
    this.x = x;
    this.z = z;
    this.obj = document.createElement("a-sphere");
    scene.append(this.obj);
  }

  //Challenge 6: Create a function fall() which decreases y by dy and updates the Snowflake object to that y position
  fall(){
    this.a-=this.ay;
    this.obj.setAttribute("position",{x:this.x,y:this.a,z:this.z});
  }
}