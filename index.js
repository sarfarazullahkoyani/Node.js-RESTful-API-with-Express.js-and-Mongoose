const express = require("express");
const { logReqRes } = require("./middlewares/index");
const userRouter = require("./routes/user");
const app = express();
const { connectMongoDb } = require("./connection");
const PORT = 8000;

// Middleware to parse data from the url
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

//mongodb connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(() => {
  console.log("Mongodb connected!");
});
// routers
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
