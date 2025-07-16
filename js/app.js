let theChosenOne = TheChosenWord(getRandomInt(words.length))
let one = theChosenOne.split('')
let theChosenFood = words[26].Food[getRandomInt(words[26].Food.length)]
let two = theChosenFood.split('')
let theChosenAnime = words[27].Anime[getRandomInt(words[27].Anime.length)]
let four = theChosenAnime.split('')
let theChosenAnimal = words[28].Animal[getRandomInt(words[28].Animal.length)]
let three = theChosenAnimal.split('')
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
let info = false
let category = "normal";
let ls = 0;

let letters = document.querySelectorAll('.sqrdown')
let square = document.querySelectorAll('.sqrup')
let square1 = document.querySelectorAll('.sqrup1')
let square2 = document.querySelectorAll('.sqrup2')
let square3 = document.querySelectorAll('.sqrup3')
let square4 = document.querySelectorAll('.sqrup4')
let enter = document.querySelector('.enter')
let back = document.querySelector('.back')
let keyboards = document.querySelectorAll('body')
let root = document.documentElement;
let resets = document.querySelector('.reset')
let resets1 = document.querySelector('.resets1')
let resets2 = document.querySelector('.resets2')
let reset2 = document.querySelector('.reset2')
let pop = document.querySelector('.popup')
let pop1 = document.querySelector('.popup1')
let pop2 = document.querySelector('.popup2')
let popwins = document.querySelector('.popwins')
let help = document.querySelector('.help')
let help1 = document.querySelector('.help1')
let help2 = document.querySelector('.help2')
let closeing = document.querySelector('.close-popup')
let closeing1 = document.querySelector('.close-popup1')
let closeing2 = document.querySelector('.close-popup2')
let closings = document.querySelector('.close-sitting')
let counts = document.querySelector('.counts')
let countm = document.querySelector('.countm')
let sitting = document.querySelector('.sitting')
let sitting1 = document.querySelector('.sitting1')
let sitting2 = document.querySelector('.sitting2')
let sitting3 = document.querySelector('.sitting3')
let sittings = document.querySelector('.sittings')
let nstyle = document.querySelector('.normal-style')
let bstyle = document.querySelector('.blue-style')
let dstyle = document.querySelector('.night-style')
let tim = document.querySelector('.tim')
let tup = document.querySelector('.tup')
let board1 = document.querySelector('.board1')
let board2 = document.querySelector('.board2')
let board3 = document.querySelector('.board3')
let board4 = document.querySelector('.board4')
let board5 = document.querySelector('.board5')
let board6 = document.querySelector('.board6')
let time1 = document.querySelector('.time1')
let time2 = document.querySelector('.time2')
let time3 = document.querySelector('.time3')
let time4 = document.querySelector('.time4')
let time5 = document.querySelector('.time5')
let time6 = document.querySelector('.time6')
let food1 = document.querySelector('.food1')
let food2 = document.querySelector('.food2')
let food3 = document.querySelector('.food3')
let food4 = document.querySelector('.food4')
let food5 = document.querySelector('.food5')
let food6 = document.querySelector('.food6')
let animal1 = document.querySelector('.animal1')
let animal2 = document.querySelector('.animal2')
let animal3 = document.querySelector('.animal3')
let animal4 = document.querySelector('.animal4')
let animal5 = document.querySelector('.animal5')
let animal6 = document.querySelector('.animal6')
let anime1 = document.querySelector('.anime1')
let anime2 = document.querySelector('.anime2')
let anime3 = document.querySelector('.anime3')
let anime4 = document.querySelector('.anime4')
let anime5 = document.querySelector('.anime5')
let anime6 = document.querySelector('.anime6')
let categor = document.querySelector('.categorys')
let foods = document.querySelector('.foods')
let food = document.querySelector('.food')
let foodt = document.querySelector('.foodt')
let animals = document.querySelector('.animals')
let animal = document.querySelector('.animal')
let animalt = document.querySelector('.animalt')
let animes = document.querySelector('.animes')
let anime = document.querySelector('.anime')
let animet = document.querySelector('.animet')
let cat = document.querySelector('.cat')
let loss = document.querySelector('.loss')
let closingl = document.querySelector('.close-loss')
let categorysc = document.querySelector('.categorys-c')
let corr = document.querySelector('.corr')
let lcount = document.querySelector('.l-count')
let word = document.querySelector('.word')
let norm = document.querySelector('.norm')
let firstGame =  document.querySelector('.first-game')
let return1 = document.querySelector('.return1')
let main = document.querySelector('.main')
let secGame =  document.querySelector('.sec-game')
let return2 = document.querySelector('.return2')
let tem = document.querySelector('.tem')
let trdGame =  document.querySelector('.trd-game')
let return3 = document.querySelector('.return3')
let cate = document.querySelector('.cate')

console.log("anime: "+theChosenAnime);
console.log("animal: "+theChosenAnimal);
console.log("food: "+theChosenFood);
console.log("word: "+ theChosenOne);

letters.forEach(letter => {
 letter.addEventListener('click', () => {
    
if(attempts < maxattempts){
    if (squareid <= 4 && letter.innerText !== 'enter' && letter.innerText !== 'back' && category == "normal") {
        square[squarepid].innerText = letter.innerText;
        userword.push(letter.innerText)
        squareid = squareid + 1;
        squarepid = squarepid + 1;
        if(category === "time"){timer()}
    }
    if (squareid <= 4 && letter.innerText !== 'enter' && letter.innerText !== 'back' && category == "time") {
        square1[squarepid].innerText = letter.innerText;
        userword.push(letter.innerText)
        squareid = squareid + 1;
        squarepid = squarepid + 1;
        if(category === "time"){timer()}
    }
    if (squareid <= 5 && letter.innerText !== 'enter' && letter.innerText !== 'back' && category == "food") {
        square4[squarepid].innerText = letter.innerText;
        userword.push(letter.innerText)
        squareid = squareid + 1;
        squarepid = squarepid + 1;
    }
    if (squareid <= 3 && letter.innerText !== 'enter' && letter.innerText !== 'back' && category == "animal") {
        square2[squarepid].innerText = letter.innerText;
        userword.push(letter.innerText)
        squareid = squareid + 1;
        squarepid = squarepid + 1;
    }
    if (squareid <= 5 && letter.innerText !== 'enter' && letter.innerText !== 'back' && category == "anime") {
        square3[squarepid].innerText = letter.innerText;
        userword.push(letter.innerText)
        squareid = squareid + 1;
        squarepid = squarepid + 1;
    }

if( letter.innerText == 'enter' && squareid == 5 && category == "normal"){
  switch (userword[0]) {
    case "A":
        for (let i = 0; i < words[0].A.length; i++) {
            if (words[0].A[i] == userword.join('')) {
            enters()
            info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "B":
        for (let i = 0; i < words[1].B.length; i++) {
            if (words[1].B[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "C":
        for (let i = 0; i < words[2].C.length; i++) {
            if (words[2].C[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "D":
        for (let i = 0; i < words[3].D.length; i++) {
            if (words[3].D[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "E":
        for (let i = 0; i < words[4].E.length; i++) {
            if (words[4].E[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "F":
        for (let i = 0; i < words[5].F.length; i++) {
            if (words[5].F[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "G":
        for (let i = 0; i < words[6].G.length; i++) {
            if (words[6].G[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "H":
        for (let i = 0; i < words[7].H.length; i++) {
            if (words[7].H[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "I":
        for (let i = 0; i < words[8].I.length; i++) {
            if (words[8].I[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "J":
        for (let i = 0; i < words[9].J.length; i++) {
            if (words[9].J[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "K":
        for (let i = 0; i < words[10].K.length; i++) {
            if (words[10].K[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "L":
        for (let i = 0; i < words[11].L.length; i++) {
            if (words[11].L[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "M":
        for (let i = 0; i < words[12].M.length; i++) {
            if (words[12].M[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "N":
        for (let i = 0; i < words[13].N.length; i++) {
            if (words[13].N[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "O":
        for (let i = 0; i < words[14].O.length; i++) {
            if (words[14].O[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "P":
        for (let i = 0; i < words[15].P.length; i++) {
            if (words[15].P[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "Q":
        for (let i = 0; i < words[16].Q.length; i++) {
            if (words[16].Q[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "R":
        for (let i = 0; i < words[17].R.length; i++) {
            if (words[17].R[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "S":
        for (let i = 0; i < words[18].S.length; i++) {
            if (words[18].S[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "T":
        for (let i = 0; i < words[19].T.length; i++) {
            if (words[19].T[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "U":
        for (let i = 0; i < words[20].U.length; i++) {
            if (words[20].U[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "V":
        for (let i = 0; i < words[21].V.length; i++) {
            if (words[21].V[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "W":
        for (let i = 0; i < words[22].W.length; i++) {
            if (words[22].W[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "X":
        for (let i = 0; i < words[23].X.length; i++) {
            if (words[23].X[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "Y":
        for (let i = 0; i < words[24].Y.length; i++) {
            if (words[24].Y[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "Z":
        for (let i = 0; i < words[25].Z.length; i++) {
            if (words[25].Z[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;

    default:
             break;
        }
}
if( letter.innerText == 'enter' && squareid == 5 && category == "time"){
  switch (userword[0]) {
    case "A":
        for (let i = 0; i < words[0].A.length; i++) {
            if (words[0].A[i] == userword.join('')) {
            enters()
            info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "B":
        for (let i = 0; i < words[1].B.length; i++) {
            if (words[1].B[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "C":
        for (let i = 0; i < words[2].C.length; i++) {
            if (words[2].C[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "D":
        for (let i = 0; i < words[3].D.length; i++) {
            if (words[3].D[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "E":
        for (let i = 0; i < words[4].E.length; i++) {
            if (words[4].E[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "F":
        for (let i = 0; i < words[5].F.length; i++) {
            if (words[5].F[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "G":
        for (let i = 0; i < words[6].G.length; i++) {
            if (words[6].G[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "H":
        for (let i = 0; i < words[7].H.length; i++) {
            if (words[7].H[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "I":
        for (let i = 0; i < words[8].I.length; i++) {
            if (words[8].I[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "J":
        for (let i = 0; i < words[9].J.length; i++) {
            if (words[9].J[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "K":
        for (let i = 0; i < words[10].K.length; i++) {
            if (words[10].K[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "L":
        for (let i = 0; i < words[11].L.length; i++) {
            if (words[11].L[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "M":
        for (let i = 0; i < words[12].M.length; i++) {
            if (words[12].M[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "N":
        for (let i = 0; i < words[13].N.length; i++) {
            if (words[13].N[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "O":
        for (let i = 0; i < words[14].O.length; i++) {
            if (words[14].O[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "P":
        for (let i = 0; i < words[15].P.length; i++) {
            if (words[15].P[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "Q":
        for (let i = 0; i < words[16].Q.length; i++) {
            if (words[16].Q[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "R":
        for (let i = 0; i < words[17].R.length; i++) {
            if (words[17].R[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "S":
        for (let i = 0; i < words[18].S.length; i++) {
            if (words[18].S[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "T":
        for (let i = 0; i < words[19].T.length; i++) {
            if (words[19].T[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "U":
        for (let i = 0; i < words[20].U.length; i++) {
            if (words[20].U[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "V":
        for (let i = 0; i < words[21].V.length; i++) {
            if (words[21].V[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "W":
        for (let i = 0; i < words[22].W.length; i++) {
            if (words[22].W[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "X":
        for (let i = 0; i < words[23].X.length; i++) {
            if (words[23].X[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "Y":
        for (let i = 0; i < words[24].Y.length; i++) {
            if (words[24].Y[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "Z":
        for (let i = 0; i < words[25].Z.length; i++) {
            if (words[25].Z[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;

    default:
             break;
        }
}
if( letter.innerText == 'enter' && squareid == 6 && category == "food"){
  for (let i = 0; i < words[26].Food.length; i++) {
    if (words[26].Food[i] == userword.join('')) {
        enters()
        info = true
        break;
        }
}
        if(info == false){
            info = true
            switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
    info = false
}
if( letter.innerText == 'enter' && squareid == 4 && category == "animal"){
  for (let i = 0; i < words[28].Animal.length; i++) {
    if (words[28].Animal[i] == userword.join('')) {
        enters()
        info = true
        break;
        }
}
        if(info == false){
            info = true
            switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
    info = false
}
if( letter.innerText == 'enter' && squareid == 6 && category == "animal"){
  for (let i = 0; i < words[27].Anime.length; i++) {
    if (words[27].Anime[i] == userword.join('')) {
        enters()
        info = true
        break;
        }
}
        if(info == false){
            info = true
            switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
    info = false
}

if (letter.innerText == 'back' && attempts !== maxattempts) {
        backs()
    }
}
})
})

keyboards.forEach(keyboard => {
keyboard.addEventListener('keyup', (input) => {
    
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
    if (squareid <= 4 && e !== 'Enter' && e !== 'Backspace' && e !== ' ' && category == "normal") {
        square[squarepid].innerText = e;
        userword.push(e)
        squareid = squareid + 1;
        squarepid = squarepid + 1;
        if(category === "time"){timer()}

    }
    if (squareid <= 4 && e !== 'Enter' && e !== 'Backspace' && e !== ' ' && category == "time") {
        square1[squarepid].innerText = e;
        userword.push(e)
        squareid = squareid + 1;
        squarepid = squarepid + 1;
        if(category === "time"){timer()}

    }
    if (squareid <= 5 && e !== 'Enter' && e !== 'Backspace' && e !== ' ' && category == "food") {
        square4[squarepid].innerText = e;
        userword.push(e)
        squareid = squareid + 1;
        squarepid = squarepid + 1;
    }
    if (squareid <= 3 && e !== 'Enter' && e !== 'Backspace' && e !== ' ' && category == "animal") {
        square2[squarepid].innerText = e;
        userword.push(e)
        squareid = squareid + 1;
        squarepid = squarepid + 1;
    }
    if (squareid <= 5 && e !== 'Enter' && e !== 'Backspace' && e !== ' ' && category == "anime") {
        square3[squarepid].innerText = e;
        userword.push(e)
        squareid = squareid + 1;
        squarepid = squarepid + 1;
    }
    

if( e == 'Enter'&& squareid == 5 && category == "normal"){
        switch (userword[0]) {
    case "A":
        for (let i = 0; i < words[0].A.length; i++) {
            if (words[0].A[i] == userword.join('')) {
            enters()
            info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
             break;
             }
            
            info = false
             break;
    case "B":
        for (let i = 0; i < words[1].B.length; i++) {
            if (words[1].B[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "C":
        for (let i = 0; i < words[2].C.length; i++) {
            if (words[2].C[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "D":
        for (let i = 0; i < words[3].D.length; i++) {
            if (words[3].D[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "E":
        for (let i = 0; i < words[4].E.length; i++) {
            if (words[4].E[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "F":
        for (let i = 0; i < words[5].F.length; i++) {
            if (words[5].F[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "G":
        for (let i = 0; i < words[6].G.length; i++) {
            if (words[6].G[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "H":
        for (let i = 0; i < words[7].H.length; i++) {
            if (words[7].H[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "I":
        for (let i = 0; i < words[8].I.length; i++) {
            if (words[8].I[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "J":
        for (let i = 0; i < words[9].J.length; i++) {
            if (words[9].J[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "K":
        for (let i = 0; i < words[10].K.length; i++) {
            if (words[10].K[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "L":
        for (let i = 0; i < words[11].L.length; i++) {
            if (words[11].L[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "M":
        for (let i = 0; i < words[12].M.length; i++) {
            if (words[12].M[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "N":
        for (let i = 0; i < words[13].N.length; i++) {
            if (words[13].N[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "O":
        for (let i = 0; i < words[14].O.length; i++) {
            if (words[14].O[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "P":
        for (let i = 0; i < words[15].P.length; i++) {
            if (words[15].P[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "Q":
        for (let i = 0; i < words[16].Q.length; i++) {
            if (words[16].Q[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "R":
        for (let i = 0; i < words[17].R.length; i++) {
            if (words[17].R[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "S":
        for (let i = 0; i < words[18].S.length; i++) {
            if (words[18].S[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "T":
        for (let i = 0; i < words[19].T.length; i++) {
            if (words[19].T[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "U":
        for (let i = 0; i < words[20].U.length; i++) {
            if (words[20].U[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "V":
        for (let i = 0; i < words[21].V.length; i++) {
            if (words[21].V[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "W":
        for (let i = 0; i < words[22].W.length; i++) {
            if (words[22].W[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "X":
        for (let i = 0; i < words[23].X.length; i++) {
            if (words[23].X[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "Y":
        for (let i = 0; i < words[24].Y.length; i++) {
            if (words[24].Y[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "Z":
        for (let i = 0; i < words[25].Z.length; i++) {
            if (words[25].Z[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;

    default:
             break;
        }
    }
if( e == 'Enter'&& squareid == 5 && category == "time"){
        switch (userword[0]) {
    case "A":
        for (let i = 0; i < words[0].A.length; i++) {
            if (words[0].A[i] == userword.join('')) {
            enters()
            info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
             break;
             }
            
            info = false
             break;
    case "B":
        for (let i = 0; i < words[1].B.length; i++) {
            if (words[1].B[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "C":
        for (let i = 0; i < words[2].C.length; i++) {
            if (words[2].C[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "D":
        for (let i = 0; i < words[3].D.length; i++) {
            if (words[3].D[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "E":
        for (let i = 0; i < words[4].E.length; i++) {
            if (words[4].E[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "F":
        for (let i = 0; i < words[5].F.length; i++) {
            if (words[5].F[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "G":
        for (let i = 0; i < words[6].G.length; i++) {
            if (words[6].G[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "H":
        for (let i = 0; i < words[7].H.length; i++) {
            if (words[7].H[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "I":
        for (let i = 0; i < words[8].I.length; i++) {
            if (words[8].I[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "J":
        for (let i = 0; i < words[9].J.length; i++) {
            if (words[9].J[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "K":
        for (let i = 0; i < words[10].K.length; i++) {
            if (words[10].K[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "L":
        for (let i = 0; i < words[11].L.length; i++) {
            if (words[11].L[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "M":
        for (let i = 0; i < words[12].M.length; i++) {
            if (words[12].M[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "N":
        for (let i = 0; i < words[13].N.length; i++) {
            if (words[13].N[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "O":
        for (let i = 0; i < words[14].O.length; i++) {
            if (words[14].O[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "P":
        for (let i = 0; i < words[15].P.length; i++) {
            if (words[15].P[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "Q":
        for (let i = 0; i < words[16].Q.length; i++) {
            if (words[16].Q[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "R":
        for (let i = 0; i < words[17].R.length; i++) {
            if (words[17].R[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "S":
        for (let i = 0; i < words[18].S.length; i++) {
            if (words[18].S[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "T":
        for (let i = 0; i < words[19].T.length; i++) {
            if (words[19].T[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "U":
        for (let i = 0; i < words[20].U.length; i++) {
            if (words[20].U[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "V":
        for (let i = 0; i < words[21].V.length; i++) {
            if (words[21].V[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "W":
        for (let i = 0; i < words[22].W.length; i++) {
            if (words[22].W[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "X":
        for (let i = 0; i < words[23].X.length; i++) {
            if (words[23].X[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "Y":
        for (let i = 0; i < words[24].Y.length; i++) {
            if (words[24].Y[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "Z":
        for (let i = 0; i < words[25].Z.length; i++) {
            if (words[25].Z[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;

    default:
             break;
        }
    }
if( e == 'Enter'&& squareid == 5 && category == "normal"){
        switch (userword[0]) {
    case "A":
        for (let i = 0; i < words[0].A.length; i++) {
            if (words[0].A[i] == userword.join('')) {
            enters()
            info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
             break;
             }
            
            info = false
             break;
    case "B":
        for (let i = 0; i < words[1].B.length; i++) {
            if (words[1].B[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "C":
        for (let i = 0; i < words[2].C.length; i++) {
            if (words[2].C[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "D":
        for (let i = 0; i < words[3].D.length; i++) {
            if (words[3].D[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "E":
        for (let i = 0; i < words[4].E.length; i++) {
            if (words[4].E[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "F":
        for (let i = 0; i < words[5].F.length; i++) {
            if (words[5].F[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "G":
        for (let i = 0; i < words[6].G.length; i++) {
            if (words[6].G[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "H":
        for (let i = 0; i < words[7].H.length; i++) {
            if (words[7].H[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "I":
        for (let i = 0; i < words[8].I.length; i++) {
            if (words[8].I[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "J":
        for (let i = 0; i < words[9].J.length; i++) {
            if (words[9].J[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "K":
        for (let i = 0; i < words[10].K.length; i++) {
            if (words[10].K[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "L":
        for (let i = 0; i < words[11].L.length; i++) {
            if (words[11].L[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "M":
        for (let i = 0; i < words[12].M.length; i++) {
            if (words[12].M[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "N":
        for (let i = 0; i < words[13].N.length; i++) {
            if (words[13].N[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "O":
        for (let i = 0; i < words[14].O.length; i++) {
            if (words[14].O[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "P":
        for (let i = 0; i < words[15].P.length; i++) {
            if (words[15].P[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "Q":
        for (let i = 0; i < words[16].Q.length; i++) {
            if (words[16].Q[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "R":
        for (let i = 0; i < words[17].R.length; i++) {
            if (words[17].R[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "S":
        for (let i = 0; i < words[18].S.length; i++) {
            if (words[18].S[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "T":
        for (let i = 0; i < words[19].T.length; i++) {
            if (words[19].T[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "U":
        for (let i = 0; i < words[20].U.length; i++) {
            if (words[20].U[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "V":
        for (let i = 0; i < words[21].V.length; i++) {
            if (words[21].V[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "W":
        for (let i = 0; i < words[22].W.length; i++) {
            if (words[22].W[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "X":
        for (let i = 0; i < words[23].X.length; i++) {
            if (words[23].X[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "Y":
        for (let i = 0; i < words[24].Y.length; i++) {
            if (words[24].Y[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;
    case "Z":
        for (let i = 0; i < words[25].Z.length; i++) {
            if (words[25].Z[i] == userword.join('')) {
            enters()
             info = true
            break;
            }
}
            if(info == false){
             info = true
             switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
            info = false
             break;

    default:
             break;
        }
    }
if( e == 'Enter'&& squareid == 6 && category == "food"){
 for (let i = 0; i < words[26].Food.length; i++) {
    if (words[26].Food[i] == userword.join('')) {
        enters()
        info = true
        break;
        }
}
        if(info == false){
            info = true
            switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
    info = false
    }
if( e == 'Enter'&& squareid == 4 && category == "animal"){
 for (let i = 0; i < words[28].Animal.length; i++) {
    if (words[28].Animal[i] == userword.join('')) {
        enters()
        info = true
        break;
        }
}
        if(info == false){
            info = true
            switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
    info = false
    }
if( e == 'Enter'&& squareid == 6 && category == "anime"){
 for (let i = 0; i < words[27].Anime.length; i++) {
    if (words[27].Anime[i] == userword.join('')) {
        enters()
        info = true
        break;
        }
}
        if(info == false){
            info = true
            switch (attempts) {
                case 0:
                    shake1()
                    break;
                case 1:
                    shake2()
                    break;
                case 2:
                    shake3()
                    break;
                case 3:
                    shake4()
                    break;
                case 4:
                    shake5()
                    break;
                case 5:
                    shake6()
                    break;
             
                default:
                    break;
             }
            }
    info = false
    }

    if (e == 'Backspace' && attempts !== maxattempts) {
        
        backs()
        
    }
}
})
})

function enters() {
   
if (category == "normal") {
    

for ( var i = 0 ; i < 5; i++) {

     square[count].style.backgroundColor = 'gray'
    for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = 'gray'
            }
    }

for ( var j = 0 ; j < 5; j++) {

    if (userword[i] == one[i]) {   

        square[count].style.backgroundColor = "#2aa42a"
        for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = "#2aa42a"
            }
        }

    }else if (userword[i] == one[j]) {

        square[count].style.backgroundColor = "#c9c946ff"
        for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = "#c9c946ff"
            }
        }
    }
}
count++
}
attempts++
if (userword[0] == one[0] && userword[1] == one[1] && userword[2] == one[2] && userword[3] == one[3] && userword[4] == one[4]) {
        attempts = 6
        
}else if (attempts == maxattempts){
    word.innerText = theChosenOne;
    loss.style.display = "block";
}

 squareid = 0
for (let i = 0; i < 5; i++) {
        userword.pop()  
}
}

if (category == "time") {
    

for ( var i = 0 ; i < 5; i++) {

     square1[count].style.backgroundColor = 'gray'
    for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = 'gray'
            }
    }

for ( var j = 0 ; j < 5; j++) {

    if (userword[i] == one[i]) {   

        square1[count].style.backgroundColor = "#2aa42a"
        for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = "#2aa42a"
            }
        }

    }else if (userword[i] == one[j]) {

        square1[count].style.backgroundColor = "#c9c946ff"
        for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = "#c9c946ff"
            }
        }
    }
}
count++
}
attempts++
if (userword[0] == one[0] && userword[1] == one[1] && userword[2] == one[2] && userword[3] == one[3] && userword[4] == one[4]) {
        counter++
        countsec = countsec+30
        if (countsec>=61) {
            countmin++
            countsec=countsec-60
        }
        
        document.getElementById("corr").innerText = counter 
        reset()
}

 squareid = 0
for (let i = 0; i < 5; i++) {
        userword.pop()  
}
}

if (category == "food") {
    
for ( var i = 0 ; i < 6; i++) {

     square4[count].style.backgroundColor = 'gray'
    for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = 'gray'
            }
    }

for ( var j = 0 ; j < 6; j++) {

    if (userword[i] == two[i]) {   

        square4[count].style.backgroundColor = "#2aa42a"
        for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = "#2aa42a"
            }
        }

    }else if (userword[i] == two[j]) {

        square4[count].style.backgroundColor = "#c9c946ff"
        for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = "#c9c946ff"
            }
        }
    }
}
count++
}
attempts++
if (userword[0] == two[0] && userword[1] == two[1] && userword[2] == two[2] && userword[3] == two[3] && userword[4] == two[4] && userword[5] == two[5]) {
        attempts = 6
        counter++
        ls++
        corr.innerText = counter
        categorysc.style.display = "block"; 
}else if(attempts == maxattempts){
    lcount.innerText = ls
    loss.style.display = "block";}

 squareid = 0
for (let i = 0; i < 6; i++) {
        userword.pop()  
}
}

if (category == "animal") {
    
for ( var i = 0 ; i < 4; i++) {

     square2[count].style.backgroundColor = 'gray'
    for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = 'gray'
            }
    }

for ( var j = 0 ; j < 4; j++) {

    if (userword[i] == three[i]) {   

        square2[count].style.backgroundColor = "#2aa42a"
        for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = "#2aa42a"
            }
        }

    }else if (userword[i] == three[j]) {

        square2[count].style.backgroundColor = "#c9c946ff"
        for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = "#c9c946ff"
            }
        }
    }
}
count++
}
attempts++
if (userword[0] == three[0] && userword[1] == three[1] && userword[2] == three[2] && userword[3] == three[3] ) {
        attempts = 6
        counter++
        ls++
        corr.innerText = counter 
        categorysc.style.display = "block";
}else if(attempts == maxattempts){
    lcount.innerText = ls
    loss.style.display = "block";
}

 squareid = 0
for (let i = 0; i < 4; i++) {
        userword.pop()  
}
}

if (category == "anime") {
    
for ( var i = 0 ; i < 6; i++) {

     square3[count].style.backgroundColor = 'gray'
    for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = 'gray'
            }
    }

for ( var j = 0 ; j < 6; j++) {

    if (userword[i] == four[i]) {   

        square3[count].style.backgroundColor = "#2aa42a"
        for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = "#2aa42a"
            }
        }

    }else if (userword[i] == four[j]) {

        square3[count].style.backgroundColor = "#c9c946ff"
        for (let k = 0; k < letters.length; k++) {
            if (letters[k].id.toUpperCase() == userword[i]) {
                letters[k].style.backgroundColor = "#c9c946ff"
            }
        }
    }
}
count++
}
attempts++
if (userword[0] == four[0] && userword[1] == four[1] && userword[2] == four[2] && userword[3] == four[3] && userword[4] == four[4] && userword[5] == four[5]) {
        attempts = 6
        counter++
        ls++
        corr.innerText = counter 
        categorysc.style.display = "block";
}else if(attempts == maxattempts){
    lcount.innerText = ls
    loss.style.display = "block";
}

 squareid = 0
for (let i = 0; i < 6; i++) {
        userword.pop()  
}
}
}

function backs() {

if(square[squareid] !== " " && squareid > 0 && category == "normal" ){
        
    square[squarepid-1].innerText = "";
    userword.pop()
    squareid = squareid - 1;
    squarepid = squarepid - 1;
}

if(square1[squareid] !== " " && squareid > 0 && category == "time" ){
        
    square1[squarepid-1].innerText = "";
    userword.pop()
    squareid = squareid - 1;
    squarepid = squarepid - 1;
}

if(square4[squareid] !== " " && squareid > 0 && category == "food"){
        
    square4[squarepid-1].innerText = "";
    userword.pop()
    squareid = squareid - 1;
    squarepid = squarepid - 1;
}

if(square2[squareid] !== " " && squareid > 0 && category == "animal"){
    console.log(squarepid);
        
    square2[squarepid-1].innerText = "";
    userword.pop()
    squareid = squareid - 1;
    squarepid = squarepid - 1;
}

if(square3[squareid] !== " " && squareid > 0 && category == "anime"){
    console.log(squarepid);
        
    square3[squarepid-1].innerText = "";
    userword.pop()
    squareid = squareid - 1;
    squarepid = squarepid - 1;
}
noshake1()
noshake2()
noshake3()
noshake4()
noshake5()
noshake6()
info = false
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
   theChosenFood = words[26].Food[getRandomInt(words[26].Food.length)]
   two = theChosenFood.split('')
   theChosenAnime = words[27].Anime[getRandomInt(words[27].Anime.length)]
   four = theChosenAnime.split('')
   theChosenAnimal = words[28].Animal[getRandomInt(words[28].Animal.length)]
   three = theChosenAnimal.split('')

   console.log("anime: "+theChosenAnime);
   console.log("animal: "+theChosenAnimal);
   console.log("food: "+theChosenFood);
   console.log("word: "+ theChosenOne);

   if (category == "normal") {
   for (let i = 0; i < 30; i++) {
    square[i].innerText = "";
    square[i].style.backgroundColor = root.style.getPropertyValue('--main-color')
   }
   }
   if (category == "time") {
   for (let i = 0; i < 30; i++) {
    square1[i].innerText = "";
    square1[i].style.backgroundColor = root.style.getPropertyValue('--main-color')
   }
   }
   if (category == "food") {
    for (let i = 0; i < 36; i++) {
    square4[i].innerText = "";
    square4[i].style.backgroundColor = root.style.getPropertyValue('--main-color')
   }
   
   }
   if (category == "animal") {
    for (let i = 0; i < 24; i++) {
    square2[i].innerText = "";
    square2[i].style.backgroundColor = root.style.getPropertyValue('--main-color')
   }
   
   }
   if (category == "anime") {
    for (let i = 0; i < 36; i++) {
    square3[i].innerText = "";
    square3[i].style.backgroundColor = root.style.getPropertyValue('--main-color')
   }
   
   }
   
   for (let i = 0; i < 83; i++) {
    letters[i].style.backgroundColor = root.style.getPropertyValue('--main-color')
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
   theChosenFood = words[26].Food[getRandomInt(words[26].Food.length)]
   two = theChosenFood.split('')
   theChosenAnime = words[27].Anime[getRandomInt(words[27].Anime.length)]
   four = theChosenAnime.split('')
   theChosenAnimal = words[28].Animal[getRandomInt(words[28].Animal.length)]
   three = theChosenAnimal.split('')
   
console.log("anime: "+theChosenAnime);
console.log("animal: "+theChosenAnimal);
console.log("food: "+theChosenFood);
console.log("word: "+ theChosenOne);

   if (category == "normal") {
   for (let i = 0; i < 30; i++) {
    square[i].innerText = "";
    square[i].style.backgroundColor = root.style.getPropertyValue('--main-color')
   }
   }
   if (category == "time") {
   for (let i = 0; i < 30; i++) {
    square1[i].innerText = "";
    square1[i].style.backgroundColor = root.style.getPropertyValue('--main-color')
   }
   }
   if (category == "food") {
    for (let i = 0; i < 36; i++) {
    square4[i].innerText = "";
    square4[i].style.backgroundColor = root.style.getPropertyValue('--main-color')
   }
   categor.style.display = "block";
   }
   if (category == "animal") {
    for (let i = 0; i < 24; i++) {
    square2[i].innerText = "";
    square2[i].style.backgroundColor = root.style.getPropertyValue('--main-color')
   }
   categor.style.display = "block";
   }
   if (category == "anime") {
    for (let i = 0; i < 36; i++) {
    square3[i].innerText = "";
    square3[i].style.backgroundColor = root.style.getPropertyValue('--main-color')
   }
   categor.style.display = "block";
   }
   
   for (let i = 0; i < 83; i++) {
    letters[i].style.backgroundColor = root.style.getPropertyValue('--main-color')
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
    if (category == "time") {
    
    counter = 0; 
    }
    

    
}

resets.addEventListener('click', ()=>{
    resetx()
})

resets1.addEventListener('click', ()=>{
    resetx()
})

resets2.addEventListener('click', ()=>{
    resetx()
})

help.addEventListener('click', ()=>{
    pop.style.display = "block";
})

help1.addEventListener('click', ()=>{
    pop1.style.display = "block";
})

help2.addEventListener('click', ()=>{
    pop2.style.display = "block";
})
    
closeing.addEventListener('click',()=>{
    pop.style.display = "none"; 
})

closeing1.addEventListener('click',()=>{
    pop1.style.display = "none"; 
})

closeing2.addEventListener('click',()=>{
    pop2.style.display = "none"; 
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
        popwins.style.display = "block";
    }else if(countsec < 0){
        countsec = 0
    }
    

}, 1000);
}
}

reset2.addEventListener('click',()=>{
    resetx()
    popwins.style.display = "none";
})

sitting.addEventListener('click',()=>{
    sittings.style.display = "block";
})

sitting1.addEventListener('click',()=>{
    sittings.style.display = "block";
})

sitting2.addEventListener('click',()=>{
    sittings.style.display = "block";
})

sitting3.addEventListener('click',()=>{
    sittings.style.display = "block";
})

closings.addEventListener('click',()=>{
    sittings.style.display = "none";
})

nstyle.addEventListener('click',()=>{
  root.style.setProperty('--main-color', 'white');
  root.style.setProperty('--sqrup-color'," white");
  root.style.setProperty('--sqrdown-color'," white");
  root.style.setProperty('--other-color'," lightgray");
  root.style.setProperty('--wrong-latter'," gray");
  root.style.setProperty('--text-color'," black");
  root.style.setProperty('--yellow-color', "yellow");
  root.style.setProperty('--green-color', "#2aa42a");
})

bstyle.addEventListener('click',()=>{
  root.style.setProperty('--main-color', "darkblue");
  root.style.setProperty('--sqrup-color', "darkblue");
  root.style.setProperty('--sqrdown-color', "darkblue");
  root.style.setProperty('--other-color', "cadetblue");
  root.style.setProperty('--wrong-latter', "gray");
  root.style.setProperty('--text-color', "white");
  root.style.setProperty('--yellow-color', "#bdbd31ff");
  root.style.setProperty('--green-color', "green");
})

dstyle.addEventListener('click',()=>{
  root.style.setProperty('--main-color', "#333");
  root.style.setProperty('--sqrup-color', "#333");
  root.style.setProperty('--sqrdown-color', "#333");
  root.style.setProperty('--other-color', "gray");
  root.style.setProperty('--wrong-latter', "gray");
  root.style.setProperty('--text-color', "white");
  root.style.setProperty('--yellow-color', "#bdbd31ff");
  root.style.setProperty('--green-color', "green");
})

tim.addEventListener('click',()=>{
    resetx()
    tim.style.visibility = "hidden"
    tup.style.visibility = "visible" ;
    category = "time"
})

function shake1(){
time1.classList.add('shake')
animal1.classList.add('shake')
food1.classList.add('shake')
anime1.classList.add('shake')
    return board1.classList.add('shake')
}

function noshake1(){
time1.classList.remove('shake')
animal1.classList.remove('shake')
food1.classList.remove('shake')
anime1.classList.remove('shake')
    return board1.classList.remove('shake')
}

function shake2(){
time2.classList.add('shake')
animal2.classList.add('shake')
food2.classList.add('shake')
anime2.classList.add('shake')
    return board2.classList.add('shake')
}

function noshake2(){
time2.classList.remove('shake')
animal2.classList.remove('shake')
food2.classList.remove('shake')
anime2.classList.remove('shake')
    return board2.classList.remove('shake')
}

function shake3(){
time3.classList.add('shake')
animal3.classList.add('shake')
food3.classList.add('shake')
anime3.classList.add('shake')
    return board3.classList.add('shake')
}

function noshake3(){
time3.classList.remove('shake')
animal3.classList.remove('shake')
food3.classList.remove('shake')
anime3.classList.remove('shake')
    return board3.classList.remove('shake')
}

function shake4(){
time4.classList.add('shake')
animal4.classList.add('shake')
food4.classList.add('shake')
anime4.classList.add('shake')
    return board4.classList.add('shake')
}

function noshake4(){
time4.classList.remove('shake')
animal4.classList.remove('shake')
food4.classList.remove('shake')
anime4.classList.remove('shake')
    return board4.classList.remove('shake')
}

function shake5(){
time5.classList.add('shake')
animal5.classList.add('shake')
food5.classList.add('shake')
anime5.classList.add('shake')
    return board5.classList.add('shake')
}

function noshake5(){
time5.classList.remove('shake')
animal5.classList.remove('shake')
food5.classList.remove('shake')
anime5.classList.remove('shake')
    return board5.classList.remove('shake')
}

function shake6(){
time6.classList.add('shake')
animal6.classList.add('shake')
food6.classList.add('shake')
anime6.classList.add('shake')
    return board6.classList.add('shake')
}

function noshake6(){
time6.classList.remove('shake')
animal6.classList.remove('shake')
food6.classList.remove('shake')
anime6.classList.remove('shake')
    return board6.classList.remove('shake')
}

food.addEventListener('click',()=>{
    foods.style.display = "block";
    animals.style.display = "none";
    animes.style.display = "none";
    category = "food"
    categor.style.display = "none";
    cat.innerText = "foods"
    reset()
})

animal.addEventListener('click',()=>{
    animals.style.display = "block";
    animes.style.display = "none";
    foods.style.display = "none";
    category = "animal"
    categor.style.display = "none";
    cat.innerText = "animals"
    reset()
})

anime.addEventListener('click',()=>{
    animes.style.display = "block";
    animals.style.display = "none";
    foods.style.display = "none";
    category = "anime"
    categor.style.display = "none";
    cat.innerText = "anime"
    reset()
})

closingl.addEventListener('click',()=>{
    loss.style.display = "none";
    counter = 0;
})

foodt.addEventListener('click',()=>{
    foods.style.display = "block";
    animals.style.display = "none";
    animes.style.display = "none";
    category = "food"
    categorysc.style.display = "none";
    cat.innerText = "foods"
    reset()
})

animalt.addEventListener('click',()=>{
    animals.style.display = "block";
    animes.style.display = "none";
    foods.style.display = "none";
    category = "animal"
    categorysc.style.display = "none";
    cat.innerText = "animals"
    reset()
})

animet.addEventListener('click',()=>{
    animes.style.display = "block";
    animals.style.display = "none";
    foods.style.display = "none";
    category = "anime"
    categorysc.style.display = "none";
    cat.innerText = "anime"
    reset()
})

norm.addEventListener('click',()=>{
    category = "normal"
    main.style.display = "none";
    firstGame.style.display = "block";
})

return1.addEventListener('click',()=>{
    main.style.display = "block";
    firstGame.style.display = "none";
})

tem.addEventListener('click',()=>{
    category = "time"
    main.style.display = "none";
    secGame.style.display = "block";
    resetx();
})

return2.addEventListener('click',()=>{
    main.style.display = "block";
    secGame.style.display = "none";
})

cate.addEventListener('click',()=>{
    category = "time"
    main.style.display = "none";
    trdGame.style.display = "block";
})

return3.addEventListener('click',()=>{
    main.style.display = "block";
    trdGame.style.display = "none";
})