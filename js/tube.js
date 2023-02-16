import {
  CapsuleGeometry,
  MeshPhysicalMaterial,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from "three";
// const material = new MeshBasicMaterial({ color: 0x00ff00 });
const geometry = new CapsuleGeometry(1, 3, 3, 15);
const material = new MeshPhysicalMaterial({
  roughness: 0,
  metalness: 0,
  transmission: 1,
});
// const material = new MeshBasicMaterial({ color: 0x00ff00 });
class Tube {
  constructor() {
    const tube = new Mesh(geometry, material);
    tube.rotation.x = 0;
    tube.position.y = 2.5;
    return tube;
  }
}

export default Tube;
