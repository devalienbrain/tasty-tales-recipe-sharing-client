// import {
//   FaGithub,
//   FaLinkedin,
//   FaFacebook,
//   FaYoutube,
//   FaTwitter,
// } from "react-icons/fa";

// const Footer: React.FC = () => {
//   return (
//     <footer className="text-base-content py-4">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
//         {/* Copyright Info */}
//         <div className="text-sm mb-4 lg:mb-0 lg:order-1">
//           <p>&copy; 2024 Devalienbrain. All rights reserved.</p>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex space-x-4 mb-4 lg:mb-0 lg:order-2">
//           <a
//             href="https://github.com/devalienbrain"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaGithub size={24} className="hover:text-gray-600" />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/md-sabbir-hassan-murad/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin size={24} className="hover:text-blue-600" />
//           </a>
//           <a
//             href="https://www.facebook.com/md.sabbirhassanmurad"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaFacebook size={24} className="hover:text-blue-500" />
//           </a>
//           <a
//             href="https://www.youtube.com/@devAlienBrain"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaYoutube size={24} className="hover:text-red-600" />
//           </a>
//           <a
//             href="https://x.com/Hassan006930481"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaTwitter size={24} className="hover:text-blue-400" />
//           </a>
//         </div>

//         {/* Contact Info */}
//         <div className="text-xs text-center lg:text-right lg:order-3">
//           <p className="text-sm font-semibold">Contact Me</p>
//           <p>
//             Email:{" "}
//             <a href="mailto:hassansabbir0321@gmail.com" className="underline">
//               hassansabbir0321@gmail.com
//             </a>
//           </p>
//           <p>
//             Phone:{" "}
//             <a href="tel:+8801893070812" className="underline">
//               +8801893070812
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto flex flex-col-reverse gap-3 lg:flex-row items-center justify-between text-white">
        {/* Copyright Info */}
        <div className="text-sm lg:order-1 text-gray-400">
          <p>&copy; 2024 Devalienbrain. All rights reserved.</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4 lg:mb-0 lg:order-2 text-cyan-400">
          <a
            href="https://github.com/devalienbrain"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-sabbir-hassan-murad/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://www.youtube.com/@devAlienBrain"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            <FaYoutube size={28} />
          </a>
          <a
            href="https://x.com/Hassan006930481"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.facebook.com/md.sabbirhassanmurad"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="lg:order-3 text-center lg:text-right flex items-baseline gap-3 text-white text-xs">
          <p className="font-semibold text-gray-300 mb-2">Contact Me: </p>
          <FaPhone size={14} title="+8801893070812" className="hover:text-cyan-300"
          />
          <FaEnvelope size={14}
            title="hassansabbir0321@gmail.com"
            className="hover:text-cyan-300"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
