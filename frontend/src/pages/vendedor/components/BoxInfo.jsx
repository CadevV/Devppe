const BoxInfo = (props) => {
  return (
    <>
      <div className="flex h-20 w-1/5 flex-col items-center justify-center rounded-lg bg-gray-50 max-md:w-12/12">
        <span>{props.value}</span>
        <p className="text-center">{props.text}</p>
      </div>
    </>
  );
};

export default BoxInfo;
