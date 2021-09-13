const express = require("express");
const cors = require("cors");

const heroRouter = require("./routes/heroRotes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/hero", heroRouter);

app.use((req, res, next) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Use correct api",
    data: "Not Found",
  });
});

app.use((err, req, res, next) => {
  err.status = err.status ? err.status : 500;
  res.status(err.status).json({
    status: err.status === 500 ? "fail" : "error",
    code: err.status,
    message: err.message,
    data: err.status === 500 ? "Internal Server Error" : err.data,
  });
});

module.exports = app;
