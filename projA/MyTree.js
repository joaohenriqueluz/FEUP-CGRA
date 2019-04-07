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
	}
    
    display(){
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

    	this.scene.pushMatrix();
    	this.scene.scale(this.trunkRadius,this.trunkHeight,this.trunkRadius);
       	this.scene.cylinder.display();
		this.scene.popMatrix();

        if(this.scene.displayNormals){
            this.scene.cone1.enableNormalViz();
            this.scene.cylinder.enableNormalViz();
        }
        else{
            this.scene.cone1.disableNormalViz();
            this.scene.cylinder.disableNormalViz();
        }

    	
    }
}


