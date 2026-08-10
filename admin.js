// ============================================
// ELITE FC
// PAINEL ADMINISTRATIVO
// ============================================

const SUPABASE_URL =
    "https://qtwaftbazoraasvnqrtc.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_Cpt5RsyhX0Qhno_jF-PPsA_CTiAjF1e";


const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


// ============================================
// ELEMENTOS
// ============================================

const loginContainer =
    document.getElementById(
        "login-container"
    );

const painel =
    document.getElementById(
        "painel"
    );

const loginForm =
    document.getElementById(
        "login-form"
    );

const loginErro =
    document.getElementById(
        "login-erro"
    );

const logout =
    document.getElementById(
        "logout"
    );


// ============================================
// VERIFICAR LOGIN
// ============================================

async function verificarUsuario() {

    const {
        data,
        error
    } = await supabaseClient
        .auth
        .getSession();


    if (error) {

        console.error(error);

        return;

    }


    if (data.session) {

        mostrarPainel();

    } else {

        mostrarLogin();

    }
}


// ============================================
// MOSTRAR LOGIN
// ============================================

function mostrarLogin() {

    loginContainer.classList.remove(
        "oculto"
    );

    painel.classList.add(
        "oculto"
    );
}


// ============================================
// MOSTRAR PAINEL
// ============================================

function mostrarPainel() {

    loginContainer.classList.add(
        "oculto"
    );

    painel.classList.remove(
        "oculto"
    );

    carregarVisitas();
}


// ============================================
// LOGIN
// ============================================

loginForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        loginErro.textContent =
            "Entrando...";


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const senha =
            document.getElementById(
                "senha"
            ).value;


        const {
            data,
            error
        } = await supabaseClient
            .auth
            .signInWithPassword({

                email: email,

                password: senha

            });


        if (error) {

            console.error(error);

            loginErro.textContent =
                "E-mail ou senha incorretos.";

            return;

        }


        if (data.session) {

            loginErro.textContent = "";

            mostrarPainel();

        }

    }
);


// ============================================
// LOGOUT
// ============================================

logout.addEventListener(
    "click",
    async function() {

        await supabaseClient
            .auth
            .signOut();

        mostrarLogin();

    }
);


// ============================================
// CARREGAR VISITAS
// ============================================

async function carregarVisitas() {

    const {
        data,
        error
    } = await supabaseClient
        .from("visitas")
        .select("*")
        .order(
            "criado_em",
            {
                ascending: false
            }
        );


    if (error) {

        console.error(
            "Erro ao carregar visitas:",
            error
        );

        return;

    }


    atualizarEstatisticas(data);

    mostrarTabela(data);
}


// ============================================
// ESTATÍSTICAS
// ============================================

function atualizarEstatisticas(
    visitas
) {

    const total =
        visitas.length;


    document.getElementById(
        "total-visitas"
    ).textContent = total;


    const hoje =
        new Date();


    const ano =
        hoje.getFullYear();


    const mes =
        String(
            hoje.getMonth() + 1
        ).padStart(2, "0");


    const dia =
        String(
            hoje.getDate()
        ).padStart(2, "0");


    const inicioHoje =
        `${ano}-${mes}-${dia}`;


    const visitasHoje =
        visitas.filter(
            visita =>
                visita.criado_em &&
                visita.criado_em
                    .startsWith(
                        inicioHoje
                    )
        ).length;


    document.getElementById(
        "visitas-hoje"
    ).textContent =
        visitasHoje;


    const desktop =
        visitas.filter(
            visita =>
                visita.dispositivo ===
                "Desktop"
        ).length;


    const celular =
        visitas.filter(
            visita =>
                visita.dispositivo ===
                "Celular"
        ).length;


    document.getElementById(
        "desktop"
    ).textContent =
        desktop;


    document.getElementById(
        "celular"
    ).textContent =
        celular;
}


// ============================================
// MOSTRAR TABELA
// ============================================

function mostrarTabela(
    visitas
) {

    const tabela =
        document.getElementById(
            "lista-visitas"
        );


    tabela.innerHTML = "";


    if (!visitas.length) {

        tabela.innerHTML = `
            <tr>
                <td colspan="5">
                    Nenhuma visita registrada ainda.
                </td>
            </tr>
        `;

        return;
    }


    visitas
        .slice(0, 100)
        .forEach(
            visita => {

                const linha =
                    document.createElement(
                        "tr"
                    );


                const data =
                    formatarData(
                        visita.criado_em
                    );


                linha.innerHTML = `

                    <td>
                        ${data}
                    </td>

                    <td>
                        ${visita.dispositivo || "-"}
                    </td>

                    <td>
                        ${visita.navegador || "-"}
                    </td>

                    <td>
                        ${visita.sistema || "-"}
                    </td>

                    <td>
                        ${visita.pagina || "/"}
                    </td>

                `;


                tabela.appendChild(
                    linha
                );

            }
        );
}


// ============================================
// FORMATAR DATA
// ============================================

function formatarData(
    valor
) {

    if (!valor) {
        return "-";
    }


    const data =
        new Date(valor);


    return data.toLocaleString(
        "pt-BR",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    );
}


// ============================================
// BOTÃO ATUALIZAR
// ============================================

document.getElementById(
    "atualizar"
).addEventListener(
    "click",
    carregarVisitas
);


// ============================================
// INICIAR
// ============================================

verificarUsuario();