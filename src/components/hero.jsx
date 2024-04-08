import React from "react";
import Job from "/jobs.png";

const hero = ({ title, subtitle }) => {
  return (
    <div>
      <section className="bg-cyan-700 py-20 mb-4">
        <div className="flex flex-row items-center justify-center h-full flex-wrap mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl px-5">
              {title}
            </h1>
            <p className="max-w-xl my-4 text-xl text-white px-5">{subtitle}</p>
          </div>

          <div className="mx-auto">
            <img src={Job} alt="job" className="w-80" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default hero;
