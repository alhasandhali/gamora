import React from "react";
import { useLoaderData } from "react-router";
import usePageTitle from "../../utilities/setPageTitle/usePageTitle";
import Banner from "../Banner/Banner";
import Newsletter from "../Newsletter/Newsletter";
import Games from "../Games/Games";

const Home = () => {
  usePageTitle("Home");
  const data = useLoaderData();
  return (
    <div>
      <Banner data={data}></Banner>
      <Games data={data}></Games>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
