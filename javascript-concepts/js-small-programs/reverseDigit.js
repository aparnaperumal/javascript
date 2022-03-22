var num = 234;

//console.log(num.toString().split('').reverse().join(''));

var x = '';

while(num>0){
    x = x+(num%10);
    num = parseInt(num/10);
}

console.log(x);