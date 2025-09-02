// Mudar a cor de fundo ao clicar no botão
document.getElementById("changeColorBtn").addEventListener("click", () => {
    const colors = ["#f0f0f0", "#ffcccb", "#d0f0c0", "#add8e6", "#fffacd"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Validar campo de nome
function validateName() {
    const input = document.getElementById("nameInput").value;
    if (input.trim().length === 0) {
        alert("Por favor, digite um nome!");
    } else {
        alert(`Olá, ${input}!`);
    }
}