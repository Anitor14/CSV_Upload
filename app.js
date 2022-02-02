const express = require("express");
const app = express();
// const upload

// product router
const uploadsRouter = require("./routes/uploadRoutes");

const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>File Upload Starter</h1>");
});

app.use("/api/v1/products", uploadsRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);

PORT = process.env.PORT || 5000;

const start = async (url) => {
  try {
    app.listen(PORT, () => {
      console.log(`this server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
