/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, previousRoll, playingTo;

init();

// textContent can only set plain text--no html; use innerHTML to put html in
// document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

// var x = document.querySelector("#score-0").textContent;
// console.log(x);


//this shows an anonymous function (no name, can only be used here)
//if we called a different function here, it'd be considered a "callback function" because it's not called by us
document.querySelector(".btn-roll").addEventListener("click", function () {
    if (gamePlaying) {
        // 1. Random Number
        var dice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];

        // 2. Display the result
        var diceDOM1 = document.querySelector("#dice-1");
        diceDOM1.style.display = "block";
        diceDOM1.src = "dice-" + dice[0] + ".png";

        var diceDOM2 = document.querySelector("#dice-2");
        diceDOM2.style.display = "block";
        diceDOM2.src = "dice-" + dice[1] + ".png";

        // 3. Update the round score if the number rolled was not a 1
        if (dice[0] == 6 && previousRoll == 6) {
            scores[activePlayer] = 0;
            // update ui
            document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        } else if (dice[0] !== 1 && dice[1] !== 1) {
            // Add score
            roundScore += dice[0] + dice[1];
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
            previousRoll = dice[0];
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // add current score to player's total score
        scores[activePlayer] += roundScore;

        // update ui
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        //check number we are playing to
        playingTo = parseInt(document.querySelector("#play-to").value, 10);

        // check if player won the game
        if (scores[activePlayer] >= playingTo) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document.querySelector("#dice-1").style.display = "none"; // better to do via adding or removing classes instead of changing css directly
            document.querySelector("#dice-2").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});


function nextPlayer() {
    previousRoll = 0;
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    // document.querySelector(".player-0-panel").classList.remove("active");
    // document.querySelector(".player-1-panel").classList.add("active");
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector("#dice-1").style.display = "none";
    document.querySelector("#dice-2").style.display = "none";
}

// no quotes with init function--if you do, it gets immediately called
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    previousRoll = 0;

    // hide the dice at the start
    document.querySelector("#dice-1").style.display = "none";
    document.querySelector("#dice-2").style.display = "none";

    // No # needed when using getElementById
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-0").textContent = "0";

    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active"); // remove, then add the active class; otherwise you'd get two active
    // classes if player 0 was already active. Then calling remove later would still leave one "active"
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
}

/*
CHALLENGE PROBLEMS
1. A player loses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's
turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the
predefined score of 100. (Hint: you can read the value with the value property in JavaScript. This is a
good opportunity to use Google to figure this out)
3. Add another dice to the game so thast there are two dice now. The player loses his current score when
one of them is a 1. (Hint: you will need CSS to  position the second dice, so take a look at the CSS code for the first one.)
*/