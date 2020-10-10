define(["jquery", "jquery-cookie"], function($){
    function body(){
        $(function(){
            sc_msg();
            
            function sc_msg(){
                var cookieStr = $.cookie("goods");
                if(!cookieStr){
                    return;
                }
                $.ajax({
                    url: "../data/data2.json",
                    success: function(arr){
                        var cookieArr = JSON.parse(cookieStr);
                        var newArr = [];
                        for(var i = 0; i < arr.length; i++){
                            for(var j = 0; j < cookieArr.length; j++){
                                if(cookieArr[j].id == arr[i].id){
                                    arr[i].sum = cookieArr[j].sum;
                                    newArr.push(arr[i]);
                                    break;
                                }
                            }
                        }
                        var str = ``;
                        str += `<div class="pay-pro">
                        <input type="checkbox" id="ck">
                        <div class="pic-name">
                            <a href="" class="pay-picture"><img src="${newArr[0].img}" alt=""></a>
                            <div class="pay-name">
                                <a href="">
                                ${newArr[0].name}
                                </a>
                            </div>
                        </div>
                        <div class="pay-money">
                            ￥<span>${newArr[0].money}</span>
                        </div>
                        <div class="pay-num">
                            <div>
                                <a href="javascript:void(0)" id="left">-</a>
                                <input id="sum" type="text" disabled="disabled" value="${newArr[0].sum}">
                                <a href="javascript:void(0)" id="right">+</a>
                            </div>
                        </div>
                        <div class="allmoney"></div>
                        <div class="pay-delete">
                            <a href="javascript:void(0)">
                                <img id="delete" src="https://store.logitech.com.cn/images/icon-delete.png" alt="">
                                删除
                            </a>
                        </div>
                    </div>`

                        $(".pay-body").html(str);
                        var Num = $("#sum").attr("value");
                        var Moy = $(".pay-money span").html();
                        var all = Num * Moy;
                        $(".pay-pro").find(".allmoney").html(all);
                        $(".all").find(".promoney span").html(all);
                        $(".all").find(".div3 #import").html(all);
                        
                    },
                    error: function(msg){
                        console.log(msg);
                    }
                })
                
            }
            
            $(".pay-body").on("click", "#left", function(){
                var cookieArr = JSON.parse($.cookie("goods"));
                if(cookieArr[0].sum <=1){
                    cookieArr[0].sum = 1
                }else{
                    cookieArr[0].sum--;
                }
                $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
                  })
                sc_msg();
            })
            $(".pay-body").on("click", "#right", function(){
                var cookieArr = JSON.parse($.cookie("goods"));
                cookieArr[0].sum++;
                $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
                  })
                sc_msg();
            })
            $(".pay-body").on("click", "#delete", function(){
                var cookieArr = JSON.parse($.cookie("goods"));
                cookieArr.splice(0, 1);
                $.cookie("goods", null);
                $(".pay-body").empty();
                $(".all").find(".promoney span").html("0");
                $(".all").find(".div3 #import").html("0");
                sc_msg();
            })

            $(".used ul").find("li a").click(function(){
                $(".used ul").find("li a").attr("class", '')
                $(this).attr("class", 'active');
            })
                
        })
    }
    return {
        body: body
      }
})