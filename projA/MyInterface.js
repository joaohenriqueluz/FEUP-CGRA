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
        this.gui.add(this.scene, 'scaleFactor', 0.1, 1.0).name('Scale');
        this.gui.add(this.scene, 'day').name("Day");


        // a folder for grouping switches for most os the scene´s objects
        var objFldr = this.gui.addFolder('Objects');
        objFldr.add(this.scene, 'showHouse').name("Display House");
        objFldr.add(this.scene, 'showTree').name("Display Tree");
        objFldr.add(this.scene, 'showTreeRow').name("Display Tree Row");
        objFldr.add(this.scene, 'showTreePatch').name("Display Tree Patch");
        objFldr.add(this.scene, 'showHill').name("Display Hill");



        // // a folder for grouping parameters for one of the lights
        // var f0 = this.gui.addFolder('Light 0 ');
        // f0.add(this.scene.lights[0], 'enabled').name("Enabled");
        //
        // // a subfolder for grouping only the three coordinates of the light
        // var sf0 = f0.addFolder('Light 0 Position');
        // sf0.add(this.scene.lights[0].position, '0', -500.0, 500.0).name("X Position");
        // sf0.add(this.scene.lights[0].position, '1', -500.0, 500.0).name("Y Position");
        // sf0.add(this.scene.lights[0].position, '2', -500.0, 500.0).name("Z Position");
        //
        // // similar but for light 1
        // var f1 = this.gui.addFolder('Light 1 ');
        // f1.add(this.scene.lights[1], 'enabled').name("Enabled");
        // var sf1 = f1.addFolder('Light 1 Position');
        // sf1.add(this.scene.lights[1].position, '0', -500.0, 500.0).name("X Position");
        // sf1.add(this.scene.lights[1].position, '1', -500.0, 500.0).name("Y Position");
        // sf1.add(this.scene.lights[1].position, '2', -500.0, 500.0).name("Z Position");



        return true;
    }
}
