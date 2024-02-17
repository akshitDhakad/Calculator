var numberOfButtons = document.getElementsByClassName("btn").length;
// console.log(numberOfButtons)
for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".btn")[i].addEventListener("click", function() {
    var buttonpressed = this;
    // console.log(buttonpressed)
    buttonAnimation(buttonpressed)  
    // buttonAnimation(buttonInnerHTML);   
    // var audio = new Audio('sound.mp3');
    // audio.play();
  });
}
// Animation
function buttonAnimation(buttonpressed) {
    // var activeButton = document.getElementById(buttonpressed);
    // console.log(activeButton)
    // console.log(activeButton)
    buttonpressed.classList.add("pressed");
    setTimeout(function() {
      buttonpressed.classList.remove("pressed");
    }, 100);
}
