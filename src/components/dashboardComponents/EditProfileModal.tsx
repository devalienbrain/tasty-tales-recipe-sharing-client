// EditProfileModal.tsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { updateUser } from "@/redux/userSlice"; // Adjust the path as necessary
import { TUser } from "@/redux/types"; // Adjust the path as necessary
import { updateUser } from "@/redux/slices/userSlice";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: TUser;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  user,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedUser = {
      ...user,
      name,
      email,
      phone,
      address,
    };

    // Call the API to update the user
    // Replace with your actual API call
    await fetch(`http://localhost:5000/api/users/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });

    dispatch(updateUser(updatedUser));
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl font-bold">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border p-2 w-full mb-2"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border p-2 w-full mb-2"
            required
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="border p-2 w-full mb-2"
            required
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            className="border p-2 w-full mb-2"
            required
          />
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
