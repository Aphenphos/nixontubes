import { CapsuleGeometry, MeshPhysicalMaterial, Mesh } from "three";

const geometry = new CapsuleGeometry(1.5, 4, 3, 15);
const material = new MeshPhysicalMaterial({
  roughness: 0,
  transmission: 1,
  transparent: true,
  opacity: 0.3,
});
class Tube {
  constructor(x) {
    const tube = new Mesh(geometry, material);
    tube.position.x = x;
    tube.position.z = 0.5;
    tube.rotation.x = 0;
    tube.position.y = 2.5;
    return tube;
  }
}

export default Tube;
