/**
* MyHouseFence
* @constructor
*/
class MyHouseColumn extends CGFobject {
	constructor(scene){
		super(scene);
        this.scene.columnPiece = new MyCylinder(scene,10);
	}
    
    display(){
        var ang = Math.PI/10;
        this.scene.pushMatrix();
        this.scene.scale(0.5,10,0.5);
        for(var i = 0; i < 50;  i++)
        {
            this.scene.rotate(ang, 0,1,0);
            this.scene.translate(1,0,0);
            this.scene.columnPiece.display();
        }
        this.scene.popMatrix();
    
    }





}



