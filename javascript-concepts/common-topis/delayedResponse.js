function delayedName(delay) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("output")
        },delay)
    })
}

delayedName(10000).then(res=>{console.log(res)})