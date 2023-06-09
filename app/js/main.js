

$(function(){
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true
    });

})

$(function () {
    const mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.bukovel'
        }
    });
})



$(function () {
    const wrapper = document.querySelector('.wrapper1');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');
    const loginIcon = document.querySelector('.login-icon');
    const iconClose = document.querySelector('.icon-close');
    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });


    loginIcon.addEventListener('click', () => {
        wrapper.classList.add('active-login');
    });


    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-login');
    });

})




