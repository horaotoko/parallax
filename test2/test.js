$(function(){
  $(window).scroll(function(){
    var dy = $(this).scrollTop();
    console.log(dy);

      $('#bg1').css('background-position-y', dy);
      if (dy > 400) {
        $('#bg2').css('background-position-y', dy - 400);
        $('#bg2').css('background-position-x', dy - 400);
      } else {
        $('#bg2').css('background-position-y', 0);
      }

      if (dy > 800) {
        $('#bg3').css('background-position-y', (dy - 800) * 2 );
      } else {
        $('#bg3').css('background-position-y', 0);
      } 

      if (dy > 800) {
        $('#msg').css('opacity', (dy - 800)/340 );
        $('#msg').css('top', 200 );
        var dx = (dy-800) > 400 ? 400 : (dy-800);
        $('#msg').css('left', dx );
      } else {
        $('#msg').css('opacity', 0 );
      } 

    });
});