import Link from 'next/link';
import Header from '@/components/common/Header';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center hero-bg-container">
          <div className="hero-decor" aria-hidden="true" />
          <div className="hero-content">
            <h1 className="text-5xl font-bold mb-4 hero-heading">
              Welcome to RENTCHAIN
            </h1>
          <p className="text-xl text-gray-600 mb-8">
            Direct rental negotiation and agreement platform
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/register"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/properties"
              className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Browse Properties
            </Link>
          </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative p-1">
            <div className="relative bg-sky-100 rounded-2xl p-8 h-full transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2">List Properties</h3>
              <p className="text-gray-600">Property owners can easily list their rental properties</p>
            </div>
          </div>

          <div className="group relative p-1">
            <div className="relative bg-sky-100 rounded-2xl p-8 h-full transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">Negotiate Directly</h3>
              <p className="text-gray-600">Tenants and owners negotiate prices directly without brokers</p>
              <div className="mt-4">
                <a className="inline-block bg-white/90 text-sky-800 px-4 py-2 rounded-md font-medium shadow-sm hover:bg-white" href="/properties">Negotiate Now</a>
              </div>
            </div>
          </div>

          <div className="group relative p-1">
            <div className="relative bg-sky-100 rounded-2xl p-8 h-full transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-2">Blockchain Signed</h3>
              <p className="text-gray-600">Agreements are cryptographically signed and stored on-chain for security</p>

              <div className="absolute top-3 right-3">
                <div className="flex items-center justify-center w-10 h-10 bg-white/90 rounded-full shadow text-sky-700" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M7 12l3 3 7-7" stroke="#075985" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

