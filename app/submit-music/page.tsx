"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SubmitMusicPage() {
  const router = useRouter();

  // Form fields
  const [artistName, setArtistName] = useState("");
  const [trackTitle, setTrackTitle] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [coverArtUrl, setCoverArtUrl] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Gather form data
    const formData = {
      artistName,
      trackTitle,
      albumName,
      genre,
      releaseDate,
      coverArtUrl,
      notes,
    };

    try {
      const res = await fetch("/api/music", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit music");
      }

      const result = await res.json();
      console.log("Server response:", result);

      // Clear fields
      setArtistName("");
      setTrackTitle("");
      setAlbumName("");
      setGenre("");
      setReleaseDate("");
      setCoverArtUrl("");
      setNotes("");

      // Option 1: show an alert
      // alert("Music submitted successfully!");

      // Option 2: redirect to a thank-you page
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Submit Your Music</h1>
          <p className="text-lg md:text-xl mb-8">
            Provide your track details below to distribute your music to major stores.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-black text-white py-12 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Music Submission Form</h2>
          <p className="mb-6">Fill in the details to start the submission process.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Artist Name */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="artistName">
                Artist Name
              </label>
              <input
                id="artistName"
                type="text"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter artist name"
                required
              />
            </div>

            {/* Track Title */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="trackTitle">
                Track Title
              </label>
              <input
                id="trackTitle"
                type="text"
                value={trackTitle}
                onChange={(e) => setTrackTitle(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter track title"
                required
              />
            </div>

            {/* Album Name */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="albumName">
                Album Name
              </label>
              <input
                id="albumName"
                type="text"
                value={albumName}
                onChange={(e) => setAlbumName(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                placeholder="(Optional) Enter album name"
              />
            </div>

            {/* Genre */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="genre">
                Genre
              </label>
              <input
                id="genre"
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                placeholder="e.g. Pop, Rock, Hip-hop"
              />
            </div>

            {/* Release Date */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="releaseDate">
                Release Date
              </label>
              <input
                id="releaseDate"
                type="date"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Cover Art URL */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="coverArtUrl">
                Cover Art URL
              </label>
              <input
                id="coverArtUrl"
                type="url"
                value={coverArtUrl}
                onChange={(e) => setCoverArtUrl(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                placeholder="e.g. https://example.com/cover.jpg"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="notes">
                Notes
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 h-24 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                placeholder="Any extra info..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Music
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
