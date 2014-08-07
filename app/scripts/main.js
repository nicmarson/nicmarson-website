'use strict';

(function ($, window, undefined) {

  // Smooth scrolling plugin by Chris Coiyer
  // Source: http://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  var rr = function(x) {
    var i = x,
        n = "never gonna";
    do {
      i -= 1;
      console.log( n + " give you up" );
      console.log( n + " let you down" );
    } while ( i > 0 );
  };

  rr(6);
})(jQuery, window);
