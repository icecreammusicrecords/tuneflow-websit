"use client";

import React, { useEffect, useState } from "react";

export default function MyReleasesPage() {
  // For a real app, you'd get this from user login info
  const [artistEmail, setArtistEmail] = useState("artist@example.com");

  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch releases whenever artistEmail changes
  useEffect(() => {
    async function fetchReleases() {
      if (!artistEmail) return;
      setLoading(true);
      setError("");

      try {
        const res = await fetch(`/api/music?artistEmail=${artistEmail}`);
        if (!res.ok) {
          throw new Error("Failed to fetch releases");
        }
        const data = await res.json();
        setReleases(data.releases);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchReleases();
  }, [artistEmail]);

  return (
    <section className="bg-black text-white min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">My Releases</h1>
        <p className="mb-6">
          View and manage your submitted tracks here.
        </p>

        {/* For demo: let user change the email manually */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Artist Email</label>
          <input
            type="email"
            value={artistEmail}
            onChange={(e) => setArtistEmail(e.target.value)}
            className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white 
                       focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Loading / Error */}
        {loading && <p>Loading your releases...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {/* Releases List */}
        {!loading && !error && (
          <div className="space-y-4">
            {releases.map((release: any) => (
              <div
                key={release._id}
                className="bg-gray-800 p-4 rounded shadow"
              >
                <h2 className="text-xl font-bold mb-1">
                  {release.trackTitle}
                </h2>
                <p className="text-sm text-gray-300">
                  Album: {release.albumName || "N/A"}
                </p>
                <p className="text-sm text-gray-300">
                  Genre: {release.genre || "N/A"}
                </p>
                <p className="text-sm text-gray-300">
                  Status: <span className="font-semibold">{release.status}</span>
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Submitted on: {new Date(release.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}

            {releases.length === 0 && (
              <p>No releases found for this artist email.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
