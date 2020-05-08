const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide);

function nextSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],
    {duration:1000,fill:'forwards'});
if(counter === 4){
counter = -1; /* i keep clicking keeps on negative 1 so pheri click garda 0 first image ma janxa*/
}
counter++;

container.style.backgroundImage = `url(bcg-${counter}.jpg)`

}

function prevSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],
    {duration:1000,fill:'forwards'});
if(counter === 0){
counter = 5; /* i keep clicking keeps on negative 1 so pheri click garda 0 first image ma janxa*/
    }
counter--;
    
container.style.backgroundImage = `url(bcg-${counter}.jpg)`
    
}