    
$('h1').addClass('wow  rubberBand delay-1s data-wow-iteration="10"');
       $('img').addClass('wow rotateInUpLeft delay-1s data-wow-iteration="10"');
       $('p').attr('data-aos', 'fade-up');
$(function(){
  
  //nicescroll//

   $("body").niceScroll({
      cursorcolor:"#dc3545",
      cursorwidth:"10px",
      cursorborder: "0px solid #fff"
});



    //smooth scroll//

      var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
    easing: "easeOutQuad"
});

      $('.img-fluid').simpleParallax();


     //preloader///

        $(window).on('load', function () { 
            $('#status').fadeOut(); 
            $('#preloader').delay(1000).fadeOut('slow'); 
           
            });
           


           //nav bar//

            $(window).on('scroll',function(){
        if ($(window).scrollTop()){
          $('nav').addClass('black');
        }
        else
        {
          $('nav').removeClass("black");
        }
      })

      // $('.about-img').simpleParallax(orientation: 'left');

       
})