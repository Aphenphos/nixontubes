import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
class Number {
  static group = new THREE.Group();

  constructor(digit, x, name) {
    const loader = new FontLoader();
    loader.load("./assets/font.typeface.json", function (font) {
      const geometry = new TextGeometry(digit, {
        font: font,
        size: 4,
        height: 0.1,
      });

      const materials = new THREE.MeshStandardMaterial({
        color: "black",
        emissiveIntensity: 1,
      });
      const mesh = new THREE.Mesh(geometry, materials);
      mesh.name = name;
      mesh.position.x = x;
      mesh.position.z = 0;
      Number.group.add(mesh);
    });
  }
}

export default Number;
