window.addEventListener("load", () => {
  const currentDate = new Date();
  document.getElementById("currentYear").innerHTML = currentDate.getFullYear();
});
// Inicializar los acordeones de Bootstrap
var accordion = new bootstrap.Collapse(document.getElementById("faqAccordion"));

