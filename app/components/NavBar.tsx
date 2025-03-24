"use client"; // So we can use React state

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Next.js optimized Image component

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto p-4">
        {/* Desktop Row: Logo + Menu + Hamburger */}
        <div className="flex items-center justify-between">
          {/* Logo + Brand Name */}
          <div className="flex items-center gap-2">
            {/* Logo linked to Home */}
            <Link href="/">
              <Image
                src="/logo.png"      // Make sure you have a file named logo.png in public/
                alt="TuneFlow Logo"
                width={40}
                height={40}
                className="cursor-pointer"
                priority
              />
            </Link>
            {/* Brand Name linked to Home */}
            <Link href="/" className="text-xl font-bold">
              TuneFlow
            </Link>
          </div>

          {/* Desktop Menu (hidden on mobile) */}
          <div className="hidden md:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/marketing">Marketing</Link>
            <Link href="/apply-now">Apply Now</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/login">Login</Link>
          </div>

          {/* Hamburger (mobile only) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 
                         rounded-md text-gray-300 hover:text-white hover:bg-gray-700 
                         focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {/* Simple Hamburger Icon */}
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (collapsible) */}
        {isOpen && (
          <div className="md:hidden mt-2" id="mobile-menu">
            <div className="flex flex-col gap-2 bg-gray-800 p-4 rounded">
              <Link
                href="/"
                className="text-gray-200 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/marketing"
                className="text-gray-200 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Marketing
              </Link>
              <Link
                href="/apply-now"
                className="text-gray-200 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="text-gray-200 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="text-gray-200 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
