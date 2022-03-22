const a = 2;
//a = 3;//assignment to constant variable;

const arr = [3,2,3,1,2];
arr[0] = 6;

console.log(arr);
Object.freeze(arr);
a[0]=3;
console.log(arr);