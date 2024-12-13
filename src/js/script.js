// Sélectionner les éléments
const menuButton = document.querySelector('.menu-btn');
const closeButton = document.querySelector('.close-btn');
const menu = document.querySelector('.menu');
const page = document.body;

// Vérifier si les éléments existent avant d'ajouter l'événement
if (menuButton && closeButton && menu) {
  // Ouvrir le menu avec le bouton ☰
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    const isClosed = !isOpen;

    // Mise à jour des attributs ARIA pour l'accessibilité
    menuButton.setAttribute('aria-expanded', isClosed);
    menu.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
    page.classList.toggle("noscroll", isClosed); // Désactive le scroll si le menu est ouvert
  });

  // Fermer le menu avec la croix ×
  closeButton.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    page.classList.remove("noscroll"); // Réactive le scroll lorsque le menu est fermé
  });
}


  





