import "../css/main.css";
import Tube from "./tube";
import {
  Scene,
  PerspectiveCamera,
  Color,
  WebGLRenderer,
  AxesHelper,
  TextureLoader,
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  DoubleSide,
  PointLight,
  PlaneGeometry,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Number from "./number";
//Create scene and camera position
function generateNumbers(x, place) {
  for (let i = 0; i < 10; i++) {
    new Number(`${i}`, x, `${place}_${i}`);
  }
}

const scene = new Scene();
const camera = new PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  1,
  2000
);
camera.position.z = 30;
camera.position.x = 17;
camera.position.y = 3;

//time state

function time() {
  let date = new Date();
  let hh = date.getHours();
  let hour = hh.toString().split("");
  let mm = date.getMinutes();
  let min = mm.toString().split("");
  let ss = date.getSeconds();
  let sec = ss.toString().split("");

  if (!sec[1]) {
    turnOn("second1", "0");
    turnOn("second2", sec[0]);
  } else {
    turnOn("second1", sec[0]);
    turnOn("second2", sec[1]);
  }
  if (!min[1]) {
    turnOn("minute1", "0");
    turnOn("minute2", min[0]);
  } else {
    turnOn("minute1", min[0]);
    turnOn("minute2", min[1]);
  }
  turnOn("hour1", hour[0]);
  turnOn("hour2", hour[1]);
}
const lit = new Color("rgb(255,100,100)");
function turnOn(place, time) {
  const name = `${place}_${time}`;
  if (place === "hour1") {
    for (let i = 0; i < 10; i++) {
      if (Number.group.children[i].name === name) {
        Number.group.children[i].material.emissive = lit;
        Number.group.children[i].position.z = 0.2;
      } else {
        Number.group.children[i].material.emissive = undefined;
        Number.group.children[i].position.z = 0;
      }
    }
  }
  if (place === "hour2") {
    for (let i = 10; i < 20; i++) {
      if (Number.group.children[i].name === name) {
        Number.group.children[i].material.emissive = lit;
        Number.group.children[i].position.z = 0.2;
      } else {
        Number.group.children[i].material.emissive = "rgb(0,0,0)";
        Number.group.children[i].position.z = 0;
      }
    }
  }
  if (place === "minute1") {
    for (let i = 20; i < 30; i++) {
      if (Number.group.children[i].name === name) {
        Number.group.children[i].material.emissive = lit;
        Number.group.children[i].position.z = 0.2;
      } else {
        Number.group.children[i].material.emissive = "rgb(0,0,0)";
        Number.group.children[i].position.z = 0;
      }
    }
  }
  if (place === "minute2") {
    for (let i = 30; i < 40; i++) {
      if (Number.group.children[i].name === name) {
        Number.group.children[i].material.emissive = lit;
        Number.group.children[i].position.z = 0.2;
      } else {
        Number.group.children[i].material.emissive = "rgb(0,0,0)";
        Number.group.children[i].position.z = 0;
      }
    }
  }
  if (place === "second1") {
    for (let i = 40; i < 50; i++) {
      if (Number.group.children[i].name === name) {
        Number.group.children[i].material.emissive = lit;
        Number.group.children[i].position.z = 0.2;
      } else {
        Number.group.children[i].material.emissive = "rgb(0,0,0)";
        Number.group.children[i].position.z = 0;
      }
    }
  }
  if (place === "second2") {
    for (let i = 50; i < 60; i++) {
      if (Number.group.children[i].name === name) {
        Number.group.children[i].material.emissive = lit;
        Number.group.children[i].position.z = 0.2;
      } else {
        Number.group.children[i].material.emissive = "rgb(0,0,0)";
        Number.group.children[i].position.z = 0;
      }
    }
  }
}

//Instantiate Renderer and re size render upon window size change
const renderer = new WebGLRenderer({
  logarithmicDepthBuffer: true,
  antialias: true,
});
renderer.shadowMap.enabled = true;
const orbit = new OrbitControls(camera, renderer.domElement);
camera.lookAt(18, 3, 0);
renderer.setSize(window.outerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

const planeGeometry = new PlaneGeometry(75, 75);
const planeTexture = new TextureLoader().load("../assets/table.avif");
const planeMaterial = new MeshPhongMaterial({
  map: planeTexture,
  side: DoubleSide,
});

const plane = new Mesh(planeGeometry, planeMaterial);
plane.rotation.x = 1.57;
plane.position.y = -1;
plane.position.x = 15;

const axesHelper = new AxesHelper(5);
scene.add(axesHelper);

const tube0 = new Tube(1.25);
const tube1 = new Tube(6.25);
const tube2 = new Tube(11.25);
const tube3 = new Tube(16.25);
const tube4 = new Tube(21.25);
const tube5 = new Tube(26.25);
generateNumbers(0, "hour1");
generateNumbers(5, "hour2");
generateNumbers(10, "minute1");
generateNumbers(15, "minute2");
generateNumbers(20, "second1");
generateNumbers(25, "second2");

const lightz = -0.2;
const brightness = 0.5;
const overhead = new PointLight("rgb(255,255,255)", brightness, 100);
const light1 = new PointLight(lit, 1, 100);
const light2 = new PointLight(lit, 1, 100);
const light3 = new PointLight(lit, 1, 100);
const light4 = new PointLight(lit, 1, 100);
const light5 = new PointLight(lit, 1, 100);
const light6 = new PointLight(lit, 1, 100);
overhead.position.y = 15;
overhead.position.z = -60;
light1.position.x = 1;
light2.position.x = 6;
light3.position.x = 11;
light4.position.x = 16;
light5.position.x = 21;
light6.position.x = 26;
light1.position.z = lightz;
light2.position.z = lightz;
light3.position.z = lightz;
light4.position.z = lightz;
light5.position.z = lightz;
light6.position.z = lightz;
scene.add(overhead, light1, light2, light3, light4, light5, light6);
scene.add(tube0, tube1, tube2, tube3, tube4, tube5, plane, Number.group);

const texture = new TextureLoader().load("../assets/wood.jpg");
const boxGeo = new BoxGeometry(33, 5, 4);
const boxMat = new MeshPhongMaterial({ map: texture });
const cube = new Mesh(boxGeo, boxMat);
cube.position.x = 14;
cube.position.y = -2.8;
cube.position.z = 0;
scene.add(cube);
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  if (Number.group.children[0]) {
    time();
  }
}
animate();
