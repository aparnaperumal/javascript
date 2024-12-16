const delay = (seconds) => 
    new Promise((resolve)=>
        setTimeout(resolve,seconds * 1000)
    )

    delay(1).then(()=>console.log("second"));
    console.log("first")