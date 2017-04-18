exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  	reduceString: function(str, amount) {
  		/*var re = new RegExp("(.)(?=\\1{" + amount + "})","g");
    	return str.replace(re, "");*/
        console.log(str,amount);

  	},

  	wordWrap: function(str, cols) {
  		//console.log(str);

  	},

  	reverseString: function(str) {
        var str_length = str.length-1;
        var str1 = "";
        for (var i = str_length; i>=0; i--) {
            str1 += str[i];
        }
        return str1;
  	}
};
