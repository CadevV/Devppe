const URL_BASE = "http://localhost:3000";

export async function cadastroApi(email, name, password) {
  try {
    await fetch(`${URL_BASE}/cadastro`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, name, password }),
    });

    return true;
  } catch (error) {
    console.log(error);
  }
}

export async function loginApi(name, password) {
  try {
    await fetch(`${URL_BASE}/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: name,
        password: password,
      }),
    });

    return true;
  } catch (error) {
    console.log("Erro: " + error);
  }
}

export async function healthApi() {
  const resposta = await fetch(`${URL_BASE}/health`);

  const dados = await resposta.json();

  console.log(dados);
}
