/**
 * Biology Web - Shared Components & UI Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initModals();
});

function initNavigation() {
    const nav = document.getElementById('global-nav');
    if (!nav) return;

    const navItems = [
        { name: 'Inicio', icon: 'fa-globe-americas', link: 'index.html' },
        { name: 'Temas', icon: 'fa-book-open', link: 'temas/index.html' },
        { name: 'Juegos', icon: 'fa-gamepad', link: 'juegos/index.html' },
        { name: 'Documentación', icon: 'fa-file-alt', link: 'document.html' }
    ];

    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    nav.innerHTML = navItems.map(item => `
        <a href="${item.link}" class="nav-link ${currentFile === item.link ? 'active' : ''}">
            <i class="fas ${item.icon}"></i>
            <span>${item.name}</span>
        </a>
    `).join('');
}

function initModals() {
    // Backdrop click to close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
}

function showModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    
    modal.style.display = 'flex';
    // Allow display to register before opacity transition
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Helper to create and show a bio card programmatically
function createBioCard(options) {
    const { title, description, image, category, onClick } = options;
    const card = document.createElement('div');
    card.className = 'bio-card';
    card.innerHTML = `
        <div class="card-img-wrapper">
            <img src="${image || 'https://images.unsplash.com/photo-1544333323-53744618e778?q=80&w=600'}" alt="${title}">
        </div>
        <div class="card-body">
            <h3>${title}</h3>
            <p>${description}</p>
            <div style="margin-top:15px; color:var(--primary); font-size:0.8rem; text-transform:uppercase; font-weight:700;">${category}</div>
        </div>
    `;
    if (onClick) card.addEventListener('click', onClick);
    return card;
}
