// lib/dbConnect.ts
import mongoose from "mongoose";

let isConnected = false; // Track if already connected

export async function dbConnect() {
  if (isConnected) return;

  const MONGODB_URI = process.env.MONGODB_URI || "";
  if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in your .env.local file");
  }

  try {
    const { connection } = await mongoose.connect(MONGODB_URI);
    isConnected = connection.readyState === 1;
    console.log("MongoDB connected!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}
