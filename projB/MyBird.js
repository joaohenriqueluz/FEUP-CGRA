/**
* MyBird
* @constructor
*/
class MyBird extends CGFobject {
	constructor(scene){
        super(scene);
        this.scene.birdBody = new MyUnitCubeQuad(scene);
        this.scene.birdHead = new MyUnitCubeQuad(scene);
        this.scene.birdEye = new MyCylinder(scene,5);
        this.scene.birdBick = new MyPyramid(scene,3);
        this.scene.birdWing = new MyBirdWing(scene);
        this.deltaX = 0;
        this.deltaY = 0;
        this.deltaZ = 0;
        this.wingAlpha=0;

        this.speed = 0;
        this.rotation = 2*Math.PI;

    }
    
    turn(v){
        this.rotation += v;
    }

    accelerate(v){
        this.speed += v;
    }

    move(){
        this.deltaZ += this.speed*Math.cos(this.rotation);
        this.deltaX += this.speed*Math.sin(this.rotation);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.deltaX,this.deltaY+3,this.deltaZ);
        this.scene.rotate(this.rotation,0,1,0);
        this.scene.birdBody.display();
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0.5);
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.birdHead.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0.250, 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(this.wingAlpha,0,0,1);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        //this.scene.rotate(Math.PI,0,0,1);
        this.scene.birdWing.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.250, 0);
        this.scene.rotate(this.wingAlpha, 0, 0, 1);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.birdWing.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0.8);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.1, 0.1, 0.1);
        this.scene.birdBick.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

    }


}
