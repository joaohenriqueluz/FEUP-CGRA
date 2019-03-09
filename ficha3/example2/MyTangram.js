/**
* MyTangram
* @constructor
*/
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);

        scene.diamond = new MyDiamond(scene);
        scene.triangle = new MyTriangle(scene);
        scene.parallelogram = new MyParallelogram(scene);
        scene.smallTri = new MyTriangleSmall(scene);
        scene.bigTri1 = new MyTriangleBig(scene);

       
        
    }

   

   
    display() {


        var rot1 = [Math.cos(Math.PI/4),Math.sin(Math.PI/4), 0.0, 0.0,
                    -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0.0, 0.0,
                    0.0, 0.0,1.0, 0.0,
                    0.0, 0.0, 0.0, 1.0];
       
   
            this.scene.pushMatrix()
            this.scene.multMatrix(rot1);
            this.scene.diamond.display();
            this.scene.popMatrix();
   
            this.scene.pushMatrix();
            this.scene.translate(Math.sqrt(2)/2,Math.sqrt(2)/2,0);
            this.scene.rotate(5*Math.PI/4,0,0,1);
            this.scene.triangle.display();
            this.scene.popMatrix();
     
            this.scene.pushMatrix();
            this.scene.translate(-3*Math.sqrt(2)/2,Math.sqrt(2)/2,0)
            this.scene.scale(-1,1,1);
            this.scene.rotate(Math.PI/4*3,0,0,1);
           
            this.scene.parallelogram.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-Math.sqrt(2),-Math.sqrt(2),0);
            this.scene.rotate(3*Math.PI/4,0,0,1);
            this.scene.smallTri.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(Math.sqrt(2),-Math.sqrt(2),0);
            this.scene.rotate(-3*Math.PI/4,0,0,1);
            this.scene.smallTri.display();
            this.scene.popMatrix();
            this.scene.pushMatrix();
            this.scene.translate(3*Math.sqrt(2)/2,-Math.sqrt(2)/2,0);
            this.scene.rotate(Math.PI/4,0,0,1);
            this.scene.bigTri1.display();
            this.scene.popMatrix();
            
            this.scene.pushMatrix();
            this.scene.translate(-3*Math.sqrt(2)/2,-Math.sqrt(2)/2,0);
            this.scene.rotate(-Math.PI/4,0,0,1);
            this.scene.bigTri1.display();
            this.scene.popMatrix();

       




        // ---- END Primitive drawing section
    }

        updateBuffers(complexity){
        }
}