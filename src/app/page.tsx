import Banner from "@/components/Banner";
import FAQSection from "@/components/Faq";
import FeaturedImages from "@/components/Featured";
import HowItWorks from "@/components/HowItWorks";
import UserReviews from "@/components/UserReviews";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <FAQSection />
      <UserReviews />
    </div>
  );
};

export default HomePage;
