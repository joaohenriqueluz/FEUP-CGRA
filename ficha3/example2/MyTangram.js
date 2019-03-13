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

        this.initMaterials();
        
    }

    enableNormalViz(){
        this.scene.diamond.enableNormalViz();
        this.scene.triangle.enableNormalViz();
        this.scene.parallelogram.enableNormalViz();
        this.scene.bigTri1.enableNormalViz();
        this.scene.smallTri.enableNormalViz();
    }



    initMaterials(){
         this.materialGreen = new CGFappearance(this.scene);
        this.materialGreen.setAmbient(0, 0.5, 0, 1.0);
        this.materialGreen.setDiffuse(0, 0.5, 0, 1.0);
        this.materialGreen.setSpecular(0, 1, 0, 1.0);
        this.materialGreen.setShininess(10.0);

        this.materialBlue = new CGFappearance(this.scene);
        this.materialBlue.setAmbient(0, 0, 0.5, 1.0);
        this.materialBlue.setDiffuse(0, 0, 0.5, 1.0);
        this.materialBlue.setSpecular(0.4, 0.6, 1, 1.0);
        this.materialBlue.setShininess(10.0);

         this.materialRed = new CGFappearance(this.scene);
        this.materialRed.setAmbient(0.5, 0, 0, 1.0);
        this.materialRed.setDiffuse(0.5, 0, 0, 1.0);
        this.materialRed.setSpecular(1, 0, 0, 1.0);
        this.materialRed.setShininess(10.0);

         this.materialYellow = new CGFappearance(this.scene);
        this.materialYellow.setAmbient(0.1, 0.2, 0, 1.0);
        this.materialYellow.setDiffuse(0.1, 0.2, 0, 1.0);
        this.materialYellow.setSpecular(1, 1, 0.1, 1.0);
        this.materialYellow.setShininess(10.0);

         this.materialPink = new CGFappearance(this.scene);
        this.materialPink.setAmbient(0.5, 0.2, 0.3, 1.0);
        this.materialPink.setDiffuse(0.5, 0.2, 0.3, 1.0);
        this.materialPink.setSpecular(1, 0.7, 0.8, 1.0);
        this.materialPink.setShininess(10.0);

         this.materialOrange = new CGFappearance(this.scene);
        this.materialOrange.setAmbient(0.5, 0.3, 0.0, 1.0);
        this.materialOrange.setDiffuse(0.5, 0.3, 0.0, 1.0);
        this.materialOrange.setSpecular(1, 0.6, 0.1, 1.0);
        this.materialOrange.setShininess(10.0);

         this.materialPurple = new CGFappearance(this.scene);
        this.materialPurple.setAmbient(0.4, 0.0, 0.4, 1.0);
        this.materialPurple.setDiffuse(0.4, 0.0, 0.4, 1.0);
        this.materialPurple.setSpecular(0.8, 0.0, 0.8, 1.0);
        this.materialPurple.setShininess(10.0);
        
       
    }
   
    display() {


       
      var rot1 = [Math.cos(Math.PI/4),Math.sin(Math.PI/4), 0.0, 0.0,
                    -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0.0, 0.0,
                    0.0, 0.0,1.0, 0.0,
                    0.0, 0.0, 0.0, 1.0];
       
   if(this.scene.displayDi)
    {
        this.materialGreen.apply();
        this.scene.pushMatrix()
        this.scene.multMatrix(rot1);
        this.scene.diamond.display();
        this.scene.popMatrix();
    }    
   
    if(this.scene.displayTri)
       {
            this.materialPink.apply();
            this.scene.pushMatrix();
            this.scene.translate(Math.sqrt(2)/2,Math.sqrt(2)/2,0);
            this.scene.rotate(5*Math.PI/4,0,0,1);
            this.scene.triangle.display();
            this.scene.popMatrix();
       }
   
    if(this.scene.displayP)
    {       
            this.materialYellow.apply();
            this.scene.pushMatrix();
            this.scene.translate(-3*Math.sqrt(2)/2,Math.sqrt(2)/2,0)
            this.scene.scale(-1,1,1);
            this.scene.rotate(Math.PI/4*3,0,0,1);
           
            this.scene.parallelogram.display();
            this.scene.popMatrix();

    }  
    if(this.scene.displaySmallTi)
    {       
            this.materialRed.apply();
            this.scene.pushMatrix();
            this.scene.translate(-Math.sqrt(2),-Math.sqrt(2),0);
            this.scene.rotate(3*Math.PI/4,0,0,1);
            this.scene.smallTri.display();
            this.scene.popMatrix();
            
            this.materialPurple.apply();
            this.scene.pushMatrix();
            this.scene.translate(Math.sqrt(2),-Math.sqrt(2),0);
            this.scene.rotate(-3*Math.PI/4,0,0,1);
            this.scene.smallTri.display();
            this.scene.popMatrix();
    }

    if(this.scene.displayBigTri)
    {       
            this.materialOrange.apply();
            this.scene.pushMatrix();
            this.scene.translate(3*Math.sqrt(2)/2,-Math.sqrt(2)/2,0);
            this.scene.rotate(Math.PI/4,0,0,1);
            this.scene.bigTri1.display();
            this.scene.popMatrix();
            
            this.materialBlue.apply();
            this.scene.pushMatrix();
            this.scene.translate(-3*Math.sqrt(2)/2,-Math.sqrt(2)/2,0);
            this.scene.rotate(-Math.PI/4,0,0,1);
            this.scene.bigTri1.display();
            this.scene.popMatrix();

    }
       




        // ---- END Primitive drawing section
    }

    updateBuffers(complexity){
        	//this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        	// reinitialize buffers
        	this.initBuffers();
        	this.initNormalVizBuffers();
    }
}