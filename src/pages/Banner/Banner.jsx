import React, { useEffect, useState } from "react";

const Banner = ({ data }) => {
  const bannerSliderImages = data.slice(4, 7);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full h-100 overflow-hidden font-sans text-gray-900">
      {bannerSliderImages.length === 0 ? (
        <div className="flex items-center justify-center h-full bg-gray-800 text-white text-xl">
          No banner data available
        </div>
      ) : (
        bannerSliderImages.map((game, index) => (
          <div
            key={game.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center p-4">
              <h2 className="montserrat text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                {game.title}
              </h2>
              {game.category && (
                <p className="roboto mt-2 text-lg text-gray-200">
                  {game.category}
                </p>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Banner;
