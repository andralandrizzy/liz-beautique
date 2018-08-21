$(window).load(function() {
  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });
});

// slider css style
/*global console*/
var // Variables Declaration
    slideIndex = 0, // Variable For Set First Slide
    i,
    ran, // Variable To Load Random Numbers
    colorBullets = "#444", // Indictators Color
    activeColorBullets = "#3d83b5", // Current Indicator Color
    x = document.getElementsByClassName("mySlides"), // Slides
    bul = document.getElementsByClassName("bullet"), // Indicators
    animateClasses = ["animate-left", "animate-top", "animate-bottom", "animate-right", "animate-zoomOut", "animate-zoomIn"]; // Classes Array For Animation Effects

// Set Width & Height For Shadow
document.getElementsByClassName("shadow")[0].style = "width:" + x[0].clientWidth + ";" + "height:" +  x[0].clientHeight + ";";

// Main Function To Move Slides
function slider() {

    'use strict';

    // Loop To Hide Slides & Set Indicators Color
    for (i = 0; i < x.length; i += 1) {

        // Hide Slides
        x[i].style.display = "none";

        // Set Indicators Color
        bul[i].style.backgroundColor = colorBullets;

        // Set Class To Slides
        x[i].setAttribute("class", "mySlides");

    }

    // Visible Current Slide
    x[slideIndex - 1].style.display = "block";

    // Set Current Indicator Color
    bul[slideIndex - 1].style.backgroundColor = activeColorBullets;

    // Load Random Number
    ran = Math.floor(Math.random() * animateClasses.length);

    // Set Random Class From Classes Array & Add It To Slides
  x[slideIndex - 1].classList.add(animateClasses[ran]);

}

// Function To Move Bettween Slides
function showSlides(n) {

    'use strict';

    // Check If Current Slide is The Last
    if (n > x.length) {

        slideIndex = 1;

    }

    // Check If Current Slide is The First
    if (n < 1) {

        slideIndex = x.length;

    }

    slider();

}

// Function To AutoPlay Slider
function autoPlay() {

    'use strict';

    showSlides(slideIndex += 1);

    // Set Time To Recall Function
    setTimeout(autoPlay, 5000);

}

// Start Call Functions
showSlides(slideIndex);

autoPlay();
// End Call Functions
