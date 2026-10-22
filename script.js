// Obsługa menu głównego (Licytacje, Instrukcja, Logowanie)
function showTab(tabId) {
    // 1. Ukryj całą zawartość wszystkich zakładek
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // 2. Usuń podświetlenie (klasę active) ze wszystkich linków w menu
    const links = document.querySelectorAll('.navbar .nav-links a');
    links.forEach(link => link.classList.remove('active'));

    // 3. Pokaż wybraną zakładkę i podświetl odpowiadający jej link
    document.getElementById(`tab-${tabId}`).classList.add('active');
    document.getElementById(`link-${tabId}`).classList.add('active');
}

// Obsługa nowego sub-panelu sterowania (OD 0, OD 1000)
function showSubTab(subTabId) {
    // 1. Ukryj zawartość podzakładek dolnego panelu
    const subContents = document.querySelectorAll('.sub-tab-content');
    subContents.forEach(content => content.classList.remove('active'));

    // 2. Usuń podświetlenie z linków dolnego panelu
    const subLinks = document.querySelectorAll('.sub-panel-navbar .nav-links a');
    subLinks.forEach(link => link.classList.remove('active'));

    // 3. Pokaż wybraną podzakładkę i podświetl jej link
    document.getElementById(`sub-tab-${subTabId}`).classList.add('active');
    document.getElementById(`link-${subTabId}`).classList.add('active');
}
