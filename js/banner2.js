$(function(){
    var aBtns = $(".pointbox2").find("li");
    var oUl = $(".production").find("ul");
    var oleft = $(".left2");
    var oright = $(".right2");
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
                left:-1040 + (inow * -1040),
            },
            500,
            function(){
                if (inow === aBtns.size()){
                    inow = 0;
                    oUl.css("left", -1040);
                }
                else if(inow == -1){
                    inow = 1;
                    oUl.css("left", -1040 * 2);
                }
            }
        );
    }
});