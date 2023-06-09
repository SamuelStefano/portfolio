const linkMenus = document.querySelectorAll(".link-menu");
const imagemSelecionada = document.getElementById("imagem-selecionada");
const loadingGif = document.querySelector(".transição"); // Elemento do GIF de transição
const menuContainer = document.querySelector(".lateral-esquerda");

let selectedOption = 0; // Índice da opção selecionada

linkMenus.forEach((linkMenu, index) => {
  linkMenu.addEventListener("mouseover", () => {
    selectedOption = index;
    moveImageSelector();
  });

  linkMenu.addEventListener("click", (event) => {
    event.preventDefault(); // Evita o comportamento padrão do link

    // Exibe o GIF de transição
    loadingGif.style.display = "block";

    // Simula um atraso de 2 segundos para a recarga da página (substitua com sua lógica real)
    setTimeout(() => {
      // Navega para o URL do link
      const link = linkMenu.querySelector("a");
      if (link) {
        window.location.href = link.href;
      }
    }, 1000);
  });
});
document.addEventListener("mouseleave", () => {
  selectedOption = -1; // Define um valor inválido para a opção selecionada
  moveImageSelector();
});

function moveImageSelector() {
  if (imagemSelecionada) {
    const selectedLink = linkMenus[selectedOption];
    if (selectedLink) {
      const rect = selectedLink.getBoundingClientRect();
      const xPos = rect.left + rect.width + 10; // Ajuste a posição horizontal conforme necessário
      const yPos = rect.top; // Ajuste a posição vertical conforme necessário

      imagemSelecionada.style.display = "block";
      imagemSelecionada.style.left = xPos + "px";
      imagemSelecionada.style.top = yPos + "px";
    } else {
      imagemSelecionada.style.display = "none"; // Oculta o seletor se não houver opção selecionada
    }
  }
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      selectedOption = Math.max(0, selectedOption - 1);
      break;
    case "ArrowDown":
      selectedOption = Math.min(linkMenus.length - 1, selectedOption + 1);
      break;
    case "Enter":
      const selectedLink = linkMenus[selectedOption];
      if (selectedLink) {
        selectedLink.click(); // Dispara o evento de clique no link
      }
      break;
  }

  moveImageSelector();
});

menuContainer.addEventListener("mouseout", (event) => {
  const relatedTarget = event.relatedTarget;
  const isInsideMenu = menuContainer.contains(relatedTarget);
  if (!isInsideMenu) {
    selectedOption = -1; // Define um valor inválido para a opção selecionada
    moveImageSelector();
  }
});
