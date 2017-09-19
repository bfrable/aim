(function($) {

    'use strict';

    var init = function() {
        
        if ($('.js-trigger-scroll-event').length) {
            console.log('true');
            var waypoint = new Waypoint({
                element: document.getElementById('js-trigger-scroll-event'),
                handler: function() {
                  $('.featured-image').toggleClass('animated fadeInRight');
                },
                offset: '100%'
            });
        }

        if ($('clients-list').length) {
            $('.clients-list').slick({
                dots: true
            });    
        }

        if ($('.js-testimonial-carousel').length) {
            $('.js-testimonial-carousel').slick({
                dots: true
            });    
        }

        var loadMoreClients = function() {
            var listEl = $('.js-client-list li');
            var listSize = listEl.size();
            
            var x = 8;

            listEl.hide();
            
            $('.js-client-list li:lt('+x+')').show();
            
            $('.js-load-more-clients').click(function (e) {
                x = (x + 4 <= listSize) ? x + 4 : listSize;
                $('.js-client-list li:lt('+x+')').show();
                e.preventDefault();
            });
        };

        loadMoreClients();

        $('#hamburger').click(function(){
            $(this).toggleClass('active');
        });

        $(".mast-head").sticky({
            topSpacing: 0
        });
    };

    init();
}(jQuery));
