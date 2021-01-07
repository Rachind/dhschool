$(function(){
    if($(window).width() < 768) {
        $('.to_swiper').each(function(indx, elem){
            $(elem).addClass('swiper-wrapper').removeClass('row').wrap('<div class="swiper-container"></div>').children().addClass('swiper-slide').removeClass('row');

            $(elem).parent().addClass("instance-" + indx).append('<div class="swiper-pagination"></div>');;
           
            var swiper = new Swiper(".instance-" + indx, {
                pagination: {
                    el: '.instance-'+indx+' .swiper-pagination'
                },
                slidesPerView: 'auto',
                spaceBetween: 30
            });
        });

        $('.box_title').on('click', function(){
            $(this).toggleClass('active').next('.box_content').slideToggle();
            $(this).parent('.box').siblings().find('.box_content').slideUp().prev('.box_title').removeClass('active');
        })
    }

    $('.touchevents .city_select span').on('click', function(e){
        e.preventDefault();
        $(this).parent().find('.city_options').show();
    })

    $(document).on('click', function(e) {
        var container = $('.touchevents .city_select');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.touchevents .city_options').hide();
        }
    });    

    $('.mm_menu .parent a').on('click', function(e){
        e.preventDefault();
        $(this).parent().toggleClass('open').find('ul').slideToggle('fast');
    })

    $('.menu_toggle').on('click', function(e){
        e.preventDefault();
        $('#nav-toggle').trigger('click');
    })

    if ('ontouchstart' in document.documentElement) {
        $('body').addClass('touch');
    } else {
        $('body').removeClass('touch');
    }

    $('.phone_dd li a').on('click', function(e){
        if(!$(this).closest('ul').hasClass('open')) {
            e.preventDefault();
            $(this).closest('ul').addClass('open');
        } 
    })

    $(document).on('click', function(e) {
        var container = $('.phone_dd');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.phone_dd ul').removeClass('open');
        }
    });

    var mySwiper = new Swiper('#mainSlider', {
        loop: true,
        pagination: {
            el: '#mainSlider .swiper-pagination',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
        },
    });

    var mobSwiper = new Swiper('.mob_slider', {
        loop: true,
        pagination: {
            el: '.mob_slider_pagination',
        },
        effect: 'slide',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
        },
    });

    var programsSwiper = new Swiper('#programs_slider', {
        loop: false,
        pagination: {
            el: '.prog_slider_pagination',
            dynamicBullets: true,
            clickable: true
        },
        slidesPerView: 'auto',
        spaceBetween: 20
    });

    var newsSwiper = new Swiper('#news_slider', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 16
    });

    var studentsSwiper = new Swiper('.students .swiper-container', {
        loop: true,
        pagination: {
            el: '.students .swiper-pagination',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.students .swiper-button-next',
            prevEl: '.students .swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    var students_worksSwiper = new Swiper('.students_works .swiper-container', {
        loop: false,
        pagination: {
            el: '.students_works .swiper-pagination',
            type: 'bullets',
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.students_works .swiper-button-next',
            prevEl: '.students_works .swiper-button-prev',
        },
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 24,
        breakpoints: {
            768: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 4,
                slidesPerColumn: 2,
                spaceBetween: 30,
                pagination: {
                    el: '.students_works .swiper-pagination',
                    type: 'fraction'
                },
            }
        }
    });

    var testimSwiper = new Swiper('.testim .swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        initialSlide: 1,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false,
        },
        
        pagination: {
            el: '.testim .swiper-pagination',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.testim .swiper-button-next',
            prevEl: '.testim .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 0,
                    stretch: -200,
                    depth: 500,
                    modifier: 2,
                    slideShadows: false,
                },
            }, 
        }
    });

    var teachersSwiper = new Swiper('#teachers_slider', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
            el: '.teachers .swiper-pagination',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.teachers .swiper-button-next',
            prevEl: '.teachers .swiper-button-prev',
        },
    });

    var eventsSwiper = new Swiper('#events_slider', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
            el: '.events .swiper-pagination',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.events .swiper-button-next',
            prevEl: '.events .swiper-button-prev',
        },
        breakpoints: {
            1280: {
                slidesPerView: 3,
            }
        }
    });

    var graduatesSwiper = new Swiper('#graduates_slider', {
        loop: true,
        pagination: {
            el: '.graduates .swiper-pagination',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.graduates .swiper-button-next',
            prevEl: '.graduates .swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    $('.dir_link').on({
        mouseenter: function () {
            var targetStage = $(this).data('target-stage');
            $('.main_bnr').attr('data-stage', targetStage);
        },
        mouseleave: function () {
            $('.main_bnr').attr('data-stage', '');
        }
    });

    // $('input[name=phone]').mask('+7 999 999-99-99');

    /*$(window).on('scroll load', function(){
        var $body = $('body');
        var top = $(document).scrollTop();
        if (top > 0) {
            $body.addClass('fix');
        } else {
            $body.removeClass('fix');
        }
    });*/
    if($('ul.tabnav').closest('.register').length > 0 && $(window).width() < 768) {
        $('ul.tabnav').on('click', 'li:not(.active)', function(e) {  
            e.preventDefault();
            $(this).addClass('active').siblings().removeClass('active').closest('section').find('.box').eq($(this).index()).find('.box_title').trigger('click');
        });
    } else {
        $('ul.tabnav').on('click', 'li:not(.active)', function(e) {  
            e.preventDefault();
            $(this).addClass('active').siblings().removeClass('active').closest('section').find('.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
        });
    }    

    $('.fancy_close').on('click', function(e){
        e.preventDefault();
        $.fancybox.close();
    });

    $(document).on('click', '.count_b .m, .count_b .p', function(e){
        e.preventDefault();
        var a = $(this).data('action'),
            inp = $(this).closest('.count_b').find('.count'),
            inp_val = parseInt(inp.val());

        if(a == 'plus') {
            inp.val(inp_val + 1);
        } else if(a == 'minus') {
            if(inp_val > 0) inp.val(inp_val - 1);
        }

        inp.trigger('change');
    });

    $('.read_more').on('click', function(e){
        e.preventDefault();
        $(this).parent('.desc').hide().next('.desc_full').show();
    })
})

