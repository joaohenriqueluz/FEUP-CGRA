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

   

   
    display(scene) {


        var rot1 = [Math.cos(Math.PI/4),Math.sin(Math.PI/4), 0.0, 0.0,
                    -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0.0, 0.0,
                    0.0, 0.0,1.0, 0.0,
                    0.0, 0.0, 0.0, 1.0];
       
   
            scene.pushMatrix()
            scene.multMatrix(rot1);
            scene.diamond.display();
            scene.popMatrix();
   
            scene.pushMatrix();
            scene.translate(Math.sqrt(2)/2,Math.sqrt(2)/2,0);
            scene.rotate(5*Math.PI/4,0,0,1);
            scene.triangle.display();
            scene.popMatrix();
     
            scene.pushMatrix();
            scene.translate(-3*Math.sqrt(2)/2,Math.sqrt(2)/2,0)
            scene.scale(-1,1,1);
            scene.rotate(Math.PI/4*3,0,0,1);
           
            scene.parallelogram.display();
            scene.popMatrix();

            scene.pushMatrix();
            scene.translate(-Math.sqrt(2),-Math.sqrt(2),0);
            scene.rotate(3*Math.PI/4,0,0,1);
            scene.smallTri.display();
            scene.popMatrix();

            scene.pushMatrix();
            scene.translate(Math.sqrt(2),-Math.sqrt(2),0);
            scene.rotate(-3*Math.PI/4,0,0,1);
            scene.smallTri.display();
            scene.popMatrix();
            scene.pushMatrix();
            scene.translate(3*Math.sqrt(2)/2,-Math.sqrt(2)/2,0);
            scene.rotate(Math.PI/4,0,0,1);
            scene.bigTri1.display();
            scene.popMatrix();
            
            scene.pushMatrix();
            scene.translate(-3*Math.sqrt(2)/2,-Math.sqrt(2)/2,0);
            scene.rotate(-Math.PI/4,0,0,1);
            scene.bigTri1.display();
            scene.popMatrix();

       




        // ---- END Primitive drawing section
    }

        updateBuffers(complexity){
        }
}