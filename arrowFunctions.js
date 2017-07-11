//ES6
function Person(){
  this.age = 0;
  setInterval(() => {
    console.log(this.age);
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();

//ES5
function Person1(){
  this.age = 0;
  var self = this;
  setInterval(function(){
    console.log(self.age);
    self.age++;
  }, 1000);
}

var p1 = new Person1();