$(document).ready(function () {
  $(".main").hover(function () {
    $(this).find(".sub").stop().slideDown();
  }, function () {
    $(this).find(".sub").stop().slideUp();
  });

  let bannerWidth = $(".ban ul li").outerWidth(true);

  $(".ban ul li:last").prependTo(".ban ul");
  $(".ban ul").css({"left":-bannerWidth+"px"});

  function bannerAuto(){
    $(".ban ul").stop().animate({left:"-="+bannerWidth+"px"},500,function(){
      $(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지가 맨뒤로 이동
      $(this).css({left:-bannerWidth+"px"}); //다음 움직임을 위해 초기화(최종목적지)
    });
  };

  bannerTimer = setInterval(bannerAuto,4000);




  //이전보기
  $(".ban_btn .ban_left").click(function(){
    $(".ban ul").stop().animate({left:"+="+bannerWidth+"px"},500,function(){
      $(".ban ul li:last-child").prependTo(".ban ul"); //마지막 이미지가 맨앞로 이동
      $(this).css({left:-bannerWidth+"px"}); //다음 움직임을 위해 초기화(최종목적지)
    });
  });

  //다음보기
  $(".ban_btn .ban_right").click(function(){
    $(".ban ul").stop().animate({left:"-="+bannerWidth+"px"},500,function(){
      $(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지가 맨뒤로 이동
      $(this).css({left:-bannerWidth+"px"}); //다음 움직임을 위해 초기화(최종목적지)
    });
  });


  //마우스오버 시 멈춤
  $(".ban, .ban_btn .ban_left, .ban_btn .ban_right").hover(function(){
    clearInterval(bannerTimer);
  },function(){
    bannerTimer = setInterval(bannerAuto,4000);
  });

// 아코디언
  $(".title").click(function(){
    $(this).siblings(".title").removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".content").stop().slideUp();
    $(this).next().stop().slideToggle();
  });
});