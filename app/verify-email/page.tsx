"use client";
import React from "react";

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-indigo-700 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded shadow text-white text-center">
        <h1 className="text-3xl font-bold mb-6">Verify Your Email</h1>
        <p className="text-gray-400 mb-8">
          We’ve sent a verification link to your email. Please check it and verify
          before continuing.
        </p>
        <a
          href="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded inline-block"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
}
