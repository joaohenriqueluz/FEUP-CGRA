/**
* MyCubeMap
* @constructor
*/

class MyCubeMap extends CGFobject {
    constructor(scene) {
      super(scene);
      scene.quad = new MyQuad(scene);
      this.initMaterials();
    }


    initMaterials(){

        this.frontMaterial = new CGFappearance(this.scene);
        this.frontMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.frontMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.frontMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.frontMaterial.setShininess(10.0);
        this.frontMaterial.loadTexture('./textures/hills_ft.png');
        this.frontMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.backMaterial = new CGFappearance(this.scene);
        this.backMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.backMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.backMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.backMaterial.setShininess(10.0);
        this.backMaterial.loadTexture('./textures/hills_bk.png');
        this.backMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.upMaterial = new CGFappearance(this.scene);
        this.upMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.upMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.upMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.upMaterial.setShininess(10.0);
        this.upMaterial.loadTexture('./textures/hills_up.png');
        this.upMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.bottomMaterial = new CGFappearance(this.scene);
        this.bottomMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomMaterial.setDiffuse(0.5, 0.5, 0.5, 1);
        this.bottomMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomMaterial.setShininess(10.0);
        this.bottomMaterial.loadTexture('./textures/grass.jpg');
        this.bottomMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.leftMaterial = new CGFappearance(this.scene);
        this.leftMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.leftMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.leftMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.leftMaterial.setShininess(10.0);
        this.leftMaterial.loadTexture('./textures/hills_lf.png');
        this.leftMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.rightMaterial = new CGFappearance(this.scene);
        this.rightMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.rightMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.rightMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.rightMaterial.setShininess(10.0);
        this.rightMaterial.loadTexture('./textures/hills_rt.png');
        this.rightMaterial.setTextureWrap('REPEAT', 'REPEAT');


    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(0,25,0);
        this.scene.scale(100,50,100);
        //TOP FACE
        this.upMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(Math.PI/2, 1,0,0);
        this.scene.quad.display();
        this.scene.popMatrix();

        //Bottom face
        this.bottomMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(-Math.PI/2, 1,0,0);
        this.scene.quad.display();
        this.scene.popMatrix();

        //Back face
        this.backMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.quad.display();
        this.scene.popMatrix();

        //Front face
        this.frontMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.quad.display();
        this.scene.popMatrix();

         //Left face
        this.leftMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.quad.display();
        this.scene.popMatrix();

        //Right face
        this.rightMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.scene.quad.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
  }
