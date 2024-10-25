"use client";
// import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";
// import { useState } from "react";

// type FAQ = {
//   question: string;
//   answer: string;
// };

// const FAQSection: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const faqs: FAQ[] = [
//     {
//       question: "What is Recipe Sharing Community?",
//       answer:
//         "It's a platform where food enthusiasts can share, explore, and discover delicious recipes from around the world.",
//     },
//     {
//       question: "How do I submit a recipe?",
//       answer:
//         "Simply register, navigate to the 'Submit Recipes' section, and fill out the form with a detailed description and ingredients.",
//     },
//     {
//       question: "Is there a cost to use the platform?",
//       answer:
//         "The basic features are free, but you can subscribe to our premium plan for exclusive recipes and ad-free browsing.",
//     },
//     {
//       question: "Can I rate and comment on recipes?",
//       answer:
//         "Yes! You can leave ratings and comments on any recipe to help others find the best dishes and share your feedback.",
//     },
//     {
//       question: "How can I access premium features?",
//       answer:
//         "To access premium content, you can subscribe via the 'Get Premium' option and enjoy exclusive benefits.",
//     },
//   ];

//   return (
//     <div className="container mx-auto w-full md:w-1/2 my-10 py-10">
//       <h2 className="text-center text-4xl font-extrabold mb-8">
//         Frequently Asked <span className="text-cyan-500">Questions</span>
//       </h2>
//       <div className="flex flex-col gap-6">
//         {faqs.map((faq, index) => (
//           <div key={index} className="border-b border-cyan-500/15 cursor-pointer">
//             <div
//               onClick={() => toggleFAQ(index)}
//               className="flex justify-between items-center py-4"
//             >
//               <div className="flex items-center gap-2 text-lg font-semibold">
//                 <FaQuestionCircle className="text-cyan-500" />
//                 {faq.question}
//               </div>
//               <FaChevronDown
//                 className={`text-cyan-500 transition-transform duration-300 ${
//                   activeIndex === index ? "rotate-180" : ""
//                 }`}
//               />
//             </div>
//             {activeIndex === index && (
//               <div className="py-2 text-sm">{faq.answer}</div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQSection;

import React, { useState } from "react";

// Define the FAQ and Summary structure
type FAQItem = {
  question: string;
  answer: string;
};

type SummaryItem = {
  title: string;
  content: string;
};

const FAQ: React.FC = () => {
  // JSON data for the FAQ
  const faqData: FAQItem[] = [
    {
      question: "What is the Recipe Sharing Community?",
      answer:
        "The Recipe Sharing Community is a platform where food enthusiasts can share, discover, and organize their favorite recipes. Users can interact with each other through comments, ratings, and much more.",
    },
    {
      question: "How do I submit a recipe?",
      answer:
        "You can submit a recipe by logging into your account, navigating to the 'Submit Recipe' page, and filling out the required fields such as ingredients, instructions, and cooking time.",
    },
    {
      question: "Is there a subscription model for premium content?",
      answer:
        "Yes, we offer premium subscriptions that allow you to access exclusive content, including premium recipes and personalized meal plans.",
    },
    {
      question: "What technologies does this platform use?",
      answer:
        "The platform is built using Next.js, React, TypeScript, Node.js, Express, and MongoDB. Tailwind CSS is used for styling.",
    },
    {
      question: "Can I follow other users?",
      answer:
        "Yes, you can follow your favorite users to stay updated with their latest recipes and activity on the platform.",
    },
  ];

  // JSON data for the summary
  const summaryData: SummaryItem[] = [
    {
      title: "About Us",
      content:
        "The Recipe Sharing Community was created to bring together cooking enthusiasts from all around the world to share their favorite recipes.",
    },
    {
      title: "Our Mission",
      content:
        "Our mission is to provide a space where food lovers can easily discover, share, and organize recipes while building a supportive community.",
    },
    {
      title: "Subscription Plans",
      content:
        "We offer both free and premium subscription plans to cater to different needs. Premium members enjoy exclusive recipes and personalized meal plans.",
    },
    {
      title: "Community Guidelines",
      content:
        "We encourage positive interactions, helpful feedback, and respectful behavior within the community. All users are expected to follow our community guidelines.",
    },
  ];

  // State to track the expanded FAQ question
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to toggle the active index for FAQ
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto lg:flex gap-5">
      {/* Summary Section */}
      <div className="lg:w-1/2 bg-white p-6 border border-gray-300 rounded-2xl lg:h-auto lg:sticky lg:top-6">
        <h2 className="text-2xl font-black mb-4 text-pink-600">
          Summary Details
        </h2>
        <hr className="hr-animation" />
        <div className="space-y-4">
          {summaryData.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-lg font-semibold text-cyan-600">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="lg:w-1/2 bg-white p-6 border border-gray-300 rounded-2xl">
        <h2 className="text-2xl font-black mb-4 text-pink-600">
          Frequently Asked Questions
        </h2>
        <hr className="hr-animation" />
        <div className="space-y-4 pt-5">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg p-4">
              <h3
                className="text-lg font-semibold text-cyan-600 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </h3>
              {activeIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
