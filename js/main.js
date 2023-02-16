import "../css/main.css";
import Tube from "./tube";
import {
  Scene,
  PerspectiveCamera,
  Color,
  WebGLRenderer,
  AxesHelper,
  AmbientLight,
} from "three";
import Plane from "./plane";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Number from "./number";
//Create scene and camera position

const scene = new Scene();
scene.background = new Color("rgb(50,50,50)");
const camera = new PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  1,
  2000
);
camera.position.z = 0;
camera.position.x = 0;
camera.position.y = 5;
camera.lookAt(0, 0, 0);

//Instantiate Renderer and re size render upon window size change
const renderer = new WebGLRenderer();
const orbit = new OrbitControls(camera, renderer.domElement);
renderer.setSize(window.outerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
const axesHelper = new AxesHelper(5);
scene.add(axesHelper);
const tube0 = new Tube();
const tube1 = new Tube();
const plane = new Plane();
const one = new Number("1", 10);
const two = new Number("2", 20);
plane.rotation.x = 1.57;
tube0.position.z = 0;
tube1.position.z = 0;
tube1.position.x = -2.5;
const light = new AmbientLight(0x404040);
scene.add(light, tube0, tube1, plane, Number.group);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
