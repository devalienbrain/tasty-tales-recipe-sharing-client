"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import img from "../../assets/loginImg.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser, useLoginUserMutation } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";

type FormValues = {
  email: string;
  password: string;
};

interface LoginResponse {
  success: boolean;
  token: string;
  data: any; 
}


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    setEmail(data?.email);
    setPassword(data?.password);
    try {
      const response = await loginUser({ email, password }).unwrap() as LoginResponse;;
      if (response.success) {
        const { token, data } = response; // Destructure the correct fields
        console.log(data);
        localStorage.setItem("accessToken", token);
        dispatch(setCurrentUser({ currentUser: data, token }));
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Login failed. Please check your email and password.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-black rounded-2xl">
      <div className="w-full">
        <h1 className="text-center text-4xl font-extrabold text-cyan-600 mb-5 pt-16">
          Login <span className="text-black">Now</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-lg shadow-lg p-6">
          {/* Left Side - Image */}
          <div className="md:w-1/2 hidden md:block">
            <Image
              src={img}
              width={500}
              height={500}
              alt="login page"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2 w-full px-8 py-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <AiOutlineMail className="mr-2 text-xl" />
                  <span className="font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                  className={`input input-bordered w-full px-3 py-2 rounded-lg border ${
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
              <div>
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
                  Login
                </button>
              </div>

              {/* Register Link */}
              <p className="text-center mt-4 text-gray-700">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-cyan-500 font-semibold">
                  Create an account
                </Link>
              </p>
            </form>

            {/* Social Sign In */}
            <p className="text-center mt-6">Or Sign In Using</p>
            <div className="flex justify-center gap-6 mt-2">
              <button className="btn btn-circle bg-white">
                <Image
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  width={40}
                  height={40}
                  alt="google logo"
                />
              </button>
              <button className="btn btn-circle bg-white">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  width={35}
                  height={35}
                  alt="github logo"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
