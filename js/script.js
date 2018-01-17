//script.js
//
//var pattern = GeoPattern.generate('Data Mining Project');
//let header = document.getElementById("headerbackground");
//header.style.backgroundImage = pattern.toDataUrl();

function smoothlink(id){
	
  document.getElementById(id).scrollIntoView({ 
  behavior: 'smooth',block: 'start'
});


}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}