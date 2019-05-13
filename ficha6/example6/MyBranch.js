/**
 * MyBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */

 class MyBranch extends CGFobject{
     constructor(scene){
         super(scene);
         this.scene.branchCyl =  new MyCylinder(this.scene,4);
         this.initMaterials();

     }

     initMaterials(){
        this.trunkTex = new CGFappearance(this.scene);
        this.trunkTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.trunkTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.trunkTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.trunkTex.setShininess(10.0);
        this.trunkTex.loadTexture('../textures/treeTrunk.jpg');
        this.trunkTex.setTextureWrap('REPEAT', 'REPEAT');
     }
     

    display(){
        this.trunkTex.apply();
        this.scene.pushMatrix();
    	this.scene.scale(0.5,2,0.5);
       	this.scene.branchCyl.display();
		this.scene.popMatrix();
    }
        
 }