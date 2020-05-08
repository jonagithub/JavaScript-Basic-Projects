let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

let count = 0;

addCount.addEventListener('click',incrementCounter);
lowerCount.addEventListener('click',decrementCounter);

function incrementCounter() {
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML>'0'){
        counter.style.color = '#4caf50'
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = 'white';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],
    {duration:500,fill:'forwards'});
}
    /*First object is opacity  As the button the next number shouldn't be showing up right away it should actually have opacity of 0.2 second
        */ /*In the end so if I have the array the next object where I'm placing is gonna
        be where I would want to end or I'm  gonna say over here and this would be the end opacity */
    /*{object ho} duration how long it takes and fill, once the animation is done we want to go where animation finish*/

    

function decrementCounter() {
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML<'0'){
        counter.style.color = 'red'
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = 'white';
    }

    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],
    {duration:500,fill:'forwards'});
}
