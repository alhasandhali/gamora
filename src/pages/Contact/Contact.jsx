import React, { useRef, useState, useEffect } from "react";

const emailjs = {
  sendForm: async (serviceId, templateId, formRef, publicKey) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          !serviceId ||
          !templateId ||
          !publicKey ||
          formRef
            .querySelector('input[name="user_email"]')
            .value.includes("error")
        ) {
          reject(new Error("Simulated EmailJS error or missing keys."));
        } else {
          resolve({ text: "OK" });
        }
      }, 1500);
    });
  },
};

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const VITE_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const VITE_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const VITE_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const App = () => {
  usePageTitle("Contact");

  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        VITE_SERVICE_ID,
        VITE_TEMPLATE_ID,
        form.current,
        VITE_PUBLIC_KEY
      );

      console.log("EmailJS Result:", result.text);
      setStatus("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6 sm:p-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif uppercase tracking-widest mb-4 text-transparent bg-clip-text bg-linear-to-br from-indigo-600 to-purple-600">
            Contact Us
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Have questions or feedback? We'd love to hear from you! Fill out the
            form below.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label
              htmlFor="user_name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Your Name
            </label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="user_email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Your Email
            </label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-300 p-3 rounded-xl outline-none min-h-[150px] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150"
              placeholder="Type your message here..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-bold py-3 px-4 rounded-xl shadow-lg transition duration-300 ease-in-out ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            }`}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white inline mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Send Message"
            )}
          </button>

          {status && (
            <div
              role="alert"
              className={`mt-4 text-center p-3 rounded-xl font-medium ${
                status.includes("successfully")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default App;
