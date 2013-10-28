define(function() {

    'use strict';

    return {

        // http://stackoverflow.com/questions/3561275/using-jquery-how-would-i-find-the-closest-match-in-an-array-to-a-specified-num/3561328#3561328
        findClosest: function(arr, value) {

            var closest = null;

            for(var i = 0, len = arr.length; i < len; i++) {
                
                if(closest === null || Math.abs(arr[i] - value) < Math.abs(closest - value)) {
                    console.log(value);
                    console.log(closest);
                    closest = arr[i];
                }

            }

            return closest;

        }

    };
    
});