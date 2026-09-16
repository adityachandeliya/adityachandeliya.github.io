// Portfolio interactions — mobile menu, nav state, scroll animations.
document.addEventListener('DOMContentLoaded', () => {
    // Animate on scroll
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 700, once: true, offset: 80, easing: 'ease-out' });
    }
    const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Sticky nav background on scroll
    const onScroll = () => {
        if (window.scrollY > 20) {
            navbar.classList.add('bg-slate-900/80', 'backdrop-blur', 'border-slate-800', 'shadow-lg', 'shadow-black/20');
        } else {
            navbar.classList.remove('bg-slate-900/80', 'backdrop-blur', 'border-slate-800', 'shadow-lg', 'shadow-black/20');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu toggle
    if (menuBtn && mobileMenu) {
        const icon = menuBtn.querySelector('i');
        const toggle = (open) => {
            mobileMenu.classList.toggle('hidden', !open);
            menuBtn.setAttribute('aria-expanded', String(open));
            if (icon) icon.className = open ? 'fas fa-xmark' : 'fas fa-bars';
        };
        menuBtn.addEventListener('click', () => toggle(mobileMenu.classList.contains('hidden')));
        mobileMenu.querySelectorAll('a').forEach((link) =>
            link.addEventListener('click', () => toggle(false))
        );
    }

    // Active section highlighting in nav
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    if ('IntersectionObserver' in window) {
        const spy = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach((l) =>
                            l.classList.toggle('active', l.getAttribute('href') === `#${id}`)
                        );
                    }
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        sections.forEach((s) => spy.observe(s));
    }
});