/**
* MyTangram
* @constructor
*/

class MyUnitCubeQuad extends CGFobject {
  constructor(scene) {
    super(scene);
    scene.quad = new MyQuad(scene);
    this.initMaterials();
  }


  initMaterials(){

      this.upMaterial = new CGFappearance(this.scene);
      this.upMaterial.setAmbient(0.1, 0.1, 0.1, 1);
      this.upMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
      this.upMaterial.setSpecular(0.1, 0.1, 0.1, 1);
      this.upMaterial.setShininess(10.0);
      this.upMaterial.loadTexture('./images/mineTop.png');
      this.upMaterial.setTextureWrap('REPEAT', 'REPEAT');

      this.bottomMaterial = new CGFappearance(this.scene);
      this.bottomMaterial.setAmbient(0.1, 0.1, 0.1, 1);
      this.bottomMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
      this.bottomMaterial.setSpecular(0.1, 0.1, 0.1, 1);
      this.bottomMaterial.setShininess(10.0);
      this.bottomMaterial.loadTexture('./images/mineBottom.png');
      this.bottomMaterial.setTextureWrap('REPEAT', 'REPEAT');

      this.sideMaterial = new CGFappearance(this.scene);
      this.sideMaterial.setAmbient(0.1, 0.1, 0.1, 1);
      this.sideMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
      this.sideMaterial.setSpecular(0.1, 0.1, 0.1, 1);
      this.sideMaterial.setShininess(10.0);
      this.sideMaterial.loadTexture('./images/mineSide.png');
      this.sideMaterial.setTextureWrap('REPEAT', 'REPEAT');


  }

  display(){
    //Top face
    this.upMaterial.apply()
    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2,1,0,0);
    this.scene.translate(0,0,0.5);
    this.scene.quad.display();
    this.scene.popMatrix();

    //Bottom face
    this.bottomMaterial.apply();
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.translate(0,0,0.5);
    this.scene.quad.display();
    this.scene.popMatrix();

    //Front face
    this.sideMaterial.apply();
    this.scene.pushMatrix();
    this.scene.translate(0,0,0.5);
    this.scene.quad.display();
    this.scene.popMatrix();

    //Back face
    this.sideMaterial.apply();
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI,0,1,0);
    this.scene.translate(0,0,0.5);
    this.scene.quad.display();
    this.scene.popMatrix();

    //Left face
    this.sideMaterial.apply();
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2,0,1,0);
    this.scene.translate(0,0,0.5);
    this.scene.quad.display();
    this.scene.popMatrix();

    //Right face
    this.sideMaterial.apply();
    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2,0,1,0);
    this.scene.translate(0,0,0.5);
    this.scene.quad.display();
    this.scene.popMatrix();
  }
}
