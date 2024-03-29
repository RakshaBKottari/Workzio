import React from "react";
// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Main from "./layouts/mainlayout";
import Jobspage from "./pages/Jobspage";
import Jobpage, { jobLoader } from "./pages/Jobpage";
import Edit from "./pages/Edit";

import Notfound from "./pages/notfound";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Main />}>
//       <Route index element={<Homepage />} />
//     </Route>
//   )
// );

const App = () => {
  const deleteJob = async (id) => {
    const res = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  const updatedJob = async (updatedJobData) => {
    const { id } = updatedJobData;
    try {
      const res = await fetch(`http://localhost:8000/jobs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedJobData),
      });

      if (!res.ok) {
        throw new Error("Failed to update job");
      }

      // Optionally, you can handle the response data here if needed

      return res.json(); // Return the response JSON data if needed
    } catch (error) {
      console.error("Error updating job:", error.message);
      throw error; // Rethrow the error to handle it in the calling function if needed
    }
  };

  return (
    <>
      <Router>
        <Main />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Jobspage" element={<Jobspage />} />

          <Route
            path="/jobs/:id"
            element={<Jobpage deleteJob={deleteJob} />}
            loader={jobLoader}
          />
          <Route
            path="/edit/:id"
            element={<Edit updateJobSubmit={updatedJob} />}
            loader={jobLoader}
          />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
