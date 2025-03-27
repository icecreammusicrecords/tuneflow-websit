"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (!user.emailVerified) {
        // If not verified, sign them out or block
        await signOut(auth);
        alert("Your email is not verified. Please verify first!");
        return;
      }

      // If verified, go to Payment Page
      router.push("/payment");
    } catch (error: any) {
      console.error("Login error:", error);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-indigo-700 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded shadow text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Log In</h1>
        <p className="text-center text-gray-400 mb-8">
          Enter your credentials to access your TuneFloww account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
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

          {/* Password Field */}
          <div>
            <label className="block mb-1 font-semibold" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 rounded border border-gray-700 bg-gray-800
                         focus:outline-none focus:border-blue-500"
              placeholder="Your secure password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold
                       py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log In
          </button>
        </form>

        {/* Extra Links (Optional) */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
        <a href="/forgot-password" className="hover:underline">
         Forgot Password?
        </a>
        <a href="/apply-now" className="hover:underline">
        Don’t have an account? <span className="text-blue-500">Sign Up</span>
         </a>
      </div>
      </div>
    </div>
  );
}
