// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn.querySelector('.close-icon');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    let isMenuOpen = false;

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function () {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            mobileNav.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            mobileNav.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });

    // Close mobile menu when clicking on nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            isMenuOpen = false;
            mobileNav.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        if (isMenuOpen && !mobileMenuBtn.contains(event.target) && !mobileNav.contains(event.target)) {
            isMenuOpen = false;
            mobileNav.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Button click handlers (you can customize these)
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = this.textContent.trim();

            if (buttonText === 'Sign In') {
                console.log('Sign In clicked');
                // Add your sign in logic here
                alert('Sign In functionality - connect to your backend');
            } else if (buttonText === 'Get Started') {
                console.log('Get Started clicked');
                // Add your get started logic here
                alert('Get Started functionality - connect to your backend');
            }
        });
    });

    // Add active state to navigation links based on scroll position
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});

// Add active link styles
const style = document.createElement('style');
style.textContent = `
    .nav-link.active,
    .mobile-nav-link.active {
        color: hsl(var(--primary)) !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style);