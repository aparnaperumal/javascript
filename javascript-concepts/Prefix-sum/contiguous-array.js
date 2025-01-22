const input = [0,1];
const indexMap = new Map();

let sum = 0;
let longestArray = 0;

for(let i=0;i<input.length;i++){
    let value = input[i]==1?1:-1
    sum += value;
    if(sum ==0){
        longestArray < i ? longestArray = i:null
    }else if(indexMap.get(sum) != undefined){
        const len = i - indexMap.get(sum) 
        longestArray < len ? longestArray = len:null 
    }else{
        indexMap.set(sum,i)
    }
}

if(input.length == 2 && sum == 0){
    longestArray = 2;
}

console.log(sum,longestArray);
