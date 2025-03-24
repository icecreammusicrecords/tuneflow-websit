// models/MusicSubmission.ts

import mongoose, { Schema, model, models } from "mongoose";

const MusicSubmissionSchema = new Schema(
  {
    // Identify who submitted the track
    artistEmail: { type: String, required: true }, 
    // or store a userId if you have authentication

    artistName: { type: String, required: true },
    trackTitle: { type: String, required: true },
    albumName: { type: String },
    genre: { type: String },
    releaseDate: { type: Date },
    coverArtUrl: { type: String },
    notes: { type: String },

    // The label can update this status:
    status: {
      type: String,
      enum: ["review", "approved", "distributed", "rejected"],
      default: "review",
    },
  },
  { timestamps: true }
);

export default models.MusicSubmission ||
  model("MusicSubmission", MusicSubmissionSchema);
