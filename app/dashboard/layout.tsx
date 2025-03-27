"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  // Track if we are still checking "paid" status
  const [checkingPaid, setCheckingPaid] = useState(true);
  // Store the paid status
  const [isPaid, setIsPaid] = useState(false);

  // 1) If user not logged in, push to /login
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // 2) Once user is logged in, check if they have paid
  useEffect(() => {
    async function checkPaidStatus() {
      if (user) {
        try {
          // Example: call an API or Firestore to get "paid" status
          // Option A: Firestore approach
          // const docRef = doc(firestore, "users", user.uid);
          // const docSnap = await getDoc(docRef);
          // const data = docSnap.data();
          // const paidValue = data?.paid === true;

          // Option B: custom API route approach
          // const res = await fetch(`/api/userStatus?uid=${user.uid}`);
          // const json = await res.json();
          // const paidValue = json.paid === true;

          // For demo, let's pretend they are not paid
          const paidValue = false; // set this based on real fetch

          setIsPaid(paidValue);
        } catch (err) {
          console.error("Error checking paid status:", err);
        } finally {
          setCheckingPaid(false);
        }
      }
    }

    if (user && !loading) {
      checkPaidStatus();
    }
  }, [user, loading]);

  // 3) If done checking and user is not paid, redirect to /payment
  useEffect(() => {
    if (!checkingPaid && !isPaid) {
      router.push("/payment");
    }
  }, [checkingPaid, isPaid, router]);

  // Show loading while we figure out if user is logged in or if they've paid
  if (loading || checkingPaid) {
    return (
      <div className="p-8 text-white">
        Checking your payment status...
      </div>
    );
  }

  // If we got here, user is logged in and has paid
  return (
    <div className="min-h-screen flex bg-gray-800 text-white flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-900 flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          TuneFloww
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a
            href="/dashboard"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Dashboard Home
          </a>
          <a
            href="/submit-music"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Submit Music
          </a>
          <a
            href="/dashboard/releases"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            My Releases
          </a>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded">
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
