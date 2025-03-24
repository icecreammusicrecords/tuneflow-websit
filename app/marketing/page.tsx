export default function MarketingPage() {
    return (
      <>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Marketing Solutions</h1>
            <p className="text-lg md:text-xl mb-8">
              Grow your audience and stand out on every platform. Let us handle the marketing while you focus on the music.
            </p>
            <a
              href="/apply-now"
              className="inline-block bg-white text-blue-700 px-6 py-3 rounded font-medium hover:bg-gray-100 transition"
            >
              Get Started
            </a>
          </div>
        </section>
  
        {/* Marketing Strategies */}
        <section className="bg-gray-100 text-gray-800 py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Our Marketing Services</h2>
            <p className="mb-6 leading-relaxed">
              We create tailored campaigns that help you connect with the right audience, build a loyal fanbase,
              and maximize your music’s reach across streaming platforms. 
            </p>
  
            {/* Cards or Feature Boxes */}
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
              {/* Card 1 */}
              <div className="bg-white rounded shadow p-6">
                <h3 className="text-xl font-semibold mb-2">Playlist Pitching</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get your tracks featured on popular playlists to drastically increase streams and visibility.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Spotify Editorial & User Playlists</li>
                  <li>Apple Music Curated Playlists</li>
                  <li>Genre-Specific & Mood-Based Playlists</li>
                </ul>
              </div>
  
              {/* Card 2 */}
              <div className="bg-white rounded shadow p-6">
                <h3 className="text-xl font-semibold mb-2">Social Media Boost</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Increase your brand presence on Instagram, TikTok, and YouTube with targeted campaigns.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Influencer Collaborations</li>
                  <li>Content Strategy & Scheduling</li>
                  <li>Engagement Optimization</li>
                </ul>
              </div>
  
              {/* Card 3 */}
              <div className="bg-white rounded shadow p-6">
                <h3 className="text-xl font-semibold mb-2">Data Analytics & Insights</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Understand your audience and make data-driven decisions to refine your marketing approach.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Streaming Stats & Demographics</li>
                  <li>Listening Behavior Insights</li>
                  <li>Customizable Reports & Dashboards</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call to Action Section */}
        <section className="bg-white text-gray-800 py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Music?</h2>
            <p className="mb-8">
              Whether you’re an emerging artist or an established label, our dedicated marketing team is here to help 
              you stand out in a crowded industry. Let's amplify your success together!
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </>
    );
  }
  