$(document).ready(function(){
    // 헤더 흰색배경 했을 때 스타일 함수
    function headerW(){
        $('.header_wrap').css('color','#000');
        $('.reservation').css('border','1px solid #000').css('color','#000');
        $('h1 img').attr('src','./images/logo.png');
        $('header').css('background-color','#fff');
    }

    // 헤더 투명배경 했을 때 스타일 함수
    function headerT(){
        $('.header_wrap').css('color','#fff');
        $('.reservation').css('border','1px solid #fff').css('color','#fff');
        $('h1 img').attr('src','./images/logo_w.png');
        $('header').css('background-color','transparent');
    }
    

    $('.reservation').hover(function(){
        $(this).css('border','none').css('color','#000').css('background-color','#fff');
    },function(){
        $(this).css('border','1px solid #fff').css('color','#fff').css('background-color','transparent');
    });

    $('#check_in').datepicker();
    $('#check_out').datepicker();
    $('#check_in').on('change',function(){
        let start = $(this).val();
        let startDate = new Date(start);
        let startDay = startDate.getDay();
        let theDay = 0;
        switch(startDay){
            case 0 : theDay = '/일';
            break;
            case 1 : theDay = '/월'; 
            break;
            case 2 : theDay = '화'; 
            break;
            case 3 : theDay = '/수'; 
            break;
            case 4 : theDay = '/목'; 
            break;
            case 5 : theDay = '/금'; 
            break;
            default : theDay = '/토';
            break;
        }
        start += theDay
        $(this).val(start);
    })
    $('#check_out').on('change',function(){
        let start = $(this).val();
        let startDate = new Date(start);
        let startDay = startDate.getDay();
        let theDay = 0;
        switch(startDay){
            case 0 : theDay = '/일';
            break;
            case 1 : theDay = '/월'; 
            break;
            case 2 : theDay = '화'; 
            break;
            case 3 : theDay = '/수'; 
            break;
            case 4 : theDay = '/목'; 
            break;
            case 5 : theDay = '/금'; 
            break;
            default : theDay = '/토';
            break;
        }
        start += theDay
        $(this).val(start);
    });

    $('.person_opt > div > span').on('click',function(){
        $(this).next().children().css('height','30px');
    });
    $('.person_opt > div > ul > li').on('click',function(){
        $('.person_opt > div > ul > li').css('height','0');
        let num = $(this).text();
        $(this).parent().prev().children('b').text(num);
    });

    $('.pkg1').on('click',function(){
        window.location.href = './index.html';
    })
    $('.pkg2').on('click',function(){
        open('https://www.naver.com');
    })
    $('.pkg3').on('click',function(){
        window.location.href = 'https://www.naver.com';
    });

    let lateScroll = 0;
    let direction = '';
    let st = 5;
    let mainVisual = $('#main_visual').offset().top;
    let stay = $('#stay').offset().top;
    let room = $('#room').offset().top;
    let enJoy = $('#enjoy').offset().top;
    $(window).scroll(function(){
        st = $(this).scrollTop();
        console.log(st);
        console.log(direction);
        console.log(lateScroll);
        if(st > lateScroll){
            if(direction != 'down'){ // down이 들어가버렸기 때문에 한번만 실행 됨.
                if(mainVisual <= st && stay > st){
                    $('html, body').stop().animate({scrollTop : stay},700,function(){
                        st = $(window).scrollTop();
                    });
                } else if(stay <= st && room > st){
                    $('html, body').stop().animate({scrollTop : room},700);
                } else if(room <= st && enJoy > st){
                    $('html, body').stop().animate({scrollTop : enJoy},700);
                } else {
                    $('html, body').stop().animate({scrollTop : $('footer').offset().top},700);
                }
                direction = 'down';
            }
        } else {
            if(direction != 'up'){
                $('html, body').stop().animate({scrollTop : -$(window).innerHeight()},700);
                direction = 'up';
            }
        }
        lateScroll = st;

        
        if(st > 300){
            headerW();
        } else {
            headerT();
        }
    });

    $('.gnb > li').hover(function(){
        let liHeight = $(this).children('.sub_wrap').children('.sub').height();
        $('.header_bg').stop().animate({height:`${liHeight + 200}px`},300);
        headerW();
    }, function(){
        $('.header_bg').stop().animate({height:0},300);
        if(st > 300){
            headerW();
        } else {
            headerT();
        }
    });

    $('.down > a').on('click',function(){
        $('html,body').animate({scrollTop:$(window).innerHeight()},700);
        return false;
    });


    
    let roomList = $('.room_slide > li').length;
    $('.room_total').text(roomList);
    let roomSlide = $('.room_slide').bxSlider({
        auto:true,
        controls:false
    });
    $('.room_prev').on('click',function(){
        roomSlide.goToPrevSlide();
        return false;
    });
    $('.room_next').on('click',function(){
        roomSlide.goToNextSlide();
        return false;
    });

    let enjoy = $('.enjoy').bxSlider({
        auto:true
    });

    let an = setInterval(function(){
        let activeNum = $('.enjoy_slide .bx-pager-item > a[class*="active"]').attr('data-slide-index');
        $('.enjoy_title > ul > li').children().children().removeClass('enjoy_ani');
        $('.enjoy_title > ul > li').eq(activeNum).children().children().addClass('enjoy_ani');
        $('.enjoy_title > ul > li').children().next('h3').css('opacity','0.3')
        $('.enjoy_title > ul > li').eq(activeNum).children().next('h3').css('opacity','1')
    },4000);
})