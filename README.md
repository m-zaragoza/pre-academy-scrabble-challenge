# Scrabble Challenge

Welcome to the Scrabble challenge!

## About the project
This challenge was to be completed before the start of the Digital Futures academy. The objectives of the project were to build a simple program using functions, loops and flow control, and to use `Git` and `GitHub`.\
This was my first experience coding in Java Script, in June 2022. 
</br></br>

## Built with
Vanilla Java Script. 
</br></br>

## Getting started
First clone this repository to your local machine.\
Run this command to install all the dependencies:
```
$ npm install
```

Run this command to test the project:
```
$ npm test
```
_Note: at the time of writting this program I didn't know about testing (how to write tests nor how to run them), hence the console logs at the bottom of the file._\
\
The file `testing.js` is to be ignored. This was the rudimental way I had of doing what branches do!
</br></br>

## Requirements
Given a word, compute the scrabble score for that word.

##### Letter Values

| Letter                        | Value  |
| ----                          |  ----  |
| A, E, I, O, U, L, N, R, S, T  |     1  |
| D, G                          |     2  |
| B, C, M, P                    |     3  |
| F, H, V, W, Y                 |     4  |
| K                             |     5  |
| J, X                          |     8  |
| Q, Z                          |     10 |

Example
"cabbage" should be scored as worth 14 points:

- 3 points for C
- 1 point for A, twice
- 3 points for B, twice
- 2 points for G
- 1 point for E

And to total:

```
3 + 2x1 + 2x3 + 2 + 1
= 3 + 2 + 6 + 3
= 14
```

### Acceptance Criteria

```javascript
let scrabble = new Scrabble('')
scrabble.score() // => 0

let scrabble = new Scrabble(" \t\n")
scrabble.score() // => 0

let scrabble = new Scrabble(null)
scrabble.score() // => 0

let scrabble = new Scrabble('a')
scrabble.score() // => 1

let scrabble = new Scrabble('f')
scrabble.score() // => 4

let scrabble = new Scrabble('street')
scrabble.score() // => 6

let scrabble = new Scrabble('quirky')
scrabble.score() // => 22

let scrabble = new Scrabble('OXYPHENBUTAZONE')
scrabble.score() // => 41
```

### Extended Acceptance Criteria
> Each `Scrabble` method should be no more than 5 lines and contain no more than 5 operations.

> You can play a double or a triple letter.

> You can play a double or a triple word.
</br></br>

## Review
This was a huge learning experience for me. It was the first time I was writting any code in a programming language and I got to use classes, objects, loops, conditional statements...\
\
If I were to attempt this today, I would cover the extended criteria and would re-write the score function to be easier to read. I would also re-write the points object, to use arrays that hold every letter that share the same score.
</br></br>

## Acknowledgements 
W3 Schools- https://www.w3schools.com/js/
