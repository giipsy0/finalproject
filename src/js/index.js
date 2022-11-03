import '../scss/index.scss';


document.addEventListener('DOMContentLoaded', () =>{
const brandsSlider = document.querySelector('.brands__swiper');

let brandsSwiper;
const mobile = window.matchMedia('(max-width: 767px)');
const notMobile = window.matchMedia('(min-width: 768px)');

function mobileBrandsSlider() {
    if (mobile.matches && !brandsSlider.dataset.mobile) {
        brandsSwiper = new Swiper(brandsSlider, {
            slidesPerView: 1.3,
            spaceBetween: 16,
            wrapperClass: 'brands__swiper-wrapper',
            slideClass: 'brands__swiper-slide',
            pagination: {
                el: '.pagination',
                clickable: true,
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },

                720: {
                    slidesPerView: 3,
                }
            }
        });

        brandsSlider.dataset.mobile;
    }

    if (notMobile.matches) {
        !brandsSlider.dataset.mobile;
        
        if (brandsSlider.classList.contains('swiper-initialized')) {
         brandsSwiper.destroy();   
        }
        
    }
}

mobileBrandsSlider();

window.addEventListener('resize', () => {
    mobileBrandsSlider();
})

const repairSlider = document.querySelector('.repair__swiper');
let repairSwiper;

function mobileRepairSlider () {
    if (mobile.matches && !repairSlider.dataset.mobile) {
        repairSwiper = new Swiper (repairSlider, {
            slidesPerView: 1.3,
            spaceBetween: 16,
            wrapperClass: 'repair__swiper-wrapper',
            slideClass: 'repair__swiper-slide',
            pagination: {
                el: '.pagination',
                clickable: true,
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },

                720: {
                    slidesPerView: 3,
                }
            }
        });

        repairSlider.dataset.mobile;

        }
        if (notMobile.matches) {
            !repairSlider.dataset.mobile;

            if (repairSlider.classList.contains('swiper-initialized')) {
                repairSwiper.destroy();
            }
        }
    }

    mobileRepairSlider();   

  window.addEventListener('resize', () => {
    mobileRepairSlider();
})

function clickToShow(block, btn) {
    let btnElem = document.querySelector('.' + btn);
    let blockElem = document.querySelector('.' + block);

    btnElem.onclick = function() {
        let show = false;
        let startValueBtn = btnElem.textContent;

        return function(e) {
            e.preventDefault();
            show = !show;
            blockElem.classList.toggle(block + '--toggle');
            btnElem.classList.toggle(btn + '--clicked');

            if (show) {
                btnElem.textContent = 'Скрыть';
            } else {
                btnElem.textContent = startValueBtn;
            }
        }
    }();
}

clickToShow('brands__swiper', 'arrows-btn');
clickToShow('repair__swiper', 'repair__arrows-btn');
clickToShow('info__text', 'info__readmore');

const pricesSlider = document.querySelector('.prices__table');
let pricesSwiper;

function mobilePricesSlider () {
    if (mobile.matches && !pricesSlider.dataset.mobile) {
        pricesSwiper = new Swiper (pricesSlider, {
            slidesPerView: 1.2,
            spaceBetween: 16,
            wrapperClass: 'prices__table-body',
            slideClass: 'prices__table-row',
            pagination: {
                el: '.prices__pagination',
                clickable: true,
            },
            breakpoints: {
                600: {
                    slidesPerView: 2,
                },
            }
        });

        pricesSlider.dataset.mobile;

        }
        if (notMobile.matches) {
            !pricesSlider.dataset.mobile;

            if (pricesSlider.classList.contains('swiper-initialized')) {
                pricesSwiper.destroy();
            }
        }
    }

    mobilePricesSlider();   

  window.addEventListener('resize', () => {
    mobilePricesSlider();
})

let burger = document.querySelector('.burger');
let aside = document.querySelector('.aside');
let overlay = document.querySelector('.overlay');
let burgerClose = document.querySelector('.aside-header__icon');


    burger.addEventListener('click', function () {
            aside.style.transform = 'translate(0)';
            overlay.style.zIndex = 1;
            aside.querySelector('.aside__burger-close').focus();
            document.body.style = 'overflow: hidden';
    })

    burgerClose.addEventListener('click', function () {
            aside.style.transform = 'translate(-500px)';
            overlay.style.zIndex = -1;
            document.body.removeAttribute('style');
    })

    document.addEventListener('keydown', function (a) {
        if (a.key === 'Escape') {
            aside.style.transform = 'translate(-500px)';
            overlay.style.zIndex = -1;
            document.body.removeAttribute('style');
        }
    })

let asideChatButton = document.querySelector('.aside__chat');
let modalFeedback = document.querySelector('.aside-feedback');
let modalFeedbackBurgerClose = document.querySelector('.aside-feedback__burger')
 
    asideChatButton.addEventListener('click', function () {
        modalFeedback.style.transform = 'translate(0)';
        overlay.style.zIndex = 101;
        modalFeedback.querySelector('.aside-feedback__form-name').focus();
        document.body.style = 'overflow: hidden';
    })

    modalFeedbackBurgerClose.addEventListener('click', function () {
        modalFeedback.style.transform = 'translate(1000px)';
        overlay.style.zIndex = -1;
        
        document.body.removeAttribute('style');
    })

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            modalFeedback.style.transform = 'translate(1000px)';
            overlay.style.zIndex = -1;
            document.body.removeAttribute('style');
        }
    })

let headerChatButton = document.querySelector('.header__chat');

    headerChatButton.addEventListener('click', function () {
        modalFeedback.style.transform = 'translate(0)';
        overlay.style.zIndex = 101;
        modalFeedback.querySelector('.aside-feedback__form-name').focus();
        document.body.style = 'overflow: hidden';
    })

    modalFeedbackBurgerClose.addEventListener('click', function () {
        modalFeedback.style.transform = 'translate(1000px)';
        overlay.style.zIndex = -1;
        document.body.removeAttribute('style');
    })

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            modalFeedback.transform = 'translate(1000px)';
            overlay.style.zIndex = -1;
            document.body.removeAttribute('style');
        }
    })


let asideCallButton = document.querySelector('.aside__call');
let modalCallback = document.querySelector('.aside-callback');
let modalCallbackBurgerClose = document.querySelector('.aside-callback__burger');

    asideCallButton.addEventListener('click', function () {
        modalCallback.style.transform = 'translate(0)';
        overlay.style.zIndex = 101;
        modalCallback.querySelector('.aside-callback__form-call').focus();
        document.body.style = 'overflow: hidden';
    })

    modalCallbackBurgerClose.addEventListener('click', function () {
        modalCallback.style.transform = 'translate(1000px)';
        overlay.style.zIndex = -1;
        document.body.removeAttribute('style');
    })

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            modalCallback.style.transform = 'translate(1000px)';;
            overlay.style.zIndex = -1;
            document.body.removeAttribute('style');
        }
    })

let headerCallButton = document.querySelector('.header__call');

    headerCallButton.addEventListener('click', function () {
        modalCallback.style.transform = 'translate(0)';
        overlay.style.zIndex = 101;
        modalCallback.querySelector('.aside-callback__form-call').focus();
        document.body.style = 'overflow: hidden';
    })

    modalCallbackBurgerClose.addEventListener('click', function () {
        modalCallback.style.transform = 'translate(1000px)';
        overlay.style.zIndex = -1;
        document.body.removeAttribute('style');
    })

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            modalFeedback.style.transform = 'translate(1000px)';
            overlay.style.zIndex = -1; 
            document.body.removeAttribute('style');
        }
    })

    overlay.addEventListener('click', function () {
        modalFeedback.style.transform = 'translate(1000px)';
        modalCallback.style.transform = 'translate(1000px)';
        aside.style.transform = 'translate(-500px)';
        overlay.style.zIndex = -1;
        document.body.removeAttribute('style');
    })
})

