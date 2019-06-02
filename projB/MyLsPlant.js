/**
 * MyLsPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyLsPlant extends MyLSystem {
    constructor(scene) {
        super(scene);

        this.axiom = "X";
        this.angle = 30.0;
        this.iterations = 4;
        this.scale = 0.5;

        this.initGrammar();
        this.init();
    }

    initGrammar() {
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene)
        };
    };

    init() {
        this.axiom = "X";
        this.angle = 30.0;
        this.iterations = 4;
        this.scale = 0.5;

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
}