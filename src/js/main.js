require(['config'], function() {

    'use strict';

    require(['text!root/data.json'], function(data) {
        data = JSON.parse(data);
        console.log(data);
    });

});