
// var numberOfImage = document.querySelectorAll(".play").length;
//
// for(var i=0; i<numberOfImage; i++){

$("").on("click", function(){


    var buttonClicked = this.className;

    makeSound(buttonClicked);

      });

    function makeSound(buttonClicked){


    switch (buttonClicked) {
      case "play1":
          var tom1 = new Audio("tujhe_kitna_chahne.mp3");
          tom1.play();
          break;


        case "play2":
            var tom2 = new Audio("titanic_flute.mp3");
            stopAllAudio();
            tom2.play();
          break;

          case "s":
              var tom3 = new Audio("sounds/tom-3.mp3");
              tom3.play();
            break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
              break;

              case "j":
                  var crash = new Audio("sounds/crash.mp3");
                  crash.play();
                break;

                case "k":
                    var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
                  break;

                  case "l":
                      var snare = new Audio("sounds/snare.mp3");
                      snare.play();
                    break;

      default:

    }
}



// function stopAllAudio(buttonClicked){
//   allAudio.forEach((Function(buttonClicked)) => {
//     buttonClicked.pause();
//   });
//
//
// }
