// // src/components/DashbordHomeUser.tsx
// "use client";
// import { useAppSelector } from "@/redux/hook";
// import Image from "next/image";
// import React from "react";

// const DashbordUserProfile: React.FC = () => {
//   const user = useAppSelector((state) => state.user?.currentUser?.user);
//   console.log( user );
//   return (
//     <div className="flex flex-col items-center justify-start min-h-screen">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center transition duration-300 hover:shadow-2xl">
//         {/* Profile Picture */}
//         {user?.photoUrl ? (
//           <Image
//             src={user.photoUrl} // Use user photoUrl
//             alt={user.name}
//             width={128} // Set width
//             height={128} // Set height
//             className="rounded-full mx-auto mb-6 border-4 border-blue-500 object-cover"
//           />
//         ) : (
//           <div className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 flex items-center justify-center text-gray-400">
//             No Image
//           </div>
//         )}

//         {/* Welcome message */}
//         <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
//           Welcome, <span className="text-blue-600">{user?.name}!</span>
//         </h1>

//         {/* User Info */}
//         <p className="text-gray-700 text-lg mb-6">
//           Role:{" "}
//           <span className="font-bold capitalize text-gray-800">
//             {user?.role}
//           </span>
//         </p>

//         <div className="space-y-4 text-left">
//           <p className="text-gray-600 text-base">
//             <strong className="text-gray-800">Email:</strong> {user?.email}
//           </p>
//           <p className="text-gray-600 text-base">
//             <strong className="text-gray-800">Phone:</strong> {user?.phone}
//           </p>
//           <p className="text-gray-600 text-base">
//             <strong className="text-gray-800">Address:</strong> {user?.address}
//           </p>
//         </div>

//         {/* Button for Action */}
//         <button className="mt-8 bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
//           Edit Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DashbordUserProfile;

"use client";

import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import React from "react";
import { FaEdit } from "react-icons/fa"; // Import React Icon for edit

const DashbordUserProfile: React.FC = () => {
  const user = useAppSelector((state) => state.user?.currentUser?.user);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-8 text-white">
      <div className="w-full max-w-md rounded-xl shadow-lg p-8 text-center transition duration-300 hover:shadow-2xl">
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
          Welcome, <span className="text-blue-600">{user?.name}!</span>
        </h1>

        {/* User Info */}
        <p className="text-gray-200 text-lg mb-6">
          Role: <span className="font-bold capitalize ">{user?.role}</span>
        </p>

        {/* Displaying Additional User Data */}
        <div className="space-y-4 text-left">
          <p className="text-base">
            <strong className="">User ID:</strong> {user?._id}
          </p>
          <p className=" text-base">
            <strong className="">Email:</strong> {user?.email}
          </p>
          <p className=" text-base">
            <strong className="">Phone:</strong> {user?.phone}
          </p>
          <p className=" text-base">
            <strong className="">Address:</strong> {user?.address}
          </p>
          <p className=" text-base">
            <strong className="">Account Created At:</strong>{" "}
            {new Date(user?.createdAt).toLocaleDateString()}
          </p>
          <p className=" text-base">
            <strong className="">Last Updated At:</strong>{" "}
            {new Date(user?.updatedAt).toLocaleDateString()}
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
