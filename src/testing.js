/*Scrabble challenge resolution in scrabble.js This file was used to 
try and test different approaches.*/

class Scrabble {
    // Write your implementation here
    constructor(word) {
        this.word = word;
    }
    score() {
        const points = {
            a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1,
            d: 2, g: 2,
            b: 3, c: 3, m: 3, p: 3,
            f: 4, h: 4, v: 4, w: 4, y: 4,
            k: 5,
            j: 8, x: 8,
            q: 10, z: 10
        };
        let total = 0;
        let i = 0;
        if (this.word) {
            this.word = this.word.toLowerCase();
            for (i = 0; i < this.word.length; i++) {
                total += points[this.word[i]];
            };
        }
        else {
            total = 0;
        };
        if (isNaN(total)) {
            return 0;
        }
        else {
            return total;
        };
    };
};
let scrabble = new Scrabble('OXYPHENBUTAZONE');
console.log(scrabble.score()); //41
let scrabble2 = new Scrabble();
console.log(scrabble2.score()); //0
let scrabble3 = new Scrabble(" \t\n");
console.log(scrabble3.score()); //0
let scrabble4 = new Scrabble('quirky');
console.log(scrabble4.score()); //22
module.exports = Scrabble