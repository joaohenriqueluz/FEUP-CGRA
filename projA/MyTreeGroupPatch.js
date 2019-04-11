/**
* MyTreeGroupPatch
* @constructor
*/

class MyTreeGroupPatch extends CGFobject {
	constructor(scene){
		super(scene);
        this.scene.treeSmall = new MyTree(scene,0.7,0.2,1.5,0.7,"","");

        //scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture
	}
    
    display(){
    	
    	this.scene.pushMatrix();
    	this.scene.translate(-0.4,0,-1);		
		this.scene.pushMatrix();
		this.scene.scale(1.1,1.3,1.1);
		this.scene.treeSmall.display();
		this.scene.popMatrix();
		this.scene.translate(2.2,0,0);
		this.scene.treeSmall.display();
	  	this.scene.translate(1.9,0,-1);
		this.scene.pushMatrix();
		this.scene.scale(1.2,1.7,1.2);
		this.scene.treeSmall.display();
		this.scene.popMatrix();		
		this.scene.popMatrix();

    	this.scene.pushMatrix();
    	this.scene.translate(0,0,1.2);
		this.scene.pushMatrix();
		this.scene.scale(1.2,1.7,1.2);
		this.scene.treeSmall.display();
		this.scene.popMatrix();		
		this.scene.translate(2.4,0,0.5);
		this.scene.pushMatrix();
		this.scene.scale(1.1,1.3,1.1);
		this.scene.treeSmall.display();
		this.scene.popMatrix();
		this.scene.translate(1.8,0,-0.3);
		this.scene.treeSmall.display();
		this.scene.popMatrix();

    	this.scene.pushMatrix();
    	this.scene.translate(0,0,4);
		this.scene.pushMatrix();
		this.scene.scale(1.1,1.3,1.1);
		this.scene.treeSmall.display();
		this.scene.popMatrix();
		this.scene.translate(2,0,0);
		this.scene.treeSmall.display();
		this.scene.translate(1.9,0,0);
		this.scene.pushMatrix();
		this.scene.scale(1.2,1.7,1.2);
		this.scene.treeSmall.display();
		this.scene.popMatrix();		
		this.scene.popMatrix();

    	
    }

    
}


