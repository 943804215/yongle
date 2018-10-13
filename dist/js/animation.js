$(".retract").click(function(){
    $("#animation").animate(({height:"100px"}),1000,function(){
        $("#animation").find('.drawing').slideToggle(1000);
       $("#animation").find('.cartoon').css("display","none");
    });
    $()
    // $("#animation").find('.small').slideToggie(1000);
    
})