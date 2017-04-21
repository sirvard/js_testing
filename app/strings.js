exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  	reduceString: function(str, amount) {
  		var re = new RegExp("(.)(?=\\1{" + amount + "})","g");
    	return str.replace(re, "");
        console.log(str,amount);
       
  	},

  	wordWrap: function(str, cols) {
        var formatedString = '',
        wordsArray = [];
        wordsArray = str.split(' ');
        formatedString = wordsArray[0];
        for (var i = 1; i < wordsArray.length; i++) {
            if (wordsArray[i].length > cols) {
                formatedString += '\n' + wordsArray[i];
            } else {
                if (formatedString.length + wordsArray[i].length > cols) {
                    formatedString += '\n' + wordsArray[i];
                } else {
                    formatedString += ' ' + wordsArray[i];
                }
            }
        }
        return formatedString;
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
