const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  console.error("ALERT TEST: backend-api error simulation");
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

