/**
 * Biology_W3B - Shared Components
 * Handles global navigation injection
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
});

function initNavigation() {
    const nav = document.getElementById('global-nav');
    if (!nav) return;

    const path = window.location.pathname;
    const isSubDir = path.includes('/temas/') || path.includes('/juegos/');
    const p = isSubDir ? '../' : '';

    const navItems = [
        { name: 'Inicio', icon: 'fa-globe-americas', link: p + 'index.html' },
        { name: 'Temas', icon: 'fa-book-open', link: p + 'temas/index.html' },
        { name: 'Juegos', icon: 'fa-gamepad', link: p + 'juegos/index.html' }
    ];

    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    nav.innerHTML = navItems.map(item => `
        <a href="${item.link}" class="nav-link ${currentFile === item.link.split('/').pop() ? 'active' : ''}">
            <i class="fas ${item.icon}"></i>
            <span>${item.name}</span>
        </a>
    `).join('');
}
