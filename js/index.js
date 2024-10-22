$(document).ready(function () {
  $(".main").hover(function () {
    $(this).find(".sub").stop().slideDown();
  }, function () {
    $(this).find(".sub").stop().slideUp();
  });

  let bannerWidth = $(".ban ul li").outerWidth(true);

  //목록 마지막 이미지를 목록 안의 가장 앞으로 먼저 배치
  $(".ban ul li:last").prependTo(".ban ul");
  //첫번째 이미지가 보여야 하므로 앞으로 온 맨뒤 이미지를 왼쪽으로 한칸 밀어두기
  $(".ban ul").css({"left":-bannerWidth+"px"});

  //자동으로 슬라이드 함수생성
  function bannerAuto(){
    $(".ban ul").stop().animate({left:"-="+bannerWidth+"px"},500,function(){
      $(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지가 맨뒤로 이동
      $(this).css({left:-bannerWidth+"px"}); //다음 움직임을 위해 초기화(최종목적지)
    });
  };

  //setInterval(함수명,재생시간); ==> 재생시간 간격으로 함수 자동 실행
  //clearInterval(변수명); ==> 자동함수를 멈추게 함
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


  //마우스오버 시 멈춤(좌우버튼을 누를때는 자동함수가 실행이 안 되게 함)
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