/**
* MyVoxelHill
* @constructor
*/
class MyVoxelHill extends CGFobject {
	constructor(scene, levels){
		super(scene);
        this.steps = [];
        this.levels = levels;
        var j = 2*levels-1;
      	for(var i = 0; i < levels; i++, j = j-2){
      		step = new MyVoxelHillStep(j);
      		this.steps.push(step);
      	}
	}
    
    display(){
    	this.scene.pushMatrix();
    	for(var i = 0; i < this.levels; i++){
    		this.steps[i].display();
    		this.scene.translate(i,0,0);
    	}
    	this.scene.popMatrix();

    	
    }
}


