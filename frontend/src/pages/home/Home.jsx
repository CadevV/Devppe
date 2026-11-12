import Produto from "./components/Produto";

const Home = () => {
  const test = [
    { id: 1, title: "tap tap tap tap tap tap tap", price: "15,75" },
    { id: 2, title: "venha curtir na live", price: "15,75" },
    { id: 3, title: "venha curtir na live", price: "15,75" },
    { id: 4, title: "venha curtir na live", price: "15,75" },
  ];

  return (
    <>
      <section className="bg-gray-300 min-h-screen w-11/12 m-auto pb-1 pt-1 flex flex-col gap-3">
        <h2 className="text-4xl text-center">Inicial</h2>

        <div className="flex flex-wrap gap-2 justify-center items-center">
          {test.map((el) => (
            <Produto key={el.id} nome={el.title} id = {el.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
