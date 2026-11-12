import Produto from "./components/Produto";

const Home = () => {
  return (
    <>
      <section className="bg-gray-300 min-h-screen w-11/12 m-auto pb-1 pt-1 flex flex-col gap-3">
        <h2 className="text-4xl text-center">Inicial</h2>

        <div className="flex flex-wrap gap-2 justify-center items-center">
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
        </div>
      </section>
    </>
  );
};

export default Home;
