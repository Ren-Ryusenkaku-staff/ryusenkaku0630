'use strict'
window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};

// スクロールのエフェクト
const targets = document.getElementsByClassName('fade');
for (let i = targets.length; i--;) {
    let observer = new IntersectionObserver((entries, observer) => {
        for (let j = entries.length; j--;) {
            if (entries[j].isIntersecting) {
                entries[j].target.classList.add('active');
                observer.unobserve(entries[j].target);
            }
        }
    });
    observer.observe(targets[i]);
}

// スクロール2
$(function () {
    $(window).scroll(function () {
        $('.fade2').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100) {
                $(this).addClass('active');
            }
        });
    });
});
$('.fade2').on('afterChange', function () {
    $('.fade2').slick('slickRemove', true);
});


// ハンバーガーボタンを開いてる間スクロール無効になる
$(function () {
    var state = false;
    var pos;
    $('#menu-btn-check').click(function () {
        if (state == false) {
            pos = $(window).scrollTop();
            $('body').addClass('fixed').css({ 'top': - pos });
            state = true;
        } else {
            $('body').removeClass('fixed').css({ 'top': 0 });
            window.scrollTo(0, pos);
            state = false;
        }
    });
});



// スタート時アニメーション1回だけ
$(function () {
    var startAni = function () {
      if (sessionStorage.getItem('access')) {
        /*
          2回目以降アクセス時の処理
        */
          $("body").addClass('active');
          $(".logo0").addClass('active');
          $(".logo1").addClass('active');
          $(".logo2").addClass('active');
          $(".logo3").addClass('active');
          $(".start-animation").addClass('active');
          $(".logo-start").addClass('active');
      } else {
        /*
          初回アクセス時の処理
        */
        sessionStorage.setItem('access', 'true');
      }
    }
    startAni();
  });