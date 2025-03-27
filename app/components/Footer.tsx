// components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand/Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">TuneFloww</h3>
            <p className="text-sm text-gray-300">
              Distribute your music to all major platforms and reach a global audience.
            </p>
          </div>
          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/terms" className="hover:underline text-gray-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="hover:underline text-gray-300">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://x.com/tuneflowoffical?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-gray-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ijaxturner?igsh=OGZxaWVzZHliNzVy&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-gray-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCClXUhXGf1MPODuPl8ga5bg/community?pvf=CAI%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-gray-300"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} TuneFloww. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
