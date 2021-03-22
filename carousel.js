// quote carousel
const carousel = {};

carousel.leftButton = document.querySelector('.left');
carousel.rightButton = document.querySelector('.right');
carousel.quoteContainer = document.querySelector('.text__quote');
carousel.quoteOne = document.querySelector('.one');
carousel.quoteTwo = document.querySelector('.two');
carousel.quoteThree = document.querySelector('.three');
carousel.arrowLeft = document.querySelector('.fa-chevron-left');
carousel.arrowRight = document.querySelector('.fa-chevron-right');
carousel.leftQuote = false;
carousel.rightQuote = false;

carousel.quotes = ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate, a, nostrum doloremque maxime obcaecati soluta ab id sapiente maiores fugit tempore neque accusamus illum voluptates molestias. Ad, commodi labore.", "Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean.", "I can see by what you carry that you come from Barrytown. Learn to work the saxaphone, and I play just what I feel. Drink scotch whisky all night long and die behind the wheel. So won't you smile for the camera? I know they're gonna love it."];

// if left button is clicked, cycle to the next quote. If there is no other quote to cycle left to, disable the chevron button.
carousel.leftButton.addEventListener('click', function(){
//    cycle from center quote to far left quote
    if (carousel.leftQuote === false && carousel.rightQuote === false){
        carousel.quoteContainer.textContent = carousel.quotes[0];
        carousel.leftQuote = true;
        carousel.arrowLeft.classList.add('disabled');
        carousel.quoteOne.classList.toggle('active');
        carousel.quoteOne.classList.toggle('inactive');
        carousel.quoteTwo.classList.toggle('active');
        carousel.quoteTwo.classList.toggle('inactive');
    }
//  cycle from far right quote to center quote
    if (carousel.leftQuote === false && carousel.rightQuote === true) {
        carousel.quoteContainer.textContent = carousel.quotes[1];
        carousel.rightQuote = false;
        carousel.arrowRight.classList.remove('disabled');
        carousel.quoteTwo.classList.toggle('active');
        carousel.quoteTwo.classList.toggle('inactive');
        carousel.quoteThree.classList.toggle('active');
        carousel.quoteThree.classList.toggle('inactive');
    }
});

carousel.rightButton.addEventListener('click', function(){
//    cycle from center quote to far right quote
    if (carousel.leftQuote === false && carousel.rightQuote === false) {
        carousel.quoteContainer.textContent = carousel.quotes[2];
        carousel.rightQuote = true;
        carousel.arrowRight.classList.add('disabled');
        carousel.quoteThree.classList.toggle('active');
        carousel.quoteThree.classList.toggle('inactive');
        carousel.quoteTwo.classList.toggle('active');
        carousel.quoteTwo.classList.toggle('inactive');
    }
    // cycle from far left quote to center quote
    if (carousel.leftQuote === true && carousel.rightQuote === false) {
        carousel.quoteContainer.textContent = carousel.quotes[1];
        carousel.leftQuote = false;
        carousel.arrowLeft.classList.remove('disabled');
        carousel.quoteTwo.classList.toggle('active');
        carousel.quoteTwo.classList.toggle('inactive');
        carousel.quoteOne.classList.toggle('active');
        carousel.quoteOne.classList.toggle('inactive');
    }
});