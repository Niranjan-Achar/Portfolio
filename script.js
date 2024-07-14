
//Menu-Icon
let mIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

mIcon.onclick = () => {
    mIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky Nav bar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //Remove toggle icon when click navbar item
    mIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll Reaveal

ScrollReveal({
    // reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.heading,.home-img,.home-content h1,.home-content p',{ origin: 'top' });
ScrollReveal().reveal('.home-content, .services-con, .about-content .portfolio-box, .contact-form,.about-content p', { origin: 'bottom' });

// Multi_text Reveal


const typed = new Typed('.multi-text',{
    strings: ['Software Developer','Digital Marketer','UI / UX Designer'],
    typeSpeed:100,
    backSpeed:20,
    backdelay:1000,
    loop:true
})


// View Counter using Local Storage itseems🤧🤧
/*
var counterContainer = document.querySelector(".views");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
} else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
    counterContainer.innerHTML = visitCount;
});
*/

