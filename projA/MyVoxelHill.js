/**
* MyVoxelHill
* @constructor
*/
class MyVoxelHill extends CGFobject {
	constructor(scene, levels){
		super(scene);
    this.levels = levels;
		this.cube = new MyUnitCubeQuad(this.scene,true);
	}


	step (inverse,levels,level) {


	 	var translate = levels-level;
		var y = levels-translate;

		var len = 2*translate-1;

		for (var i = 0; i < len; i++) {
				this.scene.pushMatrix();
				if (inverse) {
					this.scene.translate(level+i,y,-level);
				} else {
					this.scene.translate(level+i,y,level);
				}
				this.cube.display();
				this.scene.popMatrix();
			}
	 }

    display(){


		    for(var i = 0; i < this.levels; i++){
					var translate = this.levels-i;
					var len = 2*translate-1;
					//this.level = new MyVoxelHillStep(this.scene,this.levels,i);
					this.step(0,this.levels,i);
					if (i != this.levels-1) {
						this.scene.pushMatrix();
						this.scene.translate(0,0,len-1);
						this.step(0,this.levels,i);
						this.scene.popMatrix();

						this.scene.pushMatrix();
						this.scene.rotate(-Math.PI/2,0,1,0);
						this.step(1,this.levels,i);
						this.scene.popMatrix();

						this.scene.pushMatrix();
						this.scene.translate(len-1,0,0);
						this.scene.rotate(-Math.PI/2,0,1,0);
						this.step(1,this.levels,i);
						this.scene.popMatrix();
					}
		    }
    }
}
