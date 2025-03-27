"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig"; // adjust path

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // 1) Create user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Registered user:", userCredential.user);

      // 2) Send verification
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
        console.log("Verification email sent!");
      }

      // 3) Immediately sign out or keep them restricted
      await signOut(auth);

      // 4) Show a page or route that says "Check your email"
      router.push("/verify-email"); 
      // e.g. a page that says "Please verify your email before continuing."

    } catch (error: any) {
      console.error("Sign-up error:", error);
      alert("Sign-up failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-indigo-700 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded shadow text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Create an Account</h1>
        <p className="text-center text-gray-400 mb-8">
          Join TuneFloww to distribute your music worldwide.
        </p>

        <form onSubmit={handleSignUp} className="space-y-5">
          {/* Email */}
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

          {/* Password */}
          <div>
            <label className="block mb-1 font-semibold" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 rounded border border-gray-700 bg-gray-800
                         focus:outline-none focus:border-blue-500"
              placeholder="Create a secure password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold
                       py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}
