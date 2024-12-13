import Image from "next/image";

export default function MainContent() {
  return (
    <div className="min-h-screen relative bg-black text-white">
      {/* Background Logo with Animation */}
      <div className="fixed inset-0 opacity-5">
        <Image
          src="/early-logo.png"
          alt="Early Logo"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="animate-pulse"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="flex flex-col items-center mb-16">
          <Image
            src="/early-logo.png"
            alt="Early Logo"
            width={300}
            height={300}
            className="mb-8 hover:scale-105 transition-transform"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            EARLY AI
          </h1>
          <p className="text-xl md:text-2xl text-center text-purple-300 mb-4">
            The AI-Powered Crypto Guardian and Trader
          </p>
          <p className="text-lg text-center text-gray-400 max-w-3xl">
            More than a token - a cutting-edge AI-powered ecosystem designed to track, trade, and optimize your crypto journey.
          </p>
        </div>

        {/* Address Information Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* AI Wallet Address */}
          <div className="backdrop-blur-lg bg-purple-900/20 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-purple-300">AI Wallet</h2>
              <div className="bg-purple-500/20 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
            <div className="bg-black/40 p-4 rounded-xl border border-purple-500/20 group-hover:border-purple-500/40 transition-all">
              <p className="text-purple-300 font-mono text-sm break-all">
                Coming Soon...
              </p>
            </div>
          </div>

          {/* Contract Address */}
          <div className="backdrop-blur-lg bg-purple-900/20 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-purple-300">Contract Address</h2>
              <div className="bg-purple-500/20 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div className="bg-black/40 p-4 rounded-xl border border-purple-500/20 group-hover:border-purple-500/40 transition-all">
              <p className="text-purple-300 font-mono text-sm break-all">
                Coming Soon...
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Wallet Tracking */}
          <div className="backdrop-blur-sm bg-purple-900/10 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Wallet Tracking and Monitoring</h2>
            <p className="text-gray-300">
              Your vigilant AI companion, tracking wallet activity across multiple blockchains with real-time insights into balances, transactions, and trends.
            </p>
          </div>

          {/* AI Trading */}
          <div className="backdrop-blur-sm bg-purple-900/10 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">AI-Powered Trading</h2>
            <p className="text-gray-300">
              Managed by AI algorithms and guided by community input, EARLY actively trades tokens to grow its treasury and maximize value.
            </p>
          </div>

          {/* Data Analysis */}
          <div className="backdrop-blur-sm bg-purple-900/10 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Data-Driven Decisions</h2>
            <p className="text-gray-300">
              Sophisticated AI analysis of blockchain data, market trends, and on-chain metrics to deliver actionable insights.
            </p>
          </div>

          {/* Smart Wallet */}
          <div className="backdrop-blur-sm bg-purple-900/10 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Intelligent Wallet</h2>
            <p className="text-gray-300">
              Store your tokens securely while leveraging AI-powered analytics and trading strategies, all from one powerful platform.
            </p>
          </div>
        </div>

        {/* DAO Section */}
        <div className="backdrop-blur-sm bg-purple-900/10 p-8 rounded-2xl border border-purple-500/20 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">Decentralized Governance</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            EARLY is governed by its community through DAO. Token holders steer the project, making decisions on trading strategies, 
            feature upgrades, and treasury allocations.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Be Early. Be Smart. Be in Control.
          </h2>
          <p className="text-xl text-purple-300 mb-8">
            Join the revolution today—where AI meets decentralized finance and the future of crypto is in your hands.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold hover:scale-105 transition-transform">
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Animated Background Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
      </div>
    </div>
  );
} 