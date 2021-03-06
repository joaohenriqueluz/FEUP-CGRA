/**
* MySceneObjects
* @constructor
*/
class MySceneObjects extends CGFobject {
	constructor(scene){
		super(scene);
        this.initMaterials();
    }

    initMaterials(){
        this.floorIsGrass = new CGFappearance(this.scene);
        this.floorIsGrass.setAmbient(1.0, 1.0, 1.0, 1);
        this.floorIsGrass.setDiffuse(0.1, 0.1, 0.1, 1);
        this.floorIsGrass.setSpecular(0.1, 0.1, 0.1, 1);
        this.floorIsGrass.setShininess(10.0);
        this.floorIsGrass.loadTexture('./textures/grass.jpg');
        this.floorIsGrass.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(day){
        //Display house
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.house.display();
        this.scene.popMatrix();

       //Display Tree Patches
        this.scene.pushMatrix();
        this.scene.translate(10,0,0);
        this.scene.scale(2,2,2);
        this.scene.treeGroupPatch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-17,0,0);
        this.scene.scale(2,2,2);
        this.scene.treeGroupPatch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(20,0,0);
        this.scene.scale(2,2,2);
        this.scene.treeGroupPatch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(20,0,10);
        this.scene.scale(2,2,2);
        this.scene.treeGroupPatch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(35,0,-25);
        this.scene.scale(2,2,2);
        this.scene.treeGroupPatch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(35,0,-25);
        this.scene.scale(2,2,2);
        this.scene.treeGroupPatch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(35,0,-13);
        this.scene.scale(2,2,2);
        this.scene.treeGroupPatch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(35,0,0);
        this.scene.scale(2,2,2);
        this.scene.treeGroupPatch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-46,0,-15);
        this.scene.scale(2,2,2);
        this.scene.treeGroupPatch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-31,0,-15);
        this.scene.scale(2,2,2);
        this.scene.treeGroupPatch.display();
        this.scene.popMatrix();


        //Display Tree Rows
        this.scene.pushMatrix();
        this.scene.translate(-25,0,20);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(10,0,25);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-20,0,-45);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,0,-45);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-20,0,-40);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,0,-40);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-20,0,-35);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,0,-35);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-20,0,-30);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,0,-30);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-20,0,-25);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,0,-25);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-20,0,-20);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,0,-20);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-20,0,-15);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,0,-15);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-20,0,-10);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,0,-10);
        this.scene.scale(2,2,2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        //Display Hills
        this.scene.pushMatrix();
        this.scene.translate(-50,0,-50);
        this.scene.hill15.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-50,0,0);
        this.scene.hill12.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(30,0,-50);
        this.scene.hill10.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-50,0,40);
        this.scene.hill5.display();
        this.scene.popMatrix();

				if (!day) {
					this.scene.pushMatrix();
					//this.scene.scale(0.2,0.5,0.2);
					this.scene.translate(0,0,6);
					this.scene.lantern.display();
					this.scene.popMatrix();
				}

        this.scene.cubeMapTex.apply();
        this.scene.cubeMap.display();

        this.scene.pushMatrix();
        this.floorIsGrass.apply();
        this.scene.translate(0,0.05,0);
        this.scene.scale(100,1,100);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.scene.grass.display();
        this.scene.popMatrix();


    }

}
