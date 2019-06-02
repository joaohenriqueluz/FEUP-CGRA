/**
* MyNest
* @constructor
*/
class MyNest extends CGFobject {
    constructor(scene) {
        super(scene);
        this.braches = [
            new MyCylinder(scene, 8),
            new MyCylinder(scene, 8),
            new MyCylinder(scene, 8),
            new MyCylinder(scene, 8),
            new MyCylinder(scene, 8)
        ];

        this.floor = new MyTreeBranch(scene, false);

        this.deltaX = 0;
        this.deltaZ = 0;
        this.level= 0;
        this.initMaterials();
    }

    initMaterials() {
        this.trunkTex = new CGFappearance(this.scene);
        this.trunkTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.trunkTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.trunkTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.trunkTex.setShininess(10.0);
        this.trunkTex.loadTexture('./textures/treeTrunk.jpg');
        this.trunkTex.setTextureWrap('REPEAT', 'REPEAT');
    }


    improve(){
        this.level++;
    }

    display() {
        this.trunkTex.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 2, 0);

        this.scene.pushMatrix();
        this.scene.translate(0, 0.9, 0);

        this.scene.pushMatrix();
        // for(var i = 0; i < this.level*2; i++){
        //     this.scene.translate(0, 0.1*i, 0);
        //     this.scene.scale(1, 0.1, 1);
        //     this.braches[0].display();
        // }
        this.scene.popMatrix();

       this.scene.pushMatrix();
        this.scene.translate(0, 0.1, 0);
        this.scene.scale(1, 0.1, 1);
        this.braches[1].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.2, 0);
        this.scene.scale(1, 0.1, 1);
        this.braches[2].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.3, 0);
        this.scene.scale(1, 0.1, 1);
        this.braches[3].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.4, 0);
        this.scene.scale(1, 0.1, 1);
        this.braches[4].display();
        this.scene.popMatrix();

        this.scene.popMatrix();

        this.scene.translate(0, -2, 0);

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0);
        this.floor.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0.1);
        this.floor.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0.2);
        this.floor.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0.3);
        this.floor.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0.4);
        this.floor.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0.5);
        this.floor.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0.6);
        this.floor.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0.7);
        this.floor.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, -0.1);
        this.floor.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, -0.2);
        this.floor.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, -0.3);
        this.floor.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, -0.4);
        this.floor.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, -0.5);
        this.floor.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, -0.6);
        this.floor.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, -0.7);
        this.floor.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

    }


}
