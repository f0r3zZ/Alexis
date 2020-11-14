$(document).ready(function () {
    $('.test-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots:true
    });
    let nav = document.querySelector('.header-nav'),
        burger = document.querySelector('.burger');

    burger.addEventListener('click', function () {
        nav.classList.toggle('show');
        burger.classList.toggle('activeBurger');
        document.body.classList.toggle('lock');
    });
});