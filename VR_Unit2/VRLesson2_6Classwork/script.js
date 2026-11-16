let scene;
let mechTemplate;
let army= [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mechTemplate = document.getElementById("mech-1");
for(let x=1; x<2;x+=2){
  for(let z=1; z<2; z+=2){
  let mech2= new Mech(x,1,z);
    army.push(mech2);
  }
}
  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}
