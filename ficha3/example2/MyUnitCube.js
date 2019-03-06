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
			0.5,-0.5, 0.5,	    //B 1 
			0.5,0.5, 0.5,    	//C 2
			-0.5, 0.5, 0.5, 	//D 3

			-0.5, -0.5, -0.5,	//E 4
			0.5,-0.5, -0.5,	    //F 5
			0.5,0.5, -0.5,    	//G 6
			-0.5, 0.5, -0.5 	//H 7

		];

		//Counter-clockwise reference of vertices
		this.indices = [
		//Face de cima
			0, 1, 2,
			2, 3, 0,
		//Face de baixo
			5,4,6,
			6,4,7,
		//Face semi-eixo positivo do x
			2,1,5,
			5,6,2,
		//Face semi-eixo negativo do x
			4,0,7,
			3,7,0,
		//Face semi-eixo positivo do y
			2,7,3,
			7,2,6,
		//Face semi-eixo negativo do y
			1,0,5,
			5,0,4
		

		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

