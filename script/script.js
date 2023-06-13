$(function () {
    //메뉴
    $('nav > ul > li').mouseenter(function () {
        $('.sub, .menuBg').stop().slideDown();
    })
    $('nav > ul > li').mouseleave(function () {
        $('.sub, .menuBg').stop().slideUp();
    })

    //슬라이드
    $('.slide:gt(0)').hide()
    setInterval(function () {
    $('.slide:first').fadeOut(1500).next().fadeIn(1500)
    $('.slide:first').appendTo('.slide_in')
    }, 3000)

    //팝업창
    $('.pp').click(function () {
        $('.popUpBox').show();
    })
    $('.popUp button').click(function () {
        $('.popUpBox').hide();
    })


})