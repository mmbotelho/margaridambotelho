// OKINAWA
// variables
$(document).ready(function() {
  shadowBoxes();
  wavingHand();
})

// The boxes behind the "work experience" box
function shadowBoxes(){
  var numberOfBoxes = 20;

  function addBoxes() {
    var boxHTML = '<div class="shadow"></div>';
    var $workExperienceBox = $('.work-experience');
    var boxHeight = $workExperienceBox.innerHeight();
    var boxWidth = $workExperienceBox.innerWidth();
    for(var i=0; i < numberOfBoxes; i++){
      $workExperienceBox.append(boxHTML);
    }
  }

  function positionBoxes(){
    for (var i = 0; i < numberOfBoxes; i ++) {
      var offset = (i + 1) * 30;
      var negativeOffset = offset*-1;
      var $shadowBoxes = $('.shadow');
      var zIndex = (i+1)*-1;
      $($shadowBoxes[i]).css('top', negativeOffset + 'px');
      $($shadowBoxes[i]).css('left', offset + 'px');
      $($shadowBoxes[i]).css('z-index', zIndex);
    }
  }

  addBoxes();
  positionBoxes();
}

function wavingHand(){
  const elNeon = document.getElementById("waving-hand");

  setInterval(() => {
    elNeon.classList.remove("js-animate");
    setTimeout(() => {
      elNeon.classList.add("js-animate");
    }, 100);
  }, 5000);
}
