const fs = require('fs');

const getFile = fileName => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err); // calling `reject` will cause the promise to fail with or without the error passed as an argument
        return; // and we don't want to go any further
      }
      resolve(data);
    });
  });
};

getFile('/etc/passwd')
  .then(data => console.log(data))
  .catch(err => console.error(err));

///////////////////////////////////////////////
const getSomething = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(()=> resolve('resolve this'), 3000);
    })
}

const doother = async() =>{
    console.log(await getSomething())
}

console.log('Before')
doother()
console.log('After')

/////////////////////////////////////////////////////////x