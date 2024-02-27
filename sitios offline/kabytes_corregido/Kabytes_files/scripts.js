$(document).on('ready', function() {  
  
  $("#menu").menu();

  $("#search-btn").click(function() {
                $(".search-hide-form").fadeIn(300, function() {
                    $(".search-hide-form #searchform").fadeIn(100), $("#s").focus()
                }), $(".search-hide-form .bg").click(function() {
                    $(".search-hide-form #searchform").fadeOut(100, function() {
                        $(".search-hide-form").fadeOut(300)
                    })
                })
            });

  if ( $('#subscribe').length ){
    
    var winHeight = $(window).height(), 
        docHeight = $(document).height(),
        progressBar = $('progress'),
        max, value;

    max = $('#subscribe').offset().top;
    progressBar.attr('max', max);
  }

  $(window).scroll(function() {
     didScroll = true;
  });

  

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#main-nav').outerHeight();

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
        value = $(window).scrollTop();
     progressBar.attr('value', value);
    }
}, 100);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if(st == 0){
      $('#main-nav').removeClass('nav-shadow');
    }else{
      $('#main-nav').addClass('nav-shadow');
    }
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#main-nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#main-nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

});