"use client";
import React from "react";
import { useRouter } from "next/navigation";
// If you want to store "paid" in DB, you’d do a fetch to your server

export default function PaymentPage() {
  const router = useRouter();

  const handlePayment = async () => {
    // TODO: Integrate Stripe or PayPal here
    // For demo, just do a fetch to /api/markPaid or something

    alert("Payment successful!");
    // Now user is "paid," so let them access the dashboard
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-indigo-700 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded shadow text-white text-center">
        <h1 className="text-3xl font-bold mb-6">Complete Your Payment</h1>
        <p className="text-gray-400 mb-8">
          Pay the subscription fee to start distributing your music.
        </p>
        <button
          onClick={handlePayment}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
