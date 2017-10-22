//script.js
//
var pattern = GeoPattern.generate('Data Mining Project');
let header = document.getElementById("headerbackground");
header.style.backgroundImage = pattern.toDataUrl();

function smoothlink(id){
	
  document.getElementById(id).scrollIntoView({ 
  behavior: 'smooth',block: 'start'
});
//*/
/*
  let target = document.getElementById(id);
  var body = document.getElementsByTagName("BODY")[0];
  body.animate({
    scrollTop: target.offset().top
}, 1000);
  */

}