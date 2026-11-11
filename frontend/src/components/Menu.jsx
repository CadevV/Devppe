import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const paginaAtual = useLocation();
  const home = paginaAtual.pathname === "/";

  return (
    <>
      <div className="shadow-lg w-full p-2 flex justify-between">
        <h1>Devppe</h1>

        <div className="flex gap-2">
          <button className="relative inline-flex items-center justify-center cursor-pointer border rounded-full w-7 aspect-square after:absolute after:inset-0 after:rounded-full after:border-t after:border-t-blue-500 after:opacity-0 after:pointer-events-none after:transition-all after:duration-1000 after:ease-in-out hover:after:opacity-100 hover:after:rotate-180">
            {home ? (
              <Link to={"/login"}>
                <i class="bi bi-person-fill"></i>
              </Link>
            ) : (
              <Link to={"/"}>
                <i class="bi bi-house-door-fill"></i>
              </Link>
            )}
          </button>

          <button className="relative cursor-pointer border rounded-full w-7 aspect-square after:absolute after:inset-0 after:border-t after:border-t-blue-500 after:rounded-full after:opacity-0 hover:after:opacity-100 hover:after:rotate-180 after:transition-all after:ease-in-out after: duration-1000">
            <i class="bi bi-gear-fill"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
