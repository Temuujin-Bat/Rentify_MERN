import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    require: true,
  },
  lastName: {
    type: String,
    trim: true,
    require: true,
  },
  email: {
    type: String,
    require: [true, "Email is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    require: [true, "Password is required"],
  },
  phone: {
    type: String,
  },
  birthday: {
    type: Date,
    required: false,
  },
  resetCode: {
    type: String,
  },
  resetCodeExpires: {
    type: Date,
  },
});

export default mongoose.model("User", userSchema);
