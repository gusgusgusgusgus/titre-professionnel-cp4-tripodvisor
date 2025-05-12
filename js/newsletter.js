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

// Ajout d'une vérification des emails saisis pour refuser une liste de domaines correspondant à des emails jetables

// Liste des domaines email interdits, fournie par le cours
const forbiddenDomains = [
    '@yopmail.com',
    '@yopmail.fr',
    '@yopmail.net',
    '@cool.fr.nf',
    '@jetable.fr.nf',
    '@courriel.fr.nf',
    '@moncourrier.fr.nf',
    '@monemail.fr.nf',
    '@monmail.fr.nf',
    '@hide.biz.st',
    '@mymail.infos.st',
  ]

  // Identification des éléments du DOM nécessaires
const emailInput = document.getElementById("subscriber-email");
const submitButton = document.getElementById("newsletter__submit");
const errorMessage = document.getElementById("newsletter__error");

// Au click sur le bouton de soumission du formulaire, on déclenche une vérification du domaine de l'email saisi, comparé à la liste fournie et on déclenche le cas échéant une alerte
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const domain = email.substring(email.indexOf("@"));

  if (forbiddenDomains.includes(domain)) {
    errorMessage.textContent = "Utiliser un email jetable n'est pas autorisé pour vous inscrire à notre newsletter.";
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    console.log(`Email saisi valide : ${email}`);
  }
});


