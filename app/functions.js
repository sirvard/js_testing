exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
    argsAsArray: function(fn, arr) {
        return  fn.apply(this, arr);
    },

    speak: function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction: function(str) {

        
    },

    makeClosures: function(arr, fn) {

    },

    partial: function(fn, str1, str2) {
        var partialFn = function(a){
            return fn(str1,str2,a);
        };
        return partialFn;
    },

    useArguments: function() {

    },

    callIt: function(fn) {

    },

    partialUsingArguments: function(fn) {
        
    },

    curryIt: function(fn) {
        
    }
};
