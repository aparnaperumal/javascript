let person = {
    first: "Angie",
    hobbies: ["bike","hike","ski"],
    printHobbies: function(){
        let _this = this;
        this.hobbies.forEach(function(hobby){
            let string = `${_this.first} likes to ${hobby}`;
            console.log(string);
        })
    }
}

person.printHobbies();


let anotherPerson = {
    first: "Rockie",
    hobbies: ["bike","hike","ski"],
    printHobbies: function(){
        this.hobbies.forEach((hobby)=>{
            let string = `${this.first} likes to ${hobby}`;
            console.log(string);
        })
    }
}

anotherPerson.printHobbies();