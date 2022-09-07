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
    let st = 0;
    // $(window).scroll(function(){
    //     st = $(this).scrollTop();
    //     if(st > lateScroll){
    //         if(direction != 'down'){
    //             $('html, body').stop().animate({scrollTop : $(window).innerHeight()},700);
    //             direction = 'down';
    //         }
    //     } else {
    //         if(direction != 'up'){
    //             $('html, body').stop().animate({scrollTop : -$(window).innerHeight()},700);
    //             direction = 'up';
    //         }
    //     }
    //     lateScroll = st;

        
    //     if(st > 300){
    //         headerW();
    //     } else {
    //         headerT();
    //     }
    // });

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
        controls:false,
        pager:false
    })
    
    let roomPage = 1;
    let pageNumber = setInterval(function(){
        roomPage += 1;
        $('.room_current').text(roomPage);
        if(roomPage == roomList){
            roomPage = 0;
        }
        
    },4000)

})