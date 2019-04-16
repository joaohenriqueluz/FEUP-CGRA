/**
* MyTree
* @constructor
*/
class MyTree extends CGFobject {
	constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
treeTopTexture){
		super(scene);
        this.trunkHeight=trunkHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;

        this.scene.cone1 = new MyCone(scene,10,1);
        this.scene.cone2 = new MyCone(scene,10,1);
        this.scene.cone3 = new MyCone(scene,10,1);
        this.scene.cone4 = new MyCone(scene,10,1);
        this.scene.cylinder = new MyCylinder(scene,12);

        this.initMaterials();
	}

    initMaterials(){
        this.leavesTex = new CGFappearance(this.scene);
        this.leavesTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.leavesTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.leavesTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.leavesTex.setShininess(10.0);
        this.leavesTex.loadTexture('./textures/treeLeaves.jpg');
        this.leavesTex.setTextureWrap('REPEAT', 'REPEAT');


        this.trunkTex = new CGFappearance(this.scene);
        this.trunkTex.setAmbient(0.5, 0.5, 0.5, 1);
        this.trunkTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.trunkTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.trunkTex.setShininess(10.0);
        this.trunkTex.loadTexture('./textures/treeTrunk.jpg');
        this.trunkTex.setTextureWrap('REPEAT', 'REPEAT');
        }
    
    display(){
        this.leavesTex.apply();
    	this.scene.pushMatrix();
    	this.scene.translate(0,this.trunkHeight,0);
    	this.scene.scale(this.treeTopRadius,this.treeTopHeight,this.treeTopRadius);
    	this.scene.cone1.display();
        this.scene.translate(0,this.treeTopHeight/4,0);
        this.scene.scale(this.treeTopRadius,(3*this.treeTopHeight/4),this.treeTopRadius);
        this.scene.cone2.display();
        this.scene.translate(0,this.treeTopHeight/4,0);
        this.scene.scale(this.treeTopRadius,2*this.treeTopHeight/4,this.treeTopRadius);
        this.scene.cone3.display();
        this.scene.translate(0,this.treeTopHeight/4,0);
        this.scene.scale(this.treeTopRadius,this.treeTopHeight/4,this.treeTopRadius);
        this.scene.cone4.display();
    	this.scene.popMatrix();
        
        this.trunkTex.apply();
    	this.scene.pushMatrix();
    	this.scene.scale(this.trunkRadius,this.trunkHeight,this.trunkRadius);
       	this.scene.cylinder.display();
		this.scene.popMatrix();

        if(this.scene.displayNormals){
            this.scene.cone1.enableNormalViz();
            this.scene.cone2.enableNormalViz();
            this.scene.cone3.enableNormalViz();
            this.scene.cone4.enableNormalViz();
            this.scene.cylinder.enableNormalViz();
        }
        else{
            this.scene.cone1.disableNormalViz();
            this.scene.cone2.disableNormalViz();
            this.scene.cone3.disableNormalViz();
            this.scene.cone4.disableNormalViz();
            this.scene.cylinder.disableNormalViz();
        }

    	
    }
}


