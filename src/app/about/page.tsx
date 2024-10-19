import { FaUtensils, FaBookOpen, FaUsers, FaGlobe } from "react-icons/fa";
import { GiFlatPlatform } from "react-icons/gi";

const AboutUs: React.FC = () => {
  return (
    <section className="w-full py-10 text-base-content">
      <div className="container mx-auto space-y-8">
        <h1 className="text-5xl font-black text-center mb-6">
          About <span className="text-cyan-400">TastyTales</span>
        </h1>

        {/* Mission Card */}
        <div className="card bg-gradient-to-r from-black/10 via-blue-50/10 to-black/10 rounded-2xl shadow-md p-6 flex items-center gap-5">
          <div className="w-24 h-24 flex justify-center items-center bg-primary/10 rounded-full">
            <FaUtensils className="text-primary text-4xl" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-cyan-600">
              Our Mission
            </h2>
            <p className="text-lg">
              Welcome to TastyTales, the ultimate Recipe Sharing Community for
              passionate cooks, home chefs, culinary students, and everyone who
              loves cooking. Our mission is to bring people together, share
              recipes, and cultivate culinary knowledge.
            </p>
          </div>
        </div>

        {/* Discover Recipes Card */}
        <div className="card bg-gradient-to-r from-black/10 via-green-50/10 to-black/10 rounded-2xl shadow-md p-6 flex items-center gap-5">
          <div className="w-24 h-24 flex justify-center items-center bg-primary/10 rounded-full">
            <FaBookOpen className="text-primary text-4xl" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-cyan-600">
              Discover Recipes
            </h2>
            <p className="text-lg">
              At TastyTales, explore a variety of recipes ranging from simple
              home-cooked meals to gourmet creations. Post, manage, and discover
              amazing recipes, create ingredient checklists, and engage with
              other food lovers worldwide.
            </p>
          </div>
        </div>

        {/* User-Friendly Platform Card */}
        <div className="card bg-gradient-to-r from-black/10 via-yellow-50/10 to-black/10 rounded-2xl shadow-md p-6 flex items-center gap-5">
          <div className="w-24 h-24 flex justify-center items-center bg-primary/10 rounded-full">
            <GiFlatPlatform className="text-primary text-4xl" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-cyan-600">
              User Platform
            </h2>
            <p className="text-lg">
              We offer a user-friendly, safe, and collaborative platform that
              fosters creativity in the kitchen. Find, share, or get inspired by
              a wealth of recipes for all your culinary adventures, no matter
              your cooking expertise.
            </p>
          </div>
        </div>

        {/* Join Our Community Card */}
        <div className="card bg-gradient-to-r from-black/10 via-pink-50/10 to-black/10 rounded-2xl shadow-md p-6 flex items-center gap-5">
          <div className="w-24 h-24 flex justify-center items-center bg-primary/10 rounded-full">
            <FaGlobe className="text-primary text-4xl" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-cyan-600">
              Join Community
            </h2>
            <p className="text-lg">
              Join us today and start your journey towards mastering cooking.
              TastyTales offers something for everyone. Whether you&apos;re new
              to the kitchen or a pro chef, our interactive tools and social
              features make cooking a delightful shared experience.
            </p>
          </div>
        </div>

        {/* Our Team Card */}
        <div className="card bg-gradient-to-r from-black/10 via-purple-50/10 to-black/10 rounded-2xl shadow-md p-6 flex items-center gap-5">
          <div className="w-24 h-24 flex justify-center items-center bg-primary/10 rounded-full">
            <FaUsers className="text-primary text-4xl" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-cyan-600">Our Team</h2>
            <p className="text-lg">
              The TastyTales team is a passionate mix of culinary enthusiasts
              and tech professionals, working to bring you an exceptional
              platform. We ensure TastyTales stays a trusted space for sharing,
              learning, and discovering amazing recipes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
