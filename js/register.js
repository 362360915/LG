define(["jquery"], function($){
    function body(){
        $(".up-but").click(function(){
            $.ajax({
                type: "post",
                url: "../php/register.php",
                data:{
                    username: $("#textid").val(),
                    password: $("#textpassword").val(),
                },
                success: function(result){
                    // console.log(result);
                    var obj = JSON.parse(result);
                    if(obj.code){
                        $("#Ti").css("color", "green");
                    }else{
                        $("#Ti").css("color", "red");
                    }
                    $("#Ti").show().html(obj.message);
                },
                error: function(msg){
                    console.log(msg);
                }
            })
        })
    }
    return{
        body:body
    }
})