import React, { Suspense } from "react";
import usePageTitle from "../../utilities/setPageTitle/usePageTitle";
import { useLoaderData } from "react-router";
import Game from "../../components/Game/Game";
import CustomLoader from "../../components/CustomLoader/CustomLoader";

const AllGames = () => {
  usePageTitle("All Games");
  const data = useLoaderData();
  return (
    <div className="w-11/12 m-auto py80">
      <div className="py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold montserrat uppercase tracking-widest mb-4 bg-linear-to-br from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          All Games
        </h1>
        <p className="inter text-xl font-normal text-[#627382]">
          Where Gamers Unite and Play. Install and Level Up Your Gaming World
        </p>
      </div>
      <Suspense fallback={<CustomLoader></CustomLoader>}>
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
