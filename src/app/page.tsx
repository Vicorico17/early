'use client';

import Image from "next/image";
import { useState } from "react";
import MainContent from "./components/MainContent";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  if (showContent) {
    return <MainContent />;
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with Animation */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
          <Image
            src="/early-logo.png"
            alt="Early Logo"
            width={400}
            height={400}
            priority
            className="animate-pulse"
          />
        </div>

        {/* Title */}
        <h1 className="text-7xl md:text-9xl font-bold mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          EARLY AI
        </h1>

        {/* Enter Button */}
        <button
          onClick={() => setShowContent(true)}
          className="px-16 py-6 text-2xl bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold 
                   hover:scale-110 transition-all duration-300 transform 
                   hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] 
                   animate-pulse"
        >
          Be Early
        </button>
      </div>
    </main>
  );
}
