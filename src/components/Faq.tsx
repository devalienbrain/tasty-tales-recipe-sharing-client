"use client";
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "What is Recipe Sharing Community?",
      answer:
        "It's a platform where food enthusiasts can share, explore, and discover delicious recipes from around the world.",
    },
    {
      question: "How do I submit a recipe?",
      answer:
        "Simply register, navigate to the 'Submit Recipes' section, and fill out the form with a detailed description and ingredients.",
    },
    {
      question: "Is there a cost to use the platform?",
      answer:
        "The basic features are free, but you can subscribe to our premium plan for exclusive recipes and ad-free browsing.",
    },
    {
      question: "Can I rate and comment on recipes?",
      answer:
        "Yes! You can leave ratings and comments on any recipe to help others find the best dishes and share your feedback.",
    },
    {
      question: "How can I access premium features?",
      answer:
        "To access premium content, you can subscribe via the 'Get Premium' option and enjoy exclusive benefits.",
    },
  ];

  return (
    <div className="container mx-auto my-10 py-10">
      <h2 className="text-center text-4xl font-extrabold mb-8">
        Frequently Asked <span className="text-cyan-500">Questions</span>
      </h2>
      <div className="flex flex-col gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-cyan-500/15 cursor-pointer">
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center py-4"
            >
              <div className="flex items-center gap-2 text-lg font-semibold">
                <FaQuestionCircle className="text-cyan-500" />
                {faq.question}
              </div>
              <FaChevronDown
                className={`text-cyan-500 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {activeIndex === index && (
              <div className="py-2 text-sm">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
