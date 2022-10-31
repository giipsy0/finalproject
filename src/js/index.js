import '../scss/header.scss';
import "../scss/arrows-btn.scss";
import "../scss/aside.scss";
import "../scss/aside-callback.scss";
import "../scss/aside-feedback.scss";
import "../scss/brands.scss";
import "../scss/burger-close.scss";
import "../scss/contacts.scss";
import "../scss/fonts.scss";
import "../scss/header.scss";
import "../scss/info.scss";
import "../scss/inner-container.scss";
import "../scss/keyframes.scss";
import "../scss/languages-list.scss";
import "../scss/layout.scss";
import "../scss/navigation.scss";
import "../scss/normalize.scss";
import "../scss/order-btn.scss";
import "../scss/overlay.scss";
import "../scss/page-footer.scss";
import "../scss/page-main.scss";
import "../scss/pagination.scss";
import "../scss/prices.scss";
import "../scss/prices-policy.scss";
import "../scss/repair.scss";
import "../scss/social-buttons.scss";
import "../scss/swiper-bundle.scss";
import "../scss/swiper-pagination-bullet.scss";
import "../scss/swiper-toggle.scss";
import "../scss/user-menu.scss";
import "../scss/wrapper.scss";

document.addEventListener('DOMContentLoaded', () =>{
const brandsSlider = document.querySelector('.brands__swiper');

let brandsSwiper;

function mobileBrandsSlider() {
    if (window.innerWidth < 767 && brandsSlider.dataset.mobile == 'false') {
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

        brandsSlider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 767) {
        brandsSlider.dataset.mobile = 'false';
        
        if (brandsSlider.classList.contains('swiper-initialized')) {
         brandsSwiper.destroy();   
        }
        
    }
}

mobileBrandsSlider();

window.addEventListener('resize', () => {
    mobileBrandsSlider();
})


let brandsButton = document.querySelector('.arrows-btn');

brandsButton.addEventListener ('click', function () {
    brandsSlider.classList.toggle('swiper-toggle');
    if(!brandsButton.dataset.trigger) {
        brandsButton.textContent = 'Скрыть';
        brandsButton.dataset.trigger = 'false';
        brandsButton.classList.add('arrows-btn--clicked');
    } else {
        brandsButton.textContent = brandsButton.dataset.text;
        brandsButton.dataset.trigger = '';
        brandsButton.classList.remove('arrows-btn--clicked');
    } 
});


const repairSlider = document.querySelector('.repair__swiper');
let repairSwiper;

function mobileRepairSlider () {
    if (window.innerWidth < 767 && repairSlider.dataset.mobile == 'false') {
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

        repairSlider.dataset.mobile = 'true';

        }
        if (window.innerWidth > 767) {
            repairSlider.dataset.mobile = 'false';

            if (repairSlider.classList.contains('swiper-initialized')) {
                repairSwiper.destroy();
            }
        }
    }

    mobileRepairSlider();   

  window.addEventListener('resize', () => {
    mobileRepairSlider();
})

let repairButton = document.querySelector('.repair__arrows-btn');

repairButton.addEventListener ('click', function () {
    repairSlider.classList.toggle('repair-list__toggle');
    if(!repairButton.dataset.trigger) {
        repairButton.textContent = 'Скрыть';
        repairButton.dataset.trigger = 'false';
        repairButton.classList.add('repair__arrows-btn--clicked');
    } else {
        repairButton.textContent = repairButton.dataset.text;
        repairButton.dataset.trigger = '';
        repairButton.classList.remove('repair__arrows-btn--clicked');
    } 
});

const pricesSlider = document.querySelector('.prices__table');
let pricesSwiper;

function mobilePricesSlider () {
    if (window.innerWidth < 767 && pricesSlider.dataset.mobile == 'false') {
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

        pricesSlider.dataset.mobile = 'true';

        }
        if (window.innerWidth > 767) {
            pricesSlider.dataset.mobile = 'false';

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
            aside.style.left = 0;
            overlay.style.zIndex = 1;
    })

    burgerClose.addEventListener('click', function () {
            aside.style.left = '-500px';
            overlay.style.zIndex = -1;
    })

    document.addEventListener('keydown', function (a) {
        if (a.key === 'Escape') {
            aside.style.left = '-500px';
            overlay.style.zIndex = -1;
        }
    })



let readMore = document.querySelector('.info__readmore');
let infoText = document.querySelector('.info__text');

readMore.addEventListener('click', function () {
    if (!readMore.dataset.trigger) {
        readMore.textContent = 'Скрыть';
        readMore.dataset.trigger = 'false';
        infoText.style.height = '380px';
        readMore.classList.add('info__readmore--clicked');
    } else {
        readMore.textContent = readMore.dataset.text;
        infoText.style.height = '100px';
        readMore.dataset.trigger = '';
        readMore.classList.remove('info__readmore--clicked'); 
    }
})

let asideChatButton = document.querySelector('.aside__chat');
let modalFeedback = document.querySelector('.aside-feedback');
let modalFeedbackBurgerClose = document.querySelector('.aside-feedback__burger')
 
    asideChatButton.addEventListener('click', function () {
        modalFeedback.style.right = 0;
        overlay.style.zIndex = 101;
    })

    modalFeedbackBurgerClose.addEventListener('click', function () {
        modalFeedback.style.right = '-1000px';
        overlay.style.zIndex = -1;
    })

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            modalFeedback.style.right = '-1000px';
            overlay.style.zIndex = -1;  
        }
    })

let headerChatButton = document.querySelector('.header__chat');

    headerChatButton.addEventListener('click', function () {
        modalFeedback.style.right = 0;
        overlay.style.zIndex = 101;
    })

    modalFeedbackBurgerClose.addEventListener('click', function () {
        modalFeedback.style.right = '-1000px';
        overlay.style.zIndex = -1;
    })

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            modalFeedback.style.right = '-1000px';
            overlay.style.zIndex = -1;  
        }
    })


let asideCallButton = document.querySelector('.aside__call');
let modalCallback = document.querySelector('.aside-callback');
let modalCallbackBurgerClose = document.querySelector('.aside-callback__burger');

    asideCallButton.addEventListener('click', function () {
        modalCallback.style.right = 0;
        overlay.style.zIndex = 101;
    })

    modalCallbackBurgerClose.addEventListener('click', function () {
        modalCallback.style.right = '-1000px';
        overlay.style.zIndex = -1;
    })

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            modalCallback.style.right = '-1000px';
            overlay.style.zIndex = -1;  
        }
    })

let headerCallButton = document.querySelector('.header__call');

    headerCallButton.addEventListener('click', function () {
        modalCallback.style.right = 0;
        overlay.style.zIndex = 101;
    })

    modalCallbackBurgerClose.addEventListener('click', function () {
        modalCallback.style.right = '-1000px';
        overlay.style.zIndex = -1;
    })

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            modalFeedback.style.right = '-1000px';
            overlay.style.zIndex = -1;  
        }
    })

    overlay.addEventListener('click', function () {
        modalFeedback.style.right = '-1000px';
        modalCallback.style.right = '-1000px';
        aside.style.left = '-500px';
        overlay.style.zIndex = -1;
    })
})

