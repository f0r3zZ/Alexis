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
        if (nav.classList.contains('hide')) {
            nav.classList.remove('hide');
        } else  {
            nav.classList.add('hide');
        }
        nav.classList.toggle('show');
        burger.classList.toggle('activeBurger');
    });
});