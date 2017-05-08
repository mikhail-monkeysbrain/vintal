$(document).ready(function() {
      var owl = $(".owl-cert");
      owl.owlCarousel({
      items : 4, //10 items above 1000px browser width
      itemsDesktop : [1200,3], //5 items between 1000px and 901px
      itemsTablet: [900,2], //2 items between 600 and 0;
      itemsMobile : [600,1]// itemsMobile disabled - inherit from itemsTablet option
      });
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
});

$(document).ready(function() {
      var owl = $(".owl-slide");
      owl.owlCarousel({
      items : 1,
      itemsDesktop : [1000,1], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // 3 items betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0;
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      });
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
});

$(document).ready(function() {
  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });
});

$(document).ready(function() {
  $('.menu-item').click(function(){
    $('.menu-item').removeClass('current');
    $(this).addClass('current');
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('.to-head').removeClass('none')
    } else {
      $('.to-head').addClass('none')
    };
  });
  console.log($(window).scrollTop())
});

$(document).ready(function() {
    $("a.gallery").fancybox({           
      "padding" : 20,
      "imageScale" : false, 
      "zoomOpacity" : 0.8,
      "zoomSpeedIn" : 1000, 
      "zoomSpeedOut" : 1000,  
      "zoomSpeedChange" : 1000, 
      "frameWidth" : 700,  
      "frameHeight" : 600, 
      "overlayShow" : true, 
      "overlayOpacity" : 0.8, 
      "hideOnContentClick" :false,
      "centerOnScroll" : false
      });
});

$(document).on('click', '#f_close', function() {
    $.fn.fancybox.close();
});