/* =====================================================
   ELEMENTOS
===================================================== */

const inicio =
    document.getElementById("inicio");

const botoesCategoria =
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


/* =====================================================
   VAGAS
===================================================== */

const conteudoVagas =
    document.getElementById(
        "conteudo-vagas"
    );

const formularioContainer =
    document.getElementById(
        "formulario-container"
    );

const abrirFormulario =
    document.getElementById(
        "abrir-formulario"
    );

const voltarVagas =
    document.getElementById(
        "voltar-vagas"
    );


/* =====================================================
   ABRIR CATEGORIA
===================================================== */

function abrirPagina(nome) {

    inicio.style.display = "none";


    paginas.forEach(function(pagina) {

        pagina.classList.remove(
            "aberta"
        );

    });


    /* Sempre esconder formulário
       quando muda de categoria */

    if (formularioContainer) {

        formularioContainer.classList.remove(
            "aberto"
        );

    }


    if (conteudoVagas) {

        conteudoVagas.style.display =
            "block";

    }


    const pagina =
        document.getElementById(nome);


    if (pagina) {

        pagina.classList.add(
            "aberta"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =====================================================
   VOLTAR PARA INÍCIO
===================================================== */

function voltarInicio() {

    paginas.forEach(function(pagina) {

        pagina.classList.remove(
            "aberta"
        );

    });


    if (formularioContainer) {

        formularioContainer.classList.remove(
            "aberto"
        );

    }


    if (conteudoVagas) {

        conteudoVagas.style.display =
            "block";

    }


    inicio.style.display = "flex";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   BOTÕES DAS CATEGORIAS
===================================================== */

botoesCategoria.forEach(function(botao) {

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


/* =====================================================
   BOTÕES VOLTAR
===================================================== */

botoesVoltar.forEach(function(botao) {

    botao.addEventListener(
        "click",
        voltarInicio
    );

});


/* =====================================================
   ABRIR FORMULÁRIO DENTRO DE VAGAS
===================================================== */

if (abrirFormulario) {

    abrirFormulario.addEventListener(
        "click",
        function() {

            conteudoVagas.style.display =
                "none";


            formularioContainer.classList.add(
                "aberto"
            );


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =====================================================
   VOLTAR DO FORMULÁRIO PARA VAGAS
===================================================== */

if (voltarVagas) {

    voltarVagas.addEventListener(
        "click",
        function() {

            formularioContainer.classList.remove(
                "aberto"
            );


            conteudoVagas.style.display =
                "block";


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =====================================================
   FORMULÁRIO
===================================================== */

const formulario =
    document.getElementById(
        "formulario-jogador"
    );


if (formulario) {

    formulario.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const nome =
                document.getElementById(
                    "nome"
                ).value.trim();


            const idade =
                document.getElementById(
                    "idade"
                ).value;


            const posicao =
                document.getElementById(
                    "posicao"
                ).value;


            const cidade =
                document.getElementById(
                    "cidade"
                ).value.trim();


            const mensagem =
                document.getElementById(
                    "mensagem"
                ).value.trim();


            const texto =

                `Olá ELITE FC!

Quero me inscrever para fazer parte da equipe.

Nome: ${nome}
Idade: ${idade}
Posição: ${posicao}
Cidade: ${cidade}

Sobre mim:
${mensagem}`;


            const whatsapp =

                "https://wa.me/5541998045779?text="
                +
                encodeURIComponent(
                    texto
                );


            window.open(
                whatsapp,
                "_blank"
            );

        }
    );

}