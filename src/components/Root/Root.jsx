import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CustomLoader from "../CustomLoader/CustomLoader";
import { Outlet, useNavigate } from "react-router";
import AnimatedBox from "../../pages/AnimatedBox/AnimatedBox";

const Root = () => {
  const navigation = useNavigate();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeout;

    if (navigation.state === "loading") {
      setShowLoader(true);
    } else if (navigation.state === "idle" && showLoader) {
      timeout = setTimeout(() => setShowLoader(false), 100);
    }

    return () => clearTimeout(timeout);
  }, [navigation.state]);

  return (
    <div>
      <AnimatedBox></AnimatedBox>
      <Navbar></Navbar>
      {showLoader ? <CustomLoader /> : <Outlet />}
      <Footer></Footer>
    </div>
  );
};

export default Root;
