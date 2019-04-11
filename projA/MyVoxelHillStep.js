/**
* MyVoxelHillStep
* @constructor
*/
class MyVoxelHillStep extends CGFobject {
	constructor(scene, len){
		super(scene);
        this.scene.hillCube = new MyUnitCubeQuad(scene);
        this.len = len;
	}
    
    display(){
    	
    	this.scene.translate(0,1,0);
    	this.scene.popMatrix();

    	
    }
}


