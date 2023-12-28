//header
let langOnOff = true;
$('header nav').mouseover(function(){
    $('header').stop().animate({backgroundColor:'#fff',height:'300px'},500);
    $('header nav > ul > li > a').stop().animate({color:'#222'},500);
    $('header nav > ul > li > a').css('text-shadow','none');
    $('#open_menu > span').css('box-shadow','0px 0px 3px 1px rgba(85,85,85,0)').stop().animate({backgroundColor:'#000'},500);
    $('.lang').stop().animate({color:'#222'},500);
    $('.lang img').attr('src','./images/sel_lang.svg');
    $('header nav > ul > li > ul').show();
})
$('header').mouseleave(function(){
    $('header').stop().animate({backgroundColor:'transparent',height:'99px'},500);
    $('header nav > ul > li > a').stop().animate({color:'#fff'},500);
    $('header nav > ul > li > a').css('text-shadow','0 0 3px #333');
    $('#open_menu > span').css('box-shadow','0px 0px 3px 1px rgba(85,85,85,1)').stop().animate({backgroundColor:'#fff'},500);
    $('.lang').stop().animate({color:'#fff'},500);
    $('.lang img').attr('src','./images/sel_lang_w.svg');
    $('header nav > ul > li > ul').hide();
})
$('.lang').click(function(){
    if(langOnOff){
        $('.sel_lang').stop().animate({height:'90px'},300);
        langOnOff = false;
    } else {
        $('.sel_lang').stop().animate({height:0},300);
        langOnOff = true;
    }
});





//슬라이드 페이지 총 갯수
let slideEa = $('.slides').children().length;
$('.last_page').text(slideEa.toString().padStart(2,'0'));

let visual = $('.slides').bxSlider({
    controls:false,
    auto:true,
    onSlideAfter:function(){
        page();
    }
});
let onOff = true;
$('.play_state').click(function(){
    if(onOff === true){
        visual.stopAuto();
        $(this).children().attr('src','./images/btn_play_main.svg');
        onOff = false;
    } else {
        visual.startAuto();
        visual.goToNextSlide();
        $(this).children().attr('src','./images/btn_pause_main.svg');
        onOff = true;
    }
})
$('.main_prev').click(function(){
    visual.goToPrevSlide();
});
$('.main_next').click(function(){
    visual.goToNextSlide();
});
function page(){
    let currentNum = $('#visual .active').text();
    $('.current_page').text(currentNum.toString().padStart(2,'0'));
    $('.page_width').css('width',100 * currentNum / slideEa + '%');
}



//aside
$('.close_btn').click(function(){
    $('aside').stop().animate({right:'-320px'},300);
    $('.open_btn').stop().animate({left:'-60px'},300);
})
$('.open_btn').click(function(){
    $('aside').stop().animate({right:'20px'},300);
    $('.open_btn').stop().animate({left:'320px'},300);
})
