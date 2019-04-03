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
        this.gui.add(this.scene, 'displayNormals').name("Display normals");
        this.gui.add(this.scene, 'displayPrism').name("Display Prism");
        this.gui.add(this.scene, 'displayCylinder').name("Display Cylinder");
        this.gui.add(this.scene, 'scaleFactor', 0.1, 10.0).name('Scale');
        return true;
    }
}