
// Variables
var min = 19;
var max = 120;
var randomNumber;
var totalScore;
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
var total1 = 0;
var total2 = 0;
var total3 = 0;
var total4 = 0;

$(document).ready(function() {

    // Create the random number

    function random (){
    
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomNumber);
        $("#random-number").append(randomNumber);
    };

    // Create the crystals random number

    function setNumbers(){
        crystalNumberOne = Math.floor(Math.random() * 12) + 1;
        crystalNumberTwo = Math.floor(Math.random() * 12) + 1;
        crystalNumberThree = Math.floor(Math.random() * 12) + 1;
        crystalNumberFour = Math.floor(Math.random() * 12) + 1;
        console.log(crystalNumberOne, crystalNumberTwo, crystalNumberThree, crystalNumberFour);
    }

    // Crystals on click function

    $("#crystal-1").click(function(){
        pointsOne++;
        total1 = crystalNumberOne * pointsOne;
        gameScore();
        winsLosses()
        console.log(total1);
    });

    $("#crystal-2").click(function(){
        pointsTwo++;
        total2 = crystalNumberTwo * pointsTwo;
        gameScore();
        winsLosses()
        console.log(total2);
    });

    $("#crystal-3").click(function(){
        pointsThree++;
        total3 = crystalNumberThree * pointsThree;
        gameScore();
        winsLosses()
        console.log(total3);
    });

    $("#crystal-4").click(function(){
        pointsFour++;
        total4 = crystalNumberFour * pointsFour;
        gameScore();
        winsLosses()
        console.log(total4);
    });

   // Scoring function

   function gameScore(){
       
    totalScore = total1 + total2 + total3 + total4;
    $("#total-score").text(totalScore);
    console.log(totalScore);
    };

    // Wins & Losses
    function winsLosses(){
        if(randomNumber < totalScore){
            losses++;
            $("#losses").text("Losses: " + losses);
         } else if(totalScore === randomNumber)
            wins++;           
            $("#wins").text("Wins: " + wins);
        };

    function reset(){
        if(wins++ || losses++){
            random();
            setNumbers();
        } 
    }
    // Run functions

    
    random();
    setNumbers();
    //gameScore();
    
    


});


