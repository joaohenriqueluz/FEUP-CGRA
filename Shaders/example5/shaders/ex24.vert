
attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;

uniform float normScale;

void main() {
	
	vTextureCoord = aTextureCoord;
	//vec3 offset=vec3(0.0,0.0,0.0);

	vec2 module = vTextureCoord + vec2(timeFactor*0.01, 0.0);

	module.x = mod(module.x,1.0);
	vec4 filter = texture2D(uSampler2,module);
	
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+aVertexNormal*0.1*filter.r, 1.0);
}

