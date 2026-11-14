import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const paginaAtual = useLocation();
  const home = paginaAtual.pathname === "/";

  return (
    <>
      <header className="m-auto flex w-11/12 gap-4 pt-2 max-md:w-full max-md:flex-col max-md:items-center">
        <div className="flex w-3/4 items-center justify-between rounded-2xl bg-gray-50 p-2 shadow-lg max-md:w-11/12">
          <h1 className="text-2xl uppercase">
            <span className="text-3xl text-blue-700">
              D<span className="text-2xl">EV</span>
            </span>
            ppe
          </h1>

          <div className="flex items-center gap-2">
            <button className="relative inline-flex aspect-square w-7 cursor-pointer items-center justify-center rounded-full border after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:border-t after:border-t-blue-500 after:opacity-0 after:transition-all after:duration-1000 after:ease-in-out hover:after:rotate-180 hover:after:opacity-100">
              {home ? (
                <Link to={"/login"}>
                  <i className="bi bi-person-fill"></i>
                </Link>
              ) : (
                <Link to={"/"}>
                  <i className="bi bi-house-door-fill"></i>
                </Link>
              )}
            </button>

            <button className="relative aspect-square w-7 cursor-pointer rounded-full border duration-1000 after:absolute after:inset-0 after:rounded-full after:border-t after:border-t-blue-500 after:opacity-0 after:transition-all after:ease-in-out hover:after:rotate-180 hover:after:opacity-100">
              <i className="bi bi-gear-fill"></i>
            </button>

            <Link
              to={"/homeSeller"}
              className="relative flex aspect-square w-7 cursor-pointer items-center justify-center rounded-full border duration-1000 after:absolute after:inset-0 after:rounded-full after:border-t after:border-t-blue-500 after:opacity-0 after:transition-all after:ease-in-out hover:after:rotate-180 hover:after:opacity-100"
            >
              <i className="bi bi-clipboard-data-fill"></i>
            </Link>
          </div>
        </div>
        <div className="flex w-1/4 items-center justify-between rounded-2xl bg-gray-50 p-2 shadow-lg max-md:w-3/4">
          <div className="relative m-auto w-3/4">
            <input type="text" className="w-full border-b outline-0" />
            <button className="absolute right-0 cursor-pointer">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Menu;
