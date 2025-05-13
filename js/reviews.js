// J'attends que le DOM soit chargé avant de déclencher mes scripts

document.addEventListener("DOMContentLoaded", () => {
  // Sélection des cases à cocher pour filtrer les commentaires
  const checkBoxes = document.querySelectorAll('input[name="rating"]');

  // Ajout d'un écouteur d'événement pour chaque filtre
  for (const checkBox of checkBoxes) {
    checkBox.addEventListener("change", () => {

      // Sélectionner les valeurs de tous les filtres
      const checkedValues = Array.from(
        document.querySelectorAll('input[name="rating"]:checked')
      ).map((checkBox) => Number.parseInt(checkBox.value));

      // Sélectionner tous les avis
      const reviews = document.querySelectorAll(".review");

      // Parcourir tous les avis pour les afficher ou les masquer en fonction de leur note
      for (const review of reviews) {
        const reviewRating = Number.parseInt(review.getAttribute("data-rating"));

        // Si aucune case n'est cochée, masquer tous les avis
        if (checkedValues.length === 0) {
          review.style.display = "none";
        }
        // Sinon, afficher seulement ceux qui correspondent
        else if (checkedValues.includes(reviewRating)) {
          review.style.display = "block";
        } else {
          review.style.display = "none";
        }
      }
    });
  }
});
