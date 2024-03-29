const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("src/jobs.json"); // Adjust the path to your jobs.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 8000; // Use the port specified by Vercel or default to 8000

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
