

// select video element
var vid             = document.getElementById( 'vid' );
// var windowheight    = $( window ).height()-20;
var scrollpos       = window.pageYOffset/400;
var targetscrollpos = scrollpos;


// ---- Values you can tweak: ----
// var accelamount = .6; //How fast the video will try to catch up with the target position. 1 = instantaneous, 0 = do nothing.

// pause video on load
vid.pause();
 
window.onscroll = function() {
  //Set the video position that we want to end up at:
  targetscrollpos = window.pageYOffset/400;
};


setInterval(function() {  
  //Accelerate towards the target:
  // scrollpos += (targetscrollpos - scrollpos)*accelamount;
  scrollpos += (targetscrollpos - scrollpos);
  //update video playback
  vid.currentTime = scrollpos;
  // vid.pause();
}, 40);


