import mongoose, { Schema, model, models } from "mongoose";

const ContactMessageSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    // You can add phone, subject, or any other fields you need
  },
  { timestamps: true }
);

export default models.ContactMessage ||
  model("ContactMessage", ContactMessageSchema);
