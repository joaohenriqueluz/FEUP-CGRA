/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
	constructor(scene,bool) {
		super(scene);
		this.bool = bool;
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0

			1, 0, 0,	//1

			0, 1, 0,	//2
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
				0,0.5,
				0.25,0.25
			]
		} else {
			this.texCoords = [
				0.25,0.75,
				0.75,0.75,
				0.5,0.5
			]
		}
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
