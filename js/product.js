define(["jquery"], function($){
    function body(){
        $(function(){
            $.ajax({
                url: "../data/data.json",
                success: function(arr){
                    var str = ``;
                    for(var i = 0; i < arr.length; i++){
                        str += `<ul id="${arr[i].id}">
                        <li class="prodbody_pic"><a href=""><img src="${arr[i].img}" alt=""></a></li>
                        <div class="prodbody_meta">
                            <div class="prodbody_name"><a href="">${arr[i].name}</a></div>
                            <div class="prodbody_inform">${arr[i].inform}</div>
                            <div class="prodbody_money">${arr[i].money}</div>
                        </div>
                    </ul>`
                    }
                    $(".prodbody").html(str);
                },
                error: function(msg){
                    console.log(msg);
                }
            })
        })
    }
    return {
        body: body
      }
})