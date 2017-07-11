var params = [ "hello", true, 7 ];
var other = [ 1, 2, ...params ]; // [ 1, 2, "hello", true, 7 ]
console.log(other);
var str = "foo";
var chars = [ ...str ]; // [ "f", "o", "o" ]
console.log(chars);