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
        this.wallTex = new CGFappearance(this.scene);
        this.wallTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.wallTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.wallTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.wallTex.setShininess(10.0);
        this.wallTex.loadTexture('./textures/wall.jpg');
        this.wallTex.setTextureWrap('REPEAT', 'REPEAT');

        this.fenceTex = new CGFappearance(this.scene);
        this.fenceTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.fenceTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.fenceTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.fenceTex.setShininess(10.0);
        this.fenceTex.loadTexture('./textures/fence.jpg');
        this.fenceTex.setTextureWrap('REPEAT', 'REPEAT');

        this.roofTex = new CGFappearance(this.scene);
        this.roofTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.roofTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.roofTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.roofTex.setShininess(10.0);
        this.roofTex.loadTexture('./textures/roof.PNG');
        this.roofTex.setTextureWrap('REPEAT', 'REPEAT');


        this.columnTex = new CGFappearance(this.scene);
        this.columnTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.columnTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.columnTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.columnTex.setShininess(10.0);
        this.columnTex.loadTexture('./textures/marble.jpg');
        this.columnTex.setTextureWrap('REPEAT', 'REPEAT');

       

    }


    display(){
        
    this.scene.pushMatrix();
    this.scene.translate(0,2.5,0);
    this.wallTex.apply();
    this.scene.pushMatrix();
    this.scene.scale(10,5,10);
    this.scene.mainHouse.display();

    this.roofTex.apply();
    this.scene.rotate(Math.PI/4, 0,1,0);
    this.scene.translate(0,0.5,0);
    this.scene.roof.display();
    this.scene.popMatrix();

    this.columnTex.apply();
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
    this.fenceTex.apply();
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
    this.scene.popMatrix();

    /*if(this.scene.displayNormals){
        this.scene.column.enableNormalViz();
        this.scene.mainHouse.enableNormalViz();
        this.scene.roof.enableNormalViz();
    }
        
    else{
        this.scene.column.disableNormalViz();
        this.scene.mainHouse.disableNormalViz();
        this.scene.roof.disableNormalViz();
    }*/


    }

}