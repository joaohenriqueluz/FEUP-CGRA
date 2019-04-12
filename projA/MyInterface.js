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

        var obj = this;
        this.gui.add(this.scene, 'displayAxis').name("Display axis");
        this.gui.add(this.scene, 'showHouse').name("Display House");
        this.gui.add(this.scene, 'showTreeRow').name("Display Tree Row");
        this.gui.add(this.scene, 'showTreePatch').name("Display Tree Patch");
        this.gui.add(this.scene, 'showHill').name("Display Hill");
        this.gui.add(this.scene, 'scaleFactor', 0.1, 10.0).name('Scale');
        return true;
    }
}
