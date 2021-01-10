// $('.steps__slider').slick({
//     dots: true,
//     prevArrow: '.slider__prev',
//     nextArrow: '.slider__next',
//     fade: true,
//     cssEase: 'linear',
//     customPaging : function(slider, i) {
//         var thumb = $(slider.$slides[i]).data('thumb');
//     return '<div class="dot-play"></div>';
//     }
// });

$(function(){
    var mySwiper = new Swiper('#mainSlider', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    var stepsSwiper = new Swiper('.steps__slider', {
        loop: false,
        pagination: {
            el: '.steps__slider .swiper-pagination',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.steps__slider .swiper-button-next',
            prevEl: '.steps__slider .swiper-button-prev',
        },
    });

    $('input[name=phone]').mask('+7 999 999-99-99');

    $(window).on('scroll load', function(){
        var $body = $('body');
        var top = $(document).scrollTop();
        if (top > 0) {
            $body.addClass('fix');
        } else {
            $body.removeClass('fix');
        }
    })
})



function tabs(headerSelector, tabSelector, contentSelector) {
    

        const header = document.querySelector(headerSelector),
              tab = document.querySelectorAll(tabSelector),
              content = document.querySelectorAll(contentSelector);

    if(content.length > 0) {    
        function hideTabContent() {
            content.forEach( item => {
                item.style.display = 'none';
            })

            // tab.forEach(item => {
            //     item.classList.remove(activeClass);
            // })
        }

        function showTabContent( i = 0) {
            content[i].style.display = 'block';
            // tab[i].classList.add(activeClass);
        }

        hideTabContent();
        showTabContent();

        header.addEventListener('click', (e) => {
            const target = e.target;
            if(target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    } 
                });
            }
        })
    }
}

tabs('.advantages__item-btns', '.advantages__item-btn', '.advantages__item-info--item');