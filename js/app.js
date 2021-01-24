/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const pageSections = document.querySelectorAll("section");

const navList = document.querySelector("#navbar__list");

const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isAnyPartOfElementInViewport(el) {

    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
pageSections.forEach( element => {
    let sectionText = element.getAttribute('data-nav');
    let sectionId = element.getAttribute("id");
    let navLinks = document.createElement('li');
    navLinks.textContent = sectionText;
    // Scroll to section on link click
    navLinks.addEventListener('click', () => {
        element.scrollIntoView({behavior: "smooth"})
        });
        fragment.appendChild(navLinks);
    });
navList.appendChild(fragment);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// Tried to make a clickable hyberlinks!

/* pageSections.forEach( anchors => {
    const bounding = pageSection.getBoundingClientRect();
    let anchors = document.querySelector('li');
    anchors.addEventListener('click', function(){
        pageSections.forEach(target => {
        if(bounding.top >= 0 && bounding.top <= 200) {    
        target.classList.remove('your-active-class')};
        this.classList.add('your-active-class');
    });
    anchors.target.href = navLinks.toDataURL()
});
navLinks.appendChild(anchors); */

// Set sections as active
  

pageSections.forEach( pageSection => {
    pageSection.addEventListener('click', function(){
        pageSections.forEach(target => target.classList.remove('your-active-class'));
this.classList.add('your-active-class');
    });
    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document. documentElement.clientWidth)
        );
      }
});

/**
 * End Events
 * Begin Scroll To Top
 * 
*/

//Get the button:
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}