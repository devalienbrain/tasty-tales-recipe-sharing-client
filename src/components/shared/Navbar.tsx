"use client";

import Link from "next/link";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/slices/authSlice";
import { MdLogout } from "react-icons/md";
import logo from "../../assets/TastyTale.png"
const Navbar = () => {
  const currentUser = useAppSelector((state) => state.user?.currentUser?.user); // Get the currentUser from Redux
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    localStorage.removeItem("accessToken"); // Clear token on logout
    router.push("/"); // Use the new router for navigation
  };

  return (
    <div className="drawer pt-3 font-semibold">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full shadow-lg">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 flex justify-start items-center font-extrabold text-2xl">
          <Image
                          src= {logo}
                          alt="TastyTaleLogo"
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
            <Link href="/">
              <span>
                Tasty<span className="text-cyan-400">Tales</span>
              </span>
            </Link>
          </div>
          <div className="hidden flex-none lg:flex items-center">
            <ul className="menu menu-horizontal space-x-4 flex justify-end items-center">
              {/* Navbar menu content */}
              <li>
                <Link href="/about" className="hover:text-cyan-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="hover:text-cyan-400">
                  Recipes
                </Link>
              </li>

              {currentUser ? (
                <>
                  {/* Show dashboard, profile image, and logout if user exists */}
                  <li></li>
                  <li>
                    {/* Profile Picture */}
                    <Link href="/dashboard" className="hover:text-cyan-400">
                      {currentUser?.photoUrl ? (
                        <Image
                          src={currentUser.photoUrl} // User profile picture
                          alt={currentUser.name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center text-gray-400">
                          Dashboard
                        </div>
                      )}
                    </Link>
                  </li>
                  <li>
                    <button
                      className="btn btn-ghost text-red-500"
                      aria-label="Logout"
                      onClick={handleLogout}
                    >
                       <MdLogout className="text-2xl font-black" />
                    </button>
                  </li>
                </>
              ) : (
                <>
                  {/* Show login and join if user doesn't exist */}
                  <li>
                    <Link href="/login" className="hover:text-cyan-400">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link href="/register" className="hover:text-cyan-400">
                      Join
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 p-4 space-y-4">
          {/* Sidebar content */}
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/recipes">Recipes</Link>
          </li>
          {currentUser ? (
            <>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button className="btn btn-ghost" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/register">Join</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
