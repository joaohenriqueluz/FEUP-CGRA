/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene, bool) {
		super(scene);
		this.bool = bool;
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-2, 0, 0,	//0

			2, 0, 0,	//1

			0, 2, 0,	//2
		];

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2
		];

		if (this.bool) {
			this.texCoords = [
				0,0,
				1,0,
				0.5,0.5
			]
		} else {
			this.texCoords = [
				1,1,
				1,0,
				0.5,0.5
			]
		}

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
