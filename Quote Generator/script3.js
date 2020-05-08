const quotes = [
    {
        name: 'Stephen King',
        quote: 'Get busy living or get busy dying.'
    },
    {
        name:'John F.Kennedy',
        quote:'Those who dare to fail miserably can achieve greatly.'
    },{
        name: 'Abraham Lincoln',
        quote: 'I m a success today because I had a friend who believed in me and I didnt have the heart to let him down.'
    },
    {
        name: 'Leonardo Da Vinci',
        quote:'It had long since come to my attenetion that people of accomplishment rarely sat back and let things happen to them. They want out and happened to things.'
        
    }
    ,
    {
        name: 'Leo tolstoy',
        quote: 'If you want to be happy, be.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

//Event listener below code

quoteBtn.addEventListener('click',displayQuote);

function displayQuote(){
// we don't want lowest than start index and highest value than final index

let number = Math.floor(Math.random()*quotes.length);
quoteAuthor.innerHTML = quotes[number].name;
quote.innerHTML = quotes[number].quote;

}
//inner HTML lae element ko content linxa




// const simpleQuotes = [
//     {
//         name: 'author number 1'
//         quote: 'quote number 1'
//     },
//     {
        
//     }

// ]