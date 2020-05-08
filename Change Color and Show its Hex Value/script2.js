// Hex value 0 to 9 ani a to f
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const hexBtn = document.querySelector('.hexBtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');

// Above statement code lae selected all the elements we have been working

hexBtn.addEventListener('click',getHex);


function getHex() {
let hexCol = '#';
//create a for loop that takes 6 sex values from hexNumbers
//six digit combination bhayera i<6 gareko 0 bata 5 samma total 6
for(let i =0; i<6; i++){
let random = Math.floor(Math.random() *hexNumbers.length)
//console.log(random);
hexCol +=hexNumbers[random]; // add to hexCol something picked from hexNumbers with this random variable
//console.log(hexCol);
 

}

bodyBcg.style.backgroundColor = hexCol;
hex.innerHTML = hexCol;
}