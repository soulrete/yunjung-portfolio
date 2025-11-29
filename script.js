// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Projects Slider
const projectsContainer = document.getElementById('projectsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;
const slideWidth = 33.333; // percentage

function updateSlider() {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 992;

    let itemsPerView = 3;
    if (isMobile) {
        itemsPerView = 1;
    } else if (isTablet) {
        itemsPerView = 2;
    }

    const maxSlides = projectsContainer.children.length - itemsPerView;

    if (currentSlide > maxSlides) {
        currentSlide = maxSlides;
    }

    if (currentSlide < 0) {
        currentSlide = 0;
    }

    const translateValue = -(currentSlide * (100 / itemsPerView));
    projectsContainer.style.transform = `translateX(${translateValue}%)`;
}

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 992;

    let itemsPerView = 3;
    if (isMobile) {
        itemsPerView = 1;
    } else if (isTablet) {
        itemsPerView = 2;
    }

    const maxSlides = projectsContainer.children.length - itemsPerView;

    if (currentSlide < maxSlides) {
        currentSlide++;
        updateSlider();
    }
});

// Reset slider on window resize
window.addEventListener('resize', () => {
    updateSlider();
});

// View Projects Button
const viewProjectsBtn = document.getElementById('viewProjectsBtn');
const projectsSlider = document.querySelector('.projects-slider');

viewProjectsBtn.addEventListener('click', () => {
    projectsSlider.classList.toggle('expanded');

    if (projectsSlider.classList.contains('expanded')) {
        viewProjectsBtn.textContent = 'Hide projects';
    } else {
        viewProjectsBtn.textContent = 'View projects';
        currentSlide = 0;
        updateSlider();
    }
});

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const formData = new FormData(contactForm);

    // Here you would typically send the form data to a server
    // For now, we'll just show an alert
    alert('메시지가 전송되었습니다! (데모 버전입니다)');

    // Reset form
    contactForm.reset();
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Initial setup
updateSlider();

