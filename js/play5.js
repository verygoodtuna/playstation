$(function () {
    $('.header .gnb .game').on('click', function (){
        $('.header .lnb_box .game').toggleClass('on')
    })

    $('.header .gnb .hard').on('click', function (){
        $('.header .lnb_box .hard').toggleClass('on')
    })

    $('.header .gnb .service').on('click', function (){
        $('.header .lnb_box .service').toggleClass('on')
    })

    $('.header .gnb .news').on('click', function (){
        $('.header .lnb_box .news').toggleClass('on')
    })

    $('.header .gnb .buy').on('click', function (){
        $('.header .lnb_box .buy').toggleClass('on')
    })

    $('.header .gnb .cus').on('click', function (){
        $('.header .lnb_box .cus').toggleClass('on')
    })

    $('.g_slide').slick({
        arrows: false,
        fade: true,
    })

    $('.main_gameban .g_con .ffiv').on('click', function () {
        $('.g_slide').slick('slickGoTo', 0)
    })
    $('.main_gameban .g_con .street').on('click', function () {
        $('.g_slide').slick('slickGoTo', 1)
    })
    $('.main_gameban .g_con .avatar').on('click', function () {
        $('.g_slide').slick('slickGoTo', 2)
    })
    $('.main_gameban .g_con .season04').on('click', function () {
        $('.g_slide').slick('slickGoTo', 3)
    })
    $('.main_gameban .g_con .battle').on('click', function () {
        $('.g_slide').slick('slickGoTo', 4)
    })
    $('.main_gameban .g_con .gow').on('click', function () {
        $('.g_slide').slick('slickGoTo', 5)
    })

    $('.p_slide').slick({
        arrows: false,
        fade: true,
        draggable: false,
    })

    $('.main_product .p_bottom .itm01').on('click', function () {
        $('.p_slide').slick('slickGoTo', 0)
    })
    $('.main_product .p_bottom .itm02').on('click', function () {
        $('.p_slide').slick('slickGoTo', 1)
    })
    $('.main_product .p_bottom .itm03').on('click', function () {
        $('.p_slide').slick('slickGoTo', 2)
    })
    $('.main_product .p_bottom .itm04').on('click', function () {
        $('.p_slide').slick('slickGoTo', 3)
    })
    $('.main_product .p_bottom .itm05').on('click', function () {
        $('.p_slide').slick('slickGoTo', 4)
    })
    $('.main_product .p_bottom .itm06').on('click', function () {
        $('.p_slide').slick('slickGoTo', 5)
    })
    $('.main_product .p_bottom .itm07').on('click', function () {
        $('.p_slide').slick('slickGoTo', 6)
    })


    $('.l_slide').slick({
        arrows: false,
        draggable: false,
    })

    $('.main_launch .l_btn .left').on('click', function () {
        $('.l_slide').slick('slickPrev')
    })

    $('.main_launch .l_btn .right').on('click', function () {
        $('.l_slide').slick('slickNext')
    })

    $('.ln_slide').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '125px',
        slidesToShow: 3,
        dots: true,
    })

    $('.main_lanews .ln_btn .left').on('click', function () {
        $('.ln_slide').slick('slickPrev')
    })
    $('.main_lanews .ln_btn .right').on('click', function () {
        $('.ln_slide').slick('slickNext')
    })
})