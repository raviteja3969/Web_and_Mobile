$(function () {
});
var hand = ["rock", "paper", "scissors"];
var user=0,computer=0;
function score(){
    var score_div = document.getElementById("score").innerHTML = user + " - " + computer;
}
setInterval(score, 50);
var pick;
function player(pick){
    compare(pick);
}
function compare(choice1) {
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        choice2 = "rock";
    } else if (computerChoice <= 0.67) {
        choice2 = "paper";
    } else {
        choice2 = "scissors";
    }

    if (choice1 === choice2) {

        denoteDraw();
        output();
    } else if (choice1 === "rock") {

        if (choice2 === "scissors") {
            denoteWinner();
            output();
        } else {
            denoteLoser();
            output();
        }
    } else if (choice1 === "paper") {

        if (choice2 === "rock") {
            denoteWinner();
            output();
        } else {
            denoteLoser();
            output();
        }

    } else if (choice1 === "scissors") {

        if (choice2 === "rock") {
            denoteWinner();
            output();
        } else {
            denoteLoser();
            output();
        }
    }


}

function denoteWinner() {
    $("#result").html("<h1 style='background-color: lightgreen'>You Win!</h1>");
    user++;
}

function denoteLoser() {
    $("#result").html("<h1 style='background-color: lightsalmon'>Computer Wins!</h1>");
    computer++;
}

function denoteDraw() {
    $("#result").html("<h1 style='background-color: #6c757d'>Draw!</h1>")

}
function output() {
    $("#score1").html("<h1 class='row' style='background-color: #6c757d'>user:computer</h1>")

}

