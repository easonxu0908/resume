$(document).ready(function () {
    //螢幕下滑超過100px顯示backTop  start
    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("backTop").style.display = "block";
        } else {
            document.getElementById("backTop").style.display = "none";
        }
    }
    window.onscroll = function () { scrollFunction() };
    //螢幕下滑超過100px顯示backTop  end

    // 滑動回頁首 start
    $('.jq-backTop').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
    // 滑動回頁首 end
})