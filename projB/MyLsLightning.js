/**
 * MyLsPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyLsLightning extends MyLSystem{
    constructor(scene){
        super(scene);

        this.axiom = "X";
        this.angle = 25.0;
        this.iterations = 3;
        this.scale = 0.5;

        this.initTime = 0;
        this.newTime = 0;
        this.deltaTime = 0;

        this.depth = 0;

        this.initGrammar();
    }

    initGrammar(){
       this.grammar = {
           "F": new MyRectQuad(this.scene),
           "X": new MyRectQuad(this.scene) };
       };

       startAnimation(t){
        this.axiom = "X";
        this.angle = 25.0;
        this.iterations = 3;
        this.scale = 0.5;

           this.initTime = t;
           this.depth = 0;
           //this.iterate();

           this.generate(
                this.axiom,
                {
                    "F": [ "FF" ],
                    "X": [ " F[-X][X]F[-X]+FX" ]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
       }

       update(t){
        
           this.deltaTime = t/1000 - this.time/1000;
           this.depth = this.deltaTime*this.axiom.length;

           console.log("Teme " + t/1000);
        console.log("Old time " + this.time/1000);
        console.log("Delta " + this.deltaTime);

           console.log(this.depth);

           if(this.deltaTime > 1)
           {
               this.depth = 0;
           }
       }

       display(){
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        var i;

        if(this.depth == 0){
            return;
        }

        // percorre a cadeia de caracteres
        for (i=0; i<this.axiom.length; ++i){

            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;

                case "\\":
                    this.scene.rotate(this.angle,1,0,0);
                    break;

                case "/":
                    this.scene.rotate(-this.angle,1,0,0);
                    break;

                case "^":
                    this.scene.rotate(this.angle,0,1,0);
                    break;

                case "&":
                    this.scene.rotate(-this.angle,0,1,0);
                    break;

                

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.axiom[i]];

                    if(i >= this.depth){
                        break;
                    }

                    if ( primitive )
                    {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }

   }