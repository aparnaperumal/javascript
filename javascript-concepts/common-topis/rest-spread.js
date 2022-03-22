function restOperator(a,b,...c){
    console.log(a,b,c);
}

// restOperator(1);
// restOperator(1,2,3,4,5);
// restOperator();

var arr1 = [1,2,3];
var arr2 = [4,5,6];

console.log(...arr1,...arr2);
console.log(Math.max(...arr1));