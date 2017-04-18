exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
    containsNumber: function(str) {
        var numbers = /\d/g;
        return numbers.test(str);
    },

    containsRepeatingLetter: function(str) {
        //console.log(str);
       
    },

    endsWithVowel: function(str) {

    },

    captureThreeNumbers: function(str) {

    },

    matchesPattern: function(str) {

    },

    isUSD: function(str) {

    }
};
