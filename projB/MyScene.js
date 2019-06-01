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
        this.setUpdatePeriod(50);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.objects = [
            new MyTerrain(this),
            new MyHouse(this),
            new MyCubeMap(this),
            new MyBird(this),
            new MyNest(this)
        ];

        this.branches = [
            new MyTreeBranch(this, true, 10,10),
            new MyTreeBranch(this, true,14,-8),
            new MyTreeBranch(this, true,9,0),
            new MyTreeBranch(this, true,7,-5),
            new MyTreeBranch(this, true,-5,10)
        ];

        this.appearance = new CGFappearance(this);
        this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.appearance.setShininess(120);

        this.terrainTexture = new CGFtexture(this, "images/terrain.jpg");
        this.appearance.setTexture(this.terrainTexture);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');

        this.gradientTex = new CGFtexture(this, "images/altimetry.png")
        this.terrainMap = new CGFtexture(this, "images/heightmap.jpg");

        this.testShaders = [
            new CGFshader(this.gl, "shaders/terrain.vert", "shaders/terrain.frag")
        ];


        this.testShaders[0].setUniformsValues({ uSampler2: 1 });
        this.testShaders[0].setUniformsValues({ uSampler3: 2});

        

        //Objects connected to MyInterface

        this.scaleFactor = 1;
        this.speedFactor = 1;


        //Objects related to bird animation
    }

    
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    update(t){
        this.checkKeys(t);
        this.objects[3].getBranch(t);
        this.objects[3].deltaY = 0.25*Math.sin(2*Math.PI* t/1000*this.speedFactor);
        this.objects[3].wingAlpha = Math.PI/4* Math.sin(2*Math.PI*t/1000*this.speedFactor);
        this.objects[3].move();
    }

    checkKeys(t){
        var text="keys pressed; ";
        var keysPressed=false;

        if(this.gui.isKeyPressed("KeyW")){
            text+=" W ";
            keysPressed=true;
            this.objects[3].accelerate(0.1*this.speedFactor);
        }

        if(this.gui.isKeyPressed("KeyS")){
            text+=" S ";
            keysPressed=true;
            this.objects[3].accelerate(-0.1*this.speedFactor);
        }

        if(this.gui.isKeyPressed("KeyA")){
            text+=" A ";
            keysPressed=true;
            this.objects[3].turn(-Math.PI/12*this.speedFactor);
        }

        if(this.gui.isKeyPressed("KeyD")){
            text+=" D ";
            keysPressed=true;
            this.objects[3].turn(Math.PI/12*this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyP")) {
            text += " P ";
            keysPressed = true;
            this.objects[3].time = t;
        }

        if(this.gui.isKeyPressed("KeyR")){
            text+=" R ";
            keysPressed=true;
            this.objects[3].deltaX = 0;
            this.objects[3].deltaZ = 0;
            this.objects[3].Y = 7;
            this.objects[3].rotation = 0;
            this.objects[3].speed = 0;
        }

        if(keysPressed){
            console.log(text);
        }
    }


    gotBranch(){
        for(var i = 0; i < this.branches.length; i++){
            if ((this.branches[i].deltaX <= this.objects[3].deltaX + 3) && (this.branches[i].deltaX >= this.objects[3].deltaX - 3))
                if ((this.branches[i].deltaZ <= this.objects[3].deltaZ + 3) && (this.branches[i].deltaZ >= this.objects[3].deltaZ - 3))
                {
                    return true;
                }
        }
        return false;
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

        // Draw axis
        this.axis.display();
        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
            0.0, this.scaleFactor, 0.0, 0.0,
            0.0, 0.0, this.scaleFactor, 0.0,
            0.0, 0.0, 0.0, 1.0];
        this.multMatrix(sca);

        //Apply default appearance
        this.setDefaultAppearance();
        // aplly main appearance (including texture in default texture unit 0)
        this.objects[3].display();

        this.branches[0].display();
        this.branches[1].display();
        this.branches[2].display();
        this.branches[3].display();
        this.branches[4].display();
        
        this.objects[4].display();

        this.appearance.apply();
        this.setActiveShader(this.testShaders[0]);

        this.terrainMap.bind(1);
        this.gradientTex.bind(2);

        // ---- BEGIN Primitive drawing section
        this.objects[0].display();
        this.setActiveShader(this.defaultShader);


        //this.cube.display();

        //this.house.display();
        // ---- END Primitive drawing section

        //this.setActiveShader(this.defaultShader);

    }
}