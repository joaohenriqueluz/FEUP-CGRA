/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 */

 class MyLeaf extends CGFobject{
    constructor(scene) {
        super(scene);
        this.scene = scene;
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, -1, 0,	//0
			-1, -1, 0,	//0

			1, -1, 0,	//1
			1, -1, 0,	//1

			-1, 1, 0,	//2
			-1, 1, 0	//2
		];

		this.normals = [
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
            5, 3, 1
            
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }

    display(){
        // this.material1 = new CGFappearance(this);
        // this.material1.setAmbient(0, 1, 0, 1.0);
        // this.material1.setDiffuse(0, 1, 0, 1.0);
        // this.material1.setSpecular(0, 0, 0, 1.0);
        // this.material1.setShininess(10.0);

        // this.scene.material1.apply();
    }
 }