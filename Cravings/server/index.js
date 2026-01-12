import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routers/authRouter.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  console.log("Server is Working");
});

app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "Internal server error";
  const statusCode = err.StatusCode || 500;

  res.status(statusCode).json({ message: ErrorMessage });
});

const port = process.env.PORT || 500;
app.listen(port, () => {
  console.log("Server Started at Port", port);
  connectDB();
});
