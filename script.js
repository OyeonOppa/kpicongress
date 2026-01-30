// Language switching
let currentLanguage = 'th';

function switchLanguage(lang) {
    currentLanguage = lang;
    
    document.getElementById('btn-th').classList.toggle('active', lang === 'th');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    
    document.querySelectorAll('.lang-th, .lang-en').forEach(element => {
        element.style.display = 'none';
    });
    
    document.querySelectorAll('.lang-' + lang).forEach(element => {
        element.style.display = '';
    });
    
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
}

// Load saved language
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'th';
    switchLanguage(savedLanguage);
    
    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const topnav = document.getElementById('topnav');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const body = document.body;
    
    function toggleMenu() {
        const isOpen = topnav.classList.toggle('open');
        menuBtn.classList.toggle('open');
        mobileOverlay.classList.toggle('show');
        body.classList.toggle('menu-open');
        menuBtn.setAttribute('aria-expanded', isOpen);
    }
    
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }
    
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', toggleMenu);
    }
    
    // Close menu when clicking nav links
    document.querySelectorAll('.topnav .nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (topnav.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});