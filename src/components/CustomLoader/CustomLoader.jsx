import React, { useState, useEffect } from "react";

const CustomLoader = () => {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev === 3 ? 1 : prev + 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row justify-center items-center py-20">
      <p className="montserrat font-extrabold font-stretch-50% text-3xl bg-linear-to-br from-indigo-500 to-purple-500 bg-clip-text text-transparent uppercase tracking-widest sm:text-xl md:text-2xl lg:text-3xl">
        Loading{" ".repeat(dots)}
        {". ".repeat(dots).trim()}
      </p>
    </div>
  );
};

export default CustomLoader;
