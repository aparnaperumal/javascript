let obj1 = {
    firstName : 'Rhea',
    lastName : 'Pillai',
    getName:function(){
        return this.firstName + this.lastName;
    }
}

let others = function(snack, hobby){
    console.log(this.getName() + snack + hobby);
}

others.call(obj1,'choco','biscuits');
others.apply(obj1,['choco','biscuits']);

let copyOthers = others.bind(obj1);

copyOthers('tea','coffee');