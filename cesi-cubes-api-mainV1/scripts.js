const apiUrl = 'http://localhost:8000/api/articles'; // Remplacez par l'URL de votre API

// Fonction pour récupérer et afficher la liste des vins depuis l'API
async function afficherListeVins() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des vins');
        }
        const vins = await response.json();
        const vinListeElement = document.getElementById('vin-liste');
        vinListeElement.innerHTML = ''; // Efface le contenu existant
        vins.forEach(vin => {
            const vinElement = document.createElement('div');
            vinElement.classList.add('vin');
            vinElement.innerHTML = `
                <h2>${vin.nom}</h2>
                <p><strong>Prix:</strong> ${vin.prixunite} €</p>
                <p><strong>Origine:</strong> ${vin.paysproduction}, ${vin.regionproduction}</p>
                <button onclick="afficherDetails(${vin.id})">Détails</button>
            `;
            vinListeElement.appendChild(vinElement);
        });
    } catch (error) {
        console.error('Erreur:', error.message);
    }
}

// Fonction pour afficher les détails d'un vin spécifique
async function afficherDetails(idVin) {
    try {
        const response = await fetch(`${apiUrl}/${idVin}`);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des détails du vin');
        }
        const vin = await response.json();
        alert(`Détails du vin ${vin.nom}:\n${vin.description}`);
    } catch (error) {
        console.error('Erreur:', error.message);
    }
}

// Appel initial pour afficher la liste des vins au chargement de la page
afficherListeVins();
