const mongoose = require("mongoose");

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
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  birthday: {
    type: Date,
    required: false,
  },
  photo: {
    type: String,
    trim: true,
  },
});

export default mongoose.model("User", userSchema);
