/**
* MyVoxelHill
* @constructor
*/
class MyVoxelHill extends CGFobject {
	constructor(scene, levels){
		super(scene);
    this.levels = levels;
		this.cube = new MyQuad(this.scene);
	}

    display(){
    	this.scene.pushMatrix();
    	for(var l = this.levels; j > 0; l++){
				var j = 2*levels-1;
		    for(var i = 0; i < j; i++){
					this.pushMatrix();
					this.translate(i,0,0);
					this.cube.display();
					this.popMatrix();
		    }

				for(var i = 0; i < j; i++){
					this.pushMatrix();
					this.translate(i,l,0);
					this.cube.display();
					this.popMatrix();
		    }

				for(var i = 0; i < j; i++){
					this.pushMatrix();
					this.translate(0,i,0);
					this.cube.display();
					this.popMatrix();
		    }

				for(var i = 0; i < j; i++){
					this.pushMatrix();
					this.translate(l,i,0);
					this.cube.display();
					this.popMatrix();
		    }
    	}
    	this.scene.popMatrix();
    }
}
