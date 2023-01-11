(function ($) {
    "use strict";

    /*  Preloader */
    $(window).on('load', function () {
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);

    });
    /*  Fixed Header*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $(".header-area").addClass("sticky");
        } else {
            $(".header-area").removeClass("sticky");
        }
    });
    /*  toogle dropdown  */
    $("#sidebar-menu .dropdown-toggle").click(function (e) {
        e.preventDefault();
        $(this).parents('.dropdown').find('.dropdown-menu').slideToggle("slow");
    });
    /*  toogle class  */
    $('.sidebar-toggler').on('click', function (e) {
        $('.main-area').toggleClass("collapsed");
    });
    /*  slick slider  */
    function bannerslider() {
        var BasicSlider = $('.banner-slider');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.banner-item:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.banner-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplayspeed: 2000,
            infinite: false,
            dots: false,
            fade: true,
            arrows: true,
            speed: 0,
            prevArrow: $('.banner-slider-prev'),
            nextArrow: $('.banner-slider-next'),
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    bannerslider();

    /*  Company slider  */

    $('.company-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        arrows: true,
        dots: false,
        prevArrow: $('.slider-prev'),
        nextArrow: $('.slider-next'),
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });
    /*  Aos  */
    AOS.init({
        offset: 120,
        delay: 10,
        duration: 1000,
        easing: 'ease',
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });
    /*  Magnific Popup  */
    $('.gallery-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });
    /*  Counter Js  */
    if ($(".counter-number").length > 0) {
        $(window).on('load', function () {
            $('.counter-number span').counterUp({
                delay: 10,
                time: 1000
            });

        });
    }
    /*  Isotop Filter  */

    $(window).on('load', function () {
        var $container = $('.filter-container');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.filter-navbar a').click(function () {
            $('.filter-navbar .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'false',
                    queue: false
                }
            });
            return false;
        });
    });
    /*  Scrolltop  */
    function scrolltop() {
        var wind = $(window);
        wind.on("scroll", function () {
            var scrollTop = wind.scrollTop();
            if (scrollTop >= 10) {
                $(".footer-back").addClass("show");
            } else {
                $(".footer-back").removeClass("show");
            }
        });
        $(".footer-back").on("click", function () {
            var bodyTop = $("html, body");
            bodyTop.animate({ scrollTop: 0 }, 10, "easeOutCubic");
        });

    }

    scrolltop();

    // Smothlyscroll
    var scrollsmoth = function () {
        $(document).on('click', '#sidebar-menu a[href^="#"]', function (event) {
            event.preventDefault();

            var href = $.attr(this, 'href');

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 90
            }, 50, function () {
                // window.location.hash = href;
            });
        });
    };
    scrollsmoth();
    // SmothlyscrollActive
    var nav_sections = $('section');
    var main_nav = $('#sidebar-menu');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function () {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (cur_pos < 300) {
                $("#sidebar-menu li:first").addClass('active');
            }
        });
    });

    // search 
    var sjs = SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: '/search.json',
        searchResultTemplate: '<div class="search-results"><a class="gh-search-item" href="{url}"><h5 class="search-post-title">{title}</h5></a>'
    });


}(jQuery));