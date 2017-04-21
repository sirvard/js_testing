exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  	listFiles: function(data, dirName) {
  		
  	},

  	permute: function(arr) {
	
	},

  	fibonacci: function(n) {
  		function fibonacci(n){
	  		if(n<=2){
	  			return 1;
			} else{
				result = fibonacci(n-1) + fibonacci(n-2) ;
			}
			return result;
		}
		return fibonacci(n);
 	},

  	validParentheses: function(n) {

  	}
};

