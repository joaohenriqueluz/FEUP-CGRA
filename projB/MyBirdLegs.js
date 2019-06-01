/**
* MyBirdLegs
* @constructor
*/
class MyBirdLegs extends CGFobject {
    constructor(scene) {
        super(scene);
        this.leg = new MyUnitCubeQuad(scene);
        this.foot = new MyTriangle(scene);
    }

    

    display() {
        
    }


}
