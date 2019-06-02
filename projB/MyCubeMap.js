/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
  constructor(scene) {
    super(scene);
    this.initBuffers();
  }
  initBuffers() {
    this.vertices = [
      //Face de tras
      -30, 0, 30,  	//A 0 0
      30, 0, 30,	    //B 1 1
      30, 60, 30,     	//C 2 2
      -30, 60, 30,   	//D 3 3
      //Face da frente
      30, 0, -30,	    //F 5 4
      -30, 0, -30,	//E 4 5
      30, 60, -30,    	//G 6 6
      -30, 60, -30, 	//H 7 7
      //Face da direita
      30, 60, 30,    	//C 2 8
      30, 0, 30,	    //B 1 9
      30, 0, -30,	    //F 5 10
      30, 60, -30,    	//G 6 11

      //Face da esq
      -30, 0, -30,	//E 4 12
      -30,0, 30,	//A 0 13
      -30, 60, -30, 	//H 7 14
      -30, 60, 30, 	//D 3 15

      //Face dcima
      30, 60, 30,    	//C 2 16
      -30, 60, -30, 	//H 7 17
      -30, 60, 30, 	//D 3 18
      30, 60, -30,    	//G 6 19

      //Face dbaixo
      30, 0, 30,	    //B 1 20
      -30,0, 30,	//A 0 21
      30, 0, -30,	    //F 5 22
      -30,0, -30,	//E 4 23


    ];

    this.normals = [


      0, 0, 1,
      0, 0, 1,
      0, 0, 1,
      0, 0, 1,

      0, 0, -1,
      0, 0, -1,
      0, 0, -1,
      0, 0, -1,

      1, 0, 0,
      1, 0, 0,
      1, 0, 0,
      1, 0, 0,

      -1, 0, 0,
      -1, 0, 0,
      -1, 0, 0,
      -1, 0, 0,

      0, 1, 0,
      0, 1, 0,
      0, 1, 0,
      0, 1, 0,

      0, -1, 0,
      0, -1, 0,
      0, -1, 0,
      0, -1, 0


    ];

    //Counter-clockwise reference of vertices
    this.indices = [
      //Face de cima
      1, 0, 2,
      3, 2, 0,
      //Face de baixo
      5, 4, 6,
      5, 6, 7,
      //Face semi-eixo positivo do x
      9, 8, 10,
      11, 10, 8,
      //Face semi-eixo negativo do x
      13, 12, 14,
      14, 15, 13,
      //Face semi-eixo positivo do y
      17, 16, 18,
      16, 17, 19,
      //Face semi-eixo negativo do y
      21, 20, 22,
      21, 22, 23

    ];

    this.texCoords = [
      //face de tras
      1, 2 / 3, //A
      0.75, 2 / 3, //B
      0.75, 1 / 3, //C
      1, 1 / 3, //D

      //Face de frente
      0.5, 2 / 3,//F
      0.25, 2 / 3, //E
      0.5, 1 / 3, //G
      0.25, 1 / 3, //H

      //Face da direita
      0.75, 1 / 3,
      0.75, 2 / 3,
      0.5, 2 / 3,
      0.5, 1 / 3,

      //Face da esq
      0.25, 2 / 3,
      0, 2 / 3,
      0.25, 1 / 3,
      0, 1 / 3,

      //Face de cima
      0.5, 0,
      0.25, 1 / 3,
      0.25, 0,
      0.5, 1 / 3,
      //Face de baixo
      0.5, 1,
      0.25, 1,
      0.5, 2 / 3,
      0.25, 2 / 3

    ];

    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();

  }

  updateBuffers(complexity) {
    this.initBuffers();
    this.initNormalVizBuffers();
  }
}

