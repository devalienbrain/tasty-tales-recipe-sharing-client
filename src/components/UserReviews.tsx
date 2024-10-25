"use client";
import React, { useEffect, useState } from "react";

// Sample JSON data for reviews
const reviewsData = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    image: "https://via.placeholder.com/100", // Placeholder image URL
    rating: 5,
    comment:
      "This platform has transformed my cooking experience! Highly recommend it.",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    image: "https://via.placeholder.com/100", // Placeholder image URL
    rating: 4,
    comment: "Great recipes, but I wish there were more vegetarian options.",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    image: "https://via.placeholder.com/100", // Placeholder image URL
    rating: 5,
    comment:
      "I love the user-friendly interface and the variety of recipes available!",
  },
  // Add more reviews as needed
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
    <div className="py-10">
      <h1 className="text-4xl font-black mb-6 text-center">
        User <span className="text-cyan-400">Reviews</span>
      </h1>
      <hr className="hr-animation" />
      <div
        className="p-5 rounded-lg shadow-lg transition-transform duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="text-white italic text-center font-semibold pb-10">
          {comment}
        </p>
        <div className="flex items-center justify-center mb-4">
          <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">{email}</p>
            <div className="flex mt-1">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`h-5 w-5 ${
                    index < rating ? "text-yellow-500" : "text-gray-300"
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
