/**
* MyBirdWingTip
* @constructor
*/
class MyBirdWingTip extends CGFobject {
    constructor(scene) {
        super(scene);
        this.wingTip = new MyTriangle(scene, 3);

    }


    display() {
        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 0.25);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.translate(1, 0.5, 1);
        this.scene.rotate(Math.PI / 3, 1, 0, 0);
        this.wingTip.display();
        this.scene.popMatrix();



    }

}
