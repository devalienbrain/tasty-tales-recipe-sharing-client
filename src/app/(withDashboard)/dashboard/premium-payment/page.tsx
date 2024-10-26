"use client";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/redux/hook";

import { FaDollarSign } from "react-icons/fa"; // React Icon for payment
import { MdPayment } from "react-icons/md"; // React Icon for payment button
import { useCreateOrderMutation } from "@/redux/api/apiSlice";

const CheckoutForPayment = () => {
  const [createOrder] = useCreateOrderMutation();
  const currentUser = useAppSelector((state) => state.auth?.currentUser);

  // State for user input
  const [user, setUser] = useState({
    userId: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Error and loading state management
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Set the currentUser into the user state when it changes
  useEffect(() => {
    if (currentUser) {
      setUser({
        userId: currentUser._id || "",
        name: currentUser.name || "",
        email: currentUser.email || "",
        phone: currentUser.phone || "",
        address: currentUser.address || "",
      });
    }
  }, [currentUser]);

  const premiumFee = 500; // Premium subscription fee

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Clear previous error
    setIsLoading(true); // Set loading state

    const data = {
      user,
      totalPayableAmount: premiumFee,
    };

    try {
      const res = await createOrder(data).unwrap();
      console.log(res);
      if (res.success) {
        window.location.href = res?.data?.payment_url;
      } else {
        setError("Order creation failed: " + res.message);
      }
    } catch (error) {
      setError("An error occurred during payment.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-black mb-6 text-cyan-500">
        Premium User Subscription
      </h2>
      <p className="bg-white text-sm font-semibold text-gray-700 p-4 rounded-lg mb-8">
        Become a premium member of Tastytale to unlock exclusive content,
        advanced recipe filters, and enjoy an ad-free experience. The premium
        membership gives you unlimited access to the best recipes, cooking tips,
        and allows you to engage more with our community. The subscription fee
        is <strong>$500</strong> and is a one-time payment for lifetime access.
        You can pay securely using Aamarpay.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-8 border p-5 rounded bg-white">
          <h3 className="text-xl font-semibold mb-4">User Information</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 text-left"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                aria-label="Name"
                value={user.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 text-left"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                aria-label="Email"
                value={user.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 text-left"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                aria-label="Phone"
                value={user.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 text-left"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                aria-label="Address"
                value={user.address}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
          </div>
        </div>

        {/* Display total payable amount */}
        <div className="mb-8 text-right bg-white p-4 rounded-lg">
          <div className="flex justify-between items-center gap-5">
            <p className="text-lg font-bold text-red-600 flex items-center gap-2">
              Total Amount: $ {premiumFee}
            </p>
            <button
              type="submit"
              disabled={isLoading}
              className={`${
                isLoading ? "bg-gray-400" : "bg-cyan-500 hover:bg-cyan-400"
              } text-white font-semibold py-2 px-6 rounded-3xl shadow-lg transition duration-300 flex items-center gap-2`}
            >
              <MdPayment className="text-white" />
              {isLoading ? "Processing..." : "Proceed to Payment"}
            </button>
          </div>
        </div>
      </form>

      {/* Display error message if there is one */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default CheckoutForPayment;
