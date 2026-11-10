const URL_BASE ='http://localhost:3000'

export async function healthApi() {
    const resposta = await fetch(`${URL_BASE}/health`);

    const dados = await resposta.json();

    console.log(dados)
}