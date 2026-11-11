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
    await cadastroApi(email, name, pass)
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-2.5">
        <div className="bg-gray-50 h-96 w-sm flex flex-col items-center justify-center rounded-2xl shadow-2xl gap-3">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-2xl">Criar Conta</h1>
            <p className="text-xs">Bem Vindo a Devppe</p>
          </div>

          <div className="flex-1 flex flex-col gap-5 items-center justify-center">
            <div>
              <input
                type="text"
                placeholder="Entre com seu melhor email"
                className="outline-0 border-b-2 p-0.5"
                value={email}
                onChange={getEmail}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Entre com seu nome de usuario"
                className="outline-0 border-b-2 p-0.5"
                value={name}
                onChange={getName}
              />
            </div>

            <div>
              <input
                type = "password"
                placeholder="Crie sua senha"
                className="outline-0 border-b-2 p-0.5"
                onChange={getPass}
                value={pass}
              />
            </div>

            <div className="relative">
              <input
                type={showPass}
                placeholder="Confirme a senha"
                className="outline-0 border-b-2 p-0.5"
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
                className="cursor-pointer text-white uppercase rounded-md p-2 bg-blue-700 transition ease-in-out shadow-2xl hover:shadow-none hover:translate-y-1"
              >
                Criar Conta
              </button>
            </div>
          </div>

          <p>
            já tem conta? Clique {""}
            <span className="text-blue-500 cursor-pointer">
              <Link to={"/login"}>Aqui</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Cadastrar;
