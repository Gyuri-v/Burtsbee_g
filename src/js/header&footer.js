$(document).ready(function(){

    //navigation show/hide
    $('.nav_btn').click(function(){
        $('.navigation').animate({left:'0'})
    })
    $('.nav_close').click(function(){
        $('.navigation').animate({left:'100%'})
    })
    
    
    //navigation ad slick
    $(".nav_left").slick({
        dots: true,
        arrows: false,
        fade : true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    })
    
    
    //footer language
    $('.arbo').hide();
    $('.arup').click(function(){
        $('.sub_txt>.lau').show(1000);
        $('.arup').hide();
        $('.arbo').show();
    })
    $('.arbo').click(function(){
        $('.lau').hide(1000);
        $('.arbo').hide();
        $('.arup').show();
    })
})