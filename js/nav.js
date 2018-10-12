$('.hz').hover(function(){
    $(this).find('.menu2').show();
    $(this).find('.dao').css({"border":"3px solid #dddddd","border-bottom":0,"background":"#fff","position":"relative","z-index":"10"});
    $(this).find('.menu2').css("background","#fff")
},function(){
    $(this).find('.menu2').hide();
    $(this).find('.dao').css({"border":"none","background":0})
})



$('.cel').hover(function(){
    $(this).find('.erweima').show();
    $(this).find('.icon').css({"border":"3px solid #dddddd","border-bottom":"0","background":"#fff","position":"relative","z-index":"10"})
},function(){
    $(this).find('.erweima').hide();
    $(this).find('.icon').css({"border":"none","background":0})
})






