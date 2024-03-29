const jsonServer = require("json-server");
const path = require("path");
const fs = require("fs");

const dataFile = path.join(__dirname, "jobs.json");
const data = JSON.parse(fs.readFileSync(dataFile, "utf8"));

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom routes
server.get("/jobs", (req, res) => {
  const limit = req.query._limit || data.jobs.length;
  const limitedJobs = data.jobs.slice(0, limit);
  res.json(limitedJobs);
});

server.post("/jobs", (req, res) => {
  const newJob = req.body;
  data.jobs.push(newJob);
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
  res.status(201).json(newJob);
});

server.put("/jobs/:id", (req, res) => {
  const jobId = parseInt(req.params.id);
  const updatedJob = req.body;
  const index = data.jobs.findIndex((job) => job.id === jobId);
  if (index !== -1) {
    data.jobs[index] = { ...data.jobs[index], ...updatedJob };
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    res.json(data.jobs[index]);
  } else {
    res.status(404).json({ error: "Job not found" });
  }
});

server.delete("/jobs/:id", (req, res) => {
  const jobId = parseInt(req.params.id);
  const index = data.jobs.findIndex((job) => job.id === jobId);
  if (index !== -1) {
    const deletedJob = data.jobs.splice(index, 1)[0];
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    res.json(deletedJob);
  } else {
    res.status(404).json({ error: "Job not found" });
  }
});

module.exports = server;
