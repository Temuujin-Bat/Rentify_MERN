import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();

import apartmentRouter from "./routes/apartmentRouter.js";

///
/// Middleware
///
app.use(express.json());

///
/// Routes
///
app.use("/api/v1/apartments", apartmentRouter);

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
