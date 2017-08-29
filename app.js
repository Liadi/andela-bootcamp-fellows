export class Human {
    constructor(name){
        this.name = name;
    }
    sayHello(){
        return "Hello, I am " + this.name;
    }
    whatAmI(){
        return "human";
    }

}

export class LFA extends Human{
    constructor(name, students, groupNumber){
        super(name);
        this.role = "LFA";
        this.students = students;
        this.groupNumber = groupNumber;
    }

    sayHello(){
        return super.sayHello() + " and I am an " + this.role;
    
    }

    motivateStudents(studentId){
        return this.students[studentId - 1] + ", Keep up the good work";
    }


    reprove(studentId, feedback){
        return this.students[studentId - 1] + ", Your passion so far is admirable, but pls work on  " + feedback;
    }

}

export class Facilitator extends Human{
    constructor(name){
        super(name);
        this.role = "facilitator";
    }

    sayHello(){
        return super.sayHello() + " and I am a " + this.role;
    
    }

    makeDecision(decision){
        return "By the power vested on me I pronounce this: " + decision;
    }

}

export class Camper extends Human{
    constructor(name, student_id, groupNumber){
        super(name);
        this.student_id = student_id;
        this.groupNumber = groupNumber;
    }
     
    sayHello(){
        return super.sayHello() + " and I am a camper";
    }

    myProfile(){
        return "I am presently in cycle 26";
    }
}
