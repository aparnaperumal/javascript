var arr = [4,5,6,7,4,5,6,7];

//console.log(arr.sort());
// [
//     4, 4, 5, 5,
//     6, 6, 7, 7
//   ]
//console.log(arr.toString());//4,5,6,7,4,5,6,7
//console.log(arr.join());//4,5,6,7,4,5,6,7
//console.log(arr.copyWithin(-2));//(target,start,end)
// [
//     4, 5, 6, 7,
//     4, 5, 4, 5
//   ]
// console.log(arr.copyWithin(2,4,5));
// [
//     4, 5, 4, 7,
//     4, 5, 4, 5
//   ]
//console.log(arr.shift(1),arr);
//console.log(arr.unshift(1),arr);
//console.log(arr.splice(2,0,'3','7'),arr);//adds 3 and 2 in 2 index and removes 0 element
//console.log(arr.slice(2,4),arr);//doesnt change original array

//console.log(arr.map((x)=>x*2));

//console.log(arr.filter((x)=>x<5),arr);

// console.log(arr.reduce((arr,curr)=>{
//  if(arr[curr]){
//     arr[curr] = arr[curr]+1;
//  }else{
//     arr[curr] = 1;
//  }
//  return arr;
// },{}));

// console.log(arr.reduce((arr,curr)=>arr+curr))
// console.log(arr.indexOf(4))
// console.log(arr.lastIndexOf(4))
// console.log(Array.from("asdfasdfsa"));

//remove dups
// console.log(new Set(arr));

console.log(arr.pop())
