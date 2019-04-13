/**
* MyHouseFence
* @constructor
*/
class MyHouseFence extends CGFobject {
	constructor(scene,n){
		super(scene);
        this.scene.columnPiece = new MyCylinder(scene,10);
        this.n = n;
	}
    
    display(){
        this.scene.pushMatrix();
        this.scene.scale(0.25,5,0.25);
        for(var i = 0; i < this.n;  i++)
        {
            this.scene.translate(1,0,0);
            this.scene.columnPiece.display();
        }
        this.scene.popMatrix();

        /*
        if(this.scene.displayNormals)
            this.scene.columnPiece.enableNormalViz();
        else
            this.scene.columnPiece.disableNormalViz();
        */  
    
    }





}



