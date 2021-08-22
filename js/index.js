//ハンバーガーメニューの処理
$(function(){
    function noScroll(event) {
        event.preventDefault();
    }

    $('.hamburger_area').click(function(){
        $('nav').toggleClass('open');
        $('.hamburger_area').toggleClass('stop_scroll');
        if($('.hamburger_area').hasClass('stop_scroll')){
        // スクロール禁止(SP)
        document.addEventListener('touchmove', noScroll, {
            passive: false
        });
        // スクロール禁止(PC)
        document.addEventListener('mousewheel', noScroll, {
            passive: false
        });
        }else{
            document.removeEventListener('touchmove', noScroll, {
                passive: false
            });
            // スクロール禁止を解除(PC)
            document.removeEventListener('mousewheel', noScroll, {
                passive: false
            });
    }
    });
});
