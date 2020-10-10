define(["jquery"], function($){
    function body(){
        $("#btn-use").click(function(){
            $.ajax({
                type: "post",
                url: "../php/login.php",
                data:{
                    username: $("#kong1").val(),
                    password: $("#kong2").val(),
                    repassword: $("#kong3").val(),
                    createtime: (new Date()).getTime()
                },
                success: function(result){
                    // console.log(result);
                    var obj = JSON.parse(result);
                    if(obj.code){
                        $("#Ti").attr("class", "Rt");
                    }else{
                        $("#Ti").attr("class", "Wo");
                    }
                    $("#Ti").show().html(obj.message);
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