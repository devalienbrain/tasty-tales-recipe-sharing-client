import Image from "next/image";
import loadingImg from "../assets/loadingImg.gif";

const LoadingPage = () => {
  return (
    <div className="bg-white rounded-2xl flex justify-center items-center gap-3 h-screen">
      <Image src={loadingImg} width={40} height={40} alt="loading" />
      <span className="text-cyan-400 font-black text-3xl">Processing...</span>
    </div>
  );
};

export default LoadingPage;
