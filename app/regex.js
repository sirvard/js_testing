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
        var pattern = /\d{3}/g;
        var matches = str.match(pattern);
        //console.log(matches);
        if(matches !== null) {
            return matches[0];
        }else{
            return false;
        }

    },

    matchesPattern: function(str) {
        var pattern = /^\d{3}\-\d{3}\-\d{4}$/g;
        match = pattern.test(str);
        //console.log(str);
        //console.log(match);       
        return match;
    },

    isUSD: function(str) {
        
    }
};
