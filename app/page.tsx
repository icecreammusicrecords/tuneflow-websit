export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to tunefloww</h1>
          <p className="text-xl mb-8">
            Distribute your music to all major platforms and reach a global audience!
          </p>
          <a
            href="/apply-now"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-12 bg-gray-100 text-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Why Choose TuneFloww?</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Worldwide Reach</h3>
              <p>Distribute your tracks to Spotify, Apple Music, Amazon, and more.</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Transparent Royalties</h3>
              <p>Get paid fairly and track earnings in real time.</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p>Our support team is here to help you grow your fanbase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS / DISTRIBUTION PLATFORMS SECTION */}
<section className="py-12 bg-white text-gray-800">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-4">Distribute Your Music Everywhere</h2>
    <p className="mb-6 text-lg">
      We partner with the biggest platforms to ensure your music reaches fans worldwide.
    </p>

    {/* Grid of logos */}
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center">
      {/* Example logos (make sure you have these images in public/ or change src accordingly) */}
      <img
        src="/logos/spotify.png"
        alt="Spotify"
        className="mx-auto h-16 w-auto"
      />
      <img
        src="/logos/apple-music.png"
        alt="Apple Music"
        className="mx-auto h-16 w-auto"
      />
      <img
        src="/logos/tiktok.png"
        alt="TikTok"
        className="mx-auto h-16 w-auto"
      />
      <img
        src="/logos/youtube-logo.png"
        alt="YouTube"
        className="mx-auto h-16 w-auto"
      />
      <img
        src="/logos/amazon-music.png"
        alt="Amazon Music"
        className="mx-auto h-16 w-auto"
      />
      <img
        src="/logos/deezer-logo.png"
        alt="Deezer"
        className="mx-auto h-16 w-auto"
      />
      <img
        src="/logos/Tidal-logo.png"
        alt="Tidal"
        className="mx-auto h-16 w-auto"
      />
      <img
        src="/logos/facebook-logo.png"
        alt="Facebook"
        className="mx-auto h-16 w-auto"
      />
      <img
        src="/logos/instagram-logo.png"
        alt="Instagram"
        className="mx-auto h-16 w-auto"
      />
      <img
        src="/logos/Soundcloud-logo.png"
        alt="Soundcloud"
        className="mx-auto h-16 w-auto"
      />
      <img
        src="/logos/Triller-logo.png"
        alt="Triller"
        className="mx-auto h-16 w-auto"
      />
      <img
        src="/logos/Tencent-logo.png"
        alt="Tencent"
        className="mx-auto h-16 w-auto"
      />
      {/* Add as many as you want */}
    </div>
  </div>
</section>

      {/* ABOUT SECTION */}
      <section className="bg-white text-gray-800 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About TuneFloww</h2>
          <p className="text-lg leading-relaxed mb-6">
            TuneFlow is a pioneering digital music distributor that empowers artists, labels, 
            and managers to get their music heard worldwide. We handle the distribution, so 
            you can focus on creating and engaging with your fans.
          </p>
          <p className="text-lg leading-relaxed">
            Our mission is to level the playing field for musicians across the globe, 
            offering an easy-to-use platform with transparent royalties and dedicated 
            marketing support.
          </p>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-12 bg-gray-50 text-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* STANDARD PLAN */}
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Standard Plan
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Perfect for independent artists starting out
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Unlimited Releases</li>
                <li>100% Royalties to You</li>
                <li>Basic Spotify & Apple Music Marketing</li>
                <li>Community Support</li>
              </ul>
              <p className="text-2xl font-bold mb-4">$29 / year</p>
              <a
                href="/apply-now"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>

            {/* PRO PLAN */}
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                Pro Plan
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Right for established labels, managers, and artists
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Custom Percentage Split</li>
                <li>Unlimited Artists & Releases</li>
                <li>Personalized Support + Marketing to Spotify & other DSPs</li>
                <li>Priority Customer Service</li>
              </ul>
              <p className="text-2xl font-bold mb-4">Contact Us for Pricing</p>
              <a
                href="/contact"
                className="inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
<section className="py-12 bg-white text-gray-800 px-6">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
    <div className="space-y-4">
      {/* FAQ Item 1 */}
      <details className="bg-gray-100 p-4 rounded shadow">
        <summary className="cursor-pointer font-semibold text-lg">
          How does TuneFloww handle music distribution?
        </summary>
        <p className="mt-2 text-gray-700 leading-relaxed">
          Once you submit your tracks, we distribute them to all major streaming 
          platforms like Spotify, Apple Music, and Amazon. You can track your 
          streams and earnings through your TuneFloww dashboard.
        </p>
      </details>

      {/* FAQ Item 2 */}
      <details className="bg-gray-100 p-4 rounded shadow">
        <summary className="cursor-pointer font-semibold text-lg">
          Do I keep my royalties?
        </summary>
        <p className="mt-2 text-gray-700 leading-relaxed">
          Absolutely. Depending on your plan, you retain up to 80-100% of your 
          streaming royalties. We handle the administrative side and make sure 
          your earnings are transparent.
        </p>
      </details>

      {/* FAQ Item 3 */}
      <details className="bg-gray-100 p-4 rounded shadow">
        <summary className="cursor-pointer font-semibold text-lg">
          How long does it take to see my music on platforms?
        </summary>
        <p className="mt-2 text-gray-700 leading-relaxed">
          Typically, your tracks appear within 2-7 days on most streaming 
          services. Some platforms may take slightly longer due to their 
          internal review process.
        </p>
      </details>

      {/* FAQ Item 4 */}
      <details className="bg-gray-100 p-4 rounded shadow">
        <summary className="cursor-pointer font-semibold text-lg">
          Can I upgrade or downgrade my plan later?
        </summary>
        <p className="mt-2 text-gray-700 leading-relaxed">
          Yes, you can change your plan at any time. Simply contact our support 
          team or update your subscription in your dashboard settings.
        </p>
      </details>
    </div>
  </div>
</section>
    </>
  );
}