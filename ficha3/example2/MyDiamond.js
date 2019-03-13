/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0 0
			-1, 0, 0,	//0

			0, -1, 0,	//1 2
			0, -1, 0,	//1

			0, 1, 0,	//2 4
			0, 1, 0,	//2

			1, 0, 0,	//3 6
			1, 0, 0		//3
		];

		this.normals = [
			0,0,1,
			0,0,-1,

			0,0,1,
			0,0,-1,

			0,0,1,
			0,0,-1,

			0,0,1,
			0,0,-1
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 4,
			2, 6, 4
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

