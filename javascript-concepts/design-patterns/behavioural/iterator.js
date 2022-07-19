// The Iterator design pattern solves this problem by separating the collection 
// of objects from the traversal of these objects by implementing a specialized iterator.
var Iterator = function (items) {
    this.index = 0;
    this.items = items;
}

Iterator.prototype = {
    first: function () {
        this.reset();
        return this.next();
    },
    next: function () {
        return this.items[this.index++];
    },
    hasNext: function () {
        return this.index <= this.items.length;
    },
    reset: function () {
        this.index = 0;
    },
    each: function (callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
}

function run() {

    var items = ["one", 2, "circle", true, "Applepie"];
    var iter = new Iterator(items);

    // using for loop

    for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
        console.log(item);
    }
    console.log("");

    // using Iterator's each method

    iter.each(function (item) {
        console.log(item);
    });
}
