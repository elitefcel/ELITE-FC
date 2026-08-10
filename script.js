/* ==========================================
   CONFIGURAÇÃO SUPABASE
========================================== */

const SUPABASE_URL =
    "https://qtwaftbazoraasvnqrtc.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_Cpt5RsyhX0Qhno_jF-PPsA_CTiAjF1e";


/* ==========================================
   ELEMENTOS
========================================== */

const paginaPrincipal =
    document.getElementById(
        "pagina-principal"
    );


const paginas =
    document.querySelectorAll(
        ".pagina-categoria"
    );


const botoesCategoria =
    document.querySelectorAll(
        ".categoria-card"
    );


const botoesVoltar =
    document.querySelectorAll(
        "[data-voltar]"
    );


/* ==========================================
   ABRIR CATEGORIA
========================================== */

function abrirCategoria(nome) {

    /* esconder página inicial */

    paginaPrincipal.style.display =
        "none";


    /* esconder todas as categorias */

    paginas.forEach(pagina => {

        pagina.classList.remove(
            "aberta"
        );

    });


    /* abrir categoria */

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


/* ==========================================
   VOLTAR PARA INÍCIO
========================================== */

function voltarInicio() {

    paginas.forEach(pagina => {

        pagina.classList.remove(
            "aberta"
        );

    });


    paginaPrincipal.style.display =
        "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==========================================
   CLIQUES NAS CATEGORIAS
========================================== */

botoesCategoria.forEach(botao => {

    botao.addEventListener(
        "click",
        () => {

            const secao =
                botao.dataset.secao;

            abrirCategoria(secao);

        }
    );

});


/* ==========================================
   BOTÕES VOLTAR
========================================== */

botoesVoltar.forEach(botao => {

    botao.addEventListener(
        "click",
        voltarInicio
    );

});


/* ==========================================
   BOTÕES DE VAGAS
========================================== */

const botoesVagas =
    document.querySelectorAll(
        "[data-posicao]"
    );


botoesVagas.forEach(botao => {

    botao.addEventListener(
        "click",
        () => {

            const posicao =
                botao.dataset.posicao;


            const select =
                document.getElementById(
                    "posicao"
                );


            const formulario =
                document.getElementById(
                    "formulario-container"
                );


            if (select) {

                select.value =
                    posicao;

            }


            if (formulario) {

                formulario.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});


/* ==========================================
   FORMULÁRIO
========================================== */

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

`Olá, ELITE FC!

Quero me candidatar para fazer parte do time.

Nome: ${nome}
Idade: ${idade}
Posição: ${posicao}
Cidade: ${cidade}

Sobre mim:
${mensagem}`;


            const url =
                "https://wa.me/5541998045779?text="
                + encodeURIComponent(texto);


            window.open(
                url,
                "_blank"
            );

        }
    );

}


/* ==========================================
   CONTADOR DE VISITANTES
========================================== */

async function registrarVisita() {

    try {

        const userAgent =
            navigator.userAgent;


        let dispositivo =
            "Computador";


        if (
            /Android/i.test(userAgent)
        ) {

            dispositivo = "Android";

        }
        else if (
            /iPhone|iPad|iPod/i.test(
                userAgent
            )
        ) {

            dispositivo = "iPhone/iPad";

        }
        else if (
            /Mobi/i.test(userAgent)
        ) {

            dispositivo = "Celular";

        }


        const dados = {

            dispositivo:
                dispositivo,

            navegador:
                userAgent,

            sistema:
                navigator.platform,

            pagina:
                window.location.pathname

        };


        const resposta =
            await fetch(
                `${SUPABASE_URL}/rest/v1/visitas`,
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json",

                        "apikey":
                            SUPABASE_KEY,

                        "Authorization":
                            `Bearer ${SUPABASE_KEY}`,

                        "Prefer":
                            "return=minimal"

                    },

                    body:
                        JSON.stringify(dados)

                }
            );


        if (!resposta.ok) {

            console.log(
                "Erro ao registrar visita:",
                await resposta.text()
            );

        }

    }
    catch (erro) {

        console.log(
            "Erro no contador:",
            erro
        );

    }

}


/* ==========================================
   REGISTRAR VISITA
========================================== */

registrarVisita();