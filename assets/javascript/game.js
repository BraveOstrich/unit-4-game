
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

    function random(){
    
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        $("#random-number").text(randomNumber);
    };

    // Create the crystals random number

    function setNumbers(){
        crystalNumberOne = Math.floor(Math.random() * 12) + 1;
        crystalNumberTwo = Math.floor(Math.random() * 12) + 1;
        crystalNumberThree = Math.floor(Math.random() * 12) + 1;
        crystalNumberFour = Math.floor(Math.random() * 12) + 1;
    }

    // Crystals on click function

    $("#crystal-1").click(function(){
        pointsOne++;
        total1 = crystalNumberOne * pointsOne;
        gameScore();
    });

    $("#crystal-2").click(function(){
        pointsTwo++;
        total2 = crystalNumberTwo * pointsTwo;
        gameScore();
    });

    $("#crystal-3").click(function(){
        pointsThree++;
        total3 = crystalNumberThree * pointsThree;
        gameScore();
    });

    $("#crystal-4").click(function(){
        pointsFour++;
        total4 = crystalNumberFour * pointsFour;
        gameScore();
    });



    // Scoring function

    function gameScore(){
        
        totalScore = total1 + total2 + total3 + total4;
        $("#total-score").text(totalScore);
        winsLosses();
    };
    

    // Wins & Losses

    function winsLosses(){
        if(randomNumber < totalScore){
            losses++;
            $("#losses").text("Losses: " + losses);
            totalScore = 0;
            reset();
         } else if(randomNumber == totalScore){
            wins++;
            $("#wins").text("Wins: " + wins);
            totalScore = 0;
            reset();
         }
    };
    
    
    function reset(){
        randomNumber;
        totalScore = 0;
        $("#total-score").text(totalScore);
        total1 = 0;
        total2 = 0;
        total3 = 0;
        total4 = 0;
        pointsOne = 0;
        pointsTwo = 0;
        pointsThree = 0;
        pointsFour = 0;
        random();
        setNumbers();

    };
    
    // Run functions

    random();
    setNumbers();
    reset();
    
    
    


});


