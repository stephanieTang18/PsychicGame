// Varriables
var wins = 0;
$("#wins").text(wins);
var computerletter = "";
$("#computerLetter").text(computerletter);
var losses = 0;
$("#losses").text(losses);
var guessLeft = 10;
$("#guessLeft").text(guessLeft);
var guessSoFar = [];
$(document).ready(function () {
    //initalizing the alphabet
    var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //computer's first pick
    var letter = options[Math.floor(Math.random() * options.length)];
    $(document).on("keyup", function (event) {
        var userGuess = event.key;
        // console.log(options.indexOf(event.key));
        if (options.indexOf(userGuess) >= 0) {
            if (guessSoFar.indexOf(userGuess) == -1) {
                guessSoFar.push(userGuess);
                $("#guessSoFar").text(guessSoFar);
                if ((userGuess == letter)) {
                    wins++;
                    guessSoFar = [];
                    $("#guessSoFar").text(guessSoFar);
                    $("#wins").text(wins);
                    guessLeft = 10; //resets game
                    $("#guessLeft").text(guessLeft);
                    letter = options[Math.floor(Math.random() * options.length)]; //computer picks another letter
                } else {
                    guessLeft--;
                    $("#guessLeft").text(guessLeft);
                    if (guessLeft == 0) {
                        guessSoFar = [];
                        $("#guessSoFar").text(guessSoFar);
                        losses++;
                        $("#losses").text(losses);
                        guessLeft = 10;
                        $("#guessLeft").text(guessLeft);
                        letter = options[Math.floor(Math.random() * options.length)];
                    }
                }
            }
        }
    });
});
