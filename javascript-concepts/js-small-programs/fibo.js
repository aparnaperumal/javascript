function fib(n){
    if(n <2){
        return n
    }else{
         return (fib(n-1)+fib(n-2));
    }
    
}

var x = 5;

// for(var i =0;i<x;i++){
//     console.log(fib(i));
// }


function fibN(n){
    if(n == 1){
        return 0;
    }
    if(n == 2){
        return 1;
    }
    var num1 = 0;
    var num2 = 1;
    var sum;
    var  i = 0;
    for (i=0;i<n;i++){
        sum = num1+num2;
        num1 = num2;
        num2 = sum;
    }
    return sum;
}

for(var i =1;i<15;i++){
    console.log(fibN(i));
}