"use client";
import { useState } from "react";
import Image from "next/image";
import img1 from "../../assets/DrFatiha.png";
import img2 from "../../assets/alienDev.jpg";
import {
  HiLocationMarker,
  HiOutlineMail,
  HiOutlineOfficeBuilding,
  HiPhone,
} from "react-icons/hi";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <section className="w-full py-10 bg-base-100 text-base-content">
        <div>
          {/* Title */}
          <h1 className="text-5xl font-black text-center mb-12">
            {" "}
            <span className="text-cyan-500">Contact</span> Us
          </h1>
          {/* Contact Information */}
          <div className="my-12 flex flex-col md:flex-row justify-center items-center gap-20 shadow-md rounded-2xl bg-purple-500/5 p-8">
            {/* Left Side: Icon and Title */}
            <div className="flex flex-col items-center md:items-end space-x-4 mb-6 md:mb-0">
              {/* Office Icon */}
              <div className="text-primary">
                <i className="text-5xl">
                  <HiOutlineOfficeBuilding />
                </i>
              </div>
              {/* Office Title and Text */}
              <div className="text-center md:text-right">
                <h2 className="text-3xl font-bold mb-2">Our Office</h2>
                <p className="text-gray-600">
                  Feel free to visit or reach us anytime!
                </p>
              </div>
            </div>

            {/* Right Side: Contact Information */}
            <div className="flex flex-col space-y-4 text-lg text-gray-700">
              {/* Location */}
              <div className="flex items-center space-x-2">
                <i className="text-2xl text-primary">
                  <HiLocationMarker />
                </i>
                <p>123 Sports Lane, Gulshan, Dhaka, Bangladesh</p>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-2">
                <i className="text-2xl text-primary">
                  <HiPhone />
                </i>
                <p>Phone: (+880) 1893-070812</p>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-2">
                <i className="text-2xl text-primary">
                  <HiOutlineMail />
                </i>
                <p>Email: contactFatihaSabbir@sportsfacility.com</p>
              </div>
            </div>
          </div>
          <hr className="border-0 h-px bg-cyan-500 my-10 hr-animation" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-transparent shadow-md rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={5}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primary-focus transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            {/* Team Member Card */}
            <div className="bg-transparent shadow-md rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4 text-center">Our Team</h2>
              <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-col items-center">
                  <Image
                    src={img1}
                    alt="Dr. Fatiha"
                    width={144}
                    height={144}
                    className="rounded-full"
                  />
                  <h3 className="font-bold text-xl text-blue-600 mt-4">
                    Dr. Fati Loo
                  </h3>
                  <p className="text-sm text-gray-400 font-semibold">
                    CEO & Founder
                  </p>
                  <p className="text-gray-700 text-center mt-2">
                    Suu has over 10 years of experience in recipes management
                    and is passionate about making recipe management more
                    accessible.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src={img2}
                    alt="Engr Alien Dev"
                    width={144}
                    height={144}
                    className="rounded-full"
                  />
                  <h3 className="font-bold text-xl text-blue-600 mt-4">
                    Engr Alien Dev
                  </h3>
                  <p className="text-sm text-gray-400 font-semibold">
                    Tech Specialist & Founder
                  </p>
                  <p className="text-gray-700 text-center mt-2">
                    Dev has over 10 years of experience in recipes management
                    platforms and is passionate about making online platform
                    more accessible and user-friendly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
