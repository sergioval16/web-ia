// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const links = document.querySelectorAll('a, button');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Add a slight delay to the follower for a smooth effect
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 50);
});

// Cursor effects on links and buttons
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.width = '60px';
        cursorFollower.style.height = '60px';
        cursorFollower.style.border = '1px solid var(--primary-light)';
        cursorFollower.style.backgroundColor = 'rgba(109, 40, 217, 0.1)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
        cursorFollower.style.border = '1px solid var(--primary-light)';
        cursorFollower.style.backgroundColor = 'transparent';
    });
});

// Hide cursor when mouse leaves the window
document.addEventListener('mouseout', (e) => {
    if (e.relatedTarget === null) {
        cursor.style.opacity = '0';
        cursorFollower.style.opacity = '0';
    }
});

document.addEventListener('mouseover', () => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    mobileNavItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
}

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initialize header state on page load
if (window.scrollY > 50) {
    header.classList.add('scrolled');
}

// Scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation classes when element is in viewport
            if (entry.target.classList.contains('fade-up') ||
                entry.target.classList.contains('fade-up-delay') ||
                entry.target.classList.contains('fade-up-delay-2') ||
                entry.target.classList.contains('fade-up-delay-3') ||
                entry.target.classList.contains('fade-in') ||
                entry.target.classList.contains('fade-in-right') ||
                entry.target.classList.contains('fade-in-left') ||
                entry.target.classList.contains('slide-in')) {
                entry.target.style.animationPlayState = 'running';
            }
            
            // Add active class for parallax elements
            if (entry.target.classList.contains('parallax-card') ||
                entry.target.classList.contains('parallax-text') ||
                entry.target.classList.contains('parallax-item')) {
                entry.target.classList.add('active');
            }
            
            // Start counter animation for stat numbers
            if (entry.target.classList.contains('stat-number')) {
                const countTo = parseInt(entry.target.getAttribute('data-count'));
                let count = 0;
                const duration = 2000; // 2 seconds
                const interval = duration / countTo;
                
                const counter = setInterval(() => {
                    count++;
                    entry.target.textContent = count + (entry.target.getAttribute('data-suffix') || '');
                    
                    if (count >= countTo) {
                        clearInterval(counter);
                    }
                }, interval);
            }
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.fade-up, .fade-up-delay, .fade-up-delay-2, .fade-up-delay-3, .fade-in, .fade-in-right, .fade-in-left, .slide-in, .parallax-card, .parallax-text, .parallax-item, .stat-number').forEach(el => {
    if (el.classList.contains('fade-up') || 
        el.classList.contains('fade-up-delay') || 
        el.classList.contains('fade-up-delay-2') || 
        el.classList.contains('fade-up-delay-3') || 
        el.classList.contains('fade-in') || 
        el.classList.contains('fade-in-right') || 
        el.classList.contains('fade-in-left') || 
        el.classList.contains('slide-in')) {
        el.style.animationPlayState = 'paused';
    }
    observer.observe(el);
});

// Parallax movement effect on mouse move
const parallaxCards = document.querySelectorAll('.parallax-card');
const parallaxItems = document.querySelectorAll('.parallax-item');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    parallaxCards.forEach(card => {
        if (card.classList.contains('active')) {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            
            const distanceX = (e.clientX - cardCenterX) / 30;
            const distanceY = (e.clientY - cardCenterY) / 30;
            
            card.style.transform = `translateY(0) perspective(1000px) rotateY(${distanceX * 0.5}deg) rotateX(${-distanceY * 0.5}deg)`;
        }
    });
    
    parallaxItems.forEach(item => {
        if (item.classList.contains('active')) {
            const moveX = mouseX * 15;
            const moveY = mouseY * 15;
            item.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
        }
    });
});

// Reset transform on mouse leave
parallaxCards.forEach(card => {
    card.addEventListener('mouseleave', () => {
        if (card.classList.contains('active')) {
            card.style.transform = 'translateY(0)';
        }
    });
});

parallaxItems.forEach(item => {
    item.addEventListener('mouseleave', () => {
        if (item.classList.contains('active')) {
            item.style.transform = 'translateY(0)';
        }
    });
});

// Testimonial slider
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.testimonial-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
            slide.style.opacity = '1';
            slide.style.transform = 'translateY(0)';
        } else {
            slide.style.opacity = '0';
            slide.style.transform = 'translateY(30px)';
            setTimeout(() => {
                slide.style.display = 'none';
            }, 500);
        }
    });
    
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    currentSlide = index;
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
    });
});

// Auto slide change
function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

let slideInterval = setInterval(autoSlide, 5000);

// Pause auto slide on hover
const testimonialSlider = document.querySelector('.testimonial-slider');
testimonialSlider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

testimonialSlider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(autoSlide, 5000);
});

// Cookie banner
const cookieBanner = document.querySelector('.cookie-banner');
const cookieAcceptBtn = document.querySelector('.cookie-accept');

// Show cookie banner after 2 seconds
setTimeout(() => {
    cookieBanner.classList.add('show');
}, 2000);

cookieAcceptBtn.addEventListener('click', () => {
    cookieBanner.classList.remove('show');
    // Set cookie
    localStorage.setItem('cookiesAccepted', 'true');
});

// Check if cookies already accepted
if (localStorage.getItem('cookiesAccepted') === 'true') {
    cookieBanner.style.display = 'none';
}

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());
        
        // Simple validation
        let isValid = true;
        for (const [key, value] of Object.entries(formValues)) {
            if (!value) {
                isValid = false;
                break;
            }
        }
        
        if (isValid) {
            // Show success message (in a real application, you would send this data to a server)
            contactForm.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i><h3>¡Mensaje enviado!</h3><p>Nos pondremos en contacto contigo lo antes posible.</p></div>';
            
            // Style the success message
            const successMessage = document.querySelector('.success-message');
            successMessage.style.textAlign = 'center';
            successMessage.style.padding = '30px';
            
            const icon = successMessage.querySelector('i');
            icon.style.fontSize = '3rem';
            icon.style.color = 'var(--secondary-color)';
            icon.style.marginBottom = '20px';
            
            // Animate the success message
            successMessage.classList.add('fade-up');
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Función para manejar animaciones al hacer scroll
function handleScrollAnimations() {
    // Animar elementos con clases específicas
    const animatedElements = document.querySelectorAll('.fade-up, .fade-up-delay, .fade-up-delay-2, .fade-up-delay-3, .fade-up-delay-4, .slide-in-left, .slide-in-right, .reveal-text, .stagger-item');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Si el elemento está en el viewport
        if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
    
    // Animar elementos con la clase animate-on-scroll (código anterior)
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Comprobar si el elemento está en el viewport
        if (position.top < window.innerHeight * 0.8) {
            element.classList.add('visible');
        }
    });
}

// Inicializar las animaciones al hacer scroll
function initScrollAnimations() {
    // Ejecutar una vez al cargar la página
    handleScrollAnimations();
    
    // Añadir evento de scroll
    window.addEventListener('scroll', handleScrollAnimations);
}

// Animate stats numbers
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length === 0) return;
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const suffix = stat.getAttribute('data-suffix') || '';
        let current = 0;
        const increment = target / 50; // Dividimos el objetivo en 50 pasos
        const duration = 2000; // 2 segundos
        const stepTime = duration / 50;
        
        // Inicializar con 0
        stat.textContent = '0' + suffix;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            stat.textContent = Math.floor(current) + suffix;
        }, stepTime);
    });
}

// Iniciar animación de estadísticas cuando el elemento sea visible
function initStatsAnimation() {
    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(statsSection);
}

// Intersection Observer for triggering animations
function setupIntersectionObserver() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stats')) {
                    animateStats();
                }
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // Observe stats section
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// Initialize all animations
function initAnimations() {
    initScrollAnimations();
    setupIntersectionObserver();
}

// Initialize custom cursor
function initCustomCursor() {
    // Custom cursor code here
}

// Initialize mobile menu
function initMobileMenu() {
    // Mobile menu code here
}

// Initialize header scroll effect
function initHeaderScroll() {
    // Header scroll effect code here
}

function setupParallaxCards() {
    // Seleccionar todas las tarjetas con la clase parallax-card EXCEPTO las de contacto
    const parallaxCards = document.querySelectorAll('.parallax-card:not(.contact-info):not(.contact-form)');
    
    parallaxCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            card.style.transform = `translateY(0) perspective(1000px) rotateY(${deltaX * 10}deg) rotateX(${-deltaY * 10}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) perspective(1000px) rotateY(0) rotateX(0)';
        });
    });
}

function initTestimonialSlider() {
    // Testimonial slider code here
}

// FAQ Toggle
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Cerrar todas las demás preguntas
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alternar la clase active en el elemento actual
            item.classList.toggle('active');
        });
    });
});

// Document ready
document.addEventListener('DOMContentLoaded', function() {
    initCustomCursor();
    initMobileMenu();
    initHeaderScroll();
    initScrollAnimations();
    initStatsAnimation();
    setupParallaxCards();
    
    // Inicializar el slider de testimonios si existe
    if (document.querySelector('.testimonial-slider')) {
        initTestimonialSlider();
    }
});

// Initialize the page
window.addEventListener('load', () => {
    // Show first testimonial
    showSlide(0);
    
    // Add a class to body when page is loaded
    document.body.classList.add('loaded');
    
    // Hide preloader if exists
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});
