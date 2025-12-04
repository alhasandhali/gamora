import React from "react";
import { Link } from "react-router";

const Game = ({ game }) => {
  return (
    <div
      className="card bg-base-100 w-full p-3 shadow-md 
      flex flex-col justify-between 
      transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
    >
      <figure className="w-full h-36 sm:h-44 md:h-52 lg:h-56 overflow-hidden rounded-t-2xl bg-gray-100 flex items-center justify-center">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex-1 mt-4">
        <h2 className="inter font-medium text-lg sm:text-xl text-[#001931] text-center sm:text-left truncate">
          {game.title}
        </h2>

        <div className="card-actions flex flex-wrap justify-center sm:justify-between gap-2 mt-3">
          <div className="badge flex items-center gap-1 bg-[#F1F5E8] inter font-medium text-sm sm:text-[16px] text-[#00D390]">
            {game.category}
          </div>

          <div className="badge flex items-center gap-1 bg-[#FFF0E1] inter font-medium text-sm sm:text-[16px] text-[#FF8811]">
            {game.ratings}
          </div>
        </div>
      </div>
      <Link
        to={`/game-details/${game.id}`}
        className="btn inter font-semibold text-[16px] text-white mt-6 bg-linear-to-r from-indigo-500 to-purple-500 hover:opacity-85 transition-all duration-300 w-full"
      >
        See More
      </Link>
    </div>
  );
};

export default Game;
