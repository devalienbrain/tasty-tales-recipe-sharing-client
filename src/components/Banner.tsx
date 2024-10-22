const Banner: React.FC = () => {
    return (
      <section className="w-full py-20 bg-gradient-to-b from-white/5 via-white/20 to-white/5 rounded-2xl">
        <div className="flex flex-col items-center justify-center">
          {/* Text Section */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black  leading-tight text-center lg:text-left">
            Welcome to <span className="text-cyan-500">Tasty Tales</span>
          </h1>
          <h3 className="pt-6 pb-3 text-base md:text-lg lg:text-xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-lime-400 to-lime-300 leading-tight text-center lg:text-left">
            The Recipe Sharing Platform
          </h3>
          <p className="mt-4 text-sm md:text-base text-gray-200 dark:text-gray-100 text-center lg:text-left">
            Discover, share, and enjoy recipes from around the world. Your cooking adventure starts here!
          </p>
        </div>
      </section>
    );
  };
  
  export default Banner;
  