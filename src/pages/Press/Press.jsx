import React from "react";
import usePageTitle from "../../utilities/setPageTitle/usePageTitle";

const Press = () => {
  usePageTitle("Press");

  return (
    <div className="w-11/12 mx-auto py-20 flex flex-col items-center text-center">
      {/* Heading */}
      <h1 className="montserrat text-4xl md:text-5xl font-bold text-[#001931] mb-6">
        Press & Media
      </h1>

      {/* Description */}
      <p className="roboto text-lg md:text-xl text-gray-600 max-w-2xl mb-12">
        We are building our media presence. Currently, there are no press
        releases available. Check back soon for updates and announcements.
      </p>

      {/* Illustration / Placeholder */}
      <div className="w-full max-w-md">
        <img
          src="https://img.freepik.com/free-vector/under-construction-concept-illustration_114360-1039.jpg?w=740&t=st=1701601022~exp=1701601622~hmac=ddffefc5b57b1e9a8353b167b5e9b5f093b4d91a7e2c7bcfc9c152f253ae8c19"
          alt="No press available"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Optional CTA */}
      <p className="roboto text-gray-500 mt-6">
        Follow us on social media for the latest news and announcements!
      </p>
    </div>
  );
};

export default Press;
