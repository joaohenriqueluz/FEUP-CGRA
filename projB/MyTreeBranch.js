/**
* MyTreeBranch
* @constructor
*/
class MyTreeBranch extends CGFobject {
	constructor(scene){
        super(scene);
        this.scene.body = new MyCylinder(scene,8);
        this.initMaterials();

        this.deltaX = Math.floor(Math.random() * 20) - 10;
        this.deltaZ = Math.floor(Math.random() * 20) - 10;
        this.alpha = Math.floor(Math.random() * (Math.PI/2));
    }

    initMaterials(){
        this.trunkTex = new CGFappearance(this.scene);
        this.trunkTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.trunkTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.trunkTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.trunkTex.setShininess(10.0);
        this.trunkTex.loadTexture('./textures/treeTrunk.jpg');
        this.trunkTex.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.trunkTex.apply();
        this.scene.pushMatrix();
        this.scene.translate(this.deltaX,1,this.deltaZ);
        this.scene.rotate(this.alpha,0,1,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.scale(0.1,2,0.1);
        this.scene.body.display();
        this.scene.popMatrix();
    }


}
