
$("#pwd").blur(function(){
     var pwd = $(this).val();
     var p = /^[A-Za-z0-9]{6,20}$/;
     $("#pwds").empty();
     if(pwd==null || pwd==""){
         $("#pwd").after("<span id='pwds' style='color:red;height:34px;margin-top:52px;display:block'>密码不能为空</span>");
     }else if(!p.test(pwd)){
         $("#pwd").after("<span id='pwds' style='color:red;height:34px;margin-top:52px;display:block'>密码格式不正确</span>");
     }else{
         $("#pwd").after("<span id='pwds' style='color:green;height:34px;margin-top:52px;display:block'>密码格式正确</span>");
     }
});

    
 $("#pwd1").blur(function(){
      var pwd1 = $(this).val();
      var pwd = $("#pwd").val();
      $("#pwds1").empty();
      if(pwd1==null || pwd1==""){
          $("#pwd1").after("<span id='pwds1' style='color:red;height:34px;margin-top:52px;display:block'>确认密码不能为空</span>")
      }else if(pwd1 != pwd){
          $("#pwd1").after("<span id='pwds1' style='color:red;height:34px;margin-top:52px;display:block'>两次密码不一致</span>")
      }else{
         $("#pwd1").after("<span id='pwds1' style='color:green;height:34px;margin-top:52px;display:block'>密码一致</span>");
     }
});

$("#num").blur(function(){
         var num = $(this).val();
         var p = /^[0-9]{11}$/
         $("#nums").empty();
         if(num==null || num==""){
             $("#num").after("<span id='nums' style='color:red;height:34px;margin-top:52px;display:block'>手机号不能为空</span>");
         }else if(!p.test(num)){
             $("#num").after("<span id='nums' style='color:red;height:34px;margin-top:52px;display:block'>手机号格式不正确</span>");
         }else{
             $("#num").after("<span id='nums' style='color:green;height:34px;margin-top:52px;display:block'>手机号格式正确</span>");
         }
    });
