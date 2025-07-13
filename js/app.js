let theChosenOne = TheChosenWord(getRandomInt(words.length))
let one = theChosenOne.split('')
let maxattempts = 6;
let attempts = 0;
let squareid = 0;
let squarepid = 0;
let count = 0;
let userword=[]
let countsec = 60;
let countmin = 2;
let execut = false
let counter = 0;
let type = "timer"
let info = false

let letters = document.querySelectorAll('.sqrdown')
let square = document.querySelectorAll('.sqrup')
let enter = document.querySelector('.enter')
let back = document.querySelector('.back')
let keyboards = document.querySelectorAll('body')
let resets = document.querySelector('.reset')
let reset2 = document.querySelector('.reset2')
let pop = document.querySelector('.popup')
let popwin = document.querySelector('.popwin')
let help = document.querySelector('.help')
let closeing = document.querySelector('.close-popup')
let counts = document.querySelector('.counts')
let countm = document.querySelector('.countm')


console.log(theChosenOne);

 letters.forEach(letter => {
 letter.addEventListener('click', () => {
    console.log('click')
    if(attempts < maxattempts){
    if (squareid <= 4 && letter.innerText !== 'enter' && letter.innerText !== 'back') {
        square[squarepid].innerText = letter.innerText;
        userword.push(letter.innerText)
        squareid = squareid + 1;
        squarepid = squarepid + 1;
        if(type === "timer"){timer()}
    }
if( letter.innerText == 'enter' && squareid == 5){
  switch (userword[0]) {
    case "A":
        for (let i = 0; i < words[0].A.length; i++) {
             if (words[0].A[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "B":
        for (let i = 0; i < words[1].B.length; i++) {
             if (words[1].B[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "C":
        for (let i = 0; i < words[2].C.length; i++) {
             if (words[2].C[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "D":
        for (let i = 0; i < words[3].D.length; i++) {
             if (words[3].D[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "E":
        for (let i = 0; i < words[4].E.length; i++) {
             if (words[4].E[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "F":
        for (let i = 0; i < words[5].F.length; i++) {
             if (words[5].F[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "G":
        for (let i = 0; i < words[6].G.length; i++) {
             if (words[6].G[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "H":
        for (let i = 0; i < words[7].H.length; i++) {
             if (words[7].H[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "I":
        for (let i = 0; i < words[8].I.length; i++) {
             if (words[8].I[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "J":
        for (let i = 0; i < words[9].J.length; i++) {
             if (words[9].J[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "K":
        for (let i = 0; i < words[10].K.length; i++) {
             if (words[10].K[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "L":
        for (let i = 0; i < words[11].L.length; i++) {
             if (words[11].L[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "M":
        for (let i = 0; i < words[12].M.length; i++) {
             if (words[12].M[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "N":
        for (let i = 0; i < words[13].N.length; i++) {
             if (words[13].N[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "O":
        for (let i = 0; i < words[14].O.length; i++) {
             if (words[14].O[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "P":
        for (let i = 0; i < words[15].P.length; i++) {
             if (words[15].P[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "Q":
        for (let i = 0; i < words[16].Q.length; i++) {
             if (words[16].Q[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "R":
        for (let i = 0; i < words[17].R.length; i++) {
             if (words[17].R[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "S":
        for (let i = 0; i < words[18].S.length; i++) {
             if (words[18].S[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "T":
        for (let i = 0; i < words[19].T.length; i++) {
             if (words[19].T[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "U":
        for (let i = 0; i < words[20].U.length; i++) {
             if (words[20].U[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "V":
        for (let i = 0; i < words[21].V.length; i++) {
             if (words[21].V[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "W":
        for (let i = 0; i < words[22].W.length; i++) {
             if (words[22].W[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "X":
        for (let i = 0; i < words[23].X.length; i++) {
             if (words[23].X[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "Y":
        for (let i = 0; i < words[24].Y.length; i++) {
             if (words[24].Y[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "Z":
        for (let i = 0; i < words[25].Z.length; i++) {
             if (words[25].Z[i] == userword.join('')) {
            enters()
    }
}
             break;
    
        
         default:
             break;
        }
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
        if(type === "timer"){timer()}

    }

 if( e == 'Enter'&& squareid == 5){
        switch (userword[0]) {
    case "A":
        for (let i = 0; i < words[0].A.length; i++) {
             if (words[0].A[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "B":
        for (let i = 0; i < words[1].B.length; i++) {
             if (words[1].B[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "C":
        for (let i = 0; i < words[2].C.length; i++) {
             if (words[2].C[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "D":
        for (let i = 0; i < words[3].D.length; i++) {
             if (words[3].D[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "E":
        for (let i = 0; i < words[4].E.length; i++) {
             if (words[4].E[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "F":
        for (let i = 0; i < words[5].F.length; i++) {
             if (words[5].F[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "G":
        for (let i = 0; i < words[6].G.length; i++) {
             if (words[6].G[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "H":
        for (let i = 0; i < words[7].H.length; i++) {
             if (words[7].H[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "I":
        for (let i = 0; i < words[8].I.length; i++) {
             if (words[8].I[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "J":
        for (let i = 0; i < words[9].J.length; i++) {
             if (words[9].J[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "K":
        for (let i = 0; i < words[10].K.length; i++) {
             if (words[10].K[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "L":
        for (let i = 0; i < words[11].L.length; i++) {
             if (words[11].L[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "M":
        for (let i = 0; i < words[12].M.length; i++) {
             if (words[12].M[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "N":
        for (let i = 0; i < words[13].N.length; i++) {
             if (words[13].N[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "O":
        for (let i = 0; i < words[14].O.length; i++) {
             if (words[14].O[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "P":
        for (let i = 0; i < words[15].P.length; i++) {
             if (words[15].P[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "Q":
        for (let i = 0; i < words[16].Q.length; i++) {
             if (words[16].Q[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "R":
        for (let i = 0; i < words[17].R.length; i++) {
             if (words[17].R[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "S":
        for (let i = 0; i < words[18].S.length; i++) {
             if (words[18].S[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "T":
        for (let i = 0; i < words[19].T.length; i++) {
             if (words[19].T[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "U":
        for (let i = 0; i < words[20].U.length; i++) {
             if (words[20].U[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "V":
        for (let i = 0; i < words[21].V.length; i++) {
             if (words[21].V[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "W":
        for (let i = 0; i < words[22].W.length; i++) {
             if (words[22].W[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "X":
        for (let i = 0; i < words[23].X.length; i++) {
             if (words[23].X[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "Y":
        for (let i = 0; i < words[24].Y.length; i++) {
             if (words[24].Y[i] == userword.join('')) {
            enters()
    }
}
             break;
    case "Z":
        for (let i = 0; i < words[25].Z.length; i++) {
             if (words[25].Z[i] == userword.join('')) {
            enters()
    }
}
             break;
    
        
         default:
             break;
        }
    }
    if (e == 'Backspace' && attempts !== maxattempts) {
        backs()
        
    }
}
})
})

function enters() {

 for ( var i = 0 ; i < 5; i++) {

     square[count].style.backgroundColor = 'gray'
     for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = 'gray'
            }  
        }

for ( var j = 0 ; j < 5; j++) {

     if (userword[i] == one[i]) {   

        square[count].style.backgroundColor = 'lightgreen'
        for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = 'lightgreen'
            }
        }
     }     

     else if (userword[i] == one[j]) {

        square[count].style.backgroundColor = 'yellow'
        for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = 'yellow'
            }
        }
     }

    }
    count++
    }
    attempts++
    if (type === "timer" && userword[0] == one[0] && userword[1] == one[1] && userword[2] == one[2] && userword[3] == one[3] && userword[4] == one[4]) {
        counter++
        countsec = countsec+30
        if (countsec>=61) {
            countmin++
            countsec=countsec-60
        }
        console.log(counter)
        document.getElementById("corr").innerText = counter 
        reset()
    }
    else if (type === "normal" && userword[0] == one[0] && userword[1] == one[1] && userword[2] == one[2] && userword[3] == one[3] && userword[4] == one[4]) {
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
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function TheChosenWord (u){
    let theChosenOne;
    switch (u) {
    case (0) :
       return theChosenOne = words[0].A[getRandomInt(words[0].A.length)]
    case (1) :
       return theChosenOne = words[1].B[getRandomInt(words[1].B.length)]
    case (2) :
       return theChosenOne = words[2].C[getRandomInt(words[2].C.length)]
    case (3) :
       return theChosenOne = words[3].D[getRandomInt(words[3].D.length)]
    case (4) :
       return theChosenOne = words[4].E[getRandomInt(words[4].E.length)]
    case (5) :
       return theChosenOne = words[5].F[getRandomInt(words[5].F.length)]
    case (6) :
       return theChosenOne = words[6].G[getRandomInt(words[6].G.length)]
    case (7) :
       return theChosenOne = words[7].H[getRandomInt(words[7].H.length)]
    case (8) :
       return theChosenOne = words[8].I[getRandomInt(words[8].I.length)]
    case (9) :
       return theChosenOne = words[9].J[getRandomInt(words[9].J.length)]
    case (10) :
       return theChosenOne = words[10].K[getRandomInt(words[10].K.length)]
    case (11) :
       return theChosenOne = words[11].L[getRandomInt(words[11].L.length)]
    case (12) :
       return theChosenOne = words[12].M[getRandomInt(words[12].M.length)]
    case (13) :
       return theChosenOne = words[13].N[getRandomInt(words[13].N.length)]
    case (14) :
       return theChosenOne = words[14].O[getRandomInt(words[14].O.length)]
    case (15) :
       return theChosenOne = words[15].P[getRandomInt(words[15].P.length)]
    case (16) :
       return theChosenOne = words[16].Q[getRandomInt(words[16].Q.length)]
    case (17) :
       return theChosenOne = words[17].R[getRandomInt(words[17].R.length)]
    case (18) :
       return theChosenOne = words[18].S[getRandomInt(words[18].S.length)]
    case (19) :
       return theChosenOne = words[19].T[getRandomInt(words[19].T.length)]
    case (20) :
       return theChosenOne = words[20].U[getRandomInt(words[20].U.length)]
    case (21) :
       return theChosenOne = words[21].V[getRandomInt(words[21].V.length)]
    case (22) :
       return theChosenOne = words[22].W[getRandomInt(words[22].W.length)]
    case (23) :
       return theChosenOne = words[23].X[getRandomInt(words[23].X.length)]
    case (24) :
       return theChosenOne = words[24].Y[getRandomInt(words[24].Y.length)]
    case (25) :
       return theChosenOne = words[25].Z[getRandomInt(words[25].Z.length)]
    default:
        break;
}
}
function reset() {
    theChosenOne = TheChosenWord(getRandomInt(words.length))
   one = theChosenOne.split('')
   console.log(theChosenOne)
   for (let i = 0; i < 30; i++) {
    square[i].innerText = "";
    square[i].style.backgroundColor = 'white'
   }
   for (let i = 0; i < 27; i++) {
    letters[i].style.backgroundColor = 'white'
   }

    maxattempts = 6;
    attempts = 0;
    squareid = 0;
    squarepid = 0;
    count = 0;
    userword=[]
    
}

function resetx() {
    theChosenOne = TheChosenWord(getRandomInt(words.length))
   one = theChosenOne.split('')
   console.log(theChosenOne)
   for (let i = 0; i < 30; i++) {
    square[i].innerText = "";
    square[i].style.backgroundColor = 'white'
   }
   for (let i = 0; i < 27; i++) {
    letters[i].style.backgroundColor = 'white'
   }

    maxattempts = 6;
    attempts = 0;
    squareid = 0;
    squarepid = 0;
    count = 0;
    userword=[]
    countsec = 60;
    countmin = 2;
    execut = false
    counter = 0;

    
}

resets.addEventListener('click', ()=>{
   resetx()
})

help.addEventListener('click', ()=>{
    pop.style.display = "block";
})
    
closeing.addEventListener('click',()=>{
    pop.style.display = "none";
})

function timer (){
  
if(execut == false){
     execut =true
    setInterval(function() {
    
    countsec--;
    counts.innerText = countsec
    countm.innerText = countmin
    if (countsec == 0 && countmin !== 0) {
        countsec = countsec + 60
        countmin--;
    }else if(countsec == 0 && countmin == 0){
        popwin.style.display = "block";
    }else if(countsec < 0){
        countsec = 0
    }
    

}, 1000);
}
}

reset2.addEventListener('click',()=>{
    resetx()
    popwin.style.display = "none";
})