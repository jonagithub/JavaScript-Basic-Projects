const colorBtn = document.querySelector('.colorBtn'); /* class name*/
/* selects button*/
const bodyBcg = document.querySelector('body'); /* tag name*/
/*above statement selects body*/
const colors = ['yellow', 'red', 'green', '#3b5998'];
/*Above is for background colors*/

/*Now add event listener*/
colorBtn.addEventListener('click',changeColor);

function changeColor (){
    //  bodyBcg.style.backgroundColor = colors[2];
    let random = Math.floor(Math.random() *colors.length)
    bodyBcg.style.backgroundColor = colors[random];

}
// Now color change huda hex color code dekhaunae

  