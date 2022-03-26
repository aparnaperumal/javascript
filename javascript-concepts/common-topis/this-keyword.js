const Person = {

    "name": "",
    "age": "",
    "setName": (name) => {
        console.log(this);
        this.name = name;
    },
    "setAge": function (age) {
        console.log(this)
        this.age = age
    }
}
Person.setName("Rahul");
Person.setAge(23);
console.log(Person.name); // ""
console.log(Person.age); // 23