var list = [ 1, 2, 3 ];
var [ a, , b ] = list;
console.log([a,b]);
[ b, a ] = [ a, b ];   // Swapping
console.log([b,a]);
console.log([a,b]);


var obj = { a: 1 };
var { a, b = 2 } = obj;
console.log({a,b});