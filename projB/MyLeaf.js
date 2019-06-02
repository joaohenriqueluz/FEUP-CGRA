/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyLeaf extends CGFobject {
	constructor(scene) {
		super(scene);
		this.scene.leafd = new MyQuad(this.scene);
		this.initMaterials();
	}

	initMaterials() {

		this.leavesTex = new CGFappearance(this.scene);
		this.leavesTex.setAmbient(0, 0.4, 0, 1);
		this.leavesTex.setDiffuse(0, 0.1, 0, 1);
		this.leavesTex.setSpecular(0, 0.1, 0, 1);
		this.leavesTex.setShininess(10.0);

	}

	display() {

		this.leavesTex.apply();
		this.scene.pushMatrix();
		this.scene.scale(3, 1.0, 0.4);
		this.scene.leafd.display();
		this.scene.popMatrix();
		
	}
}