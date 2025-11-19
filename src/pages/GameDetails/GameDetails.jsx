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
    <div className="w-11/12 mx-auto py-10">
      <img
        src={coverPhoto}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
        <div className="flex-1 text-center md:text-left">
          <div className="my-5">
            <h1 className="montserrat font-bold text-2xl sm:text-3xl">
              {title}
            </h1>
            <h3 className="ml-3 mt-1 montserrat font-normal text-lg sm:text-xl text-[#001931]">
              Developed by{" "}
              <span className="font-semibold bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {developer}
              </span>
            </h3>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-7">
            <div className="badge flex items-center gap-1 bg-linear-to-r from-indigo-500 to-purple-500 text-white py-4 rounded-full">
              <p className="montserrat">Category</p>
              <h2 className="montserrat font-semibold ml-2 uppercase">
                {category}
              </h2>
            </div>
            <div className="badge flex items-center gap-1 bg-linear-to-r from-indigo-500 to-purple-500 text-white py-4 rounded-full">
              <p className="montserrat">Ratings</p>
              <h2 className="montserrat font-semibold ml-2">{item.ratings}</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="montserrat font-semibold text-2xl sm:text-3xl mb-1">
          Description
        </h3>
        <p className="ml-3 roboto font-normal text-base sm:text-lg md:text-xl text-justify text-gray-600">
          {description}
        </p>
      </div>
      <div className="flex justify-center mt-10">
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
