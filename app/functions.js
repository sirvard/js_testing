exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
    argsAsArray: function(fn, arr) {
        //console.log(fn.apply(this, arr))
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
        var args = Array.prototype.slice.call(arguments, 1);
        return fn.apply(null,args);
    },

    partialUsingArguments: function(fn) {
        var args = Array.prototype.slice.call(arguments,1);
        //console.log(args);
        var partialFn = function(){
            var new_args = args.concat(Array.prototype.slice.call(arguments));
            //console.log(new_args);
            return fn.apply(null, new_args);
        }
        return partialFn;
    },

    curryIt: function(fn) {
        
    }
};
