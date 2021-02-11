$(function(){
    // disable links on page DOD
    $('.tpl_33 .menu_level_1 a, .tpl_33 .menu_level_2 a, .tpl_33 .our_directions a, .tpl_33 .f_menu a').on('click', function(e){
        e.preventDefault();
    })

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

    if($(window).width() < 992) {
        $('.to_swiper_tablet').each(function(){
            toSwiper(this);    
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

    var testdriveAboutSlider = new Swiper('#testdriveAboutSlider', {
        loop: true,
        pagination: {
            el: '.testdrive_ac .swiper-pagination',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.testdrive_ac .swiper-button-next',
            prevEl: '.testdrive_ac .swiper-button-prev',
        }
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
        simulateTouch: true,
        preventClicks: false,
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

    $(".scroll_to").on('click', function(e) {
        e.preventDefault();
        //calculate destination place
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        //go to destination
        $('html,body').animate({
            scrollTop: dest - 116
        }, 1000, 'swing');
    });

    $('.register .scroll_to').on('click', function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    })

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
        recalc();
    });

    $('[data-form-subject]').on('click', function(){
        var subject = $(this).data('form-subject');
        $('#subjectField').val(subject);
    })

    $('.read_more').on('click', function(e){
        e.preventDefault();
        $(this).parent('.desc').hide().next('.desc_full').show();
    });

    $(document).on('change','.popup-control',function(){
        if($(this).val()){
            $(this).addClass('has_value');
        }else{
            $(this).removeClass('has_value');
        }
    });

    $('#filterDirection a').on('click', function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        var filter = $(this).data('filter');

        var data_filter = {
            action: 'getDirFilter',
            filter: $(this).data('filter'),
            parent: $(this).data('parent')
        };
        // console.log(data_filter)
        $.ajax({
            type: "POST",
            url: "/ajax.html",
            data: data_filter,
            success: function(result){
                $('#filterDirectionResult').html(result);
            }
        });
    })

    $('.dir_slide_flink').on('click', function(indx, elem){
        $(this).addClass('active').siblings().removeClass('active');
        var parent = $(this).data('dir-id');
        $.ajax({
            type: "POST",
            url: "/ajax.html",
            data: {
                'action': 'getDirSliderFilter',
                'parent': parent
            },
            success: function(result){
                $('#programs_slider .swiper-wrapper').html(result);
                programsSwiper.update();
            }
        });
    })

    $('#directionsFilterForm').on('change', function(){        
        var formData = new FormData($(this)[0]);
        $.ajax({
            type: "POST",
            url: "/ajax.html",
            processData: false,
            contentType: false,
            data: formData,
            success: function(result){
                //console.log(result)
                $('#resultPrograms').html(result);
                $('.programs_result .pagination').remove();
            }
        });
    })


    /*$("#appTrainingForm").validate({
        messages: {
            email: {
                required: 'Enter this!'
            }
        }
    });*/
})

function toSwiper(selector) {
    $(selector).each(function(indx, elem){
        $(elem).addClass('swiper-wrapper').removeClass('row').wrap('<div class="swiper-container"></div>').children().addClass('swiper-slide').removeClass('col-md-6').removeClass('col-lg-6').removeClass('col-xl-3');

        $(elem).parent().addClass("instance-" + indx).append('<div class="swiper-pagination"></div>');;
       
        var swiper = new Swiper(".instance-" + indx, {
            pagination: {
                el: '.instance-'+indx+' .swiper-pagination'
            },
            slidesPerView: 'auto',
            spaceBetween: 20,
            breakpoints: {
                768: {
                    spaceBetween: 30
                }
            }
        });
    });
}

function recalc() {
    var num = 0,
        trainings = [],
        i = 0;
    $('input.count').each(function(indx, elem){
        var val = parseInt($(elem).val());
        num = num + val;
        if(val > 0) {
            trainings[i] = $(elem).closest('.content_row').find('.title').text() + '##' + $(elem).closest('.content_row').find('.date').text() + '##' + $(elem).closest('.box').find('.box_title').find('.col_content').text().trim() + '##' + val.toString();
            i++;
        }        
        
    })

    $('#trainingsField').val(trainings.join('||'));
    $('#eventsNum').text(num + ' ' + getNoun(num, 'событие', 'события', 'событий'));
    if(num > 0) {
        $('.register_result').show();
    } else {
        $('.register_result').hide();
    }
}

function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
}