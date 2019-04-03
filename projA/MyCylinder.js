/**
* My
* @constructor
*/

class MyCylinder extends CGFobject {
  constructor(scene, slices) {
    super(scene);
    this.scene = scene;
    this.slices = slices;
    this.initBuffers();

  }

 initBuffers(){

    this.vertices = [];
    this.indices = [];
    this.normals = [];

    var ang = 0;
    var alphaAng = 2*Math.PI/this.slices;

    for(var i = 0; i <= this.slices; i++){
        // All vertices have to be declared for a given face
        // even if they are shared with others, as the normals
        // in each face will be different

        var sa=Math.sin(ang);
        var saa=Math.sin(ang+alphaAng);
        var ca=Math.cos(ang);
        var caa=Math.cos(ang+alphaAng);


        this.vertices.push(ca, 1, sa);
        this.vertices.push(ca, 0, sa);
        
        var normal= [
            ca,
            0,
            sa
        ];

        // push normal once for each vertex of this triangle
        this.normals.push(...normal);
        this.normals.push(...normal);
         ang += alphaAng;
  }


    for(var i = 0; i < this.slices; i++){
      this.indices.push((2*i+2),(2*i+1),(2*i));
      this.indices.push((2*i+1), (2*i+2), (2*i+3));
    }

    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
}

}

