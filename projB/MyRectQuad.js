/**
 * MyRectQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyRectQuad extends CGFobject {
	constructor(scene, coords) {
        super(scene);
        this.quad = new MyQuad(scene);
        this.initMaterials();
    }

    initMaterials(){
        this.tex = new CGFappearance(this.scene);
        this.tex.setAmbient(1, 1, 1, 1.0);
        this.tex.setDiffuse(1, 1, 1, 1.0);
        this.tex.setSpecular(1, 1, 1, 1.0);
        this.tex.setShininess(10.0);
    }
    
    display(){
        this.tex.apply();
        
        this.scene.pushMatrix();
        this.scene.scale(0.1,2,1);
        this.quad.display();
        this.scene.popMatrix();
    }

}
