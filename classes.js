class Person {
   constructor(name) {
         this.name = name;
    }
    greet() {
      console.log("Hello I’m" + this.name);
    }
}
var pobj = Person("Siva"); // Error : Class constructor Person cannot be invoked without 'new'
//var pobj = new Person("Siva"); 
pobj.greet(); // “Hello I’m Siva”
