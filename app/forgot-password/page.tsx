"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// If using Firebase:
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig"; // Adjust the path

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent to " + email);
      router.push("/login");
    } catch (error: any) {
      console.error("Reset error:", error);
      alert("Couldn’t send reset link: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-indigo-700 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded shadow text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Forgot Password</h1>
        <p className="text-center text-gray-400 mb-8">
          Enter your email to receive a password reset link.
        </p>

        <form onSubmit={handleReset} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 rounded border border-gray-700 bg-gray-800
                         focus:outline-none focus:border-blue-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold
                       py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Reset Link
          </button>
        </form>

        {/* Link to Log In */}
        <div className="mt-4 text-sm text-gray-400 text-center">
          Remembered your password?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}
