/**
* MyHouse
* @constructor
*/
class MyHouse extends CGFobject {
	constructor(scene){
		super(scene);
        this.scene.houseCube = new MyUnitCubeQuad(scene);
        this.scene.roof = new MyPyramid(scene,4);
        this.scene.column = new MyCylinder(scene,10);
	}
    
    display(){
        this.scene.pushMatrix();
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

        this.scene.popMatrix();

    }
}


