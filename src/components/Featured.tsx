import Image from "next/image"; 
// import featImg1 from "../assets/featImg01.jpg";
import featImg2 from "../assets/featImg02.jpg";
import featImg3 from "../assets/featImg03.jpg";
import featImg4 from "../assets/featImg04.jpg";

const FeaturedImages: React.FC = () => {
  return (
    <section className="w-full my-20 bg-white rounded-2xl">
      <div className="flex flex-col md:flex-row items-center justify-around gap-6 px-4">
        {/* Image 1 */}
        {/* <div className="overflow-hidden rounded-lg">
          <Image
            src={featImg1}
            alt="Featured Image 1"
            width={500}
            height={300}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </div> */}

        {/* Image 2 */}
        <div className="overflow-hidden rounded-lg">
          <Image
            src={featImg2}
            alt="Featured Image 2"
            width={500}
            height={300}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 3 */}
        <div className="overflow-hidden rounded-lg">
          <Image
            src={featImg3}
            alt="Featured Image 3"
            width={500}
            height={300}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Image 4 */}

        <div className="overflow-hidden rounded-lg">
          <Image
            src={featImg4}
            alt="Featured Image 4"
            width={500}
            height={300}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedImages;
