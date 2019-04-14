/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        //this.prism = new MyPrism(this,33);
        //this.cylinder = new MyCylinder(this, 12);
        this.tree = new MyTree(this,0.7,0.2,1.5,0.7,"","");
        //MyTree.constructor (scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture)
        this.treePatch = new MyTreeGroupPatch(this);
        this.treeRow = new MyTreeRowPatch(this);
        this.house = new MyHouse(this);
        this.hill10 = new MyVoxelHill(this,10);
        this.hill15 = new MyVoxelHill(this,15);
        this.hill12 = new MyVoxelHill(this,12);
        this.hill5 = new MyVoxelHill(this,5);
        this.cubeMap = new MyCubeMap(this);


        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayNormals = false;
        this.scaleFactor = 0.1;
        this.showHouse = false;
        this.showTree = false;
        this.showTreeRow = false;
        this.showTreePatch = false;
        this.showHill = false;
        this.day = true;

    }
    initLights() {

        this.lights[0].setPosition(0, 20, 0, 1.0);
        this.lights[0].setDiffuse(0.0, 0.2, 0.5, 1.0);
        this.lights[0].setSpecular(0.0, 0.2, 0.5, 2.0);
        this.lights[0].enable()//disable();
        this.lights[0].setVisible(true);
        this.lights[0].update();

        this.lights[1].setPosition(0, 5, 10, 1.0);
        this.lights[1].setDiffuse(1.0, 0.8, 0.8, 1.0);
        this.lights[1].setSpecular(1.0, 0.8, 0.8, 1.0);
        this.lights[1].enable();
        this.lights[1].setVisible(true);
        this.lights[1].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        if (this.day == true) {
          this.lights[1].enable();
          this.lights[0].disable();
        } else {
          this.lights[0].enable();
          this.lights[1].disable();
        }

        this.lights[0].update();
        this.lights[1].update();
        // Draw axis
        if (this.displayAxis) this.axis.display();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        this.multMatrix(sca);


        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        //Display house
        this.pushMatrix();
        this.scale(0.5,0.5,0.5);
        this.house.display();
        this.popMatrix();

        //Display Tree Patches
        this.pushMatrix();
        this.translate(10,0,0);
        this.scale(2,2,2);
        this.treePatch.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-17,0,0);
        this.scale(2,2,2);
        this.treePatch.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(20,0,0);
        this.scale(2,2,2);
        this.treePatch.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(20,0,10);
        this.scale(2,2,2);
        this.treePatch.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(35,0,-25);
        this.scale(2,2,2);
        this.treePatch.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(35,0,-25);
        this.scale(2,2,2);
        this.treePatch.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(35,0,-13);
        this.scale(2,2,2);
        this.treePatch.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(35,0,0);
        this.scale(2,2,2);
        this.treePatch.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-46,0,-15);
        this.scale(2,2,2);
        this.treePatch.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-31,0,-15);
        this.scale(2,2,2);
        this.treePatch.display();
        this.popMatrix();


        //Display Tree Rows
        this.pushMatrix();
        this.translate(-25,0,20);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(10,0,25);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-20,0,-45);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(5,0,-45);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-20,0,-40);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(5,0,-40);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-20,0,-35);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(5,0,-35);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-20,0,-30);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(5,0,-30);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-20,0,-25);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(5,0,-25);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-20,0,-20);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(5,0,-20);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-20,0,-15);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(5,0,-15);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-20,0,-10);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(5,0,-10);
        this.scale(2,2,2);
        this.treeRow.display();
        this.popMatrix();

        //Display Hills
        this.pushMatrix();
        this.translate(-50,0,-50);
        this.hill15.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-50,0,0);
        this.hill12.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(30,0,-50);
        this.hill10.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-50,0,40);
        this.hill5.display();
        this.popMatrix();

        this.cubeMap.display();

        // ---- END Primitive drawing section
    }
}
