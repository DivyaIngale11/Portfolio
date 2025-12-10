// Smooth Scroll for Navbar Links
document.querySelectorAll('a.nav-link, a.btn').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Only handle links with hash
    if (this.hash !== '') {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

// Optional: Simple Form Submission Alert
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual submission
    alert('Thank you! Your message has been sent.');
    contactForm.reset();
  });
}

// Optional: Navbar active link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

