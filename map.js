document.addEventListener('DOMContentLoaded', (event) => {
    // Initialiser la carte et définir son centre et son niveau de zoom
    var map = L.map('map').setView([45.444, 4.7519], 13); // Coordonnées pour Paris, France

    // Ajouter une couche de titre (tiles) d'OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Ajouter un marqueur sur la carte
    L.marker([45.4447, 4.7519]).addTo(map)
        .bindPopup("Maison de l'Atelier motocycles" )
        .openPopup();
});

document.addEventListener('DOMContentLoaded', (event) => {
    const emailHyperlinkContainer = document.getElementById('email-hyperlink');
    const emailEmoji = '📧'; // Emoji courriel
    const email = 'ma-motocycles@gmail.com'; // Remplacez par l'adresse courriel désirée

    // Créer un élément <span> pour l'emoji
    const emojiSpan = document.createElement('span');
    emojiSpan.innerHTML = emailEmoji;

    // Créer un élément <a> pour l'hyperlien "mailto"
    const mailtoLink = document.createElement('a');
    mailtoLink.href = `mailto:${email}`;
    mailtoLink.textContent = email;

    // Ajouter l'emoji et le lien hypertexte au conteneur
    emailHyperlinkContainer.appendChild(emojiSpan);
    emailHyperlinkContainer.appendChild(mailtoLink);
});