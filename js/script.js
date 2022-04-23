$(window).on("load", function() {
    "use strict";



    

    //  ============== HEADER STICKY FUNCTION ===========

    var header_height = $("header").innerHeight();

    $(window).on("scroll", function(){
        if ($(window).scrollTop() > header_height) {
            $("header").addClass("sticky animated slideInDown");
        }
        else {
            $("header").removeClass("sticky animated slideInUp")
        }
    });

    //  ============== ClICK TO TOP FUNCTION ===========
    
    $('.scrollToTop').on("click",function(){
        $('html, body').animate({scrollTop : 0},600);
        return false;
    });

    $(window).on("scroll", function(){
        var scroll = $(window).scrollTop();
        if (scroll > 1000) {
            $(".scroll_icon").addClass("active");
        }
        else {
            $(".scroll_icon").removeClass("active");
        }
    });


    //  ============== TOGGLE FUNCTION ===========

    $(".toggle").each(function(){
        $(this).find('.content').hide();
        $(this).find('h2:first').addClass('active').next().slideDown(500).parent().addClass("activate");
        $('h2', this).on("click",function() {
            if ($(this).next().is(':hidden')) {
                $(this).parent().parent().find("h2").removeClass('active').next().slideUp(500).removeClass('animated fadeInUp').parent().removeClass("activate");
                $(this).toggleClass('active').next().slideDown(500).addClass('animated fadeInUp').parent().toggleClass("activate");
            }
        });
    });

    //  ============== GETING HEIGHT OF DIV ===========

    var conf_height = $(".about-conf").innerHeight();
    $(".conf-img").css({
        "height": conf_height
    });


    //  ============== TAKING A OFFSET OF DIV WITH CONTAINER ===========

    var gap = $(".container").offset().left;
    $(".faq-questions-sec").css({
        "padding-left": gap
    });



    //  ============== SEARCH FORM FUNCTION ===========

    $(".search-click").on("click", function(){
        $(".search-form").addClass("active");
    });

    $("html").on("click", function(){
        $(".search-form").removeClass("active");
    });
    $(".search-click, .search-form").on("click", function(e){
        e.stopPropagation();
    });

    //  ============== RESPONSIVE MOBILE FUNCTION ===========

    $(".mobile-responsive-menu ul ul").parent().addClass("menu-item-has-children");
    $(".mobile-responsive-menu ul li.menu-item-has-children > a").on("click", function(){
        $(this).next("ul").slideToggle();
        $(this).parent().siblings().find("ul").slideUp();
        return false;
    });

    $(".menu-btn").on("click", function(){
        $(".mobile-responsive-menu").addClass("active");
    });
    $("html").on("click", function(){
        $(".mobile-responsive-menu").removeClass("active");
    });
    $(".mobile-responsive-menu, .menu-btn").on("click", function(e){
        e.stopPropagation();
    });





    //  ============== SCROLLING ANIMATION FUNCTION ===========


    //Slow Scroll
    jQuery('nav ul li a, .mobile-responsive-menu ul li a, .scrollToTop').on("click", function (e) {
        if (jQuery(this).attr('href') === '#')
        {
            e.preventDefault();
        } else {
            if (jQuery(window).width() < 1024) {
                if (!jQuery(e.target).is('.sub-arrow'))
                {
                    jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top - 77}, 1500);
                    jQuery('.menu-holder').removeClass('show');
                    jQuery('#toggle').removeClass('on');
                    return false;
                }
            } else
            {
                jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top - 77}, 1500);
                return false;
            }
        }
    });

    jQuery(window).on('scroll resize', function () {
    var currentSection = null;
    jQuery('section').each(function () {
        var element = jQuery(this).attr('id');
        if (jQuery('#' + element).is('*')) {
            if (jQuery(window).scrollTop() >= jQuery('#' + element).offset().top - 115)
            {
                currentSection = element;
            }
        }
    });

    jQuery('nav ul li').removeClass('active').find('a[href*="#' + currentSection + '"]').parent().addClass('active');
});

    //  ============== CLIENT CAROUSEL ===========

    $('.testimonial-sec').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop:true,
        margin:0,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    //  ============== APPY IMG CAROUSEL ===========

    $('.appy-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    //  ============== BLOG CAROUSEL ===========

    $('.blog-carousel, .testimonial-carousel2').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });



    // HTMLLIGHTBOX FUNCTION

    jQuery(".html5lightbox").html5lightbox();


});


