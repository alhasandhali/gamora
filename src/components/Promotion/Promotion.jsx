import React from "react";

const Promotion = () => {
  return (
    <div className="w-11/12 mx-auto py-20 bg-linear-to-r from-indigo-500 to-purple-500 rounded-xl relative overflow-hidden">
      <div className="text-center text-white relative z-10">
        <h2 className="montserrat text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Special Promotion!
        </h2>
        <p className="roboto text-lg md:text-xl mb-6">
          Get exclusive early access to the hottest games this month.
        </p>
        <button className="btn inter font-semibold text-[16px] bg-white text-gray-900 px-6 py-3 rounded hover:scale-105 transition-transform duration-300">
          Explore Now
        </button>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse"></div>
    </div>
  );
};

export default Promotion;
