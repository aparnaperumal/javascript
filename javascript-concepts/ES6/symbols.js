const id = Symbol()

const courseInfo = {
    title:"Javascript",
    topics:["strings","arrays","objects"],
    id:"js-course"
}

courseInfo[id] = 41212

console.log(courseInfo);

//Even though we have an id field if we add a symbol, there wont be naming conflict


// output
// {
//     title: 'Javascript',
//     topics: [ 'strings', 'arrays', 'objects' ],
//     id: 'js-course',
//     [Symbol()]: 41212
//   }