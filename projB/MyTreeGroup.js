/**
* MyTreeGroup
* @constructor
*/
class MyTreeGroup extends CGFobject {
    constructor(scene) {
        super(scene);

        this.plants = [
            new MyLsPlant(this.scene),
            new MyLsPlant(this.scene),
            new MyLsPlant(this.scene),
            new MyLsPlant(this.scene),
            new MyLsPlant(this.scene),
            new MyLsPlant(this.scene),
            new MyLsPlant(this.scene)
        ];

    }


    display() {
        this.scene.pushMatrix();
        this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(20,3,5);
        this.plants[0].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(10,3,7);
        this.plants[1].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(-10,3,7);
        this.plants[2].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(-25,3,-10);
        this.plants[3].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(30,3,20);
        this.plants[4].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(-20,5,-20);
        this.plants[5].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(-20,3,15);
        this.plants[6].display();
        this.scene.popMatrix();
    }


}
