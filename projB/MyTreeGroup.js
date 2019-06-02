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
        //this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(10,0,4);
        this.plants[0].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        //this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(4,1,7);
        this.plants[1].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        //this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(-5,1,5);
        this.plants[2].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        //this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(-3,1,-5);
        this.plants[3].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        //this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(3,1,-4);
        this.plants[4].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        //this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(-2,0,-2);
        this.plants[5].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        //this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(-4,1,7);
        this.plants[6].display();
        this.scene.popMatrix();
    }


}
