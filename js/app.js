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

letters.forEach(letter => {
 letter.addEventListener('click', () => {
    console.log('click')
    if(attempts < maxattempts){
    if (squareid <= 4) {
        square[squarepid].innerText = letter.innerText;
        userword.push(letter.innerText)
        squareid = squareid + 1;
        squarepid = squarepid + 1;
    }
}
})
})

enter.addEventListener('click',()=>{
if (squareid == 5) {

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
})

back.addEventListener('click',()=>{
    console.log('click')
    if(square[squareid] !== " "){
    square[squarepid-1].innerText = "";
    userword.pop()
    squareid = squareid - 1;
    squarepid = squarepid - 1;
    }
})