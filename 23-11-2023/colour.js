// $(document).ready(function(){
//     $("#button").click(function(){
//         $("p").css("color","green")
//         .css("background","red")
//         .slideUp(3000).slideDown(3000)
//     })
// })
$(document).ready(function(){
    $("#button").click(function(){
        $("p").hide();
        alert("hide");
    })
})
$(document).ready(function(){
    $("#call").click(function(){
        $("p").hide("Slow",function(){
            alert("hide")
        })
    })
})
