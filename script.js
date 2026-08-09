/* =====================================
   CONTROLE DAS TELAS
===================================== */

const telas = document.querySelectorAll(".tela");


function abrirTela(nome) {

    /*
     * Esconde todas as telas
     */

    telas.forEach(function(tela) {

        tela.classList.remove("ativa");

    });


    /*
     * Mostra a tela escolhida
     */

    const telaEscolhida =
        document.getElementById(nome);


    if (telaEscolhida) {

        telaEscolhida.classList.add("ativa");

    }


    /*
     * Volta para o topo
     */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================
   VOLTAR PARA O PAINEL
===================================== */

function voltarPainel() {

    abrirTela("painel");

}


/* =====================================
   ABRIR FORMULÁRIO
===================================== */

function abrirFormulario(posicao) {

    abrirTela("formulario");


    /*
     * Seleciona automaticamente
     * a posição escolhida
     */

    const select =
        document.getElementById("posicao");


    if (select) {

        select.value = posicao;

    }

}


/* =====================================
   FORMULÁRIO
===================================== */

const formulario =
    document.getElementById(
        "formulario-jogador"
    );


if (formulario) {

    formulario.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            /*
             * Pega os dados
             */

            const nome =
                document.getElementById(
                    "nome"
                ).value;

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
                ).value;

            const mensagem =
                document.getElementById(
                    "mensagem"
                ).value;


            /*
             * Monta a mensagem
             */

            const texto =

                "Olá, ELITE FC!%0A%0A" +

                "Gostaria de fazer parte do time.%0A%0A" +

                "*Nome:* " +
                encodeURIComponent(nome) +
                "%0A" +

                "*Idade:* " +
                encodeURIComponent(idade) +
                "%0A" +

                "*Posição:* " +
                encodeURIComponent(posicao) +
                "%0A" +

                "*Cidade:* " +
                encodeURIComponent(cidade) +
                "%0A" +

                "*Sobre mim:* " +
                encodeURIComponent(mensagem);


            /*
             * Número do WhatsApp
             */

            const numero =
                "5541998045779";


            /*
             * Link do WhatsApp
             */

            const whatsapp =
                "https://wa.me/" +
                numero +
                "?text=" +
                texto;


            /*
             * Abre o WhatsApp
             */

            window.open(
                whatsapp,
                "_blank"
            );

        }
    );

}