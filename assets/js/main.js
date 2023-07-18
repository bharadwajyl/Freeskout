//Global variables
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


//Onpage Load
for (let i=0; i<100; i++){
    $("header").append('<span class="snowflake"></span>');
}

//Detect Mobile device
if (isMobile){
    $("nav").append('<a href="javascript:void(0)" class="ham"><i class="fa fa-bars"></i></a>');
    $(".ham").click(function(){
        if (!$(".overlay").length > 0) { $("body").append('<div class="overlay" onclick="closer()"></div>'); }
        $("nav ul").css("right", "0px");  
        $("body").css("overflow-y", "hidden");      
    });
}
    
    
//Scroller Nav
window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("nav").css("background-color", "var(--secondary)");
        $("nav").css("box-shadow", "0px 6px 16px -6px var(--gray)");
    } else {
        $("nav").css("background-color", "transparent");
        $("nav").css("box-shadow", "0px 0px 0px 0px var(--gray)");
    }
}

//Close
function closer(){
    $(".overlay").remove();
    if ($("nav ul").css("right") > "0") { $("nav ul").css("right", "-250px"); $("body").css("overflow-y", "auto"); }
}

