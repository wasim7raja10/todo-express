// import all the necessary packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// we are using port 8000
const port = process.env.PORT || 8000;

// we will create these todoRoutes in the future
import router from "./routes/todo.js";
import dbConnect from "./db/conn.js";

const app = express();

// DB connection
dbConnect();

// middleware for cors to allow cross origin resource sharing
app.use(cors());
// middleware to convert our request data into JSON format
app.use(express.json());

// include the todoRoutes
app.use("/api", router);

// start the server in the port 8000
app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
