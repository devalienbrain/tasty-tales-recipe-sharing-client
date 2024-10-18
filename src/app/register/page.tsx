"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai"; // React icons
import img from "../../assets/joinImg.jpg";

export type UserData = {
  username: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSubmit = async (data: UserData) => {
    console.log(data);

    try {
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white rounded-2xl">
      <div className="w-full text-center">
        <h1 className="text-4xl font-extrabold text-cyan-600 mb-5">
          Register <span className="text-black"> Now</span>
        </h1>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center">
          {/* Left Side - Image */}
          <div className="md:w-1/2 hidden md:block">
            <Image
              src={img}
              width={500}
              height={500}
              alt="Join us"
            />
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2 w-full p-5">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" p-6 rounded-xl shadow-md"
            >
              {/* Full Name */}
              <div className="mb-4">
                <label className="flex items-center text-gray-700 mb-2">
                  <AiOutlineUser className="mr-2 text-xl" />
                  <span className="font-semibold">Full Name</span>
                </label>
                <input
                  type="text"
                  {...register("username", { required: true })}
                  placeholder="Enter your full name"
                  className={`input input-bordered w-full px-3 py-2 rounded-lg border ${
                    errors.username ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">Name is required.</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="flex items-center text-gray-700 mb-2">
                  <AiOutlineMail className="mr-2 text-xl" />
                  <span className="font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                  className={`input input-bordered w-full px-3 py-2 rounded-2xl border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    Email is required.
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="flex items-center text-gray-700 mb-2">
                  <AiOutlineLock className="mr-2 text-xl" />
                  <span className="font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Enter your password"
                  className={`input input-bordered w-full px-3 py-2 rounded-lg border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    Password is required.
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="btn bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg w-full"
                >
                  Register
                </button>
              </div>
              {/* Already have an account */}
              <p className="text-center mt-4 text-gray-700">
                Already have an account?{" "}
                <Link href="/login" className="text-cyan-500 font-semibold">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
