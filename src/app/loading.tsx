import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Image
        src="https://i.stack.imgur.com/hzk6C.gif"
        width={200}
        height={200}
        alt="loading"
        className="w-96 mx-auto text-cyan-400"
      />
    </div>
  );
};

export default LoadingPage;
