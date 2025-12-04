import React from "react";

const Newsletter = () => {
  return (
    <div className="w-11/12 mx-auto py-20 bg-linear-to-r from-indigo-500 to-purple-500 rounded-xl relative overflow-hidden">
      <div className="w-11/12 m-auto text-white text-center">
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
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse"></div>
    </div>
  );
};

export default Newsletter;
