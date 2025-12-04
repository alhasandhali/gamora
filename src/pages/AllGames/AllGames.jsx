import React, { Suspense, useState, useMemo } from "react";
import usePageTitle from "../../utilities/setPageTitle/usePageTitle";
import { useLoaderData } from "react-router";
import Game from "../../components/Game/Game";
import CustomLoader from "../../components/CustomLoader/CustomLoader";

const AllGames = () => {
  usePageTitle("All Games");

  const data = useLoaderData();

  const [sortType, setSortType] = useState("title-asc");
  const [filterText, setFilterText] = useState("");

  const filteredAndSortedGames = useMemo(() => {
    let filtered = data.filter((game) =>
      game.title.toLowerCase().includes(filterText.toLowerCase())
    );

    switch (sortType) {
      case "title-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "title-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;

      case "rating-high":
        filtered.sort((a, b) => b.ratings - a.ratings);
        break;

      case "rating-low":
        filtered.sort((a, b) => a.ratings - b.ratings);
        break;

      default:
        break;
    }

    return filtered;
  }, [data, sortType, filterText]);

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
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search games..."
          className="w-full md:w-2/4 border border-gray-300 p-3 rounded-xl outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <select
          className="w-full md:w-2/4 border border-gray-300 p-3 rounded-xl outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="title-asc">Title: A → Z</option>
          <option value="title-desc">Title: Z → A</option>
          <option value="rating-high">Rating: High → Low</option>
          <option value="rating-low">Rating: Low → High</option>
        </select>
      </div>
      <Suspense fallback={<CustomLoader />}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredAndSortedGames.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default AllGames;
