/**
* MyVoxelHill
* @constructor
*/
class MyVoxelHill extends CGFobject {
	constructor(scene, levels){
		super(scene);
    this.levels = levels;
		this.cube = new MyUnitCubeQuad(this.scene);
	}

    display(){

		    for(var i = 0; i < this.levels; i++){
					var translate = this.levels-i;
					var len = 2*translate-1;
					this.level = new MyVoxelHillStep(this.scene,this.levels,i);
					this.level.display(0);
					if (i != this.levels-1) {
						this.scene.pushMatrix();
						this.scene.translate(0,0,len-1);
						this.level.display(0);
						this.scene.popMatrix();

						this.scene.pushMatrix();
						this.scene.rotate(-Math.PI/2,0,1,0);
						this.level.display(1);
						this.scene.popMatrix();

						this.scene.pushMatrix();
						this.scene.translate(len-1,0,0);
						this.scene.rotate(-Math.PI/2,0,1,0);
						this.level.display(1);
						this.scene.popMatrix();
					}
		    }
    }
}
