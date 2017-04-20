exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  	alterContext: function(fn, obj) {
        return fn.call(obj);
  	},

  	alterObjects: function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
  	},

  	iterate: function(obj) {
        //console.log(obj);
        var array = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                array.push(key+': ' +obj[key]);
            }
        }
        return array;
  	}
};
