import { useState } from "react";
import Modal from "./Modal";

const BoxNew = ({ title, button, button2 }) => {
  const [openProduto, setOpenProduto] = useState(false);
  const [openProdutoView, setOpenProdutoView] = useState(false);
  const [openVendasView, setOpenVendasView] = useState(false);

  function openModalProduto() {
    if (!openProduto) {
      setOpenProduto(true);
    } else {
      setOpenProduto(false);
    }
  }

  function openModalProdutoView() {
    if (!openProdutoView) {
      setOpenProdutoView(true);
    } else {
      setOpenProdutoView(false);
    }
  }
  
  function openModalVendasView() {
    if (!openVendasView) {
      setOpenVendasView(true);
    } else {
      setOpenVendasView(false);
    }
  }

  return (
    <>
      <div className="flex h-100 w-2/4 flex-col items-center rounded-xl bg-gray-50 p-2 max-md:w-5/6">
        <div className="flex w-full flex-1 flex-col">
          <h2 className="text-center">{title}</h2>

          <div className="flex flex-col items-start justify-start pt-3">
            <h3>
              Em alta{" "}
              <span className="text-red-800">
                <i className="bi bi-fire"></i>
              </span>
            </h3>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={title === "Vendas" ? openModalVendasView : openModalProduto}
            className="w-fit -translate-y-2 cursor-pointer rounded-lg bg-blue-400 p-2 shadow-2xl duration-500 ease-in-out hover:translate-y-0 hover:shadow-none"
          >
            {button}
          </button>

          {button2 ? (
            <button
              onClick={openModalProdutoView}
              className="w-fit -translate-y-2 cursor-pointer rounded-lg bg-blue-400 p-2 shadow-2xl duration-500 ease-in-out hover:translate-y-0 hover:shadow-none"
            >
              {button2}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>

      {openProduto ? <Modal openModal={openModalProduto} title = "Criar Produto" /> : ""}

      {openProdutoView ? <Modal openModal={openModalProdutoView} title = "Ver Produtos" /> : ""}

      {openVendasView ? <Modal openModal={openModalVendasView} title = "Ver Vendas" /> : ""}
    </>
  );
};

export default BoxNew;
