import { useState } from "react";
import { Link } from "react-router-dom";
import { cadastroApi } from "../../services/api";

const Cadastrar = () => {
  const [showPass, setShowpass] = useState("password");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  const showPassInput = () => {
    if (showPass === "password") {
      setShowpass("text");
    } else {
      setShowpass("password");
    }
  };

  const getName = (e) => {
    setName(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPass = (e) => {
    setPass(e.target.value);
  };

  const getPassConfirm = (e) => {
    setPassConfirm(e.target.value);
  };

  const sendPass = async () => {
    if (pass !== passConfirm) {
      console.log("Senha não condiz");
      return;
    }

    await cadastroApi(email, name, pass);
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center gap-2.5 py-2">
        <div className="flex h-96 w-sm flex-col items-center justify-center gap-3 rounded-2xl bg-gray-50 shadow-2xl">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-2xl">Criar Conta</h1>
            <p className="text-xs">Bem Vindo a Devppe</p>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-5">
            <div>
              <input
                type="text"
                placeholder="Entre com seu melhor email"
                className="border-b-2 p-0.5 outline-0"
                value={email}
                onChange={getEmail}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Entre com seu nome de usuario"
                className="border-b-2 p-0.5 outline-0"
                value={name}
                onChange={getName}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Crie sua senha"
                className="border-b-2 p-0.5 outline-0"
                onChange={getPass}
                value={pass}
              />
            </div>

            <div className="relative">
              <input
                type={showPass}
                placeholder="Confirme a senha"
                className="border-b-2 p-0.5 outline-0"
                onChange={getPassConfirm}
                value={passConfirm}
              />
              <button
                aria-label="Ver Senha"
                className="absolute right-1 cursor-pointer"
                onClick={showPassInput}
              >
                {showPass === "password" ? (
                  <i className="bi bi-eye"></i>
                ) : (
                  <i className="bi bi-eye-slash"></i>
                )}
              </button>
            </div>

            <div>
              <button
                onClick={sendPass}
                className="cursor-pointer rounded-md bg-blue-700 p-2 text-white uppercase shadow-2xl transition ease-in-out hover:translate-y-1 hover:shadow-none"
              >
                Criar Conta
              </button>
            </div>
          </div>

          <p>
            já tem conta? Clique {""}
            <span className="cursor-pointer text-blue-500">
              <Link to={"/login"}>Aqui</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Cadastrar;
