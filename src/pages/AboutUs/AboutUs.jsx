import React from "react";
import usePageTitle from "../../utilities/setPageTitle/usePageTitle";

const AboutUs = () => {
  usePageTitle("About");
  return (
    <div>
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold montserrat uppercase tracking-widest mb-4 bg-linear-to-br from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="montserrat text-lg md:text-xl">
            Gamora is your ultimate gaming hub. Discover countless games,
            explore their details and install them effortlessly. Whether you’re
            a casual player or a hardcore gamer, Gamora brings all your favorite
            games together in one place.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 text-center">
          <div className="bg-linear-to-br from-indigo-500 to-purple-500 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h2 className="montserrat text-white text-2xl font-bold mb-2">
              Explore Games
            </h2>
            <p className="roboto text-gray-300">
              Browse an extensive library of games from various genres to find
              your next adventure.
            </p>
          </div>
          <div className="bg-linear-to-br from-indigo-500 to-purple-500 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h2 className="montserrat text-white text-2xl font-bold mb-2">
              Game Details
            </h2>
            <p className="roboto text-gray-300">
              Access detailed information about each game including ratings,
              reviews and requirements.
            </p>
          </div>
          <div className="bg-linear-to-br from-indigo-500 to-purple-500 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h2 className="montserrat text-white text-2xl font-bold mb-2">
              Easy Install
            </h2>
            <p className="roboto text-gray-300">
              Install your favorite games quickly with our simple and
              hassle-free installation process.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
