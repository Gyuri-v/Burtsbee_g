$(document).ready(function(){
    
    //main_slide
    $(".slider_box").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    })
    
    
    //main_best swipe hover 효과
    $(".swiper-slide").hover(
        function(){
            $(this).css({"bottom":"30px", "transition-duration":"0.5s"});
        },
        function(){
            $(this).css({"bottom":"0", "transition":"0.5s"});
        }
    );
    
    
    //main_product 이미지 변경
    $("#main_product2").mouseover(function(){
        $(this).attr("src","./img/main/main_product_2_hover2.png");
    })
    $("#main_product2").mouseout(function(){
        $(this).attr("src","./img/main/main_product_2.png");
    })
    $("#main_product1").mouseover(function(){
        $(this).attr("src","./img/main/main_product_1_hover.png");
    })
    $("#main_product1").mouseout(function(){
        $(this).attr("src","./img/main/main_product_1.png");
    })
    $("#main_product3").mouseover(function(){
        $(this).attr("src","./img/main/main_product_3_hover.png");
    })
    $("#main_product3").mouseout(function(){
        $(this).attr("src","./img/main/main_product_3.png");
    })
    
})
