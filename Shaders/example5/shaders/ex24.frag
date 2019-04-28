#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float timeFactor;

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord+vec2(timeFactor*.01,0.0));
	vec2 module = vTextureCoord + vec2(timeFactor*0.01, 0.0);
	module.x = mod(module.x,1.0);
	vec4 filter = texture2D(uSampler2, vec2(0.0,0.1)+module);

	if (filter.b > 0.5)
		color.r -=0.05;
		color.g -=0.05;
		color.b -=0.05;
	
	gl_FragColor = color;
}
