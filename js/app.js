
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
const chrises = document.querySelectorAll(".square")




/* ======================
CREATE Tamagotchi
=========================*/
class Chris{
    constructor(lastName, sex, alive = true, profession, ethnicity, hairColor){
        this.lastName = lastName
        this.sex = sex
        this.alive = alive
        this.profession = profession
        this.ethnicity = ethnicity
        this.hairColor = hairColor
    }
    
}
/* ======================
GLOBAL VARS
=========================*/
const chrisList = [
    new Chris("hemsworth", "male", true, ["actor"], "caucasian", "blond"),
    new Chris("columbus", "male", false, ["historic figure"], "caucasian", "brown"),
    new Chris("rock", "male", true, ["actor", "comedian"], "african-american", "brown"),
    new Chris("pang", "male", true, ["actor"], "asian", "brown"),
    new Chris("jenner", "female", true, ["tv personality"], "caucasian", "brown"),
    new Chris("aguilera", "female", true, ["actor", "singer"], "latino", "blond"),
    new Chris("cavallari", "female", true, ["tv personality"], "caucasian", "blond"),
    new Chris("brown", "male", true, ["singer"], "african-american", "blond"),
    new Chris("christ", "male", false, ["historic figure"], "asian", "brown"),
    new Chris("milian", "female", true, ["actor"], "latino", "brown"),
    new Chris("pratt", "male", true, ["actor"], "caucasian", "brown"),
    new Chris("castro", "male", true, ["singer"], "latino", "brown"),
    new Chris("ludacris", "male", true,["actor", "singer"], "african-american", "brown"),
    new Chris("teigen", "female", true, ["tv personality"], "asian", "brown"),
    new Chris("yang", "female", true, ["doctor","tv personality"], "asian", "brown"),
    new Chris("stewart", "female", true, ["actor"], "caucasian", "brown"),
    new Chris("wallace", "male", false, ["singer"], "african-american", "brown"),
    new Chris("evans", "male", true, ["actor"], "caucasian", "brown"),
    new Chris("hendricks", "female", true, ["actor"], "caucasian", "red"),
    new Chris("tucker", "male", true, ["actor", "comedian"], "african-american", "brown"),
    new Chris("roldan", "male", true, ["athlete"], "latino", "brown"),
    new Chris("wiig", "female", true, ["actor", "comedian"], "caucasian", "blond"),
    new Chris("paul", "male", true, ["athlete"], "african-american", "brown"),
]

console.log(chrisList)

/* =============================
FUNCTIONS
============================= */
const startTutorial = () => {
    console.log("yerr")
    menu.style.display = "none"
    tutorial.style.display = "block"

}

const startGame = () => {
    console.log("bitchhh")
    setupGame()
    console.log(chrises)
   

}

const setupGame = () =>{
    tutorial.style.display = "none"
    board.style.display = "block"
    gameConsole.style.display = "block"

}

// const whichChris = (chris) => {
//     console.log("clicked on chris")
//     console.log(evt.getAttribute("id"))
// }

/* =============================
EVENT LISTENERS
============================= */

getStartedBtn.addEventListener("click", startTutorial)

startGameBtn.addEventListener("click", startGame)


chrises.forEach((chris) =>{
    chris.addEventListener('dblclick', function(){
        console.log("clicked on chris")

      
        let selectedChris = document.getElementById(chris.id)
        let chrisLastName = selectedChris.querySelector(".name")
        let chrisImage = selectedChris.querySelector(".image")

    
        if(chrisImage.style.display === "none"){
            chrisImage.style.display = "initial"
            chrisLastName.style.backgroundColor = "aliceblue"
            chrisLastName.style.color = "#094f8f"

        } 
        else{
            chrisImage.style.display = "none"
            chrisLastName.style.backgroundColor = "#d3232c"
            chrisLastName.style.color = "aliceblue"
        }

    })
})