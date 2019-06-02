/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        this.gui.add(this.scene, 'scaleS', 0.5, 3.0).name('scaleFactor');
        this.gui.add(this.scene, 'scaleFactor', 0.1, 3.0).name('scaleScene');
        this.gui.add(this.scene, 'speedFactor', 0.1, 3.0).name('speedFactor');

        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'displayBird').name('Display Bird');
        this.gui.add(this.scene, 'displayTrees').name('Display Trees');
        this.gui.add(this.scene, 'displaySkyBox').name('Display SkyBox');
        
        var obj = this;

        this.initKeys();

        return true;
    }

    initKeys(){
        this.scene.gui=this;
        this.processKeyboard=function(){};
        this.activeKeys={};
    }

    processKeyDown(event) {
        // called when a key is pressed down 
        // mark it as active in the array
        this.activeKeys[event.code]=true;
    };

    processKeyUp(event) {
        // called when a key is released, mark it as inactive in the array
        this.activeKeys[event.code]=false;
    };

    isKeyPressed(keyCode) {
        // returns true if a key is marked as pressed, false otherwise
        return this.activeKeys[keyCode] || false;
    }
}