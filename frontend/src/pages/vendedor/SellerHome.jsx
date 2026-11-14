import BoxInfo from "./components/BoxInfo";
import BoxNew from "./components/BoxNew";

const SellerHome = () => {
  return (
    <>
      <main className="bg-gray-300 min-h-screen w-11/12 m-auto flex items-center flex-col gap-5">
        <section className="w-12/12 flex pt-7 max-md:w-10/12">
          <div className="flex flex-wrap gap-3 w-full justify-center">
            <BoxInfo value={Number("")} text="teste" />
            <BoxInfo value={Number("")} text="teste" />
            <BoxInfo value={Number("")} text="teste" />
            <BoxInfo value={Number("")} text="teste" />
          </div>
        </section>

        <section className="w-12/12 gap-3 flex justify-center items-center max-md:flex-col">
          <BoxNew title = "Produtos" button = "Criar Produto" button2 = "Ver Produtos" />
          <BoxNew title = "Vendas" button = "Ver Vendas" />
        </section>
      </main>
    </>
  );
};

export default SellerHome;
