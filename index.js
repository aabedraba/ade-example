const express = require("express");

const server = express();

server.get("/", (req, res) => {
  return res.json({
    agent: req.headers["user-agent"],
  });
});

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log("Listening on http://localhost:" + PerformanceNavigationTiming);
});
