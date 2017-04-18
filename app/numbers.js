exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  	valueAtBit: function(num, bit) {
        return 1 & (num >> (bit - 1));
  	},

  	base10: function(str) {
  		return parseInt(str, 2);	
  	},

  	convertToBinary: function(num) {
  		var binary = num.toString(2);
  		
  		while (binary.length < 8) {
  			binary = '0' + binary;
  		}
  		return binary;
 	},

 	multiply: function(a, b) { 		
        var result = ( a * 10 )*( b * 10 ) / 100;
     	return result;
  	}
};
