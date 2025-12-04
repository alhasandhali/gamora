import React from "react";

const Offer = () => {
  return (
    <div className="w-11/12 mx-auto py-20">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold montserrat capitalize tracking-widest mb-4 bg-linear-to-br from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Today's Offers
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Offer 1 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
          <h3 className="montserrat text-2xl md:text-3xl font-bold text-[#001931] mb-2">
            New Release
          </h3>
          <p className="roboto text-gray-600 mb-4">
            Get early access to the latest trending games
          </p>
          <span className="bg-linear-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold">
            20% OFF
          </span>
        </div>

        {/* Offer 2 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
          <h3 className="montserrat text-2xl md:text-3xl font-bold text-[#001931] mb-2">
            Bundle Deal
          </h3>
          <p className="roboto text-gray-600 mb-4">
            Buy 2 games and get 1 free for a limited time
          </p>
          <span className="bg-linear-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold">
            30% OFF
          </span>
        </div>

        {/* Offer 3 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
          <h3 className="montserrat text-2xl md:text-3xl font-bold text-[#001931] mb-2">
            Weekly Special
          </h3>
          <p className="roboto text-gray-600 mb-4">
            Limited-time offers for selected top-rated titles
          </p>
          <span className="bg-linear-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold">
            15% OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default Offer;
