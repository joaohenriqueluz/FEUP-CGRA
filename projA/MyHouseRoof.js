/**
* MyHouseRoof
* @constructor
*/
class MyHouseRoof extends CGFobject {
	constructor(scene){
		super(scene);
        this.scene.pyramidStep = new MyUnitCubeQuad(scene);
        
	}
    
    display(){
        this.scene.pushMatrix();
        this.scene.scale(20,1,20);        
        this.scene.pyramidStep.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0,-0.25,0);
        this.scene.scale(5,0.5,24);
        this.scene.pyramidStep.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.25,0);
        this.scene.scale(5.5,0.5,22.25);
        this.scene.pyramidStep.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-0.25,0);
        this.scene.scale(24,0.5,5);
        this.scene.pyramidStep.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.25,0);
        this.scene.scale(22.25,0.5,5.5);
        this.scene.pyramidStep.display();
        this.scene.popMatrix();
    
    }





}



