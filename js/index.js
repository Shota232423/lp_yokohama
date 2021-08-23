//ハンバーガーメニューの処理
$(function(){
    function noScroll(event) {
        event.preventDefault();
    }

    $('.hamburger_area').click(function(){
        $('nav').toggleClass('open');
        $('.hamburger_area').toggleClass('stop_scroll');

        if($('.hamburger_area').hasClass('stop_scroll')){
        $('#hamburger_bg').toggleClass('no_display');//no_display削除
        // スクロール禁止(SP)
        document.addEventListener('touchmove', noScroll, {
            passive: false
        });
        // スクロール禁止(PC)
        document.addEventListener('mousewheel', noScroll, {
            passive: false
        });
        }else{
            $('#hamburger_bg').toggleClass('no_display');//no_display追加
            document.removeEventListener('touchmove', noScroll, {
                passive: false
            });
            // スクロール禁止を解除(PC)
            document.removeEventListener('mousewheel', noScroll, {
                passive: false
            });
    }
    });

    $('#hamburger_bg').click(function(){
        $('nav').toggleClass('open');
        $('.hamburger_area').toggleClass('stop_scroll');
        $('#hamburger_bg').toggleClass('no_display');

        document.removeEventListener('touchmove', noScroll, {
            passive: false
        });
        // スクロール禁止を解除(PC)
        document.removeEventListener('mousewheel', noScroll, {
            passive: false
        });

    });
});
