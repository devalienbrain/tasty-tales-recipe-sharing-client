"use client";
import Link from "next/link";
import { BiErrorAlt } from "react-icons/bi";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center text-left">
      <div className="flex flex-col space-y-11">
        <div>
          <BiErrorAlt></BiErrorAlt>
          <p className="py-5">Oops..</p>
          <span className="text-red-500">Page Not Found!</span>
        </div>
        <h2 className="text-5xl md:text-9xl font-black">4 O 4</h2>
        <h1 className="text-xl font-bold text-red-600"> e r r o r !</h1>
        <Link href="/">
          <div className="flex gap-2 text-sm bg-cyan-500 py-3 px-5 rounded-3xl shadow-lg hover:bg-cyan-400 text-black">
            <span className=" italic font-semibold">
              Click to back tasty tales home!
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
