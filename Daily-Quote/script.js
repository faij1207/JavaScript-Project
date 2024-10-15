const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuote = document.getElementById('new-quote');

const api_url="https://api.quotable.io/quotes/random";

async function getQuote(url){
    const response = await fetch(url);
    const data = await response.json();
    const quoteData = data[0]; // Access the first element of the array
    quote.innerHTML = quoteData.content;
    author.innerHTML = quoteData.author; 
}
getQuote(api_url);

function tweet(){
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML + ' ----by ' + author.innerHTML,
        "Tweet Window" ,"width=500,height=300"
    );
}