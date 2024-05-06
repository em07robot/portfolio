// Get the form element
const form = document.getElementById("contact-form");

// Add an event listener for form submission
form.addEventListener("submit", function (event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validate the form data
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  alert("Message sent!");
});

// Sélectionnez toutes les images avec la classe "modal"
var modalImages = document.querySelectorAll(".modal");

// Ajoutez un gestionnaire d'événements à chaque image
modalImages.forEach(function (image) {
  image.addEventListener("click", function () {
    // Créez un élément pour le modal
    var modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay");

    // Créez un élément pour l'image agrandie
    var modalContent = document.createElement("img");
    modalContent.classList.add("modal-content");
    modalContent.src = this.src;

    // Créez un élément pour le bouton de fermeture du modal
    var closeButton = document.createElement("span");
    closeButton.classList.add("modal-close");
    closeButton.innerHTML = "&times;"; // Symbole de croix
    closeButton.addEventListener("click", function () {
      modalOverlay.style.display = "none";
    });
    // Ajoutez un gestionnaire d'événements clic à l'overlay modal
    modalOverlay.addEventListener("click", function (event) {
      // Vérifiez si l'élément cliqué est l'image agrandie
      if (!event.target.classList.contains("modal-content")) {
        modalOverlay.style.display = "none"; // Si ce n'est pas le cas, fermez le modal
      }
    });

    // Ajoutez l'image agrandie et le bouton de fermeture au modal
    modalOverlay.appendChild(modalContent);
    modalOverlay.appendChild(closeButton);

    // Ajoutez le modal à la page
    document.body.appendChild(modalOverlay);

    // Affichez le modal
    modalOverlay.style.display = "flex";
  });
});
