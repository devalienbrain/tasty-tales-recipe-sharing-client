// "use client";
// import {
//   FaRegUser,
//   FaEdit,
//   FaSearch,
//   FaStar,
//   FaCreditCard,
// } from "react-icons/fa";
// import { useInView } from "react-intersection-observer"; // Import Intersection Observer hook

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: <FaRegUser className="text-3xl mb-4" />,
//       step: "1",
//       title: "Register",
//       description: "Create an account with your email and set up your profile.",
//     },
//     {
//       icon: <FaEdit className="text-3xl mb-4" />,
//       step: "2",
//       title: "Submit Recipes",
//       description:
//         "Post your favorite recipes with a detailed description and ingredients.",
//     },
//     {
//       icon: <FaSearch className="text-3xl mb-4" />,
//       step: "3",
//       title: "Browse",
//       description:
//         "Explore recipes submitted by the community and find your next favorite dish.",
//     },
//     {
//       icon: <FaStar className="text-3xl mb-4" />,
//       step: "4",
//       title: "Rate & Comment",
//       description:
//         "Rate recipes and leave feedback to share your cooking experiences.",
//     },
//     {
//       icon: <FaCreditCard className="text-3xl mb-4" />,
//       step: "5",
//       title: "Get Premium",
//       description:
//         "Subscribe for premium features, including exclusive recipes and ad-free browsing.",
//     },
//   ];

//   // Intersection Observer for scroll animation
//   const { ref: sectionRef, inView } = useInView({
//     triggerOnce: true, // Trigger animation only once
//     threshold: 0.5, // Trigger animation when 50% of the section is visible
//   });

//   return (
//     <div className="container mx-auto my-10 py-10">
//       <h2 className="text-center text-5xl font-black mb-8">
//         How It <span className="text-pink-500">Works</span>
//       </h2>
//       <hr className="hr-animation" />
//       <div
//         ref={sectionRef} // Apply the observer to this section
//         className={`flex flex-col lg:flex-row justify-around items-stretch gap-8 transition-opacity duration-1000 ${
//           inView ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center rounded-3xl p-10 bg-black/10 flex-grow"
//           >
//             {step.icon}
//             <div className="w-9 h-9 rounded-full bg-cyan-100/5 flex justify-center items-center font-bold">
//               {step.step}
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-cyan-500">
//               {step.title}
//             </h3>
//             <p className="text-sm flex-grow">{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;

"use client";
import {
  FaRegUser,
  FaEdit,
  FaSearch,
  FaStar,
  FaCreditCard,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaRegUser className="text-3xl mb-6 text-pink-500" />,
      step: "1",
      title: "Register",
      description: "Create an account with your email and set up your profile.",
    },
    {
      icon: <FaEdit className="text-3xl mb-6 text-pink-500" />,
      step: "2",
      title: "Submit Recipes",
      description:
        "Post your favorite recipes with a detailed description and ingredients.",
    },
    {
      icon: <FaSearch className="text-3xl mb-6 text-pink-500" />,
      step: "3",
      title: "Browse",
      description:
        "Explore recipes submitted by the community and find your next favorite dish.",
    },
    {
      icon: <FaStar className="text-3xl mb-6 text-pink-500" />,
      step: "4",
      title: "Rate & Comment",
      description:
        "Rate recipes and leave feedback to share your cooking experiences.",
    },
    {
      icon: <FaCreditCard className="text-3xl mb-6 text-pink-500" />,
      step: "5",
      title: "Get Premium",
      description:
        "Subscribe for premium features, including exclusive recipes and ad-free browsing.",
    },
  ];

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="container mx-auto my-16 py-12 text-white rounded-3xl shadow-lg">
      <h2 className="text-center text-5xl font-black mb-10 text-pink-400 neon-glow">
        How It <span className="text-cyan-500">Works</span>
      </h2>
      <hr className="hr-animation mb-10" />
      <div
        ref={sectionRef}
        className={`flex flex-col lg:flex-row justify-around items-stretch gap-8 transition-transform duration-1000 transform ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center rounded-2xl p-10 bg-black/20 shadow-md transform hover:scale-105 transition-transform duration-300"
          >
            {step.icon}
            <div className="w-9 h-9 rounded-full bg-white/5 flex justify-center items-center font-bold text-white mb-4">
              {step.step}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-cyan-400">
              {step.title}
            </h3>
            <p className="text-md text-gray-300 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
