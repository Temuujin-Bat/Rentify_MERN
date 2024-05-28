import mongoose from "mongoose";

const apartmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    price: { type: String, required: true },
    apartment: {
      description: { type: String, required: true },
      floor: { type: String, required: true },
      size: { type: String, required: true },
      rooms: { type: String, required: true },
    },
    address: {
      city: { type: String, required: true },
      street: { type: String, required: true },
      buildingNumber: { type: String, required: true },
      zipCode: { type: String, required: true },
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
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Apartment", apartmentSchema);
