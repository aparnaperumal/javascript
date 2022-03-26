setTimeout(()=>{
    console.log('timeout')
},0);
process.nextTick(()=>console.log(4));
Promise.resolve(7).then((res)=>(console.log(res)));


function delay(data,delay){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(data)
        },delay)
    })
}

delay('34',3009).then((res)=>console.log(res));