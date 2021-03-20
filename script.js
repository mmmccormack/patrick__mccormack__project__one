// add hamburger menu functionality

const burgerMenu = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');

// when burger menu is clicked, trigger burger display class
burgerMenu.addEventListener('click', function(){
    navList.classList.toggle('nav__display');
    navList.classList.toggle('nav__list');
});

// after a little Stack Overflow, I created this event in case the user shrinks their browser and then expands it while the burger menu is active, so the burger menu will disappear and the original header nav will reappear.
window.addEventListener('resize', function(){
    let pageWidth = document.documentElement.clientWidth + 15;
    if (pageWidth == 640) {
        navList.classList.add('nav__list');
        navList.classList.remove('nav__display');
    }
})

// quote carousel

const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const quoteContainer = document.querySelector('.text__quote');
let leftQuote = false;
let rightQuote = false;

const quotes = ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate, a, nostrum doloremque maxime obcaecati soluta ab id sapiente maiores fugit tempore neque accusamus illum voluptates molestias. Ad, commodi labore.", "Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion.", "I can see by what you carry that you come from Barrytown. Learn to work the saxaphone, and I play just what I feel. Drink scotch whisky all night long and die behind the wheel. So won't you smile for the camera? I know they're gonna love it."];


// if left button is clicked, cycle to the next quote. If there is no other quote to cycle left to, disable the chevron button.
leftButton.addEventListener('click', function(){
//    cycle from center quote to far left quote
    if (leftQuote === false && rightQuote === false){
        quoteContainer.textContent = quotes[0];
        leftQuote = true;
        document.querySelector('.fa-chevron-left').classList.add('disabled');
        document.querySelector('.one').classList.toggle('active');
        document.querySelector('.one').classList.toggle('inactive');
        document.querySelector('.two').classList.toggle('active');
        document.querySelector('.two').classList.toggle('inactive');
    }
//  cycle from far right quote to center quote
    if (leftQuote === false && rightQuote === true) {
        quoteContainer.textContent = quotes[1];
        rightQuote = false;
        document.querySelector('.fa-chevron-right').classList.remove('disabled');
        document.querySelector('.two').classList.toggle('active');
        document.querySelector('.two').classList.toggle('inactive');
        document.querySelector('.three').classList.toggle('active');
        document.querySelector('.three').classList.toggle('inactive');
    }
});

rightButton.addEventListener('click', function(){
//    cycle from center quote to far right quote
    if (leftQuote === false && rightQuote === false) {
        quoteContainer.textContent = quotes[2];
        rightQuote = true;
        document.querySelector('.fa-chevron-right').classList.add('disabled');
        document.querySelector('.three').classList.toggle('active');
        document.querySelector('.three').classList.toggle('inactive');
        document.querySelector('.two').classList.toggle('active');
        document.querySelector('.two').classList.toggle('inactive');
    }
    // cycle from far left quote to center quote
    if (leftQuote === true && rightQuote === false) {
        quoteContainer.textContent = quotes[1];
        leftQuote = false;
        document.querySelector('.fa-chevron-left').classList.remove('disabled');
        document.querySelector('.two').classList.toggle('active');
        document.querySelector('.two').classList.toggle('inactive');
        document.querySelector('.one').classList.toggle('active');
        document.querySelector('.one').classList.toggle('inactive');
    }
});


