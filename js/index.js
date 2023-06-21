$(document).ready(function(){


  $("#tab li").click(function() {
    for(i=0;i<2;i++){
      $("#tab li").eq(i).find("strong").attr("li/tab"+i);
    }

    
    inum=$(this).index();
    $(this).find("strong").attr("tabon"+inum);



    let result = $(this).attr("data-alt");
    $(".tabContents div").removeClass("active");
    $("#" + result).addClass("active");

    $("#tab .i2").click(function(){
      $(".i1").removeClass("active"); 
      $(".i2").addClass("active");

      $("#tab .i1").click(function(){
        $(".i2").removeClass("active"); 
        $(".i1").addClass("active");
    })
  })

    });

    
  //리스트 목록 클릭시......
  $(".item1>li").click(function(){

    g_pop=$(this).index();

    $(".g_page span:nth-child(1)").text(g_pop+1); //오른쪽 상단 페이지 넘버 
    $("html").css({overflow:"hidden"}); //기존 html 스크롤 숨기기 
    $(".pop1>li").eq(g_pop).show();
    $("#popup").stop().fadeIn(); //검정배경

  });

  $(".item2>li").click(function(){

    g_pop=$(this).index();

    $(".g_page span:nth-child(1)").text(g_pop+1); //오른쪽 상단 페이지 넘버 
    $("html").css({overflow:"hidden"}); //기존 html 스크롤 숨기기 
    $(".pop2>li").eq(g_pop).show();
    $("#popup").stop().fadeIn(); //검정배경

  });

  //오른쪽 상단 버튼-다음보기
  $(".right_btn").click(function(){
    
    if(g_pop<5){
      $(".pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop++;
      $(".g_page span:nth-child(1)").text(g_pop+1);
      $(".pop>li").eq(g_pop).stop().fadeIn();
    }

  });

  //오른쪽 상단 버튼-이전보기 
  $(".left_btn").click(function(){

    if(g_pop>0){
      $(".pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop--;
      $(".g_page span:nth-child(1)").text(g_pop+1);
      $(".pop>li").eq(g_pop).stop().fadeIn();
    }

  });

  //오른쪽 상단 버튼 -닫기 
  $(".btn_close").click(function(){
    $("html").css({overflowY:"scroll"});
    $("#popup").stop().fadeOut();
    $(".pop>li").stop().hide();
  });

  });

