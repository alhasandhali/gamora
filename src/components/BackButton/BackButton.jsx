import React from "react";
import { useNavigate } from "react-router";

const BackButton = ({ textColor = "text-gray-900" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`${textColor} flex items-center gap-2 bg-transparent hover:bg-transparent font-semibold px-4 py-2 rounded transition-colors duration-300 cursor-pointer`}
    >
      <span className="text-xl">←</span>
      Back
    </button>
  );
};

export default BackButton;
