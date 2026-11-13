const BoxInfo = (props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg w-1/5 h-20 max-md:w-12/12">
        <span>{props.value}</span>
        <p className="text-center">{props.text}</p>
      </div>
    </>
  );
};

export default BoxInfo;
