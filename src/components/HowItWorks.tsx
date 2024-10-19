"use client";
import { FaRegUser, FaEdit, FaSearch, FaStar, FaCreditCard } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaRegUser className="text-4xl mb-4" />,
      step: "1",
      title: "Register",
      description: "Create an account with your email and set up your profile.",
    },
    {
      icon: <FaEdit className="text-4xl mb-4" />,
      step: "2",
      title: "Submit Recipes",
      description: "Post your favorite recipes with a detailed description and ingredients.",
    },
    {
      icon: <FaSearch className="text-4xl mb-4" />,
      step: "3",
      title: "Browse",
      description: "Explore recipes submitted by the community and find your next favorite dish.",
    },
    {
      icon: <FaStar className="text-4xl mb-4" />,
      step: "4",
      title: "Rate & Comment",
      description: "Rate recipes and leave feedback to share your cooking experiences.",
    },
    {
      icon: <FaCreditCard className="text-4xl mb-4" />,
      step: "5",
      title: "Get Premium",
      description: "Subscribe for premium features, including exclusive recipes and ad-free browsing.",
    },
  ];

  return (
    <div className="container mx-auto my-10 py-10">
      <h2 className="text-center text-5xl font-extrabold mb-8">
        How It <span className="text-cyan-500">Works</span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-around items-stretch gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center rounded-3xl p-10 bg-black/10 flex-grow"
          >
            {step.icon}
            <div className="w-9 h-9 rounded-full bg-cyan-100/5 flex justify-center items-center font-bold">
              {step.step}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-500">{step.title}</h3>
            <p className="text-sm flex-grow">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
