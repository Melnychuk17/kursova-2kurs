$("#menu__button").on("click", function() { //Функция отслеживает нажатие на блок с id munu__button и по нажатии открывает блок с классом header__link
    $(".header__link").slideDown({
        duration: 'slow',
        easing: 'linear'
    });
})
$('.header__link').mouseleave(function() { //При убирании мыши с блока с классом header__link скрывает его
    $(".header__link").slideUp({
        duration: 'slow',
        easing: 'linear'
    });
});

// $(".gmnoprint").css("display", "none");