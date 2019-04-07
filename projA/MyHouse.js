/**
* MyHouse
* @constructor
*/
class MyHouse extends CGFobject {
	constructor(scene){
		super(scene);
        this.scene.base = new MyHouseBase(scene);
        this.scene.houseps = new MyUnitCubeQuad(scene);
        this.scene.column = new MyHouseColumn(scene);
        this.scene.roof = new MyHouseRoof(scene);
        this.scene.fence = new MyHouseFence(scene,50);
        this.scene.gate = new MyHouseFence(scene,25);

	}
    
    display(){
      /*  this.scene.pushMatrix();
        this.scene.scale(10,0.5,20);
        this.scene.houseCube.display(); //First Step
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,-1);
        this.scene.scale(15,0.5,18);     
        this.scene.houseCube.display(); //Second Step
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0,1,-2);
        this.scene.scale(20,0.5,16);     
        this.scene.houseCube.display(); //Third Step
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0,5,-5);
        this.scene.scale(10,7.5,10);
        this.scene.houseCube.display(); //House
        this.scene.translate(0,0.5,0);
        this.scene.scale(0.5,0.25,0.5);
        this.scene.rotate(Math.PI/4, 0,1,0);
        this.scene.roof.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,5,2.5);
        this.scene.scale(5,0.5,5);
        this.scene.houseCube.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0,5.25,2.5);
        this.scene.scale(3.5,1,3.5);
        this.scene.rotate(Math.PI/4,0,1,0);
        this.scene.roof.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.scale(0.5,5,0.5);

        this.scene.translate(3.5,0,1.5);
        this.scene.column.display();

        this.scene.translate(0,0,6);
        this.scene.column.display();

        this.scene.translate(-7,0,0);
        this.scene.column.display();

        this.scene.translate(0,0,-6);
        this.scene.column.display();

        this.scene.popMatrix();*/
 
   

    this.scene.base.display();
    this.scene.pushMatrix();
    this.scene.translate(0,2.5,0);
    this.scene.scale(5,5,5);
    this.scene.houseps.display();
    this.scene.popMatrix();

/////////ROOF/////////
   this.scene.pushMatrix();
    this.scene.translate(0,5,0);
    this.scene.scale(0.25,0.25,0.25);
     this.scene.roof.display();
    for (var i = 0; i < 30; i++) {
        this.scene.translate(0,0.5,0);
        this.scene.scale(0.9,1,0.9);
        this.scene.roof.display();
    }
    this.scene.popMatrix();
/////////////////FENCE///////////////

    this.scene.pushMatrix();
    this.scene.translate(9,-2,10);
    this.scene.scale(1.5,1,1.5);
    this.scene.rotate(Math.PI/2, 0,1,0);
    this.scene.fence.display();
    this.scene.popMatrix();


    this.scene.pushMatrix();
    this.scene.translate(-10,-2,10);
    this.scene.scale(1.5,1,1.5);
    this.scene.rotate(Math.PI/2, 0,1,0);
    this.scene.fence.display();
    this.scene.popMatrix();


    this.scene.pushMatrix();
    this.scene.translate(-10,-2,-9);
    this.scene.scale(1.5,1,1.5);
    //this.scene.rotate(3*Math.PI/2, 0,1,0);
    this.scene.fence.display();
    this.scene.popMatrix();

   
    this.scene.pushMatrix();
    this.scene.translate(-10,-2,10);
    this.scene.gate.display();

    this.scene.translate(13,0,0);
    this.scene.gate.display();

    this.scene.popMatrix();


 this.scene.pushMatrix();
    this.scene.translate(-8,-2,9);
    this.scene.scale(0.5,0.5,0.5);
    this.scene.column.display();


    this.scene.translate(30,0,0);

    this.scene.column.display();
/*
    this.scene.popMatrix();
    this.scene.pushMatrix();
    this.scene.translate(0,-0.5,0);
    this.scene.scale(20,0.5,20);
    this.scene.houseps.display();
    this.scene.popMatrix();
*/







    }

}