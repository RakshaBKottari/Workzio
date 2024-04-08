import React from "react";
import Logo from "../../public/favicon.png";
import { Link } from "react-router-dom";

function nav() {
  return (
    <div>
      <nav class="bg-cyan-900">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="flex h-20 items-center justify-between">
            <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* <!-- Logo --> */}
              <a class="flex items-center mr-4" href="/">
                <img class="h-10 w-auto" src={Logo} alt="workzio" />
                <span class="hidden md:block text-amber-300 text-2xl font-bold ml-2">
                  Workzio
                </span>
              </a>
              <div class="md:ml-auto">
                <div class="flex space-x-2">
                  <Link
                    to="/"
                    class="text-amber-300 hover:bg-violet-600 hover:text-amber-300 font-bold rounded-md px-3 py-2"
                  >
                    Home
                  </Link>
                  <Link
                    to="/Jobspage"
                    class="text-amber-300 hover:bg-violet-600 hover:text-amber-300 font-bold rounded-md px-3 py-2"
                  >
                    Jobs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default nav;
