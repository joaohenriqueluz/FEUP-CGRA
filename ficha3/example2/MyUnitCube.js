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
			-0.5, -0.5, 0.5,	//A 0
			-0.5, -0.5, 0.5,	//A 0
			-0.5, -0.5, 0.5,	//A 0

			0.5,-0.5, 0.5,	    //B 1 
			0.5,-0.5, 0.5,	    //B 1 
			0.5,-0.5, 0.5,	    //B 1
			 
			0.5,0.5, 0.5,    	//C 2
			0.5,0.5, 0.5,    	//C 2
			0.5,0.5, 0.5,    	//C 2

			-0.5, 0.5, 0.5, 	//D 3
			-0.5, 0.5, 0.5, 	//D 3
			-0.5, 0.5, 0.5, 	//D 3

			-0.5, -0.5, -0.5,	//E 4
			-0.5, -0.5, -0.5,	//E 4
			-0.5, -0.5, -0.5,	//E 4

			0.5,-0.5, -0.5,	    //F 5
			0.5,-0.5, -0.5,	    //F 5
			0.5,-0.5, -0.5,	    //F 5

			0.5,0.5, -0.5,    	//G 6
			0.5,0.5, -0.5,    	//G 6
			0.5,0.5, -0.5,    	//G 6

			-0.5, 0.5, -0.5, 	//H 7
			-0.5, 0.5, -0.5, 	//H 7
			-0.5, 0.5, -0.5 	//H 7

		];

		this.normals = [
			-1,0,0,
			0,-1,0,
			0,0,1,

			1,0,0,
			0,-1,0,
			0,0,1,

			1,0,0,
			0,1,0,
			0,0,1,

			-1,0,0,
			0,1,0,
			0,0,1,

			-1,0,0,
			0,-1,0,
			0,0,-1,

			1,0,0,
			0,-1,0,
			0,0,-1,

			1,0,0,
			0,1,0,
			0,0,-1,

			-1,0,0,
			0,1,0,
			0,0,-1
		];

		//Counter-clockwise reference of vertices
		this.indices = [
		//Face de cima
			0, 3, 6,
			6, 9, 0,
		//Face de baixo
			15,12,18,
			18,12,21,
		//Face semi-eixo positivo do x
			6,3,15,
			15,18,6,
		//Face semi-eixo negativo do x
			12,0,21,
			9,21,0,
		//Face semi-eixo positivo do y
			6,21,9,
			21,6,18,
		//Face semi-eixo negativo do y
			3,0,15,
			15,0,12
		

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

