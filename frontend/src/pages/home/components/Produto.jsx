import imgTemp from "./../../../assents/public/tempImgProduto.png";
const Produto = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-80 max-h-80 min-w-2xs max-w-2xs rounded-lg flex flex-col mb-15 m-auto cursor-pointer">
        <div className="flex-1 object-contain">
          <img src={imgTemp} alt="img Produto" className="rounded-lg" />
        </div>
        <div className="bg-gray-50 p-1">
          <h3>produto muito legal relevante e ultil que todos amam</h3>

          <div className="flex justify-end border w-fit p-1">
            <span>42 R$</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Produto;
