function debounce(func, timeout = 30000){
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(() => {
           func.apply(this,args); 
        }, timeout);
    }
}

function saveInput(){
    console.log('saving in db,,,,')
}

saveInput();