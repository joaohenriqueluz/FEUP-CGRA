/**
* MyTerrain
* @constructor
*/

class MyTerrain extends CGFobject {
  constructor(scene) {
    super(scene);
    this.scene = scene;
    this.plane = new Plane(scene, 32);
  }

  display(){
      this.scene.pushMatrix();
      this.scene.scale(60,1,60);
      this.scene.rotate(-Math.PI/2,1,0,0);
      this.plane.display();
      this.scene.popMatrix();
  }

}
