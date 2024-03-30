import React from "react";
import { Outlet } from "react-router-dom"; //libary or package
import Navbar from "../components/nav";

const mainlayout = () => {
  return (
    <div>
      <Navbar />
      {/* <Outlet /> */}
      {/* outlet is the rest of the content -- navbar will be comman so navbar then outlet */}
    </div>
  );
};

export default mainlayout;
