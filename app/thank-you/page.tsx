export default function ThankYouPage() {
    return (
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white min-h-screen flex items-center justify-center px-4">
        <div className="max-w-xl text-center">
          {/* Thank You Header */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Thank You!
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your application has been received. We’ll be in touch soon!
          </p>
  
          {/* Optional: Animated checkmark or decorative icon */}
          <div className="mb-8">
            {/* Example: Heroicon checkmark or any SVG icon */}
            <svg
              className="w-16 h-16 mx-auto text-white animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 11l3 3L22 4"
              />
            </svg>
          </div>
  
          {/* Return Home Button */}
          <a
            href="/"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
          >
            Return Home
          </a>
        </div>
      </section>
    );
  }
  