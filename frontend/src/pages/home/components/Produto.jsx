import { Link } from "react-router-dom";
import imgTemp from "./../../../assents/public/tempImgProduto.png";
const Produto = ({ nome, id }) => {
  return (
    <>
      <div className="bg-gray-50 min-h-80 max-h-80 min-w-2xs max-w-2xs rounded-lg flex flex-col mb-15 m-auto">
        <div className="flex-1 object-contain ">
          <img
            src={imgTemp}
            alt="img Produto"
            className="rounded-tl-lg rounded-tr-lg"
          />
        </div>
        <div className="bg-gray-50 p-1 rounded-lg">
          <h3>{nome}</h3>

          <div className="flex justify-between mt-2">
            <Link
              to={`/produto/${id}`}
              className="bg-blue-400 flex items-center p-1 rounded-lg cursor-pointer"
              name = "ola"
            >
              Ver mais
            </Link>
            <span className="border-b p-1">42 R$</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Produto;
