/**
 * Biology Web - Master Controller
 * Handles dynamic content loading for sub-pages
 */

document.addEventListener('DOMContentLoaded', () => {
    const pageType = getPageType();
    if (!pageType) return;

    const container = document.getElementById('bio-container');
    const searchInput = document.getElementById('search-input');

    function renderCards(filter = '') {
        if (!container) return;
        container.innerHTML = '';
        
        const data = BIOLOGY_DATA[pageType] || [];
        const filtered = data.filter(item => 
            item.title.toLowerCase().includes(filter.toLowerCase()) || 
            item.description.toLowerCase().includes(filter.toLowerCase())
        );
        
        filtered.forEach(item => {
            const card = createBioCard({
                ...item,
                onClick: () => showDetails(item)
            });
            container.appendChild(card);
        });
    }

    function openModal(id, category) {
    const item = BIOLOGY_DATA[category].find(i => i.id === id);
    if (item) {
        document.getElementById('modal-title').innerText = item.title;
        // El contenido HTML completo con sus marcadores de imagen
        document.getElementById('modal-body').innerHTML = `
            <div style="font-size: 1.1rem; line-height: 1.8;">
                ${item.details}
            </div>
        `;
        document.getElementById('detail-modal').style.display = 'block';
    }
}

    function showDetails(item) {
        const titleEl = document.getElementById('modal-title');
        const bodyEl = document.getElementById('modal-body');
        if (titleEl && bodyEl) {
            titleEl.textContent = item.title;
            bodyEl.innerHTML = item.details;
            showModal('detail-modal');
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => renderCards(e.target.value));
    }

    renderCards();
});

function getPageType() {
    const path = window.location.pathname;
    if (path.includes('humano')) return 'humano';
    if (path.includes('animals')) return 'animals';
    if (path.includes('seresvivos')) return 'seresvivos';
    if (path.includes('ecologia') || path.includes('cadena')) return 'ecologia';
    return null;
}
