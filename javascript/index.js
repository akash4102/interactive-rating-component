$("#thankyou").hide();
$("button").click(function(event){
    $('#rating').hide();
    $('#thankyou').show();
    for(var i=1;i<=5;i++){
        if($("#r"+i).css("background-color")== "rgb(252, 118, 20)"){
            console.log("working");
            console.log(i);
            $(".result>span").text(i);
            break;
        }
    }
    
});
$(".rate").click(function(event){
    $(".rate").css("background-color","hsl(213, 24%, 24%)");
    $("#"+event.target.id).css("background-color","#FC7614");
});