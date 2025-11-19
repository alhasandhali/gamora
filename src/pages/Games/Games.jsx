import React, { Suspense } from "react";
import { Link } from "react-router";
import Game from "../Game/Game";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import { animated, useSpring } from "@react-spring/web";

const Games = ({ data }) => {
  const sortedData = data
    .slice()
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings));

  const topThree = sortedData.slice(0, 3);

  const springs = useSpring({
    from: { x: -100 },
    to: { x: 0 },
  });

  return (
    <animated.div style={{ ...springs }} className="py-20">
      <div className="w-11/12 m-auto">
        <div className="mb-10 text-center">
          <h2 className="inter font-bold text-5xl text-[#001931] mb-4">
            Popular Games
          </h2>
          <p className="inter font-normal text-xl text-[#627382]">
            Explore All Trending Games on the Market
          </p>
        </div>
        <Suspense fallback={<CustomLoader></CustomLoader>}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topThree.map((game) => (
              <Game key={game.id} game={game} />
            ))}
          </div>
        </Suspense>
        <div className="flex justify-center mt-10">
          <Link
            to="/all-games"
            className="btn inter font-semibold text-[16px] text-white bg-linear-to-r from-indigo-500 to-purple-500"
          >
            Show All
          </Link>
        </div>
      </div>
    </animated.div>
  );
};

export default Games;
