import Banner from "@/components/Banner";
import FAQSection from "@/components/Faq";
import FeaturedImages from "@/components/Featured";
import HowItWorks from "@/components/HowItWorks";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <hr className="border-0 h-px bg-cyan-500 my-5 hr-animation" />
      <HowItWorks />
      <FeaturedImages />
      <FAQSection />
    </div>
  );
};

export default HomePage;
