"use client";

import { useAppSelector } from "@/redux/hook";
import { TUser } from "@/redux/types";
import Image from "next/image";
import React from "react";
import { FaEdit } from "react-icons/fa"; // Import React Icon for edit
import { GiShadowFollower } from "react-icons/gi";
import { RiUserFollowLine } from "react-icons/ri";

const DashbordUserProfile: React.FC = () => {
  const user = useAppSelector(
    (state) => state.user?.currentUser?.user
  ) as TUser;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white">
      <div className="w-full max-w-2xl text-center transition duration-300 hover:shadow-2xl">
        {/* Profile Picture */}
        {user?.photoUrl ? (
          <Image
            src={user.photoUrl} // Use user photoUrl
            alt={user.name}
            width={128} // Set width
            height={128} // Set height
            className="rounded-full mx-auto mb-6 border-4 border-blue-500 object-cover"
          />
        ) : (
          <div className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}

        {/* Welcome Message */}
        <h1 className="text-3xl font-extrabold mb-2">
          Welcome,{" "}
          <span className="text-blue-600 font-black">{user?.name}</span> !
        </h1>
        <hr className="hr-animation" />
        {/* User Info */}
        <p className="text-lg mb-6 font-bold uppercase text-red-600">
          {user?.role}
        </p>
        <div className="flex flex-col gap-3 text-lime-400">
          <div className="flex items-center gap-3">
            {" "}
            <GiShadowFollower className="text-cyan-400" />{" "}
            <span className="font-black text-red-600">7</span> followers{" "}
          </div>
          <div className="flex items-center gap-3">
            {" "}
            <RiUserFollowLine className="text-cyan-400" />{" "}
            <span className="font-black text-red-600">11 </span> following
          </div>
        </div>
        <div className="text-left text-xl font-black pt-10">
          Profile Details
        </div>
        <hr className="h-0.5 py-2" />
        {/* Displaying Additional User Data */}
        <div className="space-y-4 text-left text-base text-slate-300">
          <p>
            <strong className="font-bold">Name:</strong> {user?.name}
          </p>
          <p>
            <strong className="font-bold">Role:</strong> {user?.role}
          </p>
          <p>
            <strong className="font-bold">Email:</strong> {user?.email}
          </p>
          <p>
            <strong className="font-bold">Phone:</strong> {user?.phone}
          </p>
          <p>
            <strong className="font-bold">Address:</strong> {user?.address}
          </p>
          <p>
            <strong className="font-bold">User ID:</strong> {user?._id}
          </p>
        </div>

        {/* Button for Action */}
        <button className="mt-8 flex items-center justify-center bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          <FaEdit className="mr-2" /> {/* Edit Icon */}
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default DashbordUserProfile;
