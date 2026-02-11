/* =============================================
   LAB904 — Web Component: nav-menu
   Uso: <nav-menu page="index|about|tina|unio"></nav-menu>
   ============================================= */

class NavMenu extends HTMLElement {
    connectedCallback() {
        if (!document.querySelector('link[href*="Material+Symbols"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0';
            document.head.appendChild(link);
        }

        const page   = this.getAttribute('page') || 'index';
        const h      = page === 'index' ? '#' : '/#';
        const aProd  = (page === 'tina' || page === 'unio') ? ' class="active"' : '';
        const aAbout = page === 'about' ? ' class="active"' : '';

        this.innerHTML = `
<header>
    <nav>
        <button class="menu-toggle" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <a href="/" class="logo"><img src="/assets/images/core/lab904-logo.svg" alt="LAB904"></a>
        <ul class="nav-links">
            <li class="has-dropdown">
                <a href="${h}produtos"${aProd}>Produtos<span class="chevron material-symbols-outlined">keyboard_arrow_down</span></a>
                <div class="mega-menu">
                    <div class="mega-menu-grid">
                        <div class="mega-menu-column">
                            <h3>Saúde</h3>
                            <ul class="mega-menu-items">
                                <li>
                                    <a href="/products/tina/">
                                        <div class="submenu-title">Tina</div>
                                        <div class="submenu-desc">IA para Odontologia e Estética</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="mega-menu-column">
                            <h3>Atendimento</h3>
                            <ul class="mega-menu-items">
                                <li>
                                    <a href="/products/unio/">
                                        <div class="submenu-title">UnIO</div>
                                        <div class="submenu-desc">Plataforma de Gestão Omnichannel de Mensagens</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li class="has-dropdown">
                <a href="${h}servicos">Serviços<span class="chevron material-symbols-outlined">keyboard_arrow_down</span></a>
                <div class="mega-menu">
                    <div class="mega-menu-grid">
                        <div class="mega-menu-column">
                            <h3>Tecnologia</h3>
                            <ul class="mega-menu-items">
                                <li><a href="${h}servicos">Inteligência Artificial</a></li>
                                <li><a href="${h}servicos">Automação</a></li>
                                <li><a href="${h}servicos">Business Intelligence</a></li>
                            </ul>
                        </div>
                        <div class="mega-menu-column">
                            <h3>Processos</h3>
                            <ul class="mega-menu-items">
                                <li><a href="${h}servicos">Mapeamento de Processos</a></li>
                                <li><a href="${h}servicos">Consultoria</a></li>
                            </ul>
                        </div>
                        <div class="mega-menu-column">
                            <h3>Pessoas</h3>
                            <ul class="mega-menu-items">
                                <li><a href="${h}servicos">Palestras e Cursos</a></li>
                                <li><a href="${h}servicos">Mentorias</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li><a href="/about/"${aAbout}>Sobre</a></li>
            <li><a href="${h}contato">Contato</a></li>
        </ul>
        <div class="nav-actions">
            <button class="theme-toggle" aria-label="Alternar tema" id="themeToggle">
                <span id="themeIcon"><span class="material-symbols-outlined">dark_mode</span></span>
            </button>
        </div>
    </nav>
</header>`;
    }
}

customElements.define('nav-menu', NavMenu);
