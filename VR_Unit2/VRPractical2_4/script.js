let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene ;
let rockets =[];
let rocket;
let ufo;
let rocket1;
let rockets1=[];
let ufos=[];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  for(let i = 0; i < 200; i++){
    let x = rnd(60,90);
    let z = rnd(-60,60);
    rocket=new Rocket(x,5,z);
    rockets.push(rocket);
  }
  for(let i = 0; i < 200; i++){
    let x = rnd(-60,-90);
    let z = rnd(-60,60);
    rocket1=new Rocket(x,5,z);
    rockets1.push(rocket1);
  }
for(let i = 0; i < 100; i++){
    let x = rnd(-50,50);
    let z = rnd(-60,60);
    let y = rnd(60,75);
    ufo=new UFO(x,y,z);
    ufos.push(ufo);
  }
  
  loop();
})

function loop(){
for(let rocket of rockets){
rocket.launch();
}
for(let rocket1 of rockets1){
rocket1.launch();
}
for(let ufo of ufos){
  ufo.fall();
}

  window.requestAnimationFrame( loop );
}
