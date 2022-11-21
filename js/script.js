const link = document.querySelector('a[target="logo"]').href

const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.header__topbar .menu')
const footer_content = document.querySelectorAll('.footer__content__heading')
const footer_detail = document.querySelectorAll('.footer-detail')
const icon_call = document.querySelector('.live-call__icons')
const droptop_btn = document.querySelector('.droptop-btn')


var headerSwiper = new Swiper('.swiper-header', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

var swiper = new Swiper(".swiper-reason", {
    slidesPerView: "auto",
    spaceBetween: 20,
});

var swiper = new Swiper(".swiper-about", {
    slidesPerView: "auto",
    spaceBetween: 20,
});

var swiper = new Swiper(".swiper-system", {
    slidesPerView: "auto",
    spaceBetween: 20,
});


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    mobile_menu.classList.toggle('active')
})

droptop_btn.addEventListener('click', () => {
    icon_call.classList.toggle('unshow')
})

for (let index = 0; index < footer_content.length; index++) {
    footer_content[index].addEventListener('click', () => {
        footer_detail[index].classList.toggle('show')
    })
}

