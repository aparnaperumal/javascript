//4 ways to create object in javascript
//1
const person = {
    firstName : 'Rhea',
    lastName:'Raj'
}

//2
const person1 = new Object();

function person2(fname,lname){
    this.firstName = fname,
    this.lastName = lname
}

const personOne = new Person('Ron','oswald');

//3
const orgObject = { company: 'ABC Corp' };
const employee = Object.create(orgObject, { name: { value: 'EmployeeOne' } });

//4

const org1Object = { company: 'ABC Corp' }
const carObject = { carName: 'Ford' }
const employee1 = Object.assign({}, org1Object, carObject);