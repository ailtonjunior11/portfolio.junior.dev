// Menu Mobile configurações
document.getElementById("hamburguer").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-menu");
  const hamburguer = document.getElementById("hamburguer");

  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
    hamburguer.classList.remove("ativo");
  } else {
    navMenu.style.display = "block";
    hamburguer.classList.add("ativo");
  }
});

// Fechar o menu ao clicar em qualquer link
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", function () {
    const navMenu = document.getElementById("nav-menu");
    const hamburguer = document.getElementById("hamburguer");

    navMenu.classList.remove("ativo");
    hamburguer.classList.remove("ativo");
  });
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
