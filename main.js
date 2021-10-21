
let scene = new THREE.Scene();
let cam = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000);
let renderer = new THREE.WebGLRenderer({anatialias: true});
scene.background = new THREE.Color(0xfafafa);
renderer.setSize(innerWidth, innerHeight);
cam.position.z=5;
cam.position.y=0;
document.body.appendChild(renderer.domElement);
let directionalLight = new THREE.DirectionalLight({color: 0xFFFFFF, intensity: 100});
directionalLight.position.set(0,1,0);
directionalLight.castShadow = true;
scene.add(directionalLight);
let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

let grid = new THREE.GridHelper(100, 20, 0x0a0a0a, 0x0a0a0a);
grid.position.set(0,-0.5,0);
scene.add(grid);

let controls = new THREE.PointerLockControls(cam, renderer.domElement);
let clock = new THREE.Clock();

let btn1 = document.querySelector("#button1");
btn1.addEventListener("click",()=>{
    controls.lock();
});

let keyboard = [];
addEventListener("keydown", (e)=>{
  keyboard[e.key] = true;
});
addEventListener("keyup", (e)=>{
  keyboard[e.key] = false;
});

function processKeyboard(delta) {
  let speed = 5;
  let actualSpeed = speed * delta;
  if (keyboard["w"]){
    controls.moveForward(actualSpeed);
  }
  if (keyboard["s"]){
    controls.moveForward(-actualSpeed);
  }
  if (keyboard["d"]){
    controls.moveRight(actualSpeed);
  }
  if (keyboard["a"]){
    controls.moveRight(-actualSpeed);
  }
}

function drawScene() {
  renderer.render(scene, cam);
  let delta = clock.getDelta();
  processKeyboard(delta);
  requestAnimationFrame(drawScene);
}

drawScene();