const footer_content = document.querySelectorAll('.footer__content__heading')
const footer_detail = document.querySelectorAll('.footer-detail')

$(function(){
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
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.header__topbar .menu').toggleClass('active');
    })
    $('.droptop-btn').click(function(){
        $('.live-call__icons').toggleClass('unshow')
    })
    for (let index = 0; index < footer_content.length; index++) {
    footer_content[index].addEventListener('click', () => {
        footer_detail[index].classList.toggle('show')
    })
}
})
