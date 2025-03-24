"use client"; // If you want to handle form state here

import React, { useState } from "react";

export default function ContactPage() {
  // Optional state for a simple contact form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log form data
    console.log("Contact Form Submission:", { name, email, message });

    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl mb-8">
            We’d love to hear from you! Whether you have questions about our services
            or just want to say hello, drop us a line below.
          </p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="bg-black text-white py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN: Contact Details */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6 leading-relaxed">
              Reach out to our support team anytime—we’re here to help!
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Email:</span> 
                <a href="mailto:support@tuneflow.in" className="ml-2 underline">
                  support@tuneflow.in
                </a>
              </li>
              <li>
                <span className="font-semibold">Phone:</span> 
                <a href="tel:+11234567890" className="ml-2 underline">
                  +1 (123) 456-7890
                </a>
              </li>
              <li>
                <span className="font-semibold">Address:</span> 
                <span className="ml-2">1234 Music Lane, Nashville, TN 37011</span>
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Drop Us a Line</h2>
            <p className="mb-6 leading-relaxed">
              Have questions or feedback? Send us a quick message below.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-1 font-semibold">
                  Name
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
                <label htmlFor="email" className="block mb-1 font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white 
                             focus:outline-none focus:border-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-1 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 h-24 rounded border border-gray-600 bg-gray-800 text-white 
                             focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="What's on your mind?"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                           px-5 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
