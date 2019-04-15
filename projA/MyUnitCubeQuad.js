/**
* MyUnitCubeQuad
* @constructor
*/

class MyUnitCubeQuad extends CGFobject {
  constructor(scene, pyramid) {
    super(scene);
    scene.quad = new MyQuad(scene);
    this.pyramid = pyramid;
    if (pyramid) {
      this.initMaterials();
    }
  }


  initMaterials(){

      this.upMaterial = new CGFappearance(this.scene);
      this.upMaterial.setAmbient(0.1, 0.1, 0.1, 1);
      this.upMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
      this.upMaterial.setSpecular(0.1, 0.1, 0.1, 1);
      this.upMaterial.setShininess(10.0);
      this.upMaterial.loadTexture('./textures/mineTop.png');
      this.upMaterial.setTextureWrap('REPEAT', 'REPEAT');

      this.bottomMaterial = new CGFappearance(this.scene);
      this.bottomMaterial.setAmbient(0.1, 0.1, 0.1, 1);
      this.bottomMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
      this.bottomMaterial.setSpecular(0.1, 0.1, 0.1, 1);
      this.bottomMaterial.setShininess(10.0);
      this.bottomMaterial.loadTexture('./textures/mineBottom.png');
      this.bottomMaterial.setTextureWrap('REPEAT', 'REPEAT');

      this.sideMaterial = new CGFappearance(this.scene);
      this.sideMaterial.setAmbient(0.1, 0.1, 0.1, 1);
      this.sideMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
      this.sideMaterial.setSpecular(0.1, 0.1, 0.1, 1);
      this.sideMaterial.setShininess(10.0);
      this.sideMaterial.loadTexture('./textures/mineSide.png');
      this.sideMaterial.setTextureWrap('REPEAT', 'REPEAT');


  }

  display(){
    //Top face
    if (this.pyramid) {
    this.upMaterial.apply()

    }
    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2,1,0,0);
    this.scene.translate(0,0,0.5);
    this.scene.quad.display();
    this.scene.popMatrix();

    //Bottom face
    if (this.pyramid) {
      this.bottomMaterial.apply();
    }
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.translate(0,0,0.5);
    this.scene.quad.display();
    this.scene.popMatrix();

    //Front face
    if (this.pyramid) {
      this.sideMaterial.apply();
    }
    this.scene.pushMatrix();
    this.scene.translate(0,0,0.5);
    this.scene.quad.display();
    this.scene.popMatrix();

    //Back face
    if (this.pyramid) {
      this.sideMaterial.apply();
    }
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI,0,1,0);
    this.scene.translate(0,0,0.5);
    this.scene.quad.display();
    this.scene.popMatrix();

    //Left face
    if (this.pyramid) {
      this.sideMaterial.apply();
    }
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2,0,1,0);
    this.scene.translate(0,0,0.5);
    this.scene.quad.display();
    this.scene.popMatrix();

    //Right face
    if (this.pyramid) {
      this.sideMaterial.apply();
    }
    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2,0,1,0);
    this.scene.translate(0,0,0.5);
    this.scene.quad.display();
    this.scene.popMatrix();
  }
}
