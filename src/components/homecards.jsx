import React from "react";
import Card from "./card";

function homecards() {
  return (
    <div>
      <section class="py-4">
        <div class="container-xl lg:container m-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-40 rounded-lg">
            <Card bg="bg-cyan-100">
              <h2 class="text-2xl font-bold">For Developers</h2>
              <p className="mt-2 mb-4">
                Calling all developers! Explore exciting job opportunities
                tailored just for you. Click the 'Browse Jobs' button below to
                discover roles that match your skills and interests. Start your
                next career adventure today!
              </p>
              <a
                href="/jobs.html"
                class="inline-block bg-cyan-900 text-white rounded-lg px-4 py-2 hover:bg-gray-600"
              >
                Browse Jobs
              </a>
            </Card>
            <Card bg="bg-cyan-100">
              <h2 class="text-2xl font-bold">For Employers</h2>
              <p class="mt-2 mb-4">
                Attract top talent for your team! Post job openings and connect
                with skilled professionals eager to join your company. Click the
                'Post a Job' button below to get started and find the perfect
                fit for your organization.
              </p>
              <a
                href="/add-job.html"
                class="inline-block bg-cyan-900 text-white rounded-lg px-4 py-2 hover:bg-gray-600"
              >
                Add Job
              </a>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default homecards;
