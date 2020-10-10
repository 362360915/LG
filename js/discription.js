define(["jquery", "jquery-cookie"], function($){
    function body(){
        $(function(){
            $.ajax({
                url: "../data/data2.json",
                success: function(arr){
                    var str = ``;
                    var Pic = ``;
                    for(var i = 0; i < arr.length; i++){
                        str += `<a href="" id="${arr[i].id}"><img src="${arr[i].img}" alt=""></a>`
                    }
                    Pic += `<img src="${arr[0].img}" alt="">`
                    $(".mini_box").html(str);
                    $(".img_box").append(Pic);
                },
                error: function(msg){
                    console.log(msg);
                }
            })
            $(".loupe").on("mouseenter", ".mini_box a", function(){
                $(".img_box").find("img").remove();
                var url = $(this).find("img").attr("src");
                var Box = "<img src=" + url + ">";
                $(".loupe .img_box").append(Box);
                $(this).css("border-color", "orange");
                $(this).mouseleave(function(){
                    $(this).css("border-color", "#e9e9e9");
                });
            })

            $(".loupe").on("mouseenter", ".img_box", function(){
                var src = $(this).find("img").attr("src");
                var Box2 = "<img src=" + src + ">";
                $(".loupe .big_box").append(Box2).css("display", "block");
                $(".loupe .img_box #mark").css("display", "block");
            });

            $(".loupe").on("mouseleave", ".img_box", function(){
                $(".loupe .big_box").find("img").remove();
                $(".loupe .big_box").css("display", "none");
                $(".loupe .img_box #mark").css("display", "none")
            });

            $(".img_box").mousemove(function(ev){
                var l = ev.clientX - $(this).offset().left - 80;
                var t = ev.clientY - $(this).offset().top + $(window).scrollTop() - 80;

                l = Math.max(0, l);
                l = Math.min(220, l);
                t = Math.max(0, t);
                t = Math.min(220, t);

                $("#mark").css({
                    left: l,
                    top: t
                })
                $(".big_box img").css({
                    left: -2 * l,
                    top: -2 * t
                })
            })

            $(".down").find("#cut").click(function(){
                var num = Number($(".down").find("input").attr("value"));
                if(num <= 1){
                    $(".down").find("input").attr("value" ,"1");
                }else{
                    num -= 1;
                    $(".down").find("input").attr("value" ,num);
                }
            })

            $(".down").find("#add").click(function(){
                var num = Number($(".down").find("input").attr("value"));
                num += 1;
                $(".down").find("input").attr("value" ,num);
            })

            $(".down .down_two").find("a").click(function(){
                var sum = $(".down").find("input").attr("value");
                $.cookie("goods", JSON.stringify([{id:3,sum:sum}]),{
                expires:7});
            })
        })
    }
    return {
        body: body
      }
})