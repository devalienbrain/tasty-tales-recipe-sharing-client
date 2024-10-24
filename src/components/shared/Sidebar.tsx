"use client";

import React from "react";
import Link from "next/link";
import {
  FaAd,
  FaHome,
  FaList,
  FaPaypal,
  FaShoppingCart,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { RootState } from "@/redux/store";
import { logout } from "@/redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";

const Sidebar: React.FC = () => {
  const user = useAppSelector(
    (state: RootState) => state.user?.currentUser?.user
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("accessToken"); // Clear token on logout
    router.push("/");
  };

  return (
    <div className="bg-cyan-500 text-slate-950 p-4 md:p-6 shadow-xl rounded-2xl md:rounded-r-none md:min-h-screen">
      {/* Sidebar Menu */}
      <ul className="flex flex-row flex-wrap justify-around md:flex-col md:gap-4">
        {/* Home link */}
        <li>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 hover:bg-cyan-600 p-2 rounded-md transition-all duration-300"
          >
            <FaHome className="text-xl" />
            <span className="hidden md:inline">
              {user?.role === "admin" ? "Admin" : "User"} Home
            </span>
          </Link>
        </li>
        <hr className="hr-animation" />
        {/* Admin Links */}
        {user?.role === "admin" ? (
          <>
            <li>
              <Link
                href="/dashboard/all-recipes"
                className="flex items-center gap-2 hover:bg-cyan-600 p-2 rounded-md transition-all duration-300"
              >
                <FaShoppingCart className="text-xl" />
                <span className="hidden md:inline">All Recipes</span>
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard/all-users"
                className="flex items-center gap-2 hover:bg-cyan-600 p-2 rounded-md transition-all duration-300"
              >
                <FaUser className="text-xl" />
                <span className="hidden md:inline">All Users</span>
              </Link>
            </li>

            <hr />
          </>
        ) : (
          <>
            {/* User Links */}
            <li>
              <Link
                href="/dashboard/checkoutForPayment"
                className="flex items-center gap-2 hover:bg-cyan-600 p-2 rounded-md transition-all duration-300"
              >
                <FaPaypal className="text-xl" />
                <span className="hidden md:inline">Payment</span>
              </Link>
            </li>
          </>
        )}

        <li>
          <Link
            href="/dashboard/my-recipes"
            className="flex items-center gap-2 hover:bg-cyan-600 p-2 rounded-md transition-all duration-300"
          >
            <FaShoppingCart className="text-xl" />
            <span className="hidden md:inline">My Recipes</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/add-recipe"
            className="flex items-center gap-2 hover:bg-cyan-600 p-2 rounded-md transition-all duration-300"
          >
            <FaAd className="text-xl" />
            <span className="hidden md:inline">Add a Recipe</span>
          </Link>
        </li>
        {/* Logout */}
        <hr className="hr-animation" />
        <li>
          <div
            onClick={handleLogout}
            className="flex items-center gap-2 hover:text-red-600 cursor-pointer hover:bg-red-200 p-2 rounded-md transition-all duration-300"
          >
            <MdLogout className="text-xl" />
            <span className="hidden md:inline">Logout</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
