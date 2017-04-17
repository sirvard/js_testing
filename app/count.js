exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  	count: function (start, end) {
	    var time;
	    function count () {
	    	console.log(start++); 

		    if (start <= end) {
		        time = setTimeout(count, 100);
		    }
	    }
	    count();
	    return {
	      	cancel: function () {
	        	clearTimeout(time);
	      	}
	    };
	}

};
