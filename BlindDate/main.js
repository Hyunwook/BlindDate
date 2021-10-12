$(window).on("load",function(){
    
    //home section slideshow
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;
    $(function(){
        $(".container").css("color","red")
    });
    
    function slideShow(){
        console.log(slideIndex)
        $(".slide").removeClass("actitve").eq(slideIndex).addClass("active");
        if(slideIndex == slideLen -1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideShow,5000);
    }
    slideShow();
})