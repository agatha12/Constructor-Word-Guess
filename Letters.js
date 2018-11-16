var Letters = function(letter){
    this.letter = letter,
    this.guessed = false
    this.toString = function(){
        if (this.guessed){
            process.stdout.write(this.letter + " ")
        }
        else{
            process.stdout.write("_ ")
        }
    }
    this.check = function(a){
        // console.log(a)
        if(this.guessed){
            this.toString()
        }   
        else{    // console.log(a)
        // console.log(this.letter)
        if (a === this.letter){
            
            this.guessed = true
            this.toString()
        }
        else{
           
            this.toString()
        }
        
    }
    }
}

// var b = new letter ("b")
// b.check("a")
module.exports = Letters;