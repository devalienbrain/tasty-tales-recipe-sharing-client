"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Sample JSON data for reviews
const reviewsData = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    image: "https://i.ibb.co/k6hTYW1/Alien-Dev.jpg", // Updated image URL
    rating: 5,
    comment:
      "This platform has transformed my cooking experience! Highly recommend it.",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    image: "https://i.ibb.co/k6hTYW1/Alien-Dev.jpg", // Updated image URL
    rating: 4,
    comment: "Great recipes, but I wish there were more vegetarian options.",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    image: "https://i.ibb.co/k6hTYW1/Alien-Dev.jpg", // Updated image URL
    rating: 5,
    comment:
      "I love the user-friendly interface and the variety of recipes available!",
  },
];

const UserReviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentReviewIndex((prevIndex) =>
          prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000); // Change review every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const { name, email, image, rating, comment } =
    reviewsData[currentReviewIndex];

  return (
    <div className="p-10 text-white rounded-lg transform transition-transform duration-300 hover:scale-105">
      <h1 className="text-5xl font-black mb-6 text-center text-pink-400 neon-glow">
        User <span className="text-cyan-500">Reviews</span>
      </h1>
      <hr className="hr-animation" />
      <div
        className="px-6 py-8 rounded-lg shadow-lg transition-transform duration-300 hover:bg-opacity-80"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="text-base text-red-500 font-semibold text-center tracking-wide leading-7 neon-text pb-10">
          &quot;{comment}&quot;
        </p>

        <div className="flex flex-col items-center space-y-4 mb-6">
          <Image
            src={image}
            alt={name}
            width={80} 
            height={80}
            className="w-20 h-20 rounded-full border-4 border-cyan-500 shadow-lg transform hover:rotate-3"
          />
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-cyan-400">{name}</h3>
            <p className="text-sm text-gray-400">{email}</p>
            <div className="flex mt-2 justify-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`h-5 w-5 ${
                    index < rating ? "text-yellow-400" : "text-gray-600"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.431 8.232 1.191-5.951 5.835 1.406 8.211L12 18.897l-7.355 3.857 1.406-8.211-5.951-5.835 8.232-1.191L12 .587z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
