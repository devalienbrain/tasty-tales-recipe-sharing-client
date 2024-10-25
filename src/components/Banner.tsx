// import FeaturedImages from "./Featured";

// const Banner: React.FC = () => {
//   return (
//     <section className="border border-slate-700 rounded-2xl shadow-lg w-full py-20 bg-gradient-to-b from-slate-950/5 via-slate-900/20 to-slate-900/5">
//       <div className="flex flex-col items-center justify-center">
//         {/* Text Section */}
//         <h1 className="text-4xl md:text-5xl lg:text-7xl font-black  leading-tight text-center lg:text-left">
//           Welcome to <span className="text-cyan-500">Tasty Tales</span>
//         </h1>
//         <h3 className="pt-6 pb-3 text-base md:text-lg lg:text-xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-lime-400 to-lime-300 leading-tight text-center lg:text-left">
//           The Recipe Sharing Platform
//         </h3>
//         <p className="mt-4 text-sm md:text-base text-gray-200 dark:text-gray-100 text-center lg:text-left">
//           Discover, share, and enjoy recipes from around the world. Your cooking
//           adventure starts here!
//         </p>
//       </div>
//       <div>
//         <FeaturedImages />
//       </div>
//     </section>
//   );
// };

// export default Banner;

import FeaturedImages from "./Featured";

const Banner: React.FC = () => {
  return (
    <section className="border border-slate-700 rounded-2xl shadow-lg w-full pt-20 bg-gradient-to-b from-slate-950/10 via-slate-900/30 to-slate-900/10">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Text Section */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-cyan-400 drop-shadow-md">
          Welcome to <span className="text-pink-500">Tasty Tales</span>
        </h1>
        <h3 className="pt-6 pb-3 text-base md:text-lg lg:text-xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-lime-400 to-lime-300 leading-tight">
          The Recipe Sharing Platform
        </h3>
        <p className="mt-4 text-sm md:text-base text-gray-200 dark:text-gray-100">
          Discover, share, and enjoy recipes from around the world. Your cooking
          adventure starts here!
        </p>
      </div>
      <div className="mt-8">
        <FeaturedImages />
      </div>
    </section>
  );
};

export default Banner;
