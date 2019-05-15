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

	}

    display() {
        this.scene.birdBody.display();
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0.5);
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.birdHead.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.5,0,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
        //this.scene.scale(0.5,0.5,1);
        this.scene.birdWing.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1,0.375,0);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        //this.scene.scale(-0.5, -0.5, 1);
        this.scene.birdWing.display();
        this.scene.popMatrix();

    }


}
