/**
* MyBird
* @constructor
*/
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);

        this.deltaX = 0;
        this.deltaY = 15;
        this.deltaZ = 0;
        this.Y = 7;

        this.scene.cylinder = new MyCylinder(scene, 5);
        this.scene.cone = new MyCone(scene, 5, 1);
        this.scene.pyramid = new MyPyramid(scene, 5, 1);
        this.scene.birdWing = new MyBirdWing(scene);

        this.scene.twig = new MyTreeBranch(scene, this.deltaX, this.Y, this.deltaZ);
        this.wingAlpha = 0;
        this.diving = false;
        this.hasBranch = false;
        this.time = 0;
        this.speed = 0;
        this.rotation = 2 * Math.PI;

    }

    turn(v) {
        this.rotation += v;
    }

    accelerate(v) {
        this.speed += v;
    }

    move() {
        this.deltaZ += this.speed * Math.cos(this.rotation);
        this.deltaX += this.speed * Math.sin(this.rotation);
    }

    getBranch(t) {
        this.deltaT = t - this.time;
        if (this.deltaT < 1000) {
            this.Y -= 0.3;
        }

        else if (this.deltaT < 2000) {
            this.Y += 0.3;
        }

        else if (this.deltaT >= 1500 && this.deltaT <= 2500)
            if (this.scene.gotBranch() == true) {
                this.hasBranch = true;
            }
    }

    leaveBranch(t) {
        this.deltaT = t - this.time;
        if (this.deltaT < 1000) {
            this.Y -= 0.3;
        }

        else if (this.deltaT < 2000) {
            this.Y += 0.3;
        }

        else if (this.deltaT >= 1500 && this.deltaT <= 2500)
            if (this.scene.aboveNest() == true) {
                this.hasBranch = false;
                //improveNest;
                this.scene.objects[4].improve();
            }
    }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(this.deltaX, this.deltaY + this.Y, this.deltaZ);
        this.scene.rotate(this.rotation, 0, 1, 0);

        // body
        this.scene.pushMatrix();
        this.scene.scale(0.4, 0.5, 0.5);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.cylinder.display();
        this.scene.popMatrix();

        //right wing
        this.scene.pushMatrix();
        this.scene.translate(-0.25, 0.250, 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(this.wingAlpha, 0, 0, 1);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.birdWing.display();
        this.scene.popMatrix();

        //left wing
        this.scene.pushMatrix();
        this.scene.translate(-0.25, 0.250, 0);
        this.scene.rotate(this.wingAlpha, 0, 0, 1);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.birdWing.display();
        this.scene.popMatrix();

        //lateral
        this.scene.pushMatrix();
        this.scene.translate(-0.4, 0, 0)
        this.scene.scale(0.2, 0.5, 0.5);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.cone.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.scale(0.2, 0.5, 0.5);
        this.scene.rotate(Math.PI / 5, 1, 0, 0)
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.scene.cone.display();
        this.scene.popMatrix();

        //head
        this.scene.pushMatrix();
        this.scene.translate(0, 0.2, 0.6)
        this.scene.scale(0.4, 0.3, 0.3);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.4, 0.2, 0.6)
        this.scene.scale(0.1, 0.3, 0.3);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.2, 0.6)
        this.scene.scale(0.1, 0.3, 0.3);
        this.scene.rotate(Math.PI / 5, 1, 0, 0)
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.scene.cone.display();
        this.scene.popMatrix();

        //eyes
        this.scene.pushMatrix();
        this.scene.translate(-0.4, 0.25, 0.7)
        this.scene.scale(0.1, 0.1, 0.1);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.25, 0.7)
        this.scene.scale(0.1, 0.1, 0.1);
        this.scene.rotate(Math.PI / 5, 1, 0, 0)
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.scene.cone.display();
        this.scene.popMatrix();

        //bick
        this.scene.pushMatrix();
        this.scene.translate(-0.2, 0.25, 0.8);
        this.scene.scale(0.15, 0.15, 0.2);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.pyramid.display();
        this.scene.popMatrix();

        //tail
        this.scene.pushMatrix();
        this.scene.translate(-0.2, 0.0, -0.4);
        this.scene.scale(0.3, 0.3, 0.4);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.pyramid.display();
        this.scene.popMatrix();

        if (this.hasBranch == true) {
            this.scene.pushMatrix();
            this.scene.translate(-1, 0, -2);
            this.scene.rotate(Math.PI / 2, 1, 0, 0);
            this.scene.twig.display();
            this.scene.popMatrix();
        }

        this.scene.popMatrix();
    }
}
