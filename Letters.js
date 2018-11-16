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
     
        if(this.guessed){
            this.toString()
        }   
        else{    
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


module.exports = Letters;