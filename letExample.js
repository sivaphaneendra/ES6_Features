function foo() {
   let num = 1;
   //… too many statements
   if (true) {
      // different scope!
      let num = 2;
   }
   console.log(num); // 1
}

foo();