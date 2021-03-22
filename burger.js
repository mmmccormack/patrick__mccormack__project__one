// add hamburger menu functionality

const burger = {};

burger.burgerMenu = document.querySelector('.nav__burger');
burger.navList = document.querySelector('.nav__list');

// when burger menu is clicked, trigger burger display class
burger.burgerMenu.addEventListener('click', function(){
    burger.navList.classList.toggle('nav__display');
    burger.navList.classList.toggle('nav__list');
});

// after a little Stack Overflowing, I created this event in case the user shrinks their browser window and then expands it while the burger menu is active, so the burger menu will disappear and the original header nav will reappear. The 15 in the clientWidth property accouns for the scrollbar size.
window.addEventListener('resize', function(){
    let pageWidth = document.documentElement.clientWidth + 15;
    if (pageWidth == 640) {
        burger.navList.classList.add('nav__list');
        burger.navList.classList.remove('nav__display');
    }
});