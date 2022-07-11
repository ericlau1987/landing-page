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
let sections_list = 0

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function return_sessions() {
    const sections_list = document.querySelectorAll('section')
    var sections_nav = []

    for (let i=0; i<sections_list.length; i++) {
        curElement = sections_list[i].getAttribute("data-nav")
        sections_nav.push(curElement)
    }
    return sections_nav
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function create_nav_bar(sections_list) {
    
    var ul = document.getElementById("navbar__list")
    var fragment = document.createDocumentFragment()

    for (let i=0; i<sections_list.length; i++) {
        var newElment = document.createElement('li')
        var a = document.createElement('a')
        a.classList.add("menu__link")
        a.id = "menu__link__section" + (i+1)
        // a.href = "#section" + (i+1)
        a.innerText = sections_list[i]
        newElment.appendChild(a)
        fragment.appendChild(newElment)
    }
    ul.appendChild(fragment)
}

function change_nav_bar_color(font_color) {

    document.getElementById("navbar__list").style.color = font_color
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrolling_to_section(event){

    var e = event.target
    if (e.id.includes("menu__link__section")) {
        target_session = e.id.replace("menu__link__", "")
        document.getElementById(target_session).scrollIntoView(
            {
                behavior: 'smooth'
            }
        )
    }
    
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
sections_list = return_sessions()
create_nav_bar(sections_list)
change_nav_bar_color("black")

// Scroll to section on link click

document.addEventListener('click',  scrolling_to_section)

// Set sections as active


