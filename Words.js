var Letters = require("./Letters")

var Word = function (word) {
    this.word = word,
        this.lettersarr = [],
        this.makeletarr = function () {
            for (var i = 0; i < this.word.length; i++) {
                var y = this.word.charAt(i)
                var x = new Letters(y)
                this.lettersarr.push(x)
            }
        },

    this.disp = function (guess) {

        for (var i = 0; i < this.lettersarr.length; i++) {
            var x = this.lettersarr[i]
            x.check(guess)
        }

    }

}


module.exports = Word;