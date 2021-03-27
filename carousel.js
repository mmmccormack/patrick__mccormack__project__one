// quote carousel
const carousel = {};
// declaring variables for all elements of carousel, including arrows, quotes, and icons to denote which quote is displayed
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
// method for changing styles within carousel when an arrow is clicked
carousel.changeStyle = function(onScreenTag, offScreenTag,activeLemon,inactiveLemon) {
    onScreenTag.style.display = 'block';
    onScreenTag.classList.toggle("onscreen");
    offScreenTag.classList.toggle("onscreen");
    offScreenTag.style.display = 'none';
    activeLemon.classList.toggle('active');
    activeLemon.classList.toggle('inactive');
    inactiveLemon.classList.toggle('active');
    inactiveLemon.classList.toggle('inactive');
}

carousel.leftButton.addEventListener('click', function(){
//    cycle from center quote to far left quote
    if (carousel.leftQuote === false && carousel.rightQuote === false){
        carousel.leftQuote = true;
        carousel.arrowLeft.classList.add('disabled');
        carousel.changeStyle(carousel.containerOne, carousel.containerTwo, carousel.quoteOne, carousel.quoteTwo);
    }
//  cycle from far right quote to center quote
    if (carousel.leftQuote === false && carousel.rightQuote === true) {
        carousel.rightQuote = false;
        carousel.arrowRight.classList.remove('disabled');
        carousel.changeStyle(carousel.containerTwo, carousel.containerThree, carousel.quoteTwo, carousel.quoteThree);
    }
});
carousel.rightButton.addEventListener('click', function(){
//    cycle from center quote to far right quote
    if (carousel.leftQuote === false && carousel.rightQuote === false) {
        carousel.rightQuote = true;
        carousel.arrowRight.classList.add('disabled');
        carousel.changeStyle(carousel.containerThree, carousel.containerTwo, carousel.quoteThree, carousel.quoteTwo);
    }
    // cycle from far left quote to center quote
    if (carousel.leftQuote === true && carousel.rightQuote === false) {
        carousel.leftQuote = false;
        carousel.arrowLeft.classList.remove('disabled');
        carousel.changeStyle(carousel.containerTwo, carousel.containerOne, carousel.quoteTwo, carousel.quoteOne);
    }
});