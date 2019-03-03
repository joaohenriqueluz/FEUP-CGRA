/**
* MyTangram
* @constructor
*/
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        
    }
    init() {
        /* super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
         */ 

        //Initialize scene objects
        //this.axis = new CGFaxis(this);
        /*
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.smallTri = new MyTriangleSmall(scene);
        this.bigTri1 = new MyTriangleBig(scene);*/


    }

   
    display(scene) {


        var rot1 = [Math.cos(Math.PI/4),Math.sin(Math.PI/4), 0.0, 0.0,
                    -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0.0, 0.0,
                    0.0, 0.0,1.0, 0.0,
                    0.0, 0.0, 0.0, 1.0];
       
   if(scene.displayDi)
    {
        scene.pushMatrix()
        scene.multMatrix(rot1);
        scene.diamond.display();
        scene.popMatrix();
    }    
   
    if(scene.displayTri)
       {
            scene.pushMatrix();
            scene.translate(Math.sqrt(2)/2,Math.sqrt(2)/2,0);
            scene.rotate(5*Math.PI/4,0,0,1);
            scene.triangle.display();
            scene.popMatrix();
       }
   
    if(scene.displayP)
    {
            scene.pushMatrix();
            scene.translate(-3*Math.sqrt(2)/2,Math.sqrt(2)/2,0)
            scene.scale(-1,1,1);
            scene.rotate(Math.PI/4*3,0,0,1);
           
            scene.parallelogram.display();
            scene.popMatrix();

    }  
    if(scene.displaySmallTi)
    {
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
    }

    if(scene.displayBigTri)
    {
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

    }
       




        // ---- END Primitive drawing section
    }
}