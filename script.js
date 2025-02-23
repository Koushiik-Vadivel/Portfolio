const toggleButton = document.createElement('button');
toggleButton.innerText = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px 20px';
toggleButton.style.backgroundColor = '#2c3e50';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Add dark mode styles
const style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background-color: #1a1a1a;
        color: #f4f4f4;
    }
    .dark-mode header, .dark-mode footer {
        background-color: #1a1a1a;
    }
    .dark-mode .card {
        background-color: #2c3e50;
        color: #fff;
    }
    .dark-mode nav {
        background-color: #1a1a1a;
    }
    .dark-mode a {
        color: #00bcd4;
    }
    .dark-mode a:hover {
        color: #0097a7;
    }
    .dark-mode .form-group input,
    .dark-mode .form-group textarea {
        background-color: #2c3e50;
        color: #fff;
    }
    .dark-mode button[type="submit"] {
        background-color: #00bcd4;
        color: #fff;
    }
    .dark-mode button[type="submit"]:hover {
        background-color: #0097a7;
    }
`;
document.head.appendChild(style);

// Smooth scrolling with offset
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 80; // Adjust this value based on your header/nav height
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate form submission (replace with actual backend integration)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Thank you for your message! I will get back to you soon.');
    document.getElementById('contactForm').reset();
});