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
            new Plane(this, 32),
            new MyHouse(this),
            new MyCubeMap(this),
            new MyBird(this)
        ];

        //Objects connected to MyInterface

        this.scaleFactor = 1;
        this.speedFactor = 1;
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
        this.checkKeys();
        this.objects[3].Y = 0.25*Math.sin(2*Math.PI* t/1000*this.speedFactor);
        this.objects[3].wingAlpha = Math.PI/4* Math.sin(2*Math.PI*t/1000*this.speedFactor);
        this.objects[3].move();
    }

    checkKeys(){
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

        if(this.gui.isKeyPressed("KeyR")){
            text+=" R ";
            keysPressed=true;
            this.objects[3].deltaX = 0;
            this.objects[3].deltaZ = 0;
            this.objects[3].rotation = 0;
            this.objects[3].speed = 0;
        }

        if(keysPressed){
            console.log(text);
        }
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

        // ---- BEGIN Primitive drawing section
        /*this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.plane.display();
        this.popMatrix();*/

        this.objects[3].display();

        //this.cube.display();

        //this.house.display();
        // ---- END Primitive drawing section
    }
}