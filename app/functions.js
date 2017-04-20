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
        //console.log(str);
        var func = function(args){
            return str+', '+args;
        }
        return func;
    },

    makeClosures: function(arr, fn) {
        //console.log(arr);
        var variable = [];
        var closures = function(variable){
            return function(){
                return fn(variable);
            }
        }
        for (var i = 0; i<= arr.length-1; i++) {
            variable.push(closures(arr[i]));
        }
        return variable;
    },  

    partial: function(fn, str1, str2) {
        var partialFn = function(a){
            return fn(str1,str2,a);
        };
        return partialFn;
    },

    useArguments: function() {
        //console.log(arguments);
        var args = 0;
        for(var i = 0; i<= arguments.length-1; i++){
            args += arguments[i];
            
        }
        //console.log(args);
        return args;
    },

    callIt: function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return fn.apply(null,args);
    },

    partialUsingArguments: function(fn) {
        var parameters = Array.prototype.slice.call(arguments,1);
        //console.log(args);
        var partialFn = function(){
            var new_args = parameters.concat(Array.prototype.slice.call(arguments,0));
            //console.log(new_args);
            return fn.apply(null, new_args);
        }
        return partialFn;
    },

    curryIt: function(fn) {
        //console.log(fn)
        var curryFunc = function(x) {
            return function(y) {
                return function(z) {
                    return fn(x , y , z);
                };
            };
        };
        return curryFunc;
    }
};
