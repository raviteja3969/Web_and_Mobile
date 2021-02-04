var user=0,computer=0;// Declaring variables to count score
function score(){
    var score_div = document.getElementById("score").innerHTML = user + " - " + computer;
}//sending score using ID
setInterval(score, 50);//The setInterval() method calls a function or evaluates an expression at specified intervals
var pick;
function player(pick){
    compare(pick);
}//Value of pick is received from HTML which in turn calls the function with game logic
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


}//Function to compare values of user and computer to decide who wins

function denoteWinner() {
    $("#result").html("<h1 style='background-color: lightgreen'>You Win!</h1>");
    user++;
}//Function is called when user wins the comparision

function denoteLoser() {
    $("#result").html("<h1 style='background-color: lightsalmon'>Computer Wins!</h1>");
    computer++;
}//Function is called when computer wins the comparision

function denoteDraw() {
    $("#result").html("<h1 style='background-color: #6c757d'>Draw!</h1>")

}
