import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const paginaAtual = useLocation();
  const home = paginaAtual.pathname === "/";

  return (
    <>
      <header className="flex w-11/12 m-auto gap-4 pt-2 max-md:items-center max-md:flex-col max-md:w-full">
        <div className="shadow-lg w-3/4 p-2 flex justify-between items-center rounded-2xl bg-gray-50 max-md:w-11/12">
          <h1 className="text-2xl uppercase">
            <span className="text-blue-700 text-3xl">
              D<span className="text-2xl">EV</span>
            </span>
            ppe
          </h1>

          <div className="flex gap-2 items-center">
            <button className="relative inline-flex items-center justify-center cursor-pointer border rounded-full w-7 aspect-square after:absolute after:inset-0 after:rounded-full after:border-t after:border-t-blue-500 after:opacity-0 after:pointer-events-none after:transition-all after:duration-1000 after:ease-in-out hover:after:opacity-100 hover:after:rotate-180">
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

            <button className="relative cursor-pointer border rounded-full w-7 aspect-square after:absolute after:inset-0 after:border-t after:border-t-blue-500 after:rounded-full after:opacity-0 hover:after:opacity-100 hover:after:rotate-180 after:transition-all after:ease-in-out after: duration-1000">
              <i className="bi bi-gear-fill"></i>
            </button>
          </div>
        </div>

        <div className="shadow-lg w-1/4 p-2 flex justify-between items-center rounded-2xl bg-gray-50 max-md:w-3/4">
          <div className="relative w-3/4 m-auto">
            <input type="text" className="border-b w-full outline-0" />
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
