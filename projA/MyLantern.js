/**
* MyLantern
* @constructor
*/
class MyLantern extends CGFobject {
	constructor(scene){
		super(scene);
    this.scene.columnPiece = new MyCylinder(scene,10);
		this.lanternTex = new CGFappearance(this.scene);
		this.lanternTex.setAmbient(0.1, 0.5, 0.5, 1);
		this.lanternTex.setDiffuse(0.5, 0.5, 0.9, 1);
		this.lanternTex.setSpecular(0.1, 0.1, 0.3, 1);
		this.lanternTex.setShininess(10.0);
		this.lanternTex.loadTexture('./textures/vidro.jpg');
		this.lanternTex.setTextureWrap('REPEAT', 'REPEAT');
	}

    display(){
				this.lanternTex.apply();
        this.scene.columnPiece.display();
			}

}
