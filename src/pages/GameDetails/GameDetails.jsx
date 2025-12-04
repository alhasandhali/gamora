import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import usePageTitle from "../../utilities/setPageTitle/usePageTitle";

const GameDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const gameId = parseInt(id);
  const item = data.find((game) => game.id === gameId);
  const { coverPhoto, title, developer, category, description, downloadLink } =
    item;
  usePageTitle(title);
  return (
    <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <img
        src={coverPhoto}
        alt={title}
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
      <div className="flex flex-col justify-center gap-8">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold montserrat uppercase tracking-widest mb-4 bg-linear-to-br from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            {title}
          </h1>

          <h3 className="mt-1 montserrat font-normal text-lg sm:text-xl text-[#001931]">
            Developed by{" "}
            <span className="font-semibold bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              {developer}
            </span>
          </h3>
        </div>
        <div>
          <h3 className="montserrat font-semibold text-2xl mb-2">
            Description
          </h3>
          <p className="roboto font-normal text-base sm:text-lg md:text-xl text-justify text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-3">
          <div className="badge flex items-center gap-2 bg-linear-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full">
            <p className="montserrat">Category:</p>
            <h2 className="montserrat font-semibold uppercase">{category}</h2>
          </div>

          <div className="badge flex items-center gap-2 bg-linear-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full">
            <p className="montserrat">Ratings:</p>
            <h2 className="montserrat font-semibold">{item.ratings}</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3 col-span-1 md:col-span-2">
        <Link
          target="_blank"
          to={downloadLink}
          className="btn inter font-semibold text-[16px] text-white bg-linear-to-r from-indigo-500 to-purple-500"
        >
          Download
        </Link>
      </div>
    </div>
  );
};

export default GameDetails;
