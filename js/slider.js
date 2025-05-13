// Je récupère les éléments du DOM pour la gestion du slider (images par leur class (identique) et les boutons par un id unique)

document.addEventListener("DOMContentLoaded", () => {
  const sliderImage = document.querySelectorAll(".slider__img");
  const leftButton = document.getElementById("leftButton");
  const rightButton = document.getElementById("rightButton");

  // Je stocke l'index du slider dans une variable currentSlide
let currentSlide = 0;

  // Pour passer d'une image à l'autre, j'ajoute une class "--current" à l'image affichée et je la retire aux autres images qui l'auraient déjà (l'image précédemment affichée en l'occurence)
  function animateSlider() {
    sliderImage.forEach((image, index) => {
      if (index === currentSlide) {
        image.classList.add("slider__img--current");
      } else {
        image.classList.remove("slider__img--current");
      }
    });
  }

  // Utilisation des boutons du slider
  function nextImage() {
    currentSlide = (currentSlide + 1) % sliderImage.length;
    animateSlider();
  }
  function previousImage() {
    currentSlide = (currentSlide - 1 + sliderImage.length) % sliderImage.length;
    animateSlider();
  }
  // Ajout d'un écouteur d'événement sur les boutons "Suivant" et "Précédent" avec en fallback les deux fonctions nextImage et previousImage.
  rightButton.addEventListener("click", nextImage);
  leftButton.addEventListener("click", previousImage);

//   J'appelle la fonction pour afficher la première image au chargement de la page:
  animateSlider()
});
