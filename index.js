const lateralEsquerda = document.getElementById("lateral-esquerda");
const imagemSelecionada = document.getElementById("imagem-selecionada");

lateralEsquerda.addEventListener("mouseover", (event) => {
  const target = event.target;
  const option = target.dataset.option;

  if (option) {
    const rect = target.getBoundingClientRect();
    const xPos = rect.left + rect.width + 10; // Ajuste a posição horizontal conforme necessário
    const yPos = rect.top; // Ajuste a posição vertical conforme necessário

    imagemSelecionada.style.display = "block";
    imagemSelecionada.style.left = xPos + "px";
    imagemSelecionada.style.top = yPos + "px";
  }
});

lateralEsquerda.addEventListener("mouseout", () => {
  imagemSelecionada.style.display = "none";
});
