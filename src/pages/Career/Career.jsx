import React from "react";
import usePageTitle from "../../utilities/setPageTitle/usePageTitle";

const Career = () => {
  usePageTitle("Career");

  return (
    <div className="w-11/12 mx-auto py-20 flex flex-col items-center text-center">
      {/* Heading */}
      <h1 className="montserrat text-4xl md:text-5xl font-bold text-[#001931] mb-6">
        Join Our Team
      </h1>

      {/* Description */}
      <p className="roboto text-lg md:text-xl text-gray-600 max-w-2xl mb-12">
        We are always looking for talented individuals. Currently, there are no
        open positions, but we encourage you to check back soon.
      </p>

      {/* Illustration / Placeholder */}
      <div className="w-full max-w-md">
        <img
          src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?w=740&t=st=1701600611~exp=1701601211~hmac=4cf59d5e1b63c3e53b6d5b3b88a54d6dc2cf3e56f7ed4f92f1838aa5b6c0a0be"
          alt="No jobs available"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Optional CTA */}
      <p className="roboto text-gray-500 mt-6">
        Keep an eye on this page for future opportunities!
      </p>
    </div>
  );
};

export default Career;
