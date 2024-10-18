"use client";
import { useState } from "react";

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
    // Handle form submission logic here (e.g., sending data to backend)
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full py-10 px-6 bg-base-100 text-base-content">
      <div className="container mx-auto max-w-xl">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-lg text-center mb-6">
          Have questions or need support? We'd love to hear from you! Fill out
          the form below, and we’ll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary-focus transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
