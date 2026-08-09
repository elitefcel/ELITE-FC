/* =========================
   MENU ATIVO
========================= */

const menuItems = document.querySelectorAll(".menu-item");

const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let atual = "";

    sections.forEach(section => {

        const topo = section.offsetTop - 150;

        const altura = section.offsetHeight;

        if (
            window.scrollY >= topo &&
            window.scrollY < topo + altura
        ) {

            atual = section.getAttribute("id");

        }

    });


    menuItems.forEach(item => {

        item.classList.remove("ativo");

        if (
            item.getAttribute("href") === "#" + atual
        ) {

            item.classList.add("ativo");

        }

    });

});


/* =========================
   FORMULÁRIO
========================= */

const formulario =
    document.getElementById("formulario-jogador");


if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();


        const nome =
            document.getElementById("nome").value;

        const idade =
            document.getElementById("idade").value;

        const posicao =
            document.getElementById("posicao").value;

        const cidade =
            document.getElementById("cidade").value;

        const mensagem =
            document.getElementById("mensagem").value;


        const texto =

            `Olá, ELITE FC!%0A%0A` +

            `Gostaria de me candidatar para fazer parte do time.%0A%0A` +

            `*Nome:* ${nome}%0A` +

            `*Idade:* ${idade}%0A` +

            `*Posição:* ${posicao}%0A` +

            `*Cidade:* ${cidade}%0A` +

            `*Sobre mim:* ${mensagem}`;


        const whatsapp =
            `https://wa.me/5541998045779?text=${texto}`;


        window.open(
            whatsapp,
            "_blank"
        );


    });

}
