// quote carousel
const carousel = {};

carousel.leftButton = document.querySelector('.left');
carousel.rightButton = document.querySelector('.right');
carousel.containerOne = document.querySelector('.quote__one');
carousel.containerTwo = document.querySelector('.quote__two');
carousel.containerThree = document.querySelector('.quote__three');
carousel.quoteOne = document.querySelector('.one');
carousel.quoteTwo = document.querySelector('.two');
carousel.quoteThree = document.querySelector('.three');
carousel.arrowLeft = document.querySelector('.fa-chevron-left');
carousel.arrowRight = document.querySelector('.fa-chevron-right');
carousel.leftQuote = false;
carousel.rightQuote = false;


// if left button is clicked, cycle to the next quote. If there is no other quote to cycle left to, disable the chevron button.
carousel.leftButton.addEventListener('click', function(){
//    cycle from center quote to far left quote
    if (carousel.leftQuote === false && carousel.rightQuote === false){
        carousel.containerOne.style.display = 'block';
        carousel.containerOne.classList.toggle("onscreen");
        carousel.containerTwo.classList.toggle("onscreen");
        carousel.containerTwo.style.display = 'none';
        carousel.leftQuote = true;
        carousel.arrowLeft.classList.add('disabled');
        carousel.quoteOne.classList.toggle('active');
        carousel.quoteOne.classList.toggle('inactive');
        carousel.quoteTwo.classList.toggle('active');
        carousel.quoteTwo.classList.toggle('inactive');
    }
//  cycle from far right quote to center quote
    if (carousel.leftQuote === false && carousel.rightQuote === true) {
        carousel.containerTwo.style.display = 'block';
        carousel.containerTwo.classList.toggle("onscreen");
        carousel.containerThree.classList.toggle("onscreen");
        carousel.containerThree.style.display = 'none';
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
        carousel.containerThree.style.display = 'block';
        carousel.containerThree.classList.toggle("onscreen");
        carousel.containerTwo.classList.toggle("onscreen");
        carousel.containerTwo.style.display = 'none';
        carousel.rightQuote = true;
        carousel.arrowRight.classList.add('disabled');
        carousel.quoteThree.classList.toggle('active');
        carousel.quoteThree.classList.toggle('inactive');
        carousel.quoteTwo.classList.toggle('active');
        carousel.quoteTwo.classList.toggle('inactive');
    }
    // cycle from far left quote to center quote
    if (carousel.leftQuote === true && carousel.rightQuote === false) {
        carousel.containerOne.style.display = 'none';
        carousel.containerOne.classList.toggle("onscreen");
        carousel.containerTwo.classList.toggle("onscreen");
        carousel.containerTwo.style.display = 'block';
        carousel.leftQuote = false;
        carousel.arrowLeft.classList.remove('disabled');
        carousel.quoteTwo.classList.toggle('active');
        carousel.quoteTwo.classList.toggle('inactive');
        carousel.quoteOne.classList.toggle('active');
        carousel.quoteOne.classList.toggle('inactive');
    }
});