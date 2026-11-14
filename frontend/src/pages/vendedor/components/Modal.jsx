const Modal = ({ openModal, title }) => {
  return (
    <>
      <div className="fixed top-1/2 left-1/2 z-999 flex h-screen w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center backdrop-blur-md">
        <div className="relative aspect-square h-4/5 w-4/5 rounded-4xl bg-gray-800 text-gray-50">
          <div>
            <button
              onClick={openModal}
              className="absolute top-1 right-3 cursor-pointer text-2xl text-gray-50 duration-400 hover:rotate-90 hover:text-red-400"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center text-3xl">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
