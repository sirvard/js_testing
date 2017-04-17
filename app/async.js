exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
	async: function(value) {
		var promise = new Promise(function(resolve){
        setTimeout(function(){
            	resolve(value);
        	},1000);
      	});
      	return promise;
  	},

  	manipulateRemoteData: function(url) {
        
    }
};
