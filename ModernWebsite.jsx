import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const ModernWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Arise Scaling
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="/apply" className="px-6 py-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg hover:opacity-90 transition-opacity">
                Apply Now
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">Services</a>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
                <a href="/apply" className="px-6 py-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg text-center">
                  Apply Now
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-cyan-500/10 animate-pulse" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Transform Your Business
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12">
            Scale your TikTok Shop, Meta campaigns, and Shopify dropshipping with expert strategies.
          </p>
          <a href="/apply" className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
            Apply Now
          </a>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Why Choose Arise Scaling?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "TikTok Shop Scaling",
                description: "Grow your brand visibility and drive sales using TikTok's trending algorithm and optimized campaigns.",
                icon: "🎵"
              },
              {
                title: "Meta Campaigns",
                description: "Leverage Facebook and Instagram to reach your target audience with precision and measurable results.",
                icon: "📱"
              },
              {
                title: "Shopify Dropshipping",
                description: "Optimize your store for organic growth and build sustainable eCommerce success.",
                icon: "🛍️"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Arise Scaling. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernWebsite;
