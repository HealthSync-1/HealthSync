// Mensagem de inicialização
console.log("Site do IMREA carregado com sucesso.");

// Barra de busca simulada
const searchForm = document.getElementById("search-form");
if (searchForm) {
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const termo = document.getElementById("search").value.trim();
    if (termo) {
      alert(`Você buscou por: "${termo}". Em breve essa funcionalidade será ativada.`);
    }
  });
}

// Menu responsivo
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  // Alterna ícone (hamburger <-> X)
  if (navLinks.classList.contains("show")) {
    menuToggle.innerHTML = "&times;";
    menuToggle.setAttribute("aria-label", "Fechar menu");
  } else {
    menuToggle.innerHTML = "&#9776;";
    menuToggle.setAttribute("aria-label", "Abrir menu");
  }
});

// Fecha menu ao clicar em algum link (mobile)
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.innerHTML = "&#9776;";
    menuToggle.setAttribute("aria-label", "Abrir menu");
  });
});

// Busca desktop e mobile
document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const termo = document.getElementById("search").value.trim();
  if (termo) alert(`Você buscou por: "${termo}". Em breve essa funcionalidade será ativada.`);
});
document.getElementById("search-form-mobile").addEventListener("submit", function (e) {
  e.preventDefault();
  const termo = document.getElementById("search-mobile").value.trim();
  if (termo) alert(`Você buscou por: "${termo}". Em breve essa funcionalidade será ativada.`);
});

// Formulário de contato
function validarFormulario() {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");
  const erro = document.getElementById("erro");

  erro.innerHTML = "";

  if (!nome.value || !email.value || !mensagem.value) {
    erro.innerHTML = "Por favor, preencha todos os campos.";
    return false;
  }
  if (!email.value.includes("@") || !email.value.includes(".")) {
    erro.innerHTML = "Por favor, insira um e-mail válido.";
    return false;
  }

  alert("Mensagem enviada com sucesso!");
  return true;
}
