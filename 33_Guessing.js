// Guessing Game
// Guess a Number form 1 to 5
// Generate a Random Number Between 1 to 5
// If the Guess Number matches random number;
// Run the Game for 5 Times
// Show the Number Of Wons and Lost

var numOfWon = 0;
var numOfLost = 0;

for (var i = 0; i <= 5; i++) {
    var guessNum = parseInt(prompt("Enter Guess Number from 1 to 5: "));
    var randNum = Math.round(Math.random() *5) + 1;

    if (guessNum == randNum) {
        alert("You Have Won")
        numOfWon++;
    }else{
        alert("You have lost. Random Number is " + randNum)
        numOfLost++
    }
}
document.write('You are Total ' + numOfWon + 'Times Won </br>' ) 
document.write('You are Total ' + numOfLost + 'Times Lost')

