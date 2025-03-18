// Menu Mobile configurações
let btnMenuMobile = document.getElementById("btn-menu-mobile");
let line1 = document.querySelector(".line-menu-mobile-1");
let line2 = document.querySelector(".line-menu-mobile-2");
let menuMobile = document.getElementById("nav-mobile");
let linkMenuMobile = document.getElementById(".link-menu-mobile");

let body = document.querySelector("body");

// Menu Mobile funções
btnMenuMobile.addEventListener("click", () => {
  line1.classList.toggle("active1");
  line2.classList.toggle("active2");
  menuMobile.classList.toggle("abrir-menu");

  body.classList.toggle("overflow-no");
});

// Função fechar menu mobile
menuMobile.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
  line1.classList.remove("active1");
  line2.classList.remove("active2");
});

// Função efeito rolagem header
window.addEventListener("scroll", () => {
  let header = document.getElementById("header");
  header.classList.toggle("rolagem-header", window.scrollY > 0);
});

// ScrollReveal configurações
const sr = ScrollReveal({ reset: true });

// ScrollReveal configurações home
sr.reveal(".conteudo-principal", {
  duration: 1500,
  delay: 550,
  scale: 0.5,
});

sr.reveal(".img-principal", {
  duration: 1500,
  delay: 550,
  scale: 0.7,
});

// ScrollReveal configurações projetos
sr.reveal(".card-projeto-1", {
  duration: 1500,
  delay: 200,
});

sr.reveal(".card-projeto-2", {
  duration: 1500,
  delay: 400,
});

sr.reveal(".card-projeto-3", {
  duration: 1500,
  delay: 600,
});

sr.reveal(".card-projeto-4", {
  duration: 1500,
  delay: 800,
});

sr.reveal(".card-projeto-5", {
  duration: 1500,
  delay: 1000,
});

sr.reveal(".card-projeto-6", {
  duration: 1500,
  delay: 1200,
});

// ScrollReveal configurações sobre
sr.reveal(".img-sobre", {
  origin: "top",
  distance: "100px",
  delay: 50,
  duration: 1500,
  opacity: 0,
});

sr.reveal(".conteudo-sobre", {
  origin: "bottom",
  distance: "80px",
  delay: 50,
  duration: 1500,
  opacity: 0,
});

// ScrollReveal configurações contatos
sr.reveal(".botoes-contatos", {
  origin: "bottom",
  distance: "70px",
  delay: 50,
  duration: 1500,
  opacity: 0,
  scale: 1.1,
});

// Botão voltar ao topo configurações
window.addEventListener("scroll", function () {
  let scroll = document.querySelector(".btntopo");
  scroll.classList.toggle("active", window.scrollY > 450);
}); // Seleção e função de scroll do botão topo

function backtopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
} // Função do botão voltar ao topo

function voltartopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
} // Função da logo voltar ao topo
