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

        scene.displayTri = true;
        scene.displayDi = true;
        scene.displayDi = true;
        scene.displayP = true;
        scene.displaySmallTi = true;
        scene.displayBigTri = true;
        
    }

   

   
    display() {


        var rot1 = [Math.cos(Math.PI/4),Math.sin(Math.PI/4), 0.0, 0.0,
                    -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0.0, 0.0,
                    0.0, 0.0,1.0, 0.0,
                    0.0, 0.0, 0.0, 1.0];
       
   if(this.scene.displayDi)
    {
        this.scene.pushMatrix()
        this.scene.multMatrix(rot1);
        this.scene.diamond.display();
        this.scene.popMatrix();
    }    
   
    if(this.scene.displayTri)
       {
            this.scene.pushMatrix();
            this.scene.translate(Math.sqrt(2)/2,Math.sqrt(2)/2,0);
            this.scene.rotate(5*Math.PI/4,0,0,1);
            this.scene.triangle.display();
            this.scene.popMatrix();
       }
   
    if(this.scene.displayP)
    {
            this.scene.pushMatrix();
            this.scene.translate(-3*Math.sqrt(2)/2,Math.sqrt(2)/2,0)
            this.scene.scale(-1,1,1);
            this.scene.rotate(Math.PI/4*3,0,0,1);
           
            this.scene.parallelogram.display();
            this.scene.popMatrix();

    }  
    if(this.scene.displaySmallTi)
    {
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
    }

    if(this.scene.displayBigTri)
    {
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

    }
       




        // ---- END Primitive drawing section
    }
}