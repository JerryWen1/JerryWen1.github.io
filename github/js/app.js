$(function() {


    var header = $("#header"),
    introH = $ ("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();


    /*ШАПКА  FIXED*/
    checkScroll(scrollOffset);

    $(window).on("scroll", function(){
scrollOffset = $(this).scrollTop();
     checkScroll(scrollOffset);

    });



function checkScroll(){
  

      if (scrollOffset >=introH) {
        header.addClass("fixed");
      }
 else {
    header.removeClass("fixed");
 }

}


/*ПЛАВНЫЙ SCROOL*/
 $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });


 /*Появление меню*/

 $("#nav_toggle").on("click",function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");

 });


 /*collapse*/

 $("[data-collapse]").on("click",function(event) {
    event.preventDefault();
    var $this = $(this),
            blockId = $this.data('collapse');
            $this.toggleClass("active");
            /*$(blockId).slideToggle();*/
 });

 /*sldier*/
   $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
 });

$(function(){
    $('.mdl').click(function() {
    $('#exampleModal').arcticmodal();
})
});


});

