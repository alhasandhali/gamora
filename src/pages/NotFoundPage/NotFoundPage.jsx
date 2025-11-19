import { Link } from "react-router";
import usePageTitle from "../../utilities/setPageTitle/usePageTitle";

const NotFoundPage = () => {
  usePageTitle("404 Page Not Found");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <div className="mt-10 mb-5">
        <svg
          className="w-64 h-64 mx-auto animate-pulse"
          fill="none"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            d="M20 24 L44 40 M44 24 L20 40"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="text-center max-w-xl">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-gradient bg-clip-text text-transparent bg-linear-to-r from-purple-500 via-pink-500 to-red-500">
          404
        </h1>
        <p className="mt-4 text-xl sm:text-2xl font-semibold">
          Oops! The game you're looking for can't be found.
        </p>
        <p className="mt-2 text-gray-400">
          It seems like this page has disappeared into the void. Maybe a new
          adventure awaits elsewhere.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg font-semibold shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
