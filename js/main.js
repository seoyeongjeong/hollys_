
$(function(){
  $('.center').slick({
      dots: true,
      infinite: true,
      speed: 500,
    //  autoplay : true,
  //    autoplaySpeed : 4000, 
   //   pauseOnHover : true,
      slidesToShow: 1,
      centerMode: true
});//슬라이드
    
  //메뉴탭
  $('.best-m').each(function(){
    var anchor = $(this).find('.bests a'); //a).tabs a 모두
    var anchor_on = $(this).find('.bests a.on'); //b) a중 .on 
    var href_on = anchor_on.attr('href'); //c) b의 href ==> #panel1-1
    var panel = $(this).find('.panel');

    $(href_on).show();
    //누르면 화면 이동하는 거 작동 안하게 하는 것 ↓
jQuery('.bests a').click(function () {
   return false;

});
    anchor.each(function(){
        var href_this = $(this).attr('href');
        $(this).click(function(){
            panel.hide();
            anchor.removeClass('on');
            $(this).addClass('on');
            $(href_this).show();

        })
    })
})
//sns슬라이드
$(".regular").slick({
    dots: false,
    infinite: true,//무한으로 슬라이드 됨
    slidesToShow: 3,
    slidesToScroll: 1 // 몇 개씩 넘어가게 할 것인지
  });
//새소식 메뉴탭
$('.news-btn').each(function(){
    var anchor = $(this).find('.news-list a'); //a).tabs a 모두
    var anchor_on = $(this).find('.news-list a.news-on'); //b) a중 .on 
    var href_on = anchor_on.attr('href'); //c) b의 href ==> #panel1-1
    var panel = $(this).find('.news-panel');
       //누르면 화면 이동하는 거 작동 안하게 하는 것 ↓
jQuery('.news-list a').click(function () {
   return false;
   

});
    $(href_on).show();
    anchor.each(function(){
        var href_this = $(this).attr('href');
        $(this).click(function(){
            $('.news-panel').hide();
            anchor.removeClass('news-on');
            $(this).addClass('news-on');
            $(href_this).show();

    
        })
    })
})
//슬라이드_m
if ($(window).width() < 850) {
    $('#nav').hide();
    $('#section1 img').attr('src','images/main_slider1_m.jpg');
  }else {
    $('#nav').show();
    $('#section1 img').attr('src','images/main_slider1.jpg');
  }
$(window).resize(function(){
  if ($(window).width() < 850) {
    $('#nav').hide();
    $('#section1 img').attr('src','images/main_slider1_m.jpg');
  }else {
   $('#nav').show();
    $('#section1 img').attr('src','images/main_slider1.jpg');
  }
})//슬라이드닫기


//프랜차이즈 메뉴탭
$('.franc-tabSet').each(function(){
    var anchor = $(this).find('.franc-tabs a'); //a).tabs a 모두
    var anchor_on = $(this).find('.franc-tabs a.franc-on'); //b) a중 .on 
    var href_on = anchor_on.attr('href'); //c) b의 href ==> #panel1-1
    var panel = $(this).find('.franc-panel');

    $(href_on).show();
    anchor.each(function(){
        var href_this = $(this).attr('href');
        $(this).click(function(){
    $('.franc-panel').hide();
            anchor.removeClass('franc-on');
            $(this).addClass('franc-on');
            $(href_this).show();
       //누르면 화면 이동하는 거 작동 안하게 하는 것 ↓
jQuery('.franc-tabs a').click(function () {
   return false;

});
        })
    })
})


//픽시드

$(window).scroll(function(){
    
var	windowTop =$(window).scrollTop()+350;
$(".quick_box ").stop().animate({top:windowTop+"px" },500);
//$("#q_mn").stop().animate({속성:"속성값", 속성:"속성값" },1000);	

});

})//ready


