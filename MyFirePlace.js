/**
* MyFirePlace
* @constructor
*/
class MyFirePlace extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene.columnPiece = new MyCylinder(scene, 10);


        this.log = new MyUnitCubeQuad(scene);
        this.fire = new MyCone(scene, 10, 1);

        this.initMaterials();
    }

    initMaterials() {
        this.fire1 = new CGFappearance(this.scene);
        this.fire1.setAmbient(0.1, 0.5, 0.5, 1);
        this.fire1.setDiffuse(0.5, 0.5, 0.9, 1);
        this.fire1.setSpecular(0.1, 0.1, 0.3, 1);
        this.fire1.setShininess(10.0);
        this.fire1.loadTexture('./textures/fire.jpg');
        this.fire1.setTextureWrap('REPEAT', 'REPEAT');

        this.fire2 = new CGFappearance(this.scene);
        this.fire2.setAmbient(0.1, 0.5, 0.5, 1);
        this.fire2.setDiffuse(0.5, 0.5, 0.9, 1);
        this.fire2.setSpecular(0.1, 0.1, 0.3, 1);
        this.fire2.setShininess(10.0);
        this.fire2.loadTexture('./textures/fire2.jpg');
        this.fire2.setTextureWrap('REPEAT', 'REPEAT');

        this.fire3 = new CGFappearance(this.scene);
        this.fire3.setAmbient(0.1, 0.5, 0.5, 1);
        this.fire3.setDiffuse(0.5, 0.5, 0.9, 1);
        this.fire3.setSpecular(0.1, 0.1, 0.3, 1);
        this.fire3.setShininess(10.0);
        this.fire3.loadTexture('./textures/fire3.jpg');
        this.fire3.setTextureWrap('REPEAT', 'REPEAT');

        this.woodTex = new CGFappearance(this.scene);
        this.woodTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.woodTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.woodTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.woodTex.setShininess(10.0);
        this.woodTex.loadTexture('./textures/treeTrunk.jpg');
        this.woodTex.setTextureWrap('REPEAT', 'REPEAT');
    }
    display() {
        this.woodTex.apply();
        this.scene.pushMatrix();
        this.scene.translate(3, 0, 0);
        this.log.display();
        this.scene.translate(-6, 0, 0);
        this.log.display();
        this.scene.translate(3, 0, 3);
        this.log.display();
        this.scene.translate(0, 0, -6);
        this.log.display();
        this.scene.popMatrix();

        this.fire2.apply();

        this.scene.pushMatrix();
        this.scene.scale(3, 3, 3);
        this.fire.display();
        this.scene.popMatrix();

        this.fire1.apply();
        this.scene.pushMatrix();
        this.scene.scale(2, 5, 2);
        this.fire.display();
        this.scene.popMatrix();

        this.fire3.apply();
        this.scene.pushMatrix();
        this.scene.translate(1, 0, 0);
        this.scene.scale(2, 3, 2);
        this.fire.display();
        this.scene.translate(-0.5, 0, 0.5);
        this.fire.display();
        this.scene.translate(-0.5, 0, -0.5);
        this.fire.display();
        this.scene.translate(0.5, 0, -0.5);
        this.fire.display();
        this.scene.popMatrix();

    }


}
