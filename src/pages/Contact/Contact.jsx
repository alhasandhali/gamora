import React, { useRef, useState } from "react";
import usePageTitle from "../../utilities/setPageTitle/usePageTitle";
import emailjs from "@emailjs/browser";

const Contact = () => {
  usePageTitle("Contact");

  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          setStatus("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="w-11/12 m-auto py-20 font-sans text-gray-900">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold montserrat uppercase tracking-widest mb-4 bg-linear-to-br from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="inter text-lg text-[#627382] max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you! Fill out the
          form below and we'll get back to you as soon as we can.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-lg">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block roboto font-medium mb-2">Your Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full border border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block roboto font-medium mb-2">Your Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full border border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block roboto font-medium mb-2">Message</label>
            <textarea
              name="message"
              className="w-full border border-gray-300 p-3 rounded outline-none min-h-[150px] focus:ring-2 focus:ring-indigo-500"
              placeholder="Type your message here..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 rounded cursor-pointer"
          >
            Send Message
          </button>

          {status && (
            <p
              className={`mt-4 text-center ${
                status.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
