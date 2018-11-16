var answers = ["shark", "sunfish", "octopus", "kelp", "lobster", "plankton", "squid", "whale", "seaweed"];
var randomAnswers = answers[Math.floor(Math.random() * answers.length)];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var Words = require("./Words")
var inquirer = require("inquirer")
var remaining = 10
var theword = new Words (randomAnswers)
var score = []
var guessed = []




    
    
    theword.makeletarr()
    makeAguess()
    function makeAguess(){
    inquirer.prompt([

        {
          type: "input",
          name: "userInput",
          message: "Guess a letter..."
        }
      
      ]).then(function(userGuess) {
        var guess = userGuess.userInput.toLowerCase()
        theword.disp(guess)
        var x = theword.word.includes(guess)
        // console.log(x)
        if (letters.includes(guess)){
        if(guessed.includes(guess)){
            console.log("\nYou already guessed that letter")
            makeAguess()
        }
        else{
            guessed.push(guess)
        if(x){
            console.log("\nCorrect")
            checkWin()
        }
        
        else{
            remaining = remaining-1
            if(remaining === 0){
                console.log("\nYou have no remaining guesses. The word was " + theword.word)
            }
            else{
            console.log("\nIncorrect, you have " + remaining + " guesses remaining")
            makeAguess()
            }
        }
    }
}
    else{
        console.log("\nThat was not a letter")
        makeAguess()
    }
    
      
      });
    }

    


function checkWin(){
        var count = 0
        
    for(var i = 0; i < theword.word.length; i++){
        if(theword.lettersarr[i].guessed){
            var pop = theword.lettersarr[i].letter
            if (score.includes(pop)){

            }else{
                for (var h = 0; h < theword.word.length; h++) {
                    if (theword.word.charAt(h) === pop) {
                        count++
                    }
                }
                for (var k = 0; k < count; k++) {
                    score.push(pop)
                }
                
            
            }
        }
        
    }
        if (score.length === theword.lettersarr.length){
            console.log("You win!")
        }
        else{
            
            makeAguess()
        }
    
}