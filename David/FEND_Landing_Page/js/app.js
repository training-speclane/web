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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBarMenu = document.getElementById('navbar__list') ;            //empty unordered list
const navBarMenuSections = [...document.querySelectorAll('section')];   //creates an array of sections and add items to it for every single section in the document
// const listLinks = document.querySelectorAll('.navbar__menu a');      // Links in the navbar
var navBarMenuItems = document.querySelectorAll('.navbar__menu li a');  //create a list of menu item/section with a href reference

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const dynamicNavBar = () => {
    //funtion to dynamically add items to the navbar list
    for (navBarMenuSection of navBarMenuSections) {
        navBarMenuSectionName = navBarMenuSection.getAttribute('data-nav');
        navBarMenuSectionLink = navBarMenuSection.getAttribute('id');
        navBarMenuListItem    = document.createElement('li');
        navBarMenuListItem.innerHTML = `<a class =  "menu__link" href = "#${navBarMenuSectionLink}" > ${navBarMenuSectionName} </a>` ;
        navBarMenu.appendChild(navBarMenuListItem);
    }
};

const sectionInViewport = (view) => {
    // Determine if section is near top of viewport
    let sectionPos = view.getBoundingClientRect();
    return sectionPos.top <= 150 && sectionPos.bottom >= 150;
};


// Add class 'active' to section when near top of viewport

const addActiveClass = () => {
      // function to add active class to viewed section
    for (const navBarMenuSection of navBarMenuSections) {
        if (sectionInViewport(navBarMenuSection)) {
            if (!navBarMenuSection.classList.contains("your-active-class")) {
                navBarMenuSection.classList.add("your-active-class");
                for (let navItem of navBarMenuItems){
                    if (`#${navBarMenuSection.id}` === navItem.getAttribute('href')) {   
                        navItem.classList.add("highlight");
                        navItem.classList.remove('menu__link');
                        console.log('I\'m working as it\'s supposed to')
                    } else{
                        navItem.classList.remove('highlight');
                        console.log('Keep on testing'); navItem.classList.add('menu__link');
                        navBarMenuSection.classList.remove("your-active-class");
                    }
                    
                }
            }
        } else {
            
            
        }
    }
};

// function highlightNavItems(){
    
// };

// Scroll to anchor ID using scrollTO event

const smoothScroll = () => {
    document.querySelectorAll(".menu__link").forEach((anchor) => {
        // selects all anchors with class='menu__link'
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
dynamicNavBar (); 

// Scroll to section on link click
smoothScroll(); 

// Set sections as active
document.addEventListener('scroll', addActiveClass);