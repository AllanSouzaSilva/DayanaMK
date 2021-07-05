//Animação reval
window.sr = ScrollReveal();

sr.reveal(".fixed-top", {
  duration: 4000,
  origin: "bottom",
  distance: "-100px",
});
sr.reveal(".carousel", {
  duration: 3000,
  origin: "top",
  distance: "-100px",
});
sr.reveal(".secao-efeito", {
  duration: 3000,
  origin: "top",
  distance: "200px",
});
sr.reveal(".secao-img", {
  duration: 3000,
  origin: "top",
  distance: "300px",
});
sr.reveal(".secao-titulo", {
  duration: 3000,
  origin: "top",
  distance: "300px",
});
sr.reveal(".secao-hobbies", {
  duration: 3000,
  origin: "bottom",
  distance: "300px",
});
sr.reveal(".campo-hobbie", {
  duration: 3000,
  origin: "top",
  distance: "200px",
});
sr.reveal(".carrosel-aluno", {
  duration: 3000,
  origin: "left",
  distance: "300px",
});
sr.reveal(".container-dicas", {
  duration: 3000,
  origin: "top",
  distance: "300px",
});
sr.reveal(".secao-contato", {
  duration: 3000,
  origin: "top",
  distance: "300px",
});
sr.reveal(".container-redes", {
  duration: 3000,
  origin: "top",
  distance: "300px",
});


/****************** Sticky Navigation Bar On Scroll *******************/

window.addEventListener("scroll", function () {
  var nav = this.document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});