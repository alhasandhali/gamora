import React from "react";
import { useLoaderData } from "react-router";
import usePageTitle from "../../utilities/setPageTitle/usePageTitle";
import Newsletter from "../../components/Newsletter/Newsletter";
import Offer from "../../components/Offer/Offer";
import Promotion from "../../components/Promotion/Promotion";
import Banner from "../../components/Banner/Banner";
import Games from "../../components/Games/Games";

const Home = () => {
  usePageTitle("Home");
  const data = useLoaderData();
  return (
    <div>
      <Banner data={data}></Banner>
      <Games data={data}></Games>
      <Promotion></Promotion>
      <Offer></Offer>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
