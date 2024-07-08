import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
import cookieParser from "cookie-parser";
import path from "path";

import apartmentRouter from "./routes/apartmentRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

///
///
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(morgan("dev"));
app.use(compression());

///
/// Routes
///
app.use("/api/v1/apartments", apartmentRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/RF_FE/dist")));

app.use("*", (req, res) => {
  res.sendFile(path).join(__dirname, "/RF_FE/dist", "index.html");
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
