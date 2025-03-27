"use client";
import React, { useState } from "react";
// 1) Import the Next.js router hook from the App Router
import { useRouter } from "next/navigation";

export default function ApplyNowPage() {
  // 2) Initialize the router
  const router = useRouter();

  // State for each field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState("artist"); // default selection
  const [genre, setGenre] = useState("");
  const [currentDistributor, setCurrentDistributor] = useState("");
  const [spotifyLink, setSpotifyLink] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Collect data
    const formData = {
      name,
      email,
      phone,
      country,
      city,
      role,
      genre,
      currentDistributor,
      spotifyLink,
      youtubeLink,
      privacyPolicy,
    };

    try {
      // 3) POST data to your API route (adjust path if needed)
      const res = await fetch("/api/testdb/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit application");
      }

      // 4) Redirect to /thank-you on success
      router.push("/thank-you");

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      {/* HERO / INTRO SECTION */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply Now</h1>
          <p className="text-lg md:text-xl mb-8">
            Fill out the form below to distribute your music worldwide.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-black text-white py-12 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get Started Distributing Your Music</h2>
          <p className="mb-6">
            Provide your details below, and we’ll connect you with all major streaming platforms.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="name">
                Name:
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white 
                           focus:outline-none focus:border-blue-500"
                placeholder="Your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="email">
                Email:
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white 
                           focus:outline-none focus:border-blue-500"
                placeholder="Your email address"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="phone">
                Phone:
              </label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white 
                           focus:outline-none focus:border-blue-500"
                placeholder="+1 234 567 890"
                required
              />
            </div>

            {/* Country */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="country">
                Country:
              </label>
              <input
                id="country"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white 
                           focus:outline-none focus:border-blue-500"
                placeholder="Your country"
                required
              />
            </div>

            {/* City */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="city">
                City:
              </label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white 
                           focus:outline-none focus:border-blue-500"
                placeholder="Your city"
                required
              />
            </div>

            {/* Role (label, artist, manager, distributor) */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="role">
                You are:
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white
                           focus:outline-none focus:border-blue-500"
                required
              >
                <option value="label">Label</option>
                <option value="artist">Artist</option>
                <option value="manager">Manager</option>
                <option value="distributor">Distributor</option>
              </select>
            </div>

            {/* Main Music Genre */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="genre">
                Main Music Genre:
              </label>
              <input
                id="genre"
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white 
                           focus:outline-none focus:border-blue-500"
                placeholder="e.g. Pop, Rock, EDM, Hip-hop"
                required
              />
            </div>

            {/* Current Distributor */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="currentDistributor">
                Current Distributor:
              </label>
              <input
                id="currentDistributor"
                type="text"
                value={currentDistributor}
                onChange={(e) => setCurrentDistributor(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white 
                           focus:outline-none focus:border-blue-500"
                placeholder="e.g. DistroKid, TuneCore, CD Baby"
              />
            </div>

            {/* Spotify Link */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="spotifyLink">
                Spotify Link:
              </label>
              <input
                id="spotifyLink"
                type="url"
                value={spotifyLink}
                onChange={(e) => setSpotifyLink(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white 
                           focus:outline-none focus:border-blue-500"
                placeholder="https://open.spotify.com/artist/your-artist-id"
              />
            </div>

            {/* YouTube Link */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="youtubeLink">
                YouTube Link:
              </label>
              <input
                id="youtubeLink"
                type="url"
                value={youtubeLink}
                onChange={(e) => setYoutubeLink(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white 
                           focus:outline-none focus:border-blue-500"
                placeholder="https://www.youtube.com/channel/your-channel-id"
              />
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacyPolicy"
                checked={privacyPolicy}
                onChange={() => setPrivacyPolicy(!privacyPolicy)}
                className="h-4 w-4 text-blue-600 accent-blue-600 
                           focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label
                htmlFor="privacyPolicy"
                className="ml-2 text-sm text-gray-200"
              >
                I declare that I have read TuneFloww’s Privacy Protection Policy
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                         px-5 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
