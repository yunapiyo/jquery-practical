$(function () {
    // カルーセル
  $('#carousel-section').slick({
    autoplay: true,
    dots: true,
    fade: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
    swipe: false,
  });

    // リンクのホバー時に不透明度を変更
  $(document).ready(
    function(){
      $("h1 span") .hover(function(){
          $(this).fadeTo("4000",0.5); // マウスオーバーで透明度を50%にする
      },function(){
          $(this).fadeTo("4000",1.0); // マウスアウトで透明度を100%に戻す
      });
    });


  $(document).ready(
    function(){
      $("a") .hover(function(){
          $(this).fadeTo("4000",0.5); // マウスオーバーで透明度を50%にする
      },function(){
          $(this).fadeTo("4000",1.0); // マウスアウトで透明度を100%に戻す
      });
    });

    // TOPに戻るボタン
  $(document).ready(function() {
    var pagetop = $('#back-btn');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
  });

  // ページ内リンクのスクロールをスムーズにする
  $('a[href^="#"]').click(function(){
    var href = $(this).attr('href');
    if(href.length > 1) { 
		let target = $($(this).attr('href')).offset().top;
		$('html,body').animate({scrollTop : target}, 500);
   }
	});

  // スクロールしたらセクションをフェードインさせる
  $(window).scroll(function () {
    $('#about').each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass('active');
      }
    });
  });

  $(window).scroll(function () {
    $('#works').each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass('active');
      }
    });
  });

  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('.item a').click(function() {
    var imgSrc = $(this).children().attr('src');
    $('.bigimg').children().attr('src', imgSrc);
    $('.modal').fadeIn();
    $('body,html').css('overflow-y', 'hidden');
    
    return false
  });

  $('.close-btn').click(function() {
    $('.modal').fadeOut();
    $('body,html').css('overflow-y','visible');

    return false
  });

});