let slideEa = $('.slides').children().length;
$('.last_page').text(slideEa.toString().padStart(2,'0'));
page();

let visual = $('.slides').bxSlider({
    controls:false,
    auto:true,
    onSlideAfter:function(){
        page();
    }
});
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
