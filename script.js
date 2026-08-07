const titulo = document.querySelector(".hero h1");

document.addEventListener("mousemove", (evento) => {

    const x = (evento.clientX / window.innerWidth - 0.5) * 15;
    const y = (evento.clientY / window.innerHeight - 0.5) * 15;

    titulo.style.transform = `translate(${x}px, ${y}px)`;

});
const formulario = document.getElementById("formulario-jogador");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const posicao = document.getElementById("posicao").value;
    const cidade = document.getElementById("cidade").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `
🏆 INSCRIÇÃO - ELITE FC

👤 Nome: ${nome}
🎂 Idade: ${idade}
⚽ Posição: ${posicao}
📍 Cidade: ${cidade}

📝 Informações:

${mensagem}
`;

    const numero = "41998045779";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

});
