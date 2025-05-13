// J'attends que le DOM soit chargé avant de déclencher mes scripts

document.addEventListener("DOMContentLoaded", () => {
// Je récupère les éléments du DOM pour la gestion du thème
const greenTheme = document.getElementById("theme-green");
const redTheme = document.getElementById("theme-red");
const blueTheme = document.getElementById("theme-blue");
const darkTheme = document.getElementById("theme-switch")


// Gestion du thème par couleur, avec écouteur d'événement puis déclencher le thème via les class déjà prévues dans le html et le style dans le css

// Thème vert
greenTheme.addEventListener("click", () => {
  document.body.classList.remove("theme-red", "theme-blue");
  document.body.classList.add("theme-green");
});

// Thème rouge
redTheme.addEventListener("click", () => {
  document.body.classList.remove("theme-green", "theme-blue");
  document.body.classList.add("theme-red");
});

// Thème bleu
blueTheme.addEventListener("click", () => {
  document.body.classList.remove("theme-green", "theme-red");
  document.body.classList.add("theme-blue");
});

// Thème sombre
darkTheme.addEventListener("click", () => {
  document.body.classList.toggle("theme-dark");
});

})