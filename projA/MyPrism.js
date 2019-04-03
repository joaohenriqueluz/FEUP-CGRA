/**
* MyPrism
* @constructor
*/

class MyPrism extends CGFobject {
  constructor(scene, slices, stacks) {
    super(scene);
    this.scene = scene;
    this.slices = slices;
    this.stacks = stacks;
    this.initBuffers();

  }

  initBuffers(){

    this.vertices = [];
    this.indices = [];
    this.normals = [];

    var ang = 0;
    var alphaAng = 2*Math.PI/this.slices;

    for(var i = 0; i < this.slices; i++, ang += alphaAng){
        // All vertices have to be declared for a given face
        // even if they are shared with others, as the normals
        // in each face will be different

        var sa=Math.sin(ang);
        var saa=Math.sin(ang+alphaAng);
        var ca=Math.cos(ang);
        var caa=Math.cos(ang+alphaAng);


        var saa2=Math.sin(ang+alphaAng/2);
        var caa2=Math.cos(ang+alphaAng/2);



        this.vertices.push(ca, 1, sa);
        this.vertices.push(caa, 1, saa);
        this.vertices.push(caa, 0, saa);
        this.vertices.push(ca, 0, sa);

        var normal= [
            caa2,
            0,
            saa2
        ];

        // push normal once for each vertex of this triangle
        this.normals.push(...normal);
        this.normals.push(...normal);
        this.normals.push(...normal);
        this.normals.push(...normal);

        this.indices.push((4*i),(4*i+1),(4*i+2),
                        (4*i), (4*i+2), (4*i+3))

  }

  this.primitiveType = this.scene.gl.TRIANGLES;
  this.initGLBuffers();
}

}
