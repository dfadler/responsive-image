require(['config'], function() {

    'use strict';

    require([
        'polyfill/add-event-listener',
        'polyfill/map',
        'polyfill/filter',
        'polyfill/console-log'
        ], function() {

        require([
            'text!root/data.json',
            'helpers/sort',
            'helpers/array'
        ], function(data, sort, arrayUtils) {
            
            data = JSON.parse(data);

            var img = document.getElementById('image-12345'),
                windowWidth,
                widths,
                closest,
                imageData;

            function getSortedWidths() {
                
                var widths = data.map(function(dataSegment) {
                        return dataSegment.width;
                    });

                return widths.sort(sort.numericallyAscending);

            }

            function setImageSrc(e) {
                
                windowWidth = window.outerWidth || document.body.clientWidth;

                widths = getSortedWidths();
                
                closest = arrayUtils.findClosest(widths, windowWidth);

                imageData = data.filter(function(dataSegment) {
                    if(dataSegment.width === closest) {
                        return dataSegment;
                    }
                })[0];

                if(img.src !== imageData.url) {
                    img.src = imageData.url;
                }

            }

            window.addEventListener('resize', setImageSrc, false);

        });


    });

});