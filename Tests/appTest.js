import {LFA, Camper, Human, Facilitator} from '../app.js';
import "mocha";
import chai from "chai";

const assert = chai.assert;

let tola = new Camper("Liadi Omotola", 2, 5);
let victoria = new Facilitator("Victoria");
let olawale = new LFA("Olawale Akinleye", ["tobi", "tola", "labake", "lanre", "thankgod"], 5);

describe("app", () =>{
    //test 1 (Polymorphism)
    it("hello", () =>{
        let hello = tola.sayHello();
        assert.equal(hello, "Hello, I am Liadi Omotola and I am a camper");
    });

    //test 2(Polymorphism)
    it("hello", () =>{
        let hello = victoria.sayHello();
        assert.equal(hello, "Hello, I am Victoria and I am a facilitator");
    });

    //test 3(Polymorphism)
    it("hello", () =>{
        let hello = olawale.sayHello();
        assert.equal(hello, "Hello, I am Olawale Akinleye and I am an LFA");
    });

    //test 4(Inheritance)
    it("what", () =>{
        let what = tola.whatAmI();
        assert.equal(what, "human");
    });

    //test 5(Abstraction)
    it("show power", () =>{
        let power = victoria.makeDecision("no sleep!");
        assert.equal(power, "By the power vested on me I pronounce this: no sleep!");
    });

    

});

   