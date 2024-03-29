// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db/db.json");

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
    "/jobs/": "/", // Rewrites routes to prefix with /jobs
  })
);
server.use(router);
// Listen to port
const PORT = process.env.PORT || 3000; // Use environment port if available
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`); //nn
});
