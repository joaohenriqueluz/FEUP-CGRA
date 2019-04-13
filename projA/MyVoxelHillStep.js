/**
* MyVoxelHillStep
* @constructor
*/
class MyVoxelHillStep extends CGFobject {
	constructor(scene, levels, level){
		super(scene);
    this.cube = new MyUnitCubeQuad(this.scene);
    this.level = level;
		this.translate = levels-level;
		this.y = levels-this.translate;
	}

    display(inverse){

			var len = 2*this.translate-1;
			for (var i = 0; i < len; i++) {
				this.scene.pushMatrix();
				if (inverse) {
					this.scene.translate(this.level+i,this.y,-this.level);
				} else {
					this.scene.translate(this.level+i,this.y,this.level);
				}
				this.cube.display();
				this.scene.popMatrix();
			}
		}
}
