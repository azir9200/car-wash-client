/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your message has sent successful!",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div className=" mx-auto bg-green-300 p-6">
       <Helmet>
              <title>Contact</title>
            </Helmet>
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-lg">We'd love to hear from you!</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2">
          📞 <a href="tel:+1234567890">+1 234 567 890</a>
        </p>
        <p>
          ✉️ <a href="mailto:support@carwash.com">support@carwash.com</a>
        </p>
        <p>📍 123 Car Wash St, Clean City, CA</p>
        {/* Social Media Links */}
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone (optional)
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
