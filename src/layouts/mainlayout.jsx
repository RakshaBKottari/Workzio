import React from "react";
//libary or package
// import { Outlet } from "react-router-dom";
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
