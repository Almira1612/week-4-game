
	$(document).ready(function() {

  
  var targetNumber=Math.floor(Math.random()*51+19);


$("#random").text(targetNumber);
$("#random").css({
   fontSize: "30px"
})
var counter = 0;
var wins = 0;
var losses = 0;
var numberOptions = [10, 5, 3, 7];

  
function newGame(){
	counter = 0;
	
	}

for (var i = 0; i < numberOptions.length; i++) {

	var imageCrystal = $(".img-thumbnail");

	imageCrystal.addClass("crystal-image");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
   }
    
   $(".crystal-image").on("click", function() {

   	var crystalValue = ($(this).attr("data-crystalvalue"));

    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    $("#total").html(counter);

    
    if (counter === targetNumber) {
      alert("You win!");
      $(".images").html("<img src='./assets/images/win.png' width=150px />");
      $("#wins").html(wins + 1)
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      $(".images").html("<img src='./assets/images/lost.png' width=150px />");
      $("#losses").html(losses + 1)
    }

    
    });
   $("button").on("click",function(){

    newGame();
    $("#total").html(counter);
    $(".images").html("")
});
  });









	

