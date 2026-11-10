import { useState } from "react";

const Login = () => {
  const [showPass, setShowpass] = useState("password");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

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

  const getPass = (e) => {
    setPass(e.target.value);
  };

  const sendPass = () => {
    console.log(pass, name);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200 gap-2.5">
        <div className="bg-gray-50 h-96 w-sm flex flex-col items-center justify-center rounded-2xl shadow-2xl gap-3">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-2xl">Fazer Login</h1>
            <p className="text-xs">Bem Vindo de Volta</p>
          </div>

          <div className="flex-1 flex flex-col gap-5 items-center justify-center">
            <div>
              <input
                type="text"
                placeholder="Entre com seu nome de usuario"
                className="outline-0 border-b-2 p-0.5"
                value={name}
                onChange={getName}
              />
            </div>

            <div className="relative">
              <input
                type={showPass}
                placeholder="Entre com sua senha"
                className="outline-0 border-b-2 p-0.5"
                onChange={getPass}
                value={pass}
              />
              <button
                aria-label="Ver Senha"
                className="absolute right-1 cursor-pointer"
                onClick={showPassInput}
              >
                {showPass === "password" ? (
                  <i class="bi bi-eye"></i>
                ) : (
                  <i class="bi bi-eye-slash"></i>
                )}
              </button>
            </div>

            <div>
              <button
                onClick={sendPass}
                className="cursor-pointer text-white uppercase rounded-md p-2 bg-blue-700"
              >
                Entrar
              </button>
            </div>

          </div>

          <p>ainda sem conta? Clique <span className="text-blue-500 cursor-pointer">Aqui</span></p>
        </div>
      </div>
    </>
  );
};

export default Login;
