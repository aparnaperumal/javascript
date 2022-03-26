function closuresCheck(){
    var val1 = "init";
    console.log(val1);
    console.log(val2);// undefined
    {
        var val2 = "initagain";
        console.log(val1);
        console.log(val2);
    }
}

closuresCheck();

// Explanation of closure
function foo() {
	var b = 1;
	function inner() {
		return b;
	}
	return inner;
}
var get_func_inner = foo();		

console.log(get_func_inner());

var X = { geeks : 1};
var output = (function() {
	delete X.geeks;
	return X.geeks;
})();

console.log(output);

