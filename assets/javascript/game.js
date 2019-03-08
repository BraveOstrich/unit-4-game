
// Random number variables
var min = 19;
var max = 120;
var randomNumber;
var totalScore = 0;
var wins = 0;
var losses = 0;
var crystalNumberOne;
var crystalNumberTwo;
var crystalNumberThree;
var crystalNumberFour;
var pointsOne = 0;
var pointsTwo = 0;
var pointsThree = 0;
var pointsFour = 0;
var total1;
var total2;
var total3;
var total4;

$(document).ready(function() {
    // Create the random number

    function random (){
    
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomNumber);
        $("#random-number").append(randomNumber);
    };

    function setNumbers(){
        crystalNumberOne = Math.floor(Math.random() * 12) + 1;
        crystalNumberTwo = Math.floor(Math.random() * 12) + 1;
        crystalNumberThree = Math.floor(Math.random() * 12) + 1;
        crystalNumberFour = Math.floor(Math.random() * 12) + 1;
        console.log(crystalNumberOne, crystalNumberTwo, crystalNumberThree, crystalNumberFour);
    }

    
    $("#crystal-1").click(function(){
        pointsOne++;
        total1 = crystalNumberOne * pointsOne;
        console.log(total1);
    });

    $("#crystal-2").click(function(){
        pointsTwo++;
        total2 = crystalNumberTwo * pointsTwo;
        console.log(total2);
    });

    $("#crystal-3").click(function(){
        pointsThree++;
        total3 = crystalNumberThree * pointsThree;
        console.log(total3);
    });

    $("#crystal-4").click(function(){
        pointsFour++;
        total4 = crystalNumberFour * pointsFour;
        console.log(total4);
    });

    
   // Scoring
   function gameScore(){
       
    totalScore = total1 + total2 + total3 + total4;
    $("#total-score").text(totalScore);
    console.log(totalScore);
    };

    

    random();
    setNumbers();
    gameScore();


});


