/* =========================
   ELEMENTOS
========================= */

const inicio =
    document.getElementById("inicio");

const botoes =
    document.querySelectorAll(
        ".categoria-card"
    );

const paginas =
    document.querySelectorAll(
        ".pagina"
    );

const botoesVoltar =
    document.querySelectorAll(
        ".voltar"
    );


/* =========================
   ABRIR CATEGORIA
========================= */

function abrirPagina(nome) {

    inicio.style.display = "none";


    paginas.forEach(function(pagina) {

        pagina.classList.remove("aberta");

    });


    const pagina =
        document.getElementById(nome);


    if (pagina) {

        pagina.classList.add("aberta");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
}


/* =========================
   VOLTAR
========================= */

function voltarInicio() {

    paginas.forEach(function(pagina) {

        pagina.classList.remove("aberta");

    });


    inicio.style.display = "flex";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   BOTÕES DAS CATEGORIAS
========================= */

botoes.forEach(function(botao) {

    botao.addEventListener(
        "click",
        function() {

            const secao =
                botao.getAttribute(
                    "data-secao"
                );

            abrirPagina(secao);

        }
    );

});


/* =========================
   BOTÕES VOLTAR
========================= */

botoesVoltar.forEach(function(botao) {

    botao.addEventListener(
        "click",
        voltarInicio
    );

});