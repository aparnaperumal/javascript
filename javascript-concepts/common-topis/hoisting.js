//console.log(a);
//a is not defined, there is difference between not defined and undefined

console.log(b); // undefined
//console.log(c); // cannot access c before initialization
var b = 10;
let c = 20;

const conVal = 'EZA';

{
    //conVal = "EEE";//assignment to a constant variable error
    const conVal = "EEE";// no error
    let c = 50;
    var b = 20;
}

console.log(b); //20 overriding of global value
console.log(c); // 20
