let squareid = 0;
let squarepid = 0;
let userword=[]

let letters = document.querySelectorAll('.sqrdown');
let square = document.querySelectorAll('.sqrup');

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