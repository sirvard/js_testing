exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function(arr, item) {
        array_length = arr.length-1;

        for (var i = 0; i <= array_length; i++) {

            if (arr[i] == item) {
                return i;
            }
        }
        return -1;
    },

    sum: function(arr) {
        var sum = 0;
        var array_length = arr.length-1;

        for (var i = 0; i <= array_length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    remove: function(arr, item) {
        var array_length = arr.length-1;
        var new_array = [];
        for (var i = 0; i <= array_length; i++) {

            if (arr[i] !== item) {
                new_array.push(arr[i]);
                //console.log(new_array);
            }
        }
        return new_array;
    },

    removeWithoutCopy: function(arr, item) {
        var array_length = arr.length-1;

        for(var i = 0; i <= array_length; i++) {

            if (arr[i] == item) {
                arr.splice(i, 1);
                i--;
                array_length--;
            }
        }
        return arr;
    },

    append: function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function(arr) {
        var last_index = arr.length-1; 
        var last_item = arr[last_index];
        arr.splice(last_index,1);
        return arr;
    },

    prepend: function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail: function(arr) {
        arr.shift();
        return arr;
    },

    concat: function(arr1, arr2) {
        var merged_array = arr1.concat(arr2);
        return merged_array;
    },

    insert: function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count: function(arr, item) {
        var count = 0;
        var array_length = arr.length-1;
        for (var i = 0; i <= array_length; i++) {

            if (arr[i] == item) {
                count++
            }
        }
        return count;
    },

    duplicates: function(arr) {
        arr.sort();
        var array = [];
        var array_length = arr.length-1;
        for (var i = 0; i <= array_length; i++) {

            if(arr[i] == arr[i+1] && arr[i] !== arr[i+2]) {
                array.push(arr[i]);
            }
        }
        return array;
    },

    square: function(arr) {
        var square_array = [];
        var array_length = arr.length-1;
        for (var i = 0; i <= array_length; i++) {
            square_array.push(arr[i]*arr[i]);
        }
        return square_array;
    },

    findAllOccurrences: function(arr, target) {
        var array_length = arr.length-1;
        var occurrences = [];
        for (var i = 0; i <= array_length; i++) {
            if (arr[i] == target) {
                occurrences.push(i);
            }
        }
        return occurrences;
    }
};
