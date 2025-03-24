import mongoose, { Schema, model, models } from "mongoose";

const ApplicationSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    country: String,
    city: String,
    role: { type: String, enum: ["label", "artist", "manager", "distributor"] },
    genre: String,
    currentDistributor: String,
    spotifyLink: String,
    youtubeLink: String,
    privacyPolicy: { type: Boolean, default: false },
    // Add any other fields you need
  },
  { timestamps: true }
);

export default models.Application ||
  model("Application", ApplicationSchema);
