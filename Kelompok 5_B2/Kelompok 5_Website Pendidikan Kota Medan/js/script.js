// Navigation & Page Control Script
class App {
    constructor() {
        this.currentPage = 'home';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupMapAnimations();
        this.setupCounterAnimation();
        this.handleFirstLoad();
    }

    // Page Navigation
    showPage(pageName) {
        // Update current page
        this.currentPage = pageName;
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Show selected page
        const targetPage = document.getElementById(pageName + 'Page');
        if (targetPage) {
            targetPage.classList.add('active');
            
            // Add fade-in animation
            targetPage.style.animation = 'fadeIn 0.5s ease';
            setTimeout(() => {
                targetPage.style.animation = '';
            }, 500);
        }
        
        // Add active class to clicked nav link
        const clickedLink = event.target.closest('.nav-link');
        if (clickedLink) {
            clickedLink.classList.add('active');
        }
        
        // Close mobile menu if open
        this.closeMobileMenu();
        
        // Update browser history
        history.pushState({ page: pageName }, '', `#${pageName}`);
        
        // Trigger page-specific actions
        this.onPageChange(pageName);
    }

    // Toggle mobile navigation
    toggleNav() {
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        
        navMenu.classList.toggle('active');
        
        // Update toggle button icon
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
            navToggle.setAttribute('aria-expanded', 'true');
        } else {
            icon.className = 'fas fa-bars';
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }

    // Close mobile menu
    closeMobileMenu() {
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        const icon = navToggle.querySelector('i');
        
        navMenu.classList.remove('active');
        icon.className = 'fas fa-bars';
        navToggle.setAttribute('aria-expanded', 'false');
    }

    // Toggle legend panel
    toggleLegend() {
        const legendPanel = document.getElementById('legendPanel');
        legendPanel.classList.toggle('active');
        
        // Update button text based on state
        const button = event.target.closest('.legend-toggle-btn');
        if (button) {
            const icon = button.querySelector('i');
            if (legendPanel.classList.contains('active')) {
                icon.className = 'fas fa-times';
                button.innerHTML = '<i class="fas fa-times"></i> Tutup Legenda';
            } else {
                icon.className = 'fas fa-layer-group';
                button.innerHTML = '<i class="fas fa-layer-group"></i> Legenda';
            }
        }
    }

    // Handle form submission
    handleSubmit(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        
        // Simple validation
        if (!this.validateForm(formData)) {
            this.showNotification('Harap isi semua field yang wajib diisi!', 'error');
            return;
        }
        
        // Simulate form submission
        this.showNotification('Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.', 'success');
        
        // Reset form
        form.reset();
        
        // Log form data (in real app, you would send this to a server)
        console.log('Form submitted:', Object.fromEntries(formData));
    }

    // Form validation
    validateForm(formData) {
        const requiredFields = ['name', 'email', 'subject', 'message'];
        
        for (let field of requiredFields) {
            if (!formData.get(field)?.trim()) {
                return false;
            }
        }
        
        // Email validation
        const email = formData.get('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return false;
        }
        
        return true;
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles if not already added
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    background: white;
                    padding: 15px 20px;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                    z-index: 10000;
                    transform: translateX(400px);
                    transition: transform 0.3s ease;
                    max-width: 400px;
                }
                .notification.show {
                    transform: translateX(0);
                }
                .notification-success {
                    border-left: 4px solid #10b981;
                }
                .notification-error {
                    border-left: 4px solid #ef4444;
                }
                .notification-info {
                    border-left: 4px solid #3b82f6;
                }
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .notification-success i { color: #10b981; }
                .notification-error i { color: #ef4444; }
                .notification-info i { color: #3b82f6; }
            `;
            document.head.appendChild(styles);
        }
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    // Setup event listeners
    setupEventListeners() {
        // Close legend when clicking outside
        document.addEventListener('click', (event) => {
            const legendPanel = document.getElementById('legendPanel');
            const legendBtn = document.querySelector('.legend-toggle-btn');
            
            if (legendPanel && legendBtn && 
                !legendPanel.contains(event.target) && 
                !legendBtn.contains(event.target)) {
                legendPanel.classList.remove('active');
                
                // Reset button text
                if (legendBtn) {
                    legendBtn.innerHTML = '<i class="fas fa-layer-group"></i> Legenda';
                }
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (event) => {
            if (event.state && event.state.page) {
                this.showPage(event.state.page);
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (event) => {
            const navMenu = document.getElementById('navMenu');
            const navToggle = document.getElementById('navToggle');
            
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(event.target) && 
                !navToggle.contains(event.target)) {
                this.closeMobileMenu();
            }
        });

        // Handle escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.closeMobileMenu();
                const legendPanel = document.getElementById('legendPanel');
                if (legendPanel) {
                    legendPanel.classList.remove('active');
                }
            }
        });
    }

    // Add smooth animations to map controls on load
    setupMapAnimations() {
        window.addEventListener('load', () => {
            const controls = document.querySelectorAll('.ol-control');
            controls.forEach((control, index) => {
                setTimeout(() => {
                    control.style.opacity = '0';
                    control.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        control.style.transition = 'all 0.3s ease';
                        control.style.opacity = '1';
                        control.style.transform = 'scale(1)';
                    }, 50);
                }, index * 100);
            });
        });
    }

    // Counter animation for statistics
    setupCounterAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 16);
        });
    }

    // Handle first page load
    handleFirstLoad() {
        // Check if there's a hash in the URL
        const hash = window.location.hash.replace('#', '');
        if (hash && ['home', 'map', 'contact'].includes(hash)) {
            this.showPage(hash);
        }
    }

    // Page change handler
    onPageChange(pageName) {
        // Page-specific actions
        switch (pageName) {
            case 'map':
                this.onMapPageLoad();
                break;
            case 'home':
                this.onHomePageLoad();
                break;
            case 'contact':
                this.onContactPageLoad();
                break;
        }
    }

    onMapPageLoad() {
        // Initialize map if needed
        console.log('Map page loaded');
    }

    onHomePageLoad() {
        // Home page specific actions
        console.log('Home page loaded');
    }

    onContactPageLoad() {
        // Contact page specific actions
        console.log('Contact page loaded');
    }
}

// Initialize the application
let app;

document.addEventListener('DOMContentLoaded', () => {
    app = new App();
});

// Global functions for HTML onclick attributes
function showPage(pageName) {
    if (app) {
        app.showPage(pageName);
    }
}

function toggleNav() {
    if (app) {
        app.toggleNav();
    }
}

function toggleLegend() {
    if (app) {
        app.toggleLegend();
    }
}

function handleSubmit(event) {
    if (app) {
        app.handleSubmit(event);
    }
}

// Add CSS for fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);