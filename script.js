function loadPage(page) {
    const contentDiv = document.getElementById('content');

    fetch(page + '.html')
        .then(response => response.text())
        .then(html => {
            contentDiv.innerHTML = html;
        })
        .catch(error => {
            contentDiv.innerHTML = "<p>Erreur lors du chargement de la page.</p>";
        });
}

// Chargement initial de la page d'accueil
window.onload = () => loadPage('home');
