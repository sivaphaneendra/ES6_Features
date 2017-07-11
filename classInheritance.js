class Person {
   constructor(name) {
         this.name = name;
    }
    greet() {
      console.log("Hello I’m " + this.name);
    }
}

class Developer extends Person {
    constructor (name, language) {
        super(name);
        this.language = language;
    }
    greet() {
        super.greet();
        console.log("I like " + this.language);
    }
}

var dobj = new Developer("Siva", "JavaScript");
dobj.greet(); 
