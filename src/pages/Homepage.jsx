import React from "react";
import Hero from "../components/hero";
import Homecards from "../components/homecards";
import JobListing from "../components/JobListing";
import Footer from "../components/footer";

const Homepage = () => {
  return (
    <div>
      <Hero
        title="Simplifying Job Search"
        subtitle="Workzio streamlines job searching with its intuitive platform. Users easily find tailored job opportunities and apply seamlessly, connecting with their ideal careers."
      />
      <Homecards />
      <JobListing isHome={true} />
      <Footer />
    </div>
  );
};

export default Homepage;
