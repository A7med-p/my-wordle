let squareid = 0;
let squarepid = 0;
let userword=[]
let theChosenOne = "CLEAN"
let one = theChosenOne.split('')
let count = 0;
let maxattempts = 6;
let attempts = 0;

let letters = document.querySelectorAll('.sqrdown');
let square = document.querySelectorAll('.sqrup');
let enter = document.querySelector('.enter')
let back = document.querySelector('.back')
let keyboards = document.querySelectorAll('body')

letters.forEach(letter => {
 letter.addEventListener('click', () => {
    console.log('click')
    if(attempts < maxattempts){
    if (squareid <= 4 && letter.innerText !== 'enter' && letter.innerText !== 'back') {
        square[squarepid].innerText = letter.innerText;
        userword.push(letter.innerText)
        squareid = squareid + 1;
        squarepid = squarepid + 1;
    }
    if( letter.innerText == 'enter' && squareid == 5){
        enters()
    }
    if (letter.innerText == 'back' && attempts !== maxattempts) {
        backs()
    }
}
})
})

keyboards.forEach(keyboard => {
keyboard.addEventListener('keyup', (input) => {
    console.log('click')
let e;
switch (input.key) {
    case ('a') :
        e = "A"
        break;
    case ('b') :
        e = "B"
        break;
    case ('c') :
        e = "C"
        break;
    case ('d') :
        e = "D"
        break;
    case ('e') :
        e = "E"
        break;
    case ('f') :
        e = "F"
        break;
    case ('g') :
        e = "G"
        break;
    case ('h') :
        e = "H"
        break;
    case ('i') :
        e = "I"
        break;
    case ('j') :
        e = "J"
        break;
    case ('k') :
        e = "K"
        break;
    case ('l') :
        e = "L"
        break;
    case ('m') :
        e = "M"
        break;
    case ('n') :
        e = "N"
        break;
    case ('o') :
        e = "O"
        break;
    case ('p') :
        e = "P"
        break;
    case ('q') :
        e = "Q"
        break;
    case ('r') :
        e = "R"
        break;
    case ('s') :
        e = "S"
        break;
    case ('t') :
        e = "T"
        break;
    case ('u') :
        e = "U"
        break;
    case ('v') :
        e = "V"
        break;
    case ('w') :
        e = "W"
        break;
    case ('x') :
        e = "X"
        break;
    case ('y') :
        e = "Y"
        break;
    case ('z') :
        e = "Z"
        break;
    case ('A') :
        e = "A"
        break;
    case ("B") :
        e = "B"
        break;
    case ("C") :
        e = "C"
        break;
    case ("D") :
        e = "D"
        break;
    case ("E") :
        e = "E"
        break;
    case ("F") :
        e = "F"
        break;
    case ("G") :
        e = "G"
        break;
    case ("H") :
        e = "H"
        break;
    case ("I") :
        e = "I"
        break;
    case ("J") :
        e = "J"
        break;
    case ("K") :
        e = "K"
        break;
    case ("L") :
        e = "L"
        break;
    case ("M") :
        e = "M"
        break;
    case ("N") :
        e = "N"
        break;
    case ("O") :
        e = "O"
        break;
    case ("P") :
        e = "P"
        break;
    case ("Q") :
        e = "Q"
        break;
    case ("R") :
        e = "R"
        break;
    case ("S") :
        e = "S"
        break;
    case ("T") :
        e = "T"
        break;
    case ("U") :
        e = "U"
        break;
    case ("V") :
        e = "V"
        break;
    case ("W") :
        e = "W"
        break;
    case ("X") :
        e = "X"
        break;
    case ("Y") :
        e = "Y"
        break;
    case ("Z") :
        e = "Z"
        break;
    case ("Enter") :
        e = "Enter"
        break;
    case ("Backspace") :
        e = "Backspace"
        break;
    default:
        e = " "
        break;
}
if(attempts < maxattempts){

    if (squareid <= 4 && e !== 'Enter' && e !== 'Backspace' && e !== ' ') {
        square[squarepid].innerText = e;
        userword.push(e)
        squareid = squareid + 1;
        squarepid = squarepid + 1;
    }

    if( e == 'Enter'&& squareid == 5){
        enters()
    }
    if (e == 'Backspace' && attempts !== maxattempts) {
        backs()
        
    }
}
})
})


function enters() {

 for ( var i = 0 ; i < 5; i++) {
   for ( var j = 0 ; j < 5; j++) {
            
     if (userword[i] == one[j]) {
        square[count].style.backgroundColor = 'yellow'
     }
     if (userword[i] == one[i]) {   
        square[count].style.backgroundColor = 'lightgreen'
     }
    }
    count++
    }
    attempts++
    if (userword[0] == one[0] && userword[1] == one[1] && userword[2] == one[2] && userword[3] == one[3] && userword[4] == one[4]) {
        attempts = 6
        console.log(attempts)
    }

    squareid = 0

    for (let i = 0; i < 5; i++) {
        userword.pop()  
    }
}

function backs() {

if(square[squareid] !== " " && squareid > 0 ){
        console.log(squareid);
    square[squarepid-1].innerText = "";
    userword.pop()
    squareid = squareid - 1;
    squarepid = squarepid - 1;
}

}

