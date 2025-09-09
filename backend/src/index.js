const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const { PORT, MONGODB_URI, CORS_ORIGIN } = require("./config");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: CORS_ORIGIN.split(",") }));

// Routes
app.use("/api", require("./routes/health"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/projects", require("./routes/projects"));
app.use("/api", require("./routes/search"));

// Global error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "server_error", message: err.message });
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`API listening on :${PORT}`));
  })
  .catch((e) => {
    console.error("MongoDB connect error", e);
    process.exit(1);
  });
