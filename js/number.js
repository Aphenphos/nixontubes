import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
class Number {
  static group = new THREE.Group();
  constructor(digit, position) {
    const loader = new FontLoader();
    loader.load("../assets/font.typeface.json", function (font) {
      const geometry = new TextGeometry(digit, {
        font: font,
        size: 4,
        height: 2,
      });

      const materials = new THREE.MeshPhongMaterial({
        color: "rgb(255,255,100)",
      });
      const mesh = new THREE.Mesh(geometry, materials);
      mesh.position.x = position;
      Number.group.add(mesh);
      console.log(Number.group);
    });
  }
}

export default Number;
