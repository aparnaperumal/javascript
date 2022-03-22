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