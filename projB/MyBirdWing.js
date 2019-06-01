/**
* MyBirdWing
* @constructor
*/
class MyBirdWing extends CGFobject {
	constructor(scene){
        super(scene);
        this.wing = new MyQuad(scene);
        this.wingTip = new MyTriangle(scene);
        //this.initMaterials();

	}


    display(){
        this.scene.pushMatrix();
        this.scene.translate(-1,-0.5,0);
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.5, 0);
        this.scene.scale(0.5,0.5,0.5);
        this.wing.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.25, 0.25, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.translate(2, 0, 0);
        this.wingTip.display();
        this.scene.popMatrix(); 
        this.scene.popMatrix(); 

         

    }

}
