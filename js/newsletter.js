// Récupération des éléments du DOM
const newsletter = document.getElementById("newsletter");
const openNewsletter = document.getElementById("newsletter__open");
const closeNewsletter = document.getElementById("newsletter__close");

// Ajout d'un écouteur d'événement pour le bouton d'ouverture de la newsletter
openNewsletter.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click open");
  newsletter.classList.toggle("newsletter--hidden");
});

// Ajout d'un écouteur d'événement pour le scroll pour faire apparaître la newsletter au delà de 300px de scroll
window.addEventListener("scroll", () => {if (window.scrollY>=300) {
    console.log("Scroll d'au moins 300px");
    newsletter.classList.remove("newsletter--hidden")
}})

// Ajout d'un écouteur d'événement pour le bouton de fermeture de la newsletter
closeNewsletter.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click close");
  newsletter.classList.add("newsletter--hidden");
});

