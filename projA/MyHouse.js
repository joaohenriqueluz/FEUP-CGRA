/**
* MyHouse
* @constructor
*/
class MyHouse extends CGFobject {
	constructor(scene){
		super(scene);
       // this.scene.base = new MyHouseBase(scene);
        this.scene.mainHouse = new MyUnitCubeQuad(scene);
        this.scene.column = new MyPrism(scene,5);
        this.scene.fence = new MyHouseFence(scene,80);
        this.scene.roof = new MyPyramid(scene,4);

        this.initMaterials();

	}
    
    initMaterials(){
    this.upMaterial = new CGFappearance(this.scene);
    this.upMaterial.setAmbient(0.1, 0.1, 0.1, 1);
    this.upMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
    this.upMaterial.setSpecular(0.1, 0.1, 0.1, 1);
    this.upMaterial.setShininess(10.0);
    this.upMaterial.loadTexture('./mineTop.png');
    this.upMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }


    display(){
    //this.upMaterial.apply();
    this.scene.pushMatrix();
    this.scene.scale(10,5,10);
    this.scene.mainHouse.display();
    this.scene.rotate(Math.PI/4, 0,1,0);
    this.scene.translate(0,0.5,0);
    this.scene.roof.display();
    this.scene.popMatrix();
    this.scene.pushMatrix();
    this.scene.translate(6,-2.5,6);
    this.scene.scale(0.5,5,0.5);
    this.scene.column.display();
    this.scene.translate(-24,0,0);
    this.scene.column.display();
    this.scene.translate(0,0,-24);
    this.scene.column.display();
    this.scene.translate(24,0,0);
    this.scene.column.display();
    this.scene.popMatrix();

    //right side
    this.scene.pushMatrix();
    this.scene.translate(-10,-2.5,10);
    this.scene.rotate(Math.PI/2,0,1,0);
    this.scene.fence.display();
    this.scene.popMatrix();

    //left side
    this.scene.pushMatrix();
    this.scene.translate(10,-2.5,-10);
    this.scene.rotate(-Math.PI/2,0,1,0);
    this.scene.fence.display();
    this.scene.popMatrix();

    //Back
    this.scene.pushMatrix();
    this.scene.translate(-10,-2.5,-10);
    this.scene.fence.display();
    this.scene.popMatrix();



    }

}