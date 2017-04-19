exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
    containsNumber: function(str) {
        var numbers = /\d/g;
        return numbers.test(str);
    },

    containsRepeatingLetter: function(str) {
        //console.log(str);
        var hasDuplicates = (/([a-zA-Z]).*?\1/);
        return hasDuplicates.test(str);  
    },

    endsWithVowel: function(str) {
        var aeiou = /[aeiou]$/i;
        return aeiou.test(str);
    },

    captureThreeNumbers: function(str) {

    },

    matchesPattern: function(str) {

    },

    isUSD: function(str) {

    }
};
