/* =============================================
   LAB904 — Scripts Compartilhados
   ============================================= */

// === Tema (Dark / Light Mode) ===
(function () {
    const toggle = document.getElementById('themeToggle');
    const icon   = document.getElementById('themeIcon');
    const html   = document.documentElement;

    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        icon.innerHTML = theme === 'dark'
            ? '<span class="material-symbols-outlined">dark_mode</span>'
            : '<span class="material-symbols-outlined">light_mode</span>';
    }

    setTheme(localStorage.getItem('theme') || 'dark');

    toggle.addEventListener('click', () => {
        setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
})();

// === Menu Mobile ===
(function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks   = document.querySelector('.nav-links');
    const spans      = menuToggle.querySelectorAll('span');

    function setHamburger(open) {
        spans[0].style.transform  = open ? 'rotate(45deg) translate(5px, 5px)'   : 'none';
        spans[1].style.opacity    = open ? '0' : '1';
        spans[2].style.transform  = open ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
    }

    menuToggle.addEventListener('click', () => {
        setHamburger(navLinks.classList.toggle('active'));
    });

    // Dropdown mobile
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.has-dropdown > a').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                link.parentElement.classList.toggle('mobile-open');
            });
        });
    }

    // Fechar menu ao clicar em link do submenu
    document.querySelectorAll('.mega-menu-items a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            setHamburger(false);
        });
    });
})();

// === Scroll Suave ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
        }
    });
});

// === Efeito Header no Scroll ===
(function () {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.style.padding = window.pageYOffset > 100 ? '1rem 0' : '1.5rem 0';
    });
})();

// === Observador de Interseção (fade-in) ===
const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity    = '1';
            entry.target.style.transform  = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

/**
 * Aplica animação fade-in aos elementos selecionados.
 * @param {string} selector  — Seletor CSS
 * @param {number} delayStep — Intervalo de delay entre elementos (s)
 */
function observeElements(selector, delayStep = 0.1) {
    document.querySelectorAll(selector).forEach((el, i) => {
        el.style.opacity    = '0';
        el.style.transform  = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${i * delayStep}s`;
        fadeObserver.observe(el);
    });
}
