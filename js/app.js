
/* ======================
CACHED DOM NOTES
=========================*/

const body = document.querySelector("body")
const getStartedBtn = document.querySelector("#get-started")
const startGameBtn = document.querySelector("#start-game")
const board = document.querySelector("#chris-board")
const gameConsole = document.querySelector("#game-controls")
const guessCounter = document.querySelector("#guess-count > span")
const questionCounter = document.querySelector("#question-count > span")
const menu = document.querySelector(".menu")
const tutorial = document.querySelector("#modal-textbox")
const chrises = document.querySelectorAll(".square")
const askButtons = document.querySelectorAll(".ask button")
const answers = document.querySelector("#answers > span")
const makeGuessBtn = document.getElementById("make-guess")
const cancelBtn = document.getElementById("cancel-guess")
const resultTitle = document.getElementById("result-title")
const scoreNumber = document.getElementById("score-number")
const scoreText = document.getElementById("score-text")
const stars = document.getElementById("stars")
const playAgain = document.getElementById("play-again")
const closeTryModal = document.getElementById("close-modal")
const tryModal = document.getElementById("try-textbox")
const updatesModal = document.getElementById("updates-textbox")
const modalBackground = document.querySelector(".modal-background")

console.log(makeGuessBtn)

/* ======================
CLASSES
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

class Player{
    constructor(guessCount = 3, questionCount = 0){
        this.guessCount = guessCount
        this.questionCount = questionCount
        this.currentChrises = [
            "hemsworth", "columbus", "rock", "pang", "jenner", "ronaldo",
            "aguilera", "cavallari", "brown", "christ", "milian", "pratt",
            "castro", "ludacris", "teigen", "yang", "stewart", "wallace",
            "evans", "hendricks", "tucker", "roldan", "wiig", "paul",
        ]

    }
    updateGuessCount(){
        this.guessCount--
        guessCounter.textContent = this.guessCount
    }
    updateQuestionCount(){
        this.questionCount++
        questionCounter.textContent = this.questionCount
    }
    win(){
        resultTitle.textContent = "Congrats! You won!"
        scoreText.textContent =  "You sure know your Chris's"
        this.checkScore()
        this.checkStars()
        modalBackground.style.display = "block"
        updatesModal.style.display = "block"
    }
    lose(){
        resultTitle.textContent = "You Lost"
        scoreText.textContent =  "Better luck next time."
        this.checkScore()
        stars.textContent = "☆☆☆"
        modalBackground.style.display = "block"
        updatesModal.style.display = "block"

    }
    checkScore(){
        scoreNumber.textContent = this.questionCount * 1000
        

    }
    checkStars(){
        if(this.questionCount < 5){
            
            stars.textContent = "★★★"
        }
        else if(this.questionCount >=5 && this.questionCount<=10){
            stars.textContent = "★★☆"
        }
        else if(this.questionCount >=11 && this.questionCount<=15){
            stars.textContent = "★☆☆"
        }
        else{
            stars.textContent = "☆☆☆"
        }
    }

    
}
/* ======================
GLOBAL VARS
=========================*/
let computedChris = ""

let player = new Player()
const chrisList = [
    new Chris("hemsworth", "male", true, ["actor"], "caucasian", "blond"),
    new Chris("columbus", "male", false, ["historic-figure"], "caucasian", "brunette"),
    new Chris("rock", "male", true, ["actor", "comedian"], "african-american", "brunette"),
    new Chris("pang", "male", true, ["actor"], "asian", "brunette"),
    new Chris("jenner", "female", true, ["tv-personality"], "caucasian", "brunette"),
    new Chris("aguilera", "female", true, ["actor", "singer"], "latino", "blond"),
    new Chris("cavallari", "female", true, ["tv-personality"], "caucasian", "blond"),
    new Chris("brown", "male", true, ["singer"], "african-american", "blond"),
    new Chris("christ", "male", false, ["historic-figure"], "asian", "brunette"),
    new Chris("milian", "female", true, ["actor"], "latino", "brunette"),
    new Chris("pratt", "male", true, ["actor"], "caucasian", "brunette"),
    new Chris("castro", "male", true, ["singer"], "latino", "brunette"),
    new Chris("ludacris", "male", true,["actor", "singer"], "african-american", "brunette"),
    new Chris("teigen", "female", true, ["tv-personality"], "asian", "brunette"),
    new Chris("yang", "female", true, ["doctor","tv-personality"], "asian", "brunette"),
    new Chris("stewart", "female", true, ["actor"], "caucasian", "brunette"),
    new Chris("wallace", "male", false, ["singer"], "african-american", "brunette"),
    new Chris("evans", "male", true, ["actor"], "caucasian", "brunette"),
    new Chris("hendricks", "female", true, ["actor"], "caucasian", "red"),
    new Chris("tucker", "male", true, ["actor", "comedian"], "african-american", "brunette"),
    new Chris("roldan", "male", true, ["athlete"], "latino", "brunette"),
    new Chris("wiig", "female", true, ["actor", "comedian"], "caucasian", "blond"),
    new Chris("paul", "male", true, ["athlete"], "african-american", "brunette"),
]

console.log(chrisList)
console.log(player)
/* =============================
FUNCTIONS
============================= */
const startTutorial = () => {
    console.log("yerr ")
    menu.style.display = "none"
    tutorial.style.display = "block"
}

const startGame = () => {
    console.log("game startedddd")
    computedChris = randomizeChris()
    console.log(computedChris)
    setupGame()
}

const setupGame = () =>{
    tutorial.style.display = "none"
    board.style.display = "block"
    gameConsole.style.display = "block"

}

const randomizeChris = () =>{
    return  chrisList[Math.floor(Math.random() * 24)];
}

const makeGuess = () => {
    
    cancelBtn.style.display = "block"
    
    chrises.forEach((chris) =>{

        let chrisLastName = chris.querySelector(".name")

        if(player.currentChrises.includes(chris.id)){

            chris.addEventListener('click', function (){
                player.updateGuessCount()
                if(computedChris.lastName !== chris.id && player.guessCount === 0){
                    console.log("you lose")
                    player.lose()

                }
                else if(computedChris.lastName === chris.id){
                    console.log("You win")
                    player.win()

                }
                else if (computedChris.lastName !== chris.id && player.guessCount !== 0){
                   tryModal.style.display = "block"
                   modalBackground.style.display = "block"

                }
            })
            
        }
        else{
            // chrisLastName.style.backgroundColor = "#c7c7c7"
            chris.style.backgroundColor = "#c7c7c7"
            chris.classList.add("no-click")
        }
 
    })
}

const cancelGuess = () => {
    
    cancelBtn.style.display = "none"
    chrises.forEach((chris) =>{

        let chrisLastName = chris.querySelector(".name")
        
   
        if(player.currentChrises.includes(chris.id)){
            console.log("this chris is emotionally available")
        }
        else{
            // chrisLastName.style.backgroundColor = "#d3232c"
            chris.classList.remove("no-click")
            chris.style.backgroundColor = "#d3232c"
            chris.style.color = "aliceblue"
        }

    })
}

const closeModal = () => {
    tryModal.style.display = "none"
    modalBackground.style.display = "none"
}
/* =============================
EVENT LISTENERS
============================= */

closeTryModal.addEventListener("click", closeModal)
getStartedBtn.addEventListener("click", startTutorial)

startGameBtn.addEventListener("click", startGame)

makeGuessBtn.addEventListener("click", makeGuess)

cancelBtn.addEventListener("click", cancelGuess)


chrises.forEach((chris) =>{
    let chrisLastName = chris.querySelector(".name")
    if(player.currentChrises.includes(chris.id)){
        console.log("this chris is emotionally available")
        chris.addEventListener('mouseenter', function (){
            chrisLastName.style.backgroundColor = "#094f8f"
            chrisLastName.style.color = "aliceblue"
        })  
        chris.addEventListener('mouseleave', function (){
            chrisLastName.style.backgroundColor = "aliceblue"
            chrisLastName.style.color = "#094f8f"
        })

    }
    chris.addEventListener('dblclick', function(){

        let selectedChris = document.getElementById(chris.id)
        let index = player.currentChrises.indexOf(chris.id)
      
        let chrisLastName = selectedChris.querySelector(".name")
        let chrisImage = selectedChris.querySelector(".image")

        
        if (chrisImage.style.display === "none"){
            chrisImage.style.display = "initial"
            chrisLastName.style.backgroundColor = "aliceblue"
            chrisLastName.style.color = "#094f8f"
            player.currentChrises.push(chris.id)
            // console.log(player.currentChrises)
            

        } 
        else {
            chrisImage.style.display = "none"
            player.currentChrises.splice(index,1)
            // console.log(player.currentChrises)
            
        }

    })
})

askButtons.forEach((question) =>{
    question.addEventListener('click', function(){
  
        let selectedQuestion = question.id
        let professions = computedChris.profession
        let selectedButton = document.getElementById(selectedQuestion)

        selectedButton.disabled = true
        selectedButton.style.backgroundColor = "#c7c7c7"
        selectedButton.style.color = "#c7c7c7"
        player.updateQuestionCount()

        
        switch(selectedQuestion){
            case "female":
                if(computedChris.sex === "female"){
                    answers.textContent = "Yes"
                }
                else{
                    answers.textContent = "No!"
                }
                
                break
            case "male":
                if(computedChris.sex === "male"){
                    answers.textContent = "Yes"
                }
                else{
                    answers.textContent = "No!"
                }
                break
            case "alive":
                if(computedChris.alive){
                    answers.textContent = "Yes"
                }
                else{
                    answers.textContent = "No!"
                }
                break
            case "singer":
                if(professions.includes("singer")){
                    answers.textContent = "Yes"
                }
                else{
                    answers.textContent = "No!"
                }
                break
            case "actor":
                console.log("actor")
                if(professions.includes("actor")){
                    answers.textContent = "Yes"
                }
                else{
                    answers.textContent = "No!"
                }
                break
            case "tv-personality":
                console.log("tv personality")
                if(professions.includes("tv-personality")){
                    answers.textContent = "Yes"
                }
                else{
                    answers.textContent = "No!"
                }
                break
            case "doctor":
                console.log("doctor")
                if(professions.includes("doctor")){
                    answers.textContent = "Yes"
                }
                else{
                    answers.textContent = "No!"
                }
                break
            case "comedian":
                console.log("comedian")
                if(professions.includes("comedian")){
                    answers.textContent = "Yes"
                }
                else{
                    answers.textContent = "No!"
                }
                break
            case "historic-figure":
                console.log("historic-figure")
                if(professions.includes("historic-figure")){
                    answers.textContent = "Yes"
                }
                else{
                    answers.textContent = "No!"
                }
                break
            case "african-american":
                console.log("african-american")
                if(computedChris.ethnicity === "african-american"){
                    answers.textContent = "Yes"
                }
                else{
                    answers.textContent = "No!"
                }
                
                break
            case "latino":
                console.log("latino")
                console.log("latino")
                if(computedChris.ethnicity === "latino"){
                    answers.textContent = "Yes"
                }
                else{
                    answers.textContent = "No!"
                }
                break
            case "asian":
                console.log("asian")
               
                if(computedChris.ethnicity === "asian"){
                    answers.textContent = "Yes"
                }
                else{
                    answers.textContent = "No!"
                }
                break
            case "caucasian":
                console.log("caucasian")
               
                if(computedChris.ethnicity === "caucasian"){
                    answers.textContent = "Yes"
                }
                else{
                    answers.textContent = "No!"
                }
                break
            case "blond":
                console.log("blond")
                
                if(computedChris.hairColor === "blond"){
                    answers.textContent = "Yes"
                }
                else{
                    answers.textContent = "No!"
                }
                break
            case "brunette":
                console.log("brunette")
                if(computedChris.hairColor === "brunette"){
                    answers.textContent = "Yes"
                }
                else{
                    answers.textContent = "No!"
                }
                break
            case "red":
                console.log("red")
                if(computedChris.hairColor === "red"){
                    answers.textContent = "Yes"
                }
                else{
                    answers.textContent = "No!"
                }
                break
        }

    })
})