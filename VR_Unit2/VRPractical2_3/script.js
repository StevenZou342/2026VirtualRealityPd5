let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
  }
  for(let i = 0; i < 100; i++){
    let p = rnd(-20,20);
    let o = rnd(-20,20);
    let cloud = new Cloud(o, 10 , p);
  }
  for(let i = 0; i < 20; i++){
    let l = rnd(-20,20);
    let h = rnd(-20,20);
    let House = new house(l, 0 , h);
  }

})
