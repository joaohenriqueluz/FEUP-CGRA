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

        this.tree = new MyTree(this, 0.7, 0.2, 1.5, 0.7, "", "");
        this.treeGroupPatch = new MyTreeGroupPatch(this);
        this.treeRow = new MyTreeRowPatch(this);
        this.house = new MyHouse(this);
        this.hill10 = new MyVoxelHill(this, 10);
        this.hill15 = new MyVoxelHill(this, 15);
        this.hill12 = new MyVoxelHill(this, 12);
        this.hill5 = new MyVoxelHill(this, 5);
        this.cubeMap = new MyCubeMap(this);
        this.grass = new MyQuad(this);
        this.campFire = new MyFirePlace(this);
        this.displayer = new MySceneObjects(this);

        this.objects = [this.tree, this.treeGroupPatch, this.treeRow, this.house, this.hill10, this.displayer];

        // Labels and ID's for object selection on MyInterface
        this.objectIDs = { 'Tree': 0, 'Tree Group': 1, 'Tree Row': 2, 'House': 3, 'Hill': 4, 'All Objects': 5 };

        //Objects connected to MyInterface
        this.displayAxis = false;
        this.displayNormals = false;
        this.selectedObject = 5;
        this.scaleFactor = 0.1;
        this.showHouse = false;
        this.showTree = false;
        this.showTreeRow = false;
        this.showTreePatch = false;
        this.showHill = false;
        this.texEn = true;
        this.campFireLight = false;
        this.timeOfDay = 0;
        this.timeOfDayOptions = {'Day':0, 'Night': 1};

        this.DayTex = new CGFtexture(this, 'textures/cubemap.jpg');

        this.cubeMapDayTex = new CGFappearance(this);
        this.cubeMapDayTex.setAmbient(1.0, 1.0, 1.0, 1);
        this.cubeMapDayTex.setDiffuse(0.9, 0.9, 1.0, 1);
        this.cubeMapDayTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapDayTex.setShininess(10.0);
        this.cubeMapDayTex.setTexture(this.DayTex);
        this.cubeMapDayTex.setTextureWrap('REPEAT', 'REPEAT');


        this.nightTex = new CGFtexture(this, 'textures/cubeNight.jpeg');

        this.cubeMapNightTex = new CGFappearance(this);
        this.cubeMapNightTex.setAmbient(1.0, 1.0, 1.0, 1);
        this.cubeMapNightTex.setDiffuse(0.9, 0.9, 1.0, 1);
        this.cubeMapNightTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMapNightTex.setShininess(10.0);
        this.cubeMapNightTex.setTexture(this.nightTex);
        this.cubeMapNightTex.setTextureWrap('REPEAT', 'REPEAT');


    }
    initLights() {


        //Moonlight
        this.lights[0].setPosition(0, 10, 10, 1.0);
        this.lights[0].setDiffuse(0.2, 0.5, 0.9, 1.0);
        this.lights[0].setSpecular(0.2, 0.5, 0.9, 1.0);
        this.lights[0].setConstantAttenuation(0.4);
        this.lights[0].enable()//disable();
        this.lights[0].setVisible(true);
        this.lights[0].update();

        //Sunlight
        this.lights[1].setPosition(0, 100, 0, 1.0);
        this.lights[1].setDiffuse(1.0, 0.75, 0.75, 1.0);
        this.lights[1].setSpecular(1, 0.75, 0.75, 1.0);
        this.lights[1].setConstantAttenuation(0.1);
        this.lights[1].enable();
        this.lights[1].setVisible(true);
        this.lights[1].update();

        //Camp fire light
        this.lights[2].setPosition(0, 0, 1, 0);
        this.lights[2].setDiffuse(0.4, 0.1, 0.0, 1.0);
        this.lights[2].setSpecular(0.4, 0.1, 0.0, 1.0);
        this.lights[2].setConstantAttenuation(1.0);
        this.lights[2].disable();
        this.lights[2].setVisible(true);
        this.lights[2].update();

        this.updateLights();
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


    updateLights(){
        if (this.timeOfDay == 0) {
            this.lights[1].enable();
            this.lights[0].disable();
            
        } else if(this.timeOfDay == 1){
            this.lights[0].enable();
            this.lights[1].disable();
            
        }

        if(this.campFireLight){
            this.lights[2].enable();
        }
        else
            this.lights[2].disable();
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

        this.enableTextures(this.texEn);

        this.lights[0].update();
        this.lights[1].update();
        this.lights[2].update();

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
