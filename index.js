
function myfunction() {


  var LoveScore = Math.random()* 100;
  LoveScore = Math.floor(LoveScore) + 1;

  var lovePercentage = LoveScore + "%";

  n = document.querySelectorAll("input").length;

  for( var i=0; i<n; i++){
    var x = document.querySelectorAll("input")[i].value;
    var name1 = document.querySelectorAll("input")[0].value;
    var name2 = document.querySelectorAll("input")[1].value;

    if(x === "" || !isNaN(x) ){
      document.querySelector("p.output").innerHTML = "Enter valid name";
      exit;
    }
    else{
      document.querySelector("h3").innerHTML = " You " + " love " + " " + name2 +  " by " +  " " + lovePercentage;
    }
    document.querySelectorAll("input")[i].value="";
}

  if(LoveScore >= 80 && LoveScore<=100){
    $(".first").show();
    $("h2").text("Your Love eachother like Romeo loved Juliet and this love tune for you") ;
    var audio1 = new Audio("titanic_flute.mp3");
    audio1.play();

  }
  else if (LoveScore < 80 && LoveScore >=50) {
    $(".second").show();
    $("h2").text("Your Love eachother like kanya loves kanya and this love tune for you") ;
    var audio2 = new Audio("tujhe_kitna_chahne.mp3");
    audio2.play();
  }
  else if(LoveScore < 50 && LoveScore >=30){
    $(".third").show();
    $("h2").text("You are made eachother like water and oil and this sad 😢 tune for you") ;
    var audio3 = new Audio("sad_ringtone1.mp3");
    audio3.play();
  }

  else {
    $(".fourth").show();
    $("h2").text("You are made eachother like water and oil and this sad 😢 tune for you");
    var audio4 = new Audio("sad_ringtone.mp3");
    audio4.play();
  }
}
