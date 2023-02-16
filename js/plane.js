import { MeshBasicMaterial, PlaneGeometry, Mesh, DoubleSide } from "three";
const geometry = new PlaneGeometry(300, 300);
const material = new MeshBasicMaterial({
  color: "rgb(50,0,50)",
  side: DoubleSide,
});
class Plane {
  constructor() {
    const floor = new Mesh(geometry, material);
    return floor;
  }
}

export default Plane;
