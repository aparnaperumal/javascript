var val1 = 34;
var val2 = val1;

val1 = 56;

console.log(val1);
console.log(val2);

var obj1 = { 'name':'Rhea'};
var obj2 = obj1;
var obj3 = JSON.stringify(obj1);

obj1.name = 'Rohit';

console.log(obj1);
console.log(obj2);
console.log(obj3);

