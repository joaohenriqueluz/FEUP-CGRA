/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
		//Face de Cima
			-0.5, -0.5, 0.5,	//A 0 0
			0.5,-0.5, 0.5,	    //B 1 1
			0.5,0.5, 0.5,    	//C 2 2
			-0.5, 0.5, 0.5, 	//D 3 3
		//Face de baixo
			0.5,-0.5, -0.5,	    //F 5 4
			-0.5, -0.5, -0.5,	//E 4 5
			0.5,0.5, -0.5,    	//G 6 6
			-0.5, 0.5, -0.5, 	//H 7 7
			 
		//Face do semi eixo positivo do x
			0.5,0.5, 0.5,    	//C 2 8
			0.5,-0.5, 0.5,	    //B 1 9
			0.5,-0.5, -0.5,	    //F 5 10
			0.5,0.5, -0.5,    	//G 6 11

		//Face do semi eixo negativo do x
			-0.5, -0.5, -0.5,	//E 4 12
			-0.5, -0.5, 0.5,	//A 0 13
			-0.5, 0.5, -0.5, 	//H 7 14
			-0.5, 0.5, 0.5, 	//D 3 15
		
		//Face do semi eixo positivo do y
			0.5,0.5, 0.5,    	//C 2 16
			-0.5, 0.5, -0.5, 	//H 7 17
			-0.5, 0.5, 0.5, 	//D 3 18
			0.5,0.5, -0.5,    	//G 6 19

		//Face do semi eixo negativo do	y
			0.5,-0.5, 0.5,	    //B 1 20
			-0.5, -0.5, 0.5,	//A 0 21
			0.5,-0.5, -0.5,	    //F 5 22
			-0.5, -0.5, -0.5,	//E 4 23


		];

		this.normals = [
		
		
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,
			
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1,

			1,0,0,
			1,0,0,
			1,0,0,
			1,0,0,

			-1,0,0,
			-1,0,0,
			-1,0,0,
			-1,0,0,

			0,1,0,
			0,1,0,
			0,1,0,
			0,1,0,

			
			0,-1,0,
			0,-1,0,
			0,-1,0,
			0,-1,0

		
		];

		//Counter-clockwise reference of vertices
		this.indices = [
		//Face de cima
			0, 1, 2,
			2, 3, 0,
		//Face de baixo
			4,5,6,
			6,5,7,
		//Face semi-eixo positivo do x
			8,9,10,
			10,11,8,
		//Face semi-eixo negativo do x
			12,13,14,
			15,14,13,
		//Face semi-eixo positivo do y
			16,17,18,
			17,16,19,
		//Face semi-eixo negativo do y
			20,21,22,
			22,21,23
		

		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();

	}

	updateBuffers(complexity){
        	//this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        	// reinitialize buffers
        	this.initBuffers();
        	this.initNormalVizBuffers();
    }
}

