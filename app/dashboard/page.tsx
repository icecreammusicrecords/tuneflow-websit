"use client";
import React, { useState } from "react";

export default function DashboardPage() {
  // Keep track of which tab is active
  const [activeTab, setActiveTab] = useState("overview");

  function renderTabContent() {
    switch (activeTab) {
      case "overview":
        return (
          <div className="bg-gray-700 p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Overview</h2>
            <p className="text-gray-300">
              Welcome to your dashboard! Manage your releases, update your
              profile, and track your distribution status—all in one place.
            </p>
          </div>
        );
      case "analytics":
        return (
          <div className="bg-gray-700 p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Analytics</h2>
            <p className="text-gray-300">
              Track your streams, audience demographics, and more. (Add real
              charts later!)
            </p>
          </div>
        );
      case "promo":
        return (
          <div className="bg-gray-700 p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Promotion</h2>
            <p className="text-gray-300">
              Access promotional tools to boost your music’s visibility. (Add
              social sharing, ad campaigns, etc.)
            </p>
          </div>
        );
      case "withdraw":
        return (
          <div className="bg-gray-700 p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Withdraw Earnings</h2>
            <p className="text-gray-300">
              View your current balance and request payouts. (Implement your
              payment logic here!)
            </p>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="space-y-6">
      {/* Dashboard Header */}
      <div className="bg-gray-700 p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-2">Welcome to Your Dashboard</h1>
        <p className="text-gray-300">
          Manage your releases, update your profile, and track your distribution
          status—all in one place.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-gray-800 p-4 rounded shadow flex space-x-4">
        <TabButton
          label="Overview"
          isActive={activeTab === "overview"}
          onClick={() => setActiveTab("overview")}
        />
        <TabButton
          label="Analytics"
          isActive={activeTab === "analytics"}
          onClick={() => setActiveTab("analytics")}
        />
        <TabButton
          label="Promotion"
          isActive={activeTab === "promo"}
          onClick={() => setActiveTab("promo")}
        />
        <TabButton
          label="Withdraw"
          isActive={activeTab === "withdraw"}
          onClick={() => setActiveTab("withdraw")}
        />
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}

// A small helper component for the tab buttons
function TabButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`px-4 py-2 rounded font-semibold 
        ${
          isActive
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
