let squareid = 0;
let squarepid = 0;
let userword=[]
let theChosenOne = "CLEAN"
let one = theChosenOne.split('')
let count = 0;

let letters = document.querySelectorAll('.sqrdown');
let square = document.querySelectorAll('.sqrup');
let enter = document.querySelector('.enter')

letters.forEach(letter => {
 letter.addEventListener('click', () => {
    if (squareid <= 4) {
        square[squarepid].innerText = letter.innerText;
        userword.push(letter.innerText)
        squareid = squareid + 1;
        squarepid = squarepid + 1;
        console.log(userword);
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
    squareid = 0
    for (let i = 0; i < 5; i++) {
        userword.pop()  
    }
}
})