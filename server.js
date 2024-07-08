const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config();
const app = express();

const apartmentRouter = require("./routes/apartmentRouter");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");

app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://rentify-33b0efbb01f2.herokuapp.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(morgan("combined"));

app.use("/api/v1/apartments", apartmentRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

app.use(express.static(path.join(__dirname, "/RF_FE/dist")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/RF_FE/dist", "index.html"));
});

const port = process.env.PORT || 1010;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Server connected to MongoDB successfully!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });
