# Welcome to Guess Who? Chris, Cris, or Kris Edition

### Live Link
Play the game right [here!](https://ma867.github.io/guessWho/)

### Project Description
This game is an online version of the classic board game, Guess Who?. In the original game, there are two players. Each player gets a board with 24 different characters. The players pick one character on the board, which is kept secret from the other player. The players get to ask each other yes/no questions regarding the appearance of their respective secret character. As questions get asked, the characters get narrowed down and eventually the players are able to make a guess. Whoever guesses first wins. You can read more about the original board game [here.](https://en.wikipedia.org/wiki/Guess_Who%3F)

In this version, your competition is the computer! The computer will randomly select a character from the board. Your task is to ask questions from the list provided on the control panel. Just like the real game, you can discard the characters from the board, and keep narrowing down the guess list. 

At any point, you can guess which Chris it is, but careful, because you only have 3 chances!

### Technologies\Resources Used:
* JavaScript
* HTML
* CSS

### Design Approach
* The first step after deciding on my game was to have a design concept in terms of the players, character amount, character atributes , and the list of characters on the board.
  * **Players:** I decided on two players, and made one of the players the computer.
  * **Character Amount:** I decided on having 24 Chris characters just like the real-life board-game.
  * **Character Attributes:** Because there was a need to control the question input for the player,I decided to provide questions myself. To create the questions, I settled on four attributes: sex (male/female), ethnicity, hair-color, and profession.
  * **Character List:** Based on the attributes, I began researching celebrities that were varied enough.
* The second step involved creating quick wireframes for the look of the board and the flow. After the sketches were done, I proceeded to create the barebones HTML and CSS for the board.
![wireframes](https://i.imgur.com/wBEJLWn.jpg)

* Lastly, I began implementing the JS code for manipulating the DOM as well as adding CSS styling to make it more user friendly. This was an iterative step.
