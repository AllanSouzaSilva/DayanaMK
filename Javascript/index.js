/*Animação reval*/
window.sr = ScrollReveal();

sr.reveal(".marketing-img", {
  duration: 1000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".carousel", {
  duration: 2000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".container-fotoPerfil", {
  duration: 2000,
  origin: "left",
  distance: "100px",
});
sr.reveal(".box", {
  duration: 2000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".itens-cursos", {
  duration: 2000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".effect", {
  duration: 2510,
  origin: "top",
  distance: "100px",
});
sr.reveal(".effect1", {
  duration: 2520,
  origin: "top",
  distance: "200px",
});
sr.reveal(".effect2", {
  duration: 2530,
  origin: "top",
  distance: "300px",
});
sr.reveal(".effect3", {
  duration: 3010,
  origin: "top",
  distance: "400px",
});
sr.reveal(".effect4", {
  duration: 3020,
  origin: "top",
  distance: "500px",
});
sr.reveal(".effect5", {
  duration: 3030,
  origin: "top",
  distance: "600px",
});
sr.reveal(".effect6", {
  duration: 3040,
  origin: "top",
  distance: "700px",
});

sr.reveal(".itens", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".btn-increvase-desfrute", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".container-desfrute-marketing-video", {
  duration: 3000,
  origin: "left",
  distance: "100px",
});
sr.reveal(".accordion", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".lista-contato", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});

sr.reveal(".img-desfrute", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".itens-depoimentos", {
  duration: 2000,
  origin: "top",
  distance: "100px",
});



/****************** Sticky Navigation Bar On Scroll *******************/

window.addEventListener("scroll", function () {
  var nav = this.document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});