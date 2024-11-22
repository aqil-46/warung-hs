
(function ($) {
    $.fakeLoader = function(options) {

        var settings = $.extend({
            targetClass:'fakeLoader',
            timeToHide:4500,               
            bgColor: '#2ecc71', 
            spinner:'spinner5'
        }, options);

        
        var spinner05 = '<div class="fl fl-spinner spinner5"><div class="cube1"></div><div class="cube2"></div></div>'; 
        
        var el = $('body').find('.' + settings.targetClass);

        el.each(function() {
            var a = settings.spinner;
            
                switch (a) {
                    case 'spinner5':
                            el.html(spinner05);
                    }
        });

        el.css({
            'backgroundColor':settings.bgColor
        });

        setTimeout(function () {
            $(el).fadeOut();
        }, settings.timeToHide);
    }; 
}(jQuery));




