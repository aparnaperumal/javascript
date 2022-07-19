// Singletons when only one instance is needed.

var singleton = (function() {
    var instance;
    function createInstance(){
        var object = new Object('Instance');
        return object;
    }
    return {
        getInstance:function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

function run() {
    var instance1 = singleton.getInstance();
    var instance2 = singleton.getInstance();
    console.log(instance1 === instance2);
}
run();