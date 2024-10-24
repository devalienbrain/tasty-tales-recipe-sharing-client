"use client";
import Link from "next/link";
import { BiErrorAlt } from "react-icons/bi";
const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="min-h-screen flex justify-center items-center text-left">
      <div className="p-3 w-full md:w-1/2 mx-auto flex flex-col space-y-11">
        <div>
          <BiErrorAlt></BiErrorAlt>
          <p className="py-5 text-xl">Oops..</p>
          <span className="text-red-500 text-xl"> Something went wrong!!!</span>
        </div>
        <p className="text-sm font-semibold">{error.message}</p>
        <h1 className="text-xl font-bold text-red-600"> e r r o r !</h1>
        <button
          onClick={() => reset()}
          className="btn btn-error btn-outline mt-5"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
