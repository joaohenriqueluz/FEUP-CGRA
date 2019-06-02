/**
 * MyLsPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyLsLightning extends MyLSystem {
    constructor(scene) {
        super(scene);
        this.rec = new MyRectQuad(this.scene);

        this.axiom = "X";
        this.angle = 25.0;
        this.iterations = 3;
        this.scale = 0.5;

        this.initTime = 0;
        this.depth = 0;

        this.initGrammar();
    }

    initGrammar() {
        this.grammar = {
            "F": this.rec,
            "X": this.rec
        };
    };

    startAnimation(t) {
        this.axiom = "X";
        this.angle = 25.0;
        this.iterations = 3;
        this.scale = 0.5;

        this.initTime = t / 1000;
        this.depth = 0;

        this.generate(
            this.axiom,
            {
                "F": ["FF"],
                "X": [ "F[-X][X]F[-X]+X", "F[-X][x]+X", "F[+X]-X", "F[/X][X]F[\\\\X]+X", "F[\\X][X]/X", "F[/X]\\X"]
            },
            this.angle,
            this.iterations,
            this.scale
        );
    }

    update(t) {
        this.deltaTime = t / 1000 - this.initTime;
        this.depth = this.deltaTime * this.axiom.length;

        console.log("Time " + (t / 1000));
        console.log("Delta " + this.deltaTime);
        console.log(this.depth);

        if (this.deltaTime > 1) {
            this.depth = 0;
        }
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        var i;

        if (this.depth == 0) {
            return;
        }

        // percorre a cadeia de caracteres
        for (i = 0; i < this.axiom.length; ++i) {

            // verifica se sao caracteres especiais
            switch (this.axiom[i]) {
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

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive = this.grammar[this.axiom[i]];

                    if (i >= this.depth) {
                        break;
                    }

                    if (primitive) {
                        console.log("Imprimi----------------------------");
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }

        this.scene.popMatrix();
    }
}