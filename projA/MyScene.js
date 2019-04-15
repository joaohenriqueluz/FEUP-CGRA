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

        this.tree = new MyTree(this,0.7,0.2,1.5,0.7,"","");
        this.treeGroupPatch = new MyTreeGroupPatch(this);
        this.treeRow = new MyTreeRowPatch(this);
        this.house = new MyHouse(this);
        this.hill10 = new MyVoxelHill(this,10);
        this.hill15 = new MyVoxelHill(this,15);
        this.hill12 = new MyVoxelHill(this,12);
        this.hill5 = new MyVoxelHill(this,5);
        this.cubeMap = new MyCubeMap(this);
        this.grass = new MyQuad(this);
        this.displayer = new MySceneObjects(this);

        this.objects = [this.tree, this.treeGroupPatch, this.treeRow, this.house, this.hill10,this.displayer];

        // Labels and ID's for object selection on MyInterface
        this.objectIDs = { 'Tree': 0 , 'Tree Group': 1, 'Tree Row': 2, 'House': 3, 'Hill': 4, 'All Objects': 5};

        //Objects connected to MyInterface
        this.displayAxis = false;
        this.displayNormals = false;
        this.selectedObject = 4;
        this.scaleFactor = 0.1;
        this.showHouse = false;
        this.showTree = false;
        this.showTreeRow = false;
        this.showTreePatch = false;
        this.showHill = false;
        this.day = true;
        this.night = true;

        this.texture1 = new CGFtexture(this, 'textures/cubemap.jpg');

        this.cubeMapTex = new CGFappearance(this);
        this.cubeMapTex.setAmbient(1.0, 1.0, 1.0, 1);
        this.cubeMapTex.setDiffuse(0.9, 0.9, 1.0, 1);
        this.cubeMapTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapTex.setShininess(10.0);
        this.cubeMapTex.setTexture(this.texture1);
        this.cubeMapTex.setTextureWrap('REPEAT', 'REPEAT');

    }
    initLights() {

      this.lights[0].setPosition(0, 20, 0, 1.0);
      this.lights[0].setDiffuse(0.0, 0.2, 0.5, 1.0);
      this.lights[0].setSpecular(0.0, 0.2, 0.5, 2.0);
      this.lights[0].enable()//disable();
      this.lights[0].setVisible(true);
      this.lights[0].update();

      this.lights[1].setPosition(0, 10, 2, 1.0);
      this.lights[1].setDiffuse(1.5, 1.2, 1.2, 1.0);
      this.lights[1].setSpecular(1.5, 1.2, 1.2, 1.0);
      this.lights[1].enable();
      this.lights[1].setVisible(true);
      this.lights[1].update();

    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.9, 0.9, 0.8, 1.0);
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
            this.night = false;
            this.lights[1].enable();
            this.lights[0].disable();
        } else{
            this.day = false;
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

        this.objects[this.selectedObject].display();
        // ---- END Primitive drawing section
    }
}
