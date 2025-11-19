import React, { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Gamora`;
  }, [title]);
};

export default usePageTitle;
