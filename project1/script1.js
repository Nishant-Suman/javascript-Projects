const quotes = ["Honesty is The Best Policy",
    "Believe in yourself and all that you are",
"Do what you can with what you have",
"Success is not final, failure is not fatal",
"Stay hungry, stay foolish",
"Happiness depends upon ourselves",
"Turn your wounds into wisdom",
"Dream big and dare to fail",
"Action is the foundational key to success",
"In the middle of difficulty lies opportunity",
"Life is really simple but we insist on making it complicated"
]

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*11);
    quote.textContent = quotes[index];
})