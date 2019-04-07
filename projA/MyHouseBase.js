/**
* MyHouseBase
* @constructor
*/
class MyHouseBase extends CGFobject {
	constructor(scene){
		super(scene);
        this.scene.baseCube = new MyUnitCubeQuad(scene);
	}
    
    display(){

        this.scene.pushMatrix();
        this.scene.translate(-4.5,-0.125,0);
        this.scene.scale(0.25,0.25,10);

        for(var i = 0; i < 24; i++){
            this.scene.baseCube.display();
            this.scene.translate(1.5,0,0);
            this.scene.baseCube.display();

        }
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(-4.5,-0.5,0);
        this.scene.scale(0.25,0.25,10);

        for(var i = 0; i < 24; i++){
            this.scene.baseCube.display();
            this.scene.translate(1.5,0,0);
            this.scene.baseCube.display();

        }
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-0.375,-4.5);
        this.scene.scale(10,0.25,0.25);
        //this.scene.rotate(Math.PI/2,0,1,0);

        for(var i = 0; i < 24; i++){
            this.scene.baseCube.display();
            this.scene.translate(0,0,1.5);
            this.scene.baseCube.display();

        }
        this.scene.popMatrix();


    
    }





}



