const BoxNew = () => {
  return (
    <>
      <div className="flex flex-col w-2/4 h-80 items-center bg-gray-50 rounded-xl p-2">
        <div className="flex-1">
          <h2>Produtos</h2>
        </div>

        <button className="w-fit p-2 rounded-lg bg-blue-400 cursor-pointer shadow-2xl duration-500 ease-in-out -translate-y-2 hover:translate-y-0 hover:shadow-none">
          Criar Produto
        </button>
      </div>
    </>
  );
};

export default BoxNew;
