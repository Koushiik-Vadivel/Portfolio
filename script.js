// Smooth Scrolling for Anchor Links and Dot Navigation
document.querySelectorAll('a[href^="#"], .section-dots .dot').forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href') || `#${this.getAttribute('data-section')}`;
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button
const scrollBtn = document.querySelector('.scroll-btn');

window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 300);
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// FAQ Dropdown Functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');
        const faqIcon = question.querySelector('.faq-icon i');

        faqItem.classList.toggle('active');
        faqAnswer.style.maxHeight = faqItem.classList.contains('active') ? faqAnswer.scrollHeight + 'px' : '0';
        faqIcon.classList.toggle('fa-minus', faqItem.classList.contains('active'));
        faqIcon.classList.toggle('fa-plus', !faqItem.classList.contains('active'));
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close Mobile Menu When a Link is Clicked
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// Section Navigation Dots
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.section-dots .dot').forEach(dot => {
        dot.classList.toggle('active', dot.getAttribute('data-section') === currentSection);
    });
});

// Form Submission Handling (Optional)
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}