// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Parallax effect
document.addEventListener('mousemove', function (e) {
    const hero = document.querySelector('.hero');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    hero.style.transform = `perspective(1000px) rotateX(${(y - 0.5) * 5}deg) rotateY(${(x - 0.5) * 5}deg)`;
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', function () {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3D scroll effect
window.addEventListener('scroll', function () {
    const scrollPosition = window.pageYOffset;
    const parallaxLayers = document.querySelectorAll('.parallax-layer');

    parallaxLayers.forEach(layer => {
        const speed = layer.classList.contains('layer-1') ? 0.2 : 0.5;
        const yPos = -(scrollPosition * speed);
        layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });

    // Rotate elements based on scroll
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPercent = (scrollPosition - sectionTop + window.innerHeight) / (sectionHeight + window.innerHeight);

        if (scrollPercent > 0 && scrollPercent < 1) {
            const rotation = (scrollPercent - 0.5) * 10;
            section.style.transform = `perspective(1000px) rotateX(${rotation}deg)`;
        }
    });
});

// Token price animation (simulated)
setInterval(function () {
    const changes = document.querySelectorAll('.change');
    changes.forEach(change => {
        const randomChange = (Math.random() * 5).toFixed(1);
        const isPositive = Math.random() > 0.3;
        const sign = isPositive ? '+' : '-';
        const color = isPositive ? '#00ff88' : '#ff4d4d';

        change.textContent = `${sign}${randomChange}%`;
        change.style.color = color;
    });
}, 3000);