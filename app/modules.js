exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  	createModule: function(str1, str2) {
  		
        /*return {
            var  sayIt = function(greeting,name) {
                return this.greeting+', '+this.name;
            },
            sayIt(greeting,name);
        }*/
       
        return {
            sayIt: function() {
                return this.greeting+', '+ this.name;
            },
            greeting: str1,
            name: str2
        }
  	}
};
