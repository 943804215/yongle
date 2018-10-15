$(".retract").click(function(){
    if($(".cartoon").css("height") == "290px"){
        $("#animation").find('.cameracature').css("height","0");
       $("#animation").find('.cartoon').css("height","100px")
    }else{
        $("#animation").find('.cameracature').css("height","290px");
       $("#animation").find('.cartoon').css("height","290px");
       
    }
    // $("#animation").animate(({height:"100px"}),1000,function(){
        // $("#animation").find('.drawing').css("height","100px");
       
    });
    
    // $("#animation").find('.small').slideToggie(1000);
    