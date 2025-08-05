// Mobile menu toggle
const burgerMenu = document.getElementById('burgerMenu');
const sideNav = document.getElementById('side-nav');
const closeNav = document.getElementById('closeNav');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');
const backButton = document.getElementById('backButton');

// Toggle side navigation
burgerMenu.addEventListener('click', function() {
    sideNav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Close navigation
closeNav.addEventListener('click', function() {
    closeSideNav();
});

overlay.addEventListener('click', function() {
    closeSideNav();
});

function closeSideNav() {
    sideNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// Show back button on policy pages
if (window.location.pathname.includes('mms')) {
    backButton.style.display = 'block';
    backButton.addEventListener('click', function() {
        window.history.back();
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
        
        closeSideNav();
    });
});

// Update active navigation link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Initialize first link as active
document.querySelector('.nav-links a').classList.add('active');