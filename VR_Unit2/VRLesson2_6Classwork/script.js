let scene;
let mechTemplate;
let army = [];
let mech;

window.addEventListener("DOMContentLoaded", function () {
  scene = document.querySelector("a-scene");
  mechTemplate = document.getElementById("mech-1");

  for (let x = -3; x <= 3; x += 2) {
    for (let z = -3; z <= 3; z += 2) {
       mech = new Mech(x, 15, z);
      army.push(mech);
    }
  }

  loop();
});

function loop() {
  window.requestAnimationFrame(loop);
}
