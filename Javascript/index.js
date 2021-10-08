/*Animação reval*/
window.sr = ScrollReveal();

sr.reveal(".marketing-img", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".carousel", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".img-dayana", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".box", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".itens-cursos", {
  duration: 1000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".effect", {
  duration: 2000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".effect1", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".effect2", {
  duration: 4000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".effect3", {
  duration: 5000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".effect4", {
  duration: 6000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".effect5", {
  duration: 7000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".effect6", {
  duration: 8000,
  origin: "top",
  distance: "100px",
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


/****************** Sticky Navigation Bar On Scroll *******************/

window.addEventListener("scroll", function () {
  var nav = this.document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});