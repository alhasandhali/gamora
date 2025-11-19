import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-linear-to-br from-indigo-500 to-purple-500">
      <div className="w-11/12 m-auto py-16 text-white text-center">
        <h2 className="montserrat text-3xl font-bold mb-4">Stay Updated!</h2>
        <p className="roboto mb-6">
          Subscribe to Gamora's newsletter for the latest games and news.
        </p>
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 border-2 border-white rounded-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded text-white flex-1 placeholder:text-white outline-none"
          />
          <button
            type="submit"
            className="bg-white text-gray-900 font-semibold p-3 cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
