class Human {
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log("Hello, I am " + this.name);
    }
}

class LFA extends Human{
    constructor(name, students, groupNumber){
        super(name);
        this.role = 'Learning Facilitator';
        this.students = students;
        this.groupNumber = groupNumber;
    }

    sayHello(){
        super.sayHello();
        console.log("and I'm a " + this.role);
    
    }

    motivateStudents(studentId){
        console.log(this.students[studentId - 1] + ', Keep up the good work');
    }


    reprove(studentId, feedback){
        console.log(this.students[studentId - 1] + ', Your passion so far is admirable, but pls work on  ' + feedback);
    }

}

class Facilitator extends Human{
    constructor(name){
        super(name);
        this.role = 'Facilitator';
    }

    sayHello(){
        super.sayHello();
        console.log("and I'm a " + this.role);
    
    }

    makeDecision(decision){
        console.log('By the power vested on me I pronounce this: \n' + decision);
    }

}

class Camper extends Human{
    constructor(name, student_id, groupNumber){
        super(name);
        this.student_id = student_id;
        this.groupNumber = groupNumber;
    }
     
    sayHello(){
        super.sayHello();
        console.log("I'm a camper")
    }

    myProfile(){
        console.log("I am presently in cycle 26");
    }
}
export {Camper, Facilitator, LFA, Human};