var collection = [];
module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('pi', function() {
            return 5;
        });
        functions.add('foo', function() {
            return "foo";
        });
        functions.add('bar', function() {
            return "bar";
        });
        functions.add('store', function(val) {
            collection.push(val);
            return false;
        });
        functions.add('retrieve', function(val) {
            return new tree.Value(collection);
        });
    }
};
// registerPlugin(module.exports);
