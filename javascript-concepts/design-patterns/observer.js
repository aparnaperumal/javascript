//this is the basis of subscribe - publish model
//click - subject clickhandler - subscribing observer 
function Click(){
    this.handlers = [];
}

Click.prototype = {
    subscribe: function(fn){
        this.handlers.push(fn);
    },
    unsubscribe: function(fn){
        this.handlers = this.handlers.filter(
            function(item){
                if (item !== fn){
                    return item;
                }
            }
        )
    },
    fire: function(o,thisObj){
        var scope = thisObj ;
        this.handlers.forEach(function(item){
            item.call(scope,o);
        });
    }
}

function run(){
    var clickhandler = function (item){
        console.log("fired"+item);
    };

    var click  = new Click();
    click.subscribe(clickhandler);
    click.fire('event 1');
    click.unsubscribe(clickhandler);
    click.fire('event 2');
    click.subscribe(clickhandler);
    click.fire('event 3');
}

run();