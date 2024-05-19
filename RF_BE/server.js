import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
import cookieParser from "cookie-parser";

import apartmentRouter from "./routes/apartmentRouter.js";
import authRouter from "./routes/authRouter.js";

///
/// Middleware
///
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));

///
/// Routes
///
app.use("/api/v1/apartments", apartmentRouter);
app.use("/api/v1/auth", authRouter);

app.use("*", (res) => {
  res.status(404).json({ msg: "URL Not found" });
});

///
/// Port and MongoDB
///
try {
  const port = process.env.PORT || 1010;
  await mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Server connected to MongoDB successfully!");
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
