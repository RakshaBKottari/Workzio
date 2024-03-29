const http = require("http");
const fs = require("fs");
const url = require("url");

// Function to read jobs data from the JSON file
function readJobsData() {
  const jobsData = fs.readFileSync("jobs.json", "utf8");
  return JSON.parse(jobsData).jobs;
}

// Function to write jobs data to the JSON file
function writeJobsData(jobs) {
  fs.writeFileSync("jobs.json", JSON.stringify({ jobs }, null, 2));
}

const server = http.createServer((req, res) => {
  // Set CORS headers to allow access from any origin
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");

  // Parse the request URL
  const { method, url: reqUrl } = req;
  const parsedUrl = url.parse(reqUrl, true);

  // If the request method is OPTIONS, return immediately
  if (method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  // Check the request method and handle accordingly
  switch (method) {
    case "GET":
      // GET request to /jobs or with query parameters
      if (parsedUrl.pathname === "/jobs") {
        const jobs = readJobsData();
        const limit = parsedUrl.query._limit || jobs.length; // Default limit is all jobs
        const limitedJobs = jobs.slice(0, limit);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(limitedJobs));
      } else {
        res.writeHead(404);
        res.end("404 Not Found");
      }
      break;
    case "POST":
      // POST request to /jobs to add a new job
      if (parsedUrl.pathname === "/jobs") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", () => {
          const newJob = JSON.parse(body);
          const jobs = readJobsData();
          jobs.push(newJob);
          writeJobsData(jobs);
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify(newJob));
        });
      } else {
        res.writeHead(404);
        res.end("404 Not Found");
      }
      break;
    case "PUT":
      // PUT request to /jobs/:id to update a job
      if (parsedUrl.pathname.startsWith("/jobs/")) {
        const jobId = parsedUrl.pathname.split("/")[2];
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", () => {
          const updatedJob = JSON.parse(body);
          const jobs = readJobsData();
          const index = jobs.findIndex((job) => job.id === jobId);
          if (index !== -1) {
            jobs[index] = { ...jobs[index], ...updatedJob };
            writeJobsData(jobs);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(jobs[index]));
          } else {
            res.writeHead(404);
            res.end("404 Not Found");
          }
        });
      } else {
        res.writeHead(404);
        res.end("404 Not Found");
      }
      break;
    case "DELETE":
      // DELETE request to /jobs/:id to delete a job
      if (parsedUrl.pathname.startsWith("/jobs/")) {
        const jobId = parsedUrl.pathname.split("/")[2];
        const jobs = readJobsData();
        const index = jobs.findIndex((job) => job.id === jobId);
        if (index !== -1) {
          const deletedJob = jobs.splice(index, 1)[0];
          writeJobsData(jobs);
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(deletedJob));
        } else {
          res.writeHead(404);
          res.end("404 Not Found");
        }
      } else {
        res.writeHead(404);
        res.end("404 Not Found");
      }
      break;
    default:
      res.writeHead(405);
      res.end("Method Not Allowed");
  }
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
