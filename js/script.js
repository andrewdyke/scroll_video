
var vid             = document.getElementById( 'vid' );
var scrollpos       = window.pageYOffset/400;
var targetscrollpos = scrollpos;

vid.pause();
 
window.onscroll = function() {
  targetscrollpos = window.pageYOffset/400;
};

setInterval(function() {
  scrollpos += (targetscrollpos - scrollpos);
  vid.currentTime = scrollpos;
}, 40);
