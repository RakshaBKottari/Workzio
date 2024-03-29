import React from "react";
import Hero from "../components/hero";
import Homecards from "../components/homecards";
import JobListing from "../components/JobListing";
import ViewAll from "../components/viewall";

const Homepage = () => {
  return (
    <div>
      <Hero title="Frontend Developer" subtitle="Computer science engineer" />
      <Homecards />
      <JobListing isHome={true} />
      <ViewAll />
    </div>
  );
};

export default Homepage;
