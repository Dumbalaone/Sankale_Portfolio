// Typing animation for hero name
document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('.hero-title .highlight');
    
    if (nameElement) {
        const originalText = nameElement.textContent;
        nameElement.textContent = '';
        nameElement.style.borderRight = '2px solid #00bcd4';
        nameElement.style.paddingRight = '5px';
        
        let index = 0;
        
        function typeWriter() {
            if (index < originalText.length) {
                nameElement.textContent += originalText.charAt(index);
                index++;
                setTimeout(typeWriter, 150); // Adjust speed here (milliseconds)
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    nameElement.style.borderRight = 'none';
                    nameElement.style.paddingRight = '0';
                    
                    // Add subtle glow effect after typing
                    nameElement.style.textShadow = '0 0 20px rgba(0, 188, 212, 0.5)';
                }, 1000);
            }
        }
        
        // Start typing animation after a short delay
        setTimeout(typeWriter, 1000);
        
        // Cursor blinking animation
        let cursorVisible = true;
        setInterval(() => {
            if (index < originalText.length) {
                nameElement.style.borderRightColor = cursorVisible ? 'transparent' : '#00bcd4';
                cursorVisible = !cursorVisible;
            }
        }, 500);
    }
    
    // Fade in other hero elements after name animation
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    const profileImage = document.querySelector('.profile-image');
    
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroSubtitle.style.transition = 'all 0.8s ease';
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 2000);
    }
    
    if (heroDescription) {
        heroDescription.style.opacity = '0';
        heroDescription.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroDescription.style.transition = 'all 0.8s ease';
            heroDescription.style.opacity = '1';
            heroDescription.style.transform = 'translateY(0)';
        }, 2500);
    }
    
    if (heroButtons) {
        heroButtons.style.opacity = '0';
        heroButtons.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroButtons.style.transition = 'all 0.8s ease';
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 3000);
    }
    
    if (profileImage) {
        profileImage.style.opacity = '0';
        profileImage.style.transform = 'scale(1.1) translateY(20px)';
        setTimeout(() => {
            profileImage.style.transition = 'all 1s ease';
            profileImage.style.opacity = '1';
            profileImage.style.transform = 'scale(1.2) translateY(0)';
        }, 1500);
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Navbar background opacity on scroll
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 25px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
});

// Intersection Observer for section animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections except hero
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        observer.observe(section);
    });
});

// Skills icons hover effect enhancement
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.background = 'rgba(255, 255, 255, 0.18)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });
});

// Contact items animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    const contactObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150); // Stagger the animations
                contactObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    contactItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        contactObserver.observe(item);
    });
});

// Add slideInUp keyframes animation via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .particle {
        position: fixed;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        animation: float 6s ease-in-out infinite;
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
    }
    
    .cursor-trail {
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease;
    }
    
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #3b82f6);
        z-index: 1001;
        transition: width 0.1s ease;
    }
`;
document.head.appendChild(style);

// Floating Particles Background Effect
document.addEventListener('DOMContentLoaded', function() {
    function createParticles() {
        const particleCount = window.innerWidth < 768 ? 15 : 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 6 + 2;
            const posX = Math.random() * window.innerWidth;
            const posY = Math.random() * window.innerHeight;
            const delay = Math.random() * 6;
            
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = posX + 'px';
            particle.style.top = posY + 'px';
            particle.style.animationDelay = delay + 's';
            particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
            
            document.body.appendChild(particle);
        }
    }
    
    createParticles();
    
    // Recreate particles on window resize
    window.addEventListener('resize', function() {
        document.querySelectorAll('.particle').forEach(p => p.remove());
        createParticles();
    });
});

// Animated Counter for Stats
document.addEventListener('DOMContentLoaded', function() {
    function animateCounter(element, start, end, duration) {
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            element.textContent = current + (element.textContent.includes('+') ? '+' : '');
            
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                
                statNumbers.forEach(stat => {
                    const originalText = stat.textContent;
                    const finalNumber = parseInt(originalText);
                    const hasPlus = originalText.includes('+');
                    stat.textContent = '0' + (hasPlus ? '+' : '');
                    
                    setTimeout(() => {
                        animateCounter(stat, 0, finalNumber, 2000);
                    }, 500);
                });
                
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        counterObserver.observe(aboutSection);
    }
});

// Custom Cursor Trail Effect
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 768) { // Only on desktop
        const trails = [];
        const trailLength = 8;
        
        // Create trail elements
        for (let i = 0; i < trailLength; i++) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.opacity = (trailLength - i) / trailLength * 0.5;
            trail.style.transform = 'scale(' + ((trailLength - i) / trailLength) + ')';
            document.body.appendChild(trail);
            trails.push({ element: trail, x: 0, y: 0 });
        }
        
        let mouseX = 0, mouseY = 0;
        
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function updateTrails() {
            let x = mouseX;
            let y = mouseY;
            
            trails.forEach((trail, index) => {
                trail.element.style.left = x + 'px';
                trail.element.style.top = y + 'px';
                
                // Create trailing effect
                const nextTrail = trails[index + 1];
                if (nextTrail) {
                    x += (nextTrail.x - x) * 0.3;
                    y += (nextTrail.y - y) * 0.3;
                }
                
                trail.x = x;
                trail.y = y;
            });
            
            requestAnimationFrame(updateTrails);
        }
        
        updateTrails();
    }
});

// Scroll Progress Bar
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
});

// Active Navigation Highlighting
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const navObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;
                
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section link
                const activeLink = document.querySelector(`.nav-link[href="#${targetId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-20% 0px -70% 0px'
    });
    
    sections.forEach(section => {
        navObserver.observe(section);
    });
});

// Interactive Skill Icons with Enhanced Effects
document.addEventListener('DOMContentLoaded', function() {
    const skillIcons = document.querySelectorAll('.skill-icon');
    
    skillIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(10deg) scale(1.2)';
            this.style.filter = 'drop-shadow(0 10px 20px rgba(37, 99, 235, 0.3))';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
            this.style.filter = 'none';
        });
    });
});

// Magnetic Button Effect
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translateY(-3px) scale(1.05) translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
    });
});

// Text Reveal Animation
document.addEventListener('DOMContentLoaded', function() {
    const textElements = document.querySelectorAll('.about-text p, .project-info p, .contact-text p');
    
    const textObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const words = entry.target.textContent.split(' ');
                entry.target.innerHTML = '';
                
                words.forEach((word, index) => {
                    const span = document.createElement('span');
                    span.textContent = word;
                    span.style.opacity = '0';
                    span.style.transform = 'translateY(20px)';
                    span.style.display = 'inline-block';
                    span.style.transition = 'all 0.6s ease';
                    span.style.marginRight = '0.25rem'; // Add proper spacing
                    entry.target.appendChild(span);
                    
                    setTimeout(() => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                
                textObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    textElements.forEach(element => {
        textObserver.observe(element);
    });
});

// Interactive Background that responds to mouse (keeping original colors)
document.addEventListener('DOMContentLoaded', function() {
    let mouseX = 0;
    let mouseY = 0;
    
    // Store original colors
    const originalGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    
    document.addEventListener('mousemove', function(e) {
        mouseX = (e.clientX / window.innerWidth) * 100;
        mouseY = (e.clientY / window.innerHeight) * 100;
        
        // Create subtle variations of the original blue-purple gradient
        const hue1 = 234 + (mouseX * 0.1); // Base blue hue with subtle shift
        const hue2 = 258 + (mouseY * 0.1); // Base purple hue with subtle shift
        const lightness1 = 65 + (mouseY * 0.05); // Subtle lightness variation
        const lightness2 = 52 + (mouseX * 0.05); // Subtle lightness variation
        
        document.body.style.background = `linear-gradient(135deg, 
            hsl(${hue1}, 75%, ${lightness1}%) 0%, 
            hsl(${hue2}, 70%, ${lightness2}%) 100%)`;
    });
    
    // Reset to original colors when mouse leaves the window
    document.addEventListener('mouseleave', function() {
        document.body.style.background = originalGradient;
    });
});
