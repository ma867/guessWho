
/* ======================
CACHED DOM NOTES
=========================*/

const body = document.querySelector("body")
const getStartedBtn = document.querySelector("#get-started")
const startGameBtn = document.querySelector("#start-game")
const board = document.querySelector("#chris-board")
const gameConsole = document.querySelector("#game-controls")
const menu = document.querySelector(".menu")
const tutorial = document.querySelector("#modal-textbox")


/* ======================
CREATE Tamagotchi
=========================*/

/* ======================
GLOBAL VARS
=========================*/


/* =============================
FUNCTIONS
============================= */
const startTutorial = (evt) => {
    console.log("yerr")
    menu.style.display = "none"
    tutorial.style.display = "block"

}

const startGame = (evt) => {
    console.log("bitchhh")
    setupGame()
   

}

const setupGame = (evt) =>{
    tutorial.style.display = "none"
    board.style.display = "block"
    gameConsole.style.display = "block"

}
/* =============================
EVENT LISTENERS
============================= */

getStartedBtn.addEventListener("click", startTutorial)

startGameBtn.addEventListener("click", startGame)
