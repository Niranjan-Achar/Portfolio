
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
    distance: '80px',
    duration: 1500,
    delay: 200
});
ScrollReveal().reveal('.heading,.home-img', { origin: 'top' });
ScrollReveal().reveal('.home-content, .services-con, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// Multi_text Reveal

const typed = new Typed('.multi-text',{
    strings: ['Software Developer','Front-end Developer','UI / UX Designer'],
    typeSpeed:100,
    backSpeed:20,
    backdelay:1000,
    loop:true
})


