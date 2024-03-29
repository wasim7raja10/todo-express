// import all the necessary packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();

import router from "./routes/todo.js";
import dbConnect from "./utils/connect.js";

// we are using port 8000
const port = process.env.PORT || 8000;

const app = express();

// middleware for cors to allow cross origin resource sharing
app.use(cors());
// middleware for logging
app.use(morgan("dev"));
// middleware to convert our request data into JSON format
app.use(express.json());

// include the todoRoutes
app.use("/api", router);

// start the server in the port 8000
app.listen(port, async () => {
  console.log(`Listening to http://localhost:${port}`);
  // DB connection
  await dbConnect();
});
