
let scene;
let car;
let rocket;
let pokeball;
let sun;
let dude;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  car = document.querySelector("#car");
  pokeball = document.querySelector("#pokemonball");
  rocket = document.querySelector("#rocket");
  sun = document.querySelector("#sun");
  dude = document.querySelector("#dude");

  car.x = 0;
  car.dx = -0.1;

  pokeball.x = 0;
  pokeball.dx = 1;

  rocket.y = 0;
  rocket.dy = 0.1;

  dude.scale = 1;
  dude.ds = 0.01;

  sun.opacity = 0;
  sun.dopacity = 0.01;

  sun.setAttribute("material", "transparent", true);
  sun.setAttribute("material", "opacity", 0);

  loop();
})

function loop(){
  
  car.x += car.dx;
  car.setAttribute("position",{x:car.x,y:0,z:0});


  pokeball.x += pokeball.dx;
  pokeball.setAttribute("rotation",{x:pokeball.x,y:0,z:0});


  rocket.y += rocket.dy;
  rocket.setAttribute("position",{x:0,y:rocket.y,z:0});

  
  dude.scale += dude.ds;
  dude.setAttribute("scale",{x:dude.scale,y:dude.scale,z:dude.scale});

  sun.opacity += sun.dopacity;
  sun.setAttribute("material","opacity",sun.opacity);

  window.requestAnimationFrame(loop);
}
