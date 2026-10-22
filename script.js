// Obsługa menu głównego (OD 0, OD 1000, Instrukcja, Logowanie)
function showTab(tabId) {
    // 1. Ukryj całą zawartość wszystkich zakładek głównych
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // 2. Usuń podświetlenie ze wszystkich linków w menu nawigacyjnym
    const links = document.querySelectorAll('.navbar .nav-links a');
    links.forEach(link => link.classList.remove('active'));

    // 3. Pokaż wybraną sekcję treści
    const activeContent = document.getElementById(`tab-${tabId}`);
    if (activeContent) {
        activeContent.classList.add('active');
    }

    // 4. Podświetl kliknięty link w menu
    const activeLink = document.getElementById(`link-${tabId}`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}
