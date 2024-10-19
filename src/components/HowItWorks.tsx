import {
  FaRegUser,
  FaEdit,
  FaSearch,
  FaStar,
  FaCreditCard,
} from "react-icons/fa";

const HowItWorks = () => {
  return (
    <div className="container mx-auto my-10 py-10">
      <h2 className="text-center text-4xl font-extrabold mb-8">
        How It <span className="text-cyan-500">Works</span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-around items-stretch gap-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center rounded-3xl p-10 bg-black/10 flex-grow">
          <FaRegUser className="text-4xl mb-4" />
          <div className="w-9 h-9 rounded-full bg-cyan-100/5 flex justify-center items-center font-bold">
            1
          </div>
          <h3 className="text-xl font-semibold mb-2 text-cyan-500">Register</h3>
          <p className="text-sm flex-grow">
            Create an account with your email and set up your profile.
          </p>
        </div>

        {/* Arrow */}
        <div className="hidden lg:flex justify-center items-center h-full">
          <div className="w-10 h-10 text-slate-500 flex items-center justify-center text-3xl mt-10">
            ➔
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center rounded-3xl p-10 bg-black/10 flex-grow">
          <FaEdit className="text-4xl mb-4" />
          <div className="w-9 h-9 rounded-full bg-cyan-100/5 flex justify-center items-center font-bold">
            2
          </div>
          <h3 className="text-xl font-semibold mb-2 text-cyan-500">
            Submit Recipes
          </h3>
          <p className="text-sm flex-grow">
            Post your favorite recipes with a detailed description and
            ingredients.
          </p>
        </div>

        {/* Arrow */}
        <div className="hidden lg:flex justify-center items-center h-full">
          <div className="w-10 h-10 text-slate-500 flex items-center justify-center text-3xl mt-10">
            ➔
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center rounded-3xl p-10 bg-black/10 flex-grow">
          <FaSearch className="text-4xl mb-4" />
          <div className="w-9 h-9 rounded-full bg-cyan-100/5 flex justify-center items-center font-bold">
            3
          </div>
          <h3 className="text-xl font-semibold mb-2 text-cyan-500">Browse</h3>
          <p className="text-sm flex-grow">
            Explore recipes submitted by the community and find your next
            favorite dish.
          </p>
        </div>

        {/* Arrow */}
        <div className="hidden lg:flex justify-center items-center h-full">
          <div className="w-10 h-10 text-slate-500 flex items-center justify-center text-3xl mt-10">
            ➔
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center text-center rounded-3xl p-10 bg-black/10 flex-grow">
          <FaStar className="text-4xl mb-4" />
          <div className="w-9 h-9 rounded-full bg-cyan-100/5 flex justify-center items-center font-bold">
            4
          </div>
          <h3 className="text-xl font-semibold mb-2 text-cyan-500">
            Rate & Comment
          </h3>
          <p className="text-sm flex-grow">
            Rate recipes and leave feedback to share your cooking experiences.
          </p>
        </div>

        {/* Arrow */}
        <div className="hidden lg:flex justify-center items-center h-full">
          <div className="w-10 h-10 text-slate-500 flex items-center justify-center text-3xl mt-10">
            ➔
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex flex-col items-center text-center rounded-3xl p-10 bg-black/10 flex-grow">
          <FaCreditCard className="text-4xl mb-4" />
          <div className="w-9 h-9 rounded-full bg-cyan-100/5 flex justify-center items-center font-bold">
            5
          </div>
          <h3 className="text-xl font-semibold mb-2 text-cyan-500">
            Get Premium
          </h3>
          <p className="text-sm flex-grow">
            Subscribe for premium features, including exclusive recipes and
            ad-free browsing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
