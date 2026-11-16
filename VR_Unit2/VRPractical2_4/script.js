let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene ;
let rocket =[]
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    rocket=new Rocket(x,5,z);
  }
  loop();
})

function loop(){
rocket.fall();
  
  window.requestAnimationFrame( loop );
}
