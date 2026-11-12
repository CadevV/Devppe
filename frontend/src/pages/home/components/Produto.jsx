import imgTemp from "./../../../assents/public/tempImgProduto.png";
const Produto = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-80 max-h-80 min-w-2xs max-w-2xs rounded-lg flex flex-col mb-15 m-auto cursor-pointer">
        <div className="flex-1 object-contain ">
          <img src={imgTemp} alt="img Produto" className="rounded-tl-lg rounded-tr-lg" />
        </div>
        <div className="bg-gray-50 p-1 rounded-lg">
          <h3>produto muito legal relevante e util que todos amam</h3>

          <div className="flex justify-end">
            <span className="border-b p-1">42 R$</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Produto;
