(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".case-studies-carousel").owlCarousel({
            items: 3,
            margin: 30,
            loops: true,
            dots: true,
            nav: false,
        });  
        
        $(".testimonial-carousel").owlCarousel({
            items: 1, 
            loops: true,
            dots: true,
            nav: false,
        });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	