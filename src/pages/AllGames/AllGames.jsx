import React, { Suspense } from "react";
import usePageTitle from "../../utilities/setPageTitle/usePageTitle";
import { useLoaderData } from "react-router";
import Game from "../Game/Game";

const AllGames = () => {
  usePageTitle("All Games");
  const data = useLoaderData();
  return (
    <div className="w-11/12 m-auto py-10">
      <div className="py-10 text-center">
        <h1 className="inter text-5xl font-bold mb-4 text-[#001931]">
          All Games
        </h1>
        <p className="inter text-xl font-normal text-[#627382]">
          Where Gamers Unite and Play. Install and Level Up Your Gaming World
        </p>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default AllGames;
