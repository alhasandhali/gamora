import React from "react";
import { Link } from "react-router";

const Game = ({ game }) => {
  return (
    <Link to={`/game-details/${game.id}`}>
      <div className="card bg-base-100 w-full h-72 md:h-96 shadow-sm border-2 border-gray-200 p-3 transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
        <figure className="flex justify-center">
          <img
            className="h-full sm:h-56 md:h-64 object-contain"
            src={game.coverPhoto}
            alt={game.title}
          />
        </figure>

        <div>
          <h2 className="my-3 sm:my-4 inter font-medium text-lg sm:text-xl text-[#001931] text-center sm:text-left">
            {game.title}
          </h2>

          <div className="card-actions flex flex-wrap justify-center sm:justify-between gap-2">
            <div className="badge flex items-center gap-1 bg-[#F1F5E8] inter font-medium text-sm sm:text-[16px] text-[#00D390]">
              {game.category}
            </div>

            <div className="badge flex items-center gap-1 bg-[#FFF0E1] inter font-medium text-sm sm:text-[16px] text-[#FF8811]">
              {game.ratings}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Game;
