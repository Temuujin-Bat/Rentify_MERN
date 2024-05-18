import mongoose from "mongoose";

const apartmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    price: { type: Number, required: true },
    apartment: {
      description: { type: String, required: true },
      floor: { type: Number, required: true },
      size: { type: Number, required: true },
      rooms: { type: Number, required: true },
    },
    address: {
      city: { type: String, required: true },
      street: { type: String, required: true },
      buildingNumber: { type: Number, required: true },
      zipCode: { type: Number, required: true },
    },
    tags: {
      elevator: Boolean,
      parkingLot: Boolean,
      airConditioning: Boolean,
      balcony: Boolean,
      accessibleToDisabled: Boolean,
      equipped: Boolean,
      petFriendly: Boolean,
      storage: Boolean,
    },
    planType: {
      type: String,
      enum: ["regular", "silver", "golden"],
      default: "regular",
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Apartment", apartmentSchema);
