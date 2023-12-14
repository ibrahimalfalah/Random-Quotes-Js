var allQuotes = [
    {
        quote:'“Be yourself; everyone else is already taken.”',
        auther:'“Oscar Wilde”'  
    },
    {
        quote:'“Hambozo”',
        auther:'“Route Instructors”'  
    },
    {
        quote:'“So many books, so little time.”',
        auther:'“Frank Zappa”'  
    },
    {
        quote:'“You only live once, but if you do it right, once is enough.”',
        auther:'“Mae West”'  
    },
    {
        quote:'“Be the change that you wish to see in the world.”',
        auther:'“Mahatma Gandhi”'  
    },
    {
        quote:'“If you tell the truth, you don\'t have to remember anything”',
        auther:'“Mark Twain”'  
    },
    {
        quote:'“A friend is someone who knows all about you and still loves you.”',
        auther:'“Elbert Hubbard”'  
    },
    {
        quote:'“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
        auther:'“Mahatma Gandhi”'  
    },
    ];

    var oldIndex;


    var quote =   document.getElementById('quote');
    var auther =  document.getElementById('auther');

function generateQuotes(){
var randomIndex = Math.floor((Math.random()*allQuotes.length));
    if(oldIndex !== randomIndex) {
        oldIndex = randomIndex;
        quote.innerHTML = allQuotes[randomIndex].quote;
        auther.innerHTML = allQuotes[randomIndex].auther;
    } else if(oldIndex === randomIndex){
        if(randomIndex !== allQuotes.length -1) {
            randomIndex++;
            oldIndex = randomIndex;
            quote.innerHTML = allQuotes[randomIndex].quote;
            auther.innerHTML = allQuotes[randomIndex].auther;
        } else {
            randomIndex--;
            oldIndex = randomIndex;
            quote.innerHTML = allQuotes[randomIndex].quote;
            auther.innerHTML = allQuotes[randomIndex].auther;
        }
    }
}