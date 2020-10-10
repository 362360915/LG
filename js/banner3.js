$(function(){
    var aBtns = $(".pointbox3").find("li");
    var oUl = $(".imgbox3");
    var oleft = $(".left3");
    var oright = $(".right3");
    var inow = 0;

    aBtns.click(function(){
        inow = $(this).index();
        tab();
    });

    oleft.click(function(){
        inow--;
        tab();
    });

    oright.click(function(){
        inow++;
        tab();
    });

    function tab(){
        aBtns.removeClass("active").eq(inow).addClass("active");

        if(inow == aBtns.size()){
            aBtns.eq(0).addClass("active");
        }

        oUl.animate(
            {
                left:-1349 + (inow * -1349),
            },
            500,
            function(){
                if (inow === aBtns.size()){
                    inow = 0;
                    oUl.css("left", -1349);
                }
                else if(inow == -1){
                    inow = 1;
                    oUl.css("left", -1349 * 2);
                }
            }
        );
    }
});