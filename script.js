$(document).ready(function(){
  var $scramble = $(".scramble");
  $scramble.scramble(3000, 20,"alphabet",true)
});

var tl = gsap.timeline();
tl.to(".loading",{
  opacity:0,
  delay:2.5,
})

// this is for preventing bottom to animation.

.to(".loader",{
  opacity:0,
  duration:1,
  ease:"expo.easeInout",
})

.to(".loader",{
  y:"-100%",
  duration:1,
})