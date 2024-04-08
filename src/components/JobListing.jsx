import React from "react";
import { useState, useEffect } from "react";
import JobListing from "./JobListings";
import { Link } from "react-router-dom";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? "https://fakejobs-api.vercel.app/jobs?_limit=3"
        : "https://fakejobs-api.vercel.app/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-amber-300 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-cyan-900 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
        <section class="m-auto max-w-lg my-10 px-6">
          <Link
            to="/Jobspage"
            class="block bg-cyan-800 text-yellow-200 font-bold text-center py-4 px-6 rounded-xl hover:bg-gray-700"
          >
            View All Jobs
          </Link>
        </section>
      </div>
    </section>
  );
};
export default JobListings;
