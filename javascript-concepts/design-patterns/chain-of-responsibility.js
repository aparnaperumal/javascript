var Request = function(amount){
    this.amount = amount;
    console.log("requested ",amount+"\n");
}

Request.prototype = {
    get: function (bill){
        var count = Math.floor(this.amount/bill);
        this.amount -= count * bill;
        console.log("Dispense" + count +'$ ' + bill+"bill");
        return this;
    }
}

function run(){
    var request = new Request(378);
    request.get(23).get(2342).get(23);
}

run();