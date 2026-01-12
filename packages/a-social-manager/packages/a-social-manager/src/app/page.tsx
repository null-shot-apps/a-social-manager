'use client';

import { useState } from 'react';

export default function Landing() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Community Growth",
      description: "Build engaged communities across Discord, Telegram, and Twitter",
      icon: "👥"
    },
    {
      title: "Content Strategy",
      description: "Web3-native content that resonates with crypto audiences",
      icon: "📱"
    },
    {
      title: "Campaign Management",
      description: "Launch campaigns, airdrops, and community events that convert",
      icon: "🚀"
    },
    {
      title: "Analytics & Insights",
      description: "Data-driven decisions to optimize your social presence",
      icon: "📊"
    }
  ];

  const projects = [
    { name: "DeFi Protocol", growth: "+250% community growth", platform: "Discord & Twitter" },
    { name: "NFT Collection", growth: "15K+ engaged members", platform: "All platforms" },
    { name: "Layer 2 Solution", growth: "500K+ impressions/month", platform: "Twitter & Telegram" }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      
      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Web3 Social
        </div>
        <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-colors">
          Let&apos;s Talk
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-12 pt-20 pb-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Social Media Management
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              for Web3 Projects
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Grow your community, amplify your message, and dominate the Web3 social landscape.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all transform hover:scale-105">
              Start Growing
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 hover:bg-purple-400/10 rounded-full font-semibold text-lg transition-all">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 px-6 md:px-12 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            What I Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveService(idx)}
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                  activeService === idx
                    ? 'border-purple-400 bg-purple-500/10 scale-105'
                    : 'border-purple-900/50 bg-black/30 hover:border-purple-700'
                }`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Proven Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                <p className="text-3xl font-bold text-purple-400 mb-2">{project.growth}</p>
                <p className="text-gray-400">{project.platform}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 md:px-12 py-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Web3 Community?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss how I can help your project reach the next level.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-bold text-xl transition-all transform hover:scale-105">
            Book a Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-12 border-t border-purple-900/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Web3 Social
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Telegram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


