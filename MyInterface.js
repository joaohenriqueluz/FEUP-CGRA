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
        this.gui.add(this.scene, 'texEn').name("Texture (enable)");
        this.gui.add(this.scene, 'scaleFactor', 0.1, 1.0).name('Scale');
        this.gui.add(this.scene, 'campFireLight').name("Camp fire").onChange(this.scene.updateLights.bind(this.scene));;
        this.gui.add(this.scene, 'timeOfDay', this.scene.timeOfDayOptions).name('Time').onChange(this.scene.updateLights.bind(this.scene));
        this.gui.add(this.scene, 'selectedObject', this.scene.objectIDs).name('Selected Object');





        return true;
    }
}
