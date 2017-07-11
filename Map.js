//ES6
let m = new Map();
let s = Symbol();
m.set("hello", 42);
m.set(s, 34);
m.get(s) === 34;
m.size === 2;
for (let [ key, val ] of m.entries())
    console.log(key, val);


//ES5
var obj = {};
// no equivalent in ES5
obj["hello"] = 42;
// no equivalent in ES5
// no equivalent in ES5
Object.keys(obj).length === 2;
for (key in obj) {
    if (obj.hasOwnProperty(key)) {
        var val = obj[key];
        console.log(key + " = " + val);
    }
}