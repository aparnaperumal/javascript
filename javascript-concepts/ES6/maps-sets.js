//In a map either objects or primitive values can be used as a key or an object

let course = new Map();
course.set("react",{description:'ui'});
course.set("jist",{description:'testing'});

course.get('react')

let details = new Map([
    [new Date(),"today"],
    [2,{javscript:["js","node","react"]}],
    ["items",[1,2]]
])

console.log(details)

//set should have unique