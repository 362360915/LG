$(function(){
    var aBtns = $(".pointbox").find("li");
    var oUl = $(".imgbox");
    var oleft = $(".left1");
    var oright = $(".right1");
    var iNow = 0;
    var timer = null;

    $(".banner1").mouseenter(function(){
        clearInterval(timer);
    });

    $(".banner1").mouseleave(function(){
        timer = setInterval(function(){
            iNow++;
            tab();
        }, 3000);
    });

    aBtns.click(function(){
        iNow = $(this).index();
        tab();
    });

    oleft.click(function(){
        iNow--;
        tab();
    });

    oright.click(function(){
        iNow++;
        tab();
    });

    timer = setInterval(function(){
        iNow++;
        tab();
    }, 3000);

    function tab(){
        aBtns.removeClass("active").eq(iNow).addClass("active");

        if(iNow == aBtns.size()){
            aBtns.eq(0).addClass("active");
        }

        oUl.animate(
            {
                left: -1349 + (iNow * -1349),
            },
            500,
            function(){
                if (iNow === aBtns.size()){
                    iNow = 0;
                    oUl.css("left", -1349);
                }
                else if(iNow == -1){
                    iNow = 5;
                    oUl.css("left", -1349 * 6);
                }
            }
        );
    }
});