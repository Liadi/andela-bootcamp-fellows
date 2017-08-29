import Facilitator from '../app.js';
import LFA from '../app.js';
import Camper from '../app.js';
import Human from '../app.js';
import "mocha";
import chai from "chai";

const assert = chai.assert;
//console.log(aritGeo([1,2,3]));

let tola = new Camper("Liadi Omotola", 2, 5);
let victoria = new Facilitator("Victoria");
let olawale = new LFA("Olawale Akinleye", [tobi, tola, labake, lanre, thankgod], 5);

describe("app", () =>{
    //test 1
    it("1", () =>{
        let hello = tola.sayHello();
        assert.equal(hello, "Hello, I am Liadi Omotola");
    });

});

    // tola.sayHello();
    // tola.myProfile();
    // console.log();
    // ciroma.sayHello();
    // ciroma.myProfile();
    // console.log();
    // victoria.sayHello();
    // victoria.makeDecision("No one will become a fellow, go home!");
    // console.log();
    // olawale.motivateStudents(2);
    // olawale.reprove(2, "your attitude");