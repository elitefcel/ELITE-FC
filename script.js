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

    const numero = "5541998045779";

    const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

});
