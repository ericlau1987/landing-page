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
var sections_count = 0
let sections_list = []


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
function return_sessions() {
    const sections_list = document.querySelectorAll('section')
    let sections_nav = []
    // const sections_count = sections_list.length
    // console.log('There are ' + sections_count + ' sessions')
    for (let i=0; i<sections_list.length; i++) {
        sections_nav.append(sections_list[i].getAttribute("data-nav"))
    }
    return sections_nav
}
sections_list = sections_list()


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


