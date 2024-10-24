"use client";
import Image from "next/image";
import { FaEdit, FaTrashAlt, FaUserShield } from "react-icons/fa";
import { TUser } from "@/redux/types";
import {
  useBlockUserMutation,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
} from "@/redux/slices/userSlice";
import Link from "next/link";

const AllUsers: React.FC = () => {
  const { data: users, error, isLoading, refetch } = useGetAllUsersQuery();
  const [blockUser] = useBlockUserMutation();
  const [updateUserRole] = useUpdateUserRoleMutation();

  const allUsers: TUser[] = users?.data || [];

  const handleBlock = async (id: string) => {
    if (window.confirm("Are you sure you want to block this user?")) {
      try {
        await blockUser(id).unwrap();
        alert("User blocked successfully");
        refetch();
      } catch (err) {
        console.error("Failed to block user:", err);
        alert("Failed to block user");
      }
    }
  };

  const handleAdminToggle = async (id: string, isAdmin: boolean) => {
    if (
      window.confirm(
        `Are you sure you want to ${isAdmin ? "remove admin" : "make admin"}?`
      )
    ) {
      try {
        await updateUserRole({ id, role: isAdmin ? "user" : "admin" }).unwrap();
        alert(`Admin status ${isAdmin ? "removed" : "granted"} successfully`);
        refetch();
      } catch (err) {
        console.error("Failed to update user role:", err);
        alert("Failed to update user role");
      }
    }
  };

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error)
    return <div className="p-4 text-red-500">Error loading users!</div>;

  return (
    <div className="min-h-screen">
      <h1 className="text-5xl font-black text-center mb-6">
        <span className="text-cyan-400">Users</span> Management
      </h1>
      <table className="min-w-full shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-50 text-left text-sm font-semibold text-gray-700">
            <th className="py-3 px-6">S.No</th>
            <th className="py-3 px-6">Profile</th>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Email</th>
            <th className="py-3 px-6">Role</th>
            <th className="py-3 px-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user: TUser, index: number) => (
            <tr key={user._id} className="hover:bg-gray-100/5 transition-all">
              <td className="py-3 px-6 border-b">{index + 1}</td>
              <td className="py-3 px-6 border-b text-sm">
                <Image
                  src={user.photoUrl || "/default-profile.png"} // Provide a default image if the photoUrl is null/undefined
                  alt={user.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </td>
              <td className="py-3 px-6 border-b font-semibold">{user.name}</td>
              <td className="py-3 px-6 border-b text-sm">{user.email}</td>
              <td className="py-3 px-6 border-b capitalize font-bold text-sm">
                {user.role}
              </td>
              <td className="py-3 px-6 border-b">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleAdminToggle(user._id, user.role === "admin")
                    }
                    className={`text-yellow-500 hover:text-yellow-600 ${
                      user.role === "admin" ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <FaUserShield size={20} />
                  </button>
                  <Link
                    href={`/users/edit/${user._id}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit size={20} />
                  </Link>
                  <button
                    onClick={() => handleBlock(user._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
