import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import HeaderAudioVisualizer from './audio/HeaderAudioVisualizer';

// Color palette from style guide
const colors = {
  primary: "#00B8FF",    // Neon Blue
  secondary: "#00FF9F",  // Neon Cyan
  accent: "#3D02FF",     // Electric Purple
  dark: "#0A0A0A",       // Base Dark
  darker: "#050505",     // Deeper Dark
  panel: "#111111",      // Panel Dark
  text: "#FFFFFF",
  textSecondary: "#808080"
};

// Get grid pattern style from style guide
const getGridPattern = (type = 'standard') => {
  switch(type) {
    case 'perspective':
      return {
        backgroundImage: `
          linear-gradient(rgba(0,184,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,184,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        transform: 'perspective(1000px) rotateX(60deg)',
        transformOrigin: 'top'
      };
    case 'circuit':
      return {
        backgroundImage: `
          linear-gradient(${colors.primary}10 1px, transparent 1px),
          linear-gradient(90deg, ${colors.primary}10 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: '-1px -1px'
      };
    default:
      return {
        backgroundImage: `
          linear-gradient(${colors.primary}10 1px, transparent 1px),
          linear-gradient(90deg, ${colors.primary}10 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      };
  }
};

// Component for service cards
const ServiceCard = ({ title, description, icon, color }) => (
  <div className="bg-[#111111] border border-[#00B8FF20] rounded-lg p-6 transition-transform hover:transform hover:-translate-y-2">
    <div className="mb-4" style={{ color: color || colors.primary }}>{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

// Component for feature cards with neon glow
const FeatureCard = ({ title, description, glowColor }) => (
  <div className="bg-[#111111] border border-[#00B8FF20] rounded-lg p-6 relative overflow-hidden">
    {/* Cyber glow effect */}
    <div 
      className="absolute top-0 right-0 w-full h-full" 
      style={{
        background: `radial-gradient(circle at top right, ${glowColor || colors.secondary}20, transparent 70%)`
      }}
    ></div>
    
    <div className="relative z-10">
      <h3 className="text-xl font-bold mb-3" style={{ color: glowColor || colors.secondary }}>{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

// Component for benefit items
const BenefitItem = ({ text }) => (
  <li className="flex items-start">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#00B8FF] mr-3 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>{text}</span>
  </li>
);

// Component for step cards
const StepCard = ({ number, title, description }) => (
  <div className="bg-[#111111] border border-[#00B8FF20] rounded-lg p-6 relative">
    <div className="text-3xl font-bold text-[#00B8FF] opacity-30 absolute top-4 right-4">{number}</div>
    <h3 className="text-xl font-bold mb-3 mt-4">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

// Stats card for analytics section
const StatsCard = ({ title, value, change, platform }) => {
  const isPositive = !change.includes('-');
  
  return (
    <div className="bg-[#111111] border border-[#00B8FF20] rounded-lg p-6">
      <div className="flex items-center mb-4">
        {getPlatformIcon(platform)}
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-bold text-white">{value}</p>
        <div className={`flex items-center ${isPositive ? 'text-[#00FF9F]' : 'text-red-500'}`}>
          <span className="text-lg">
            {isPositive ? '↑' : '↓'} {change}
          </span>
        </div>
      </div>
    </div>
  );
};

// Platform icon helper function
const getPlatformIcon = (platform) => {
  const iconClass = "w-6 h-6 mr-2";
  
  switch(platform?.toLowerCase()) {
    case 'tiktok':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.923c-1.265-1.265-1.48-2.94-1.48-3.561h-3.41v15.443c0 .372-.028.743-.113 1.107a3.373 3.373 0 0 1-1.899 2.392 3.35 3.35 0 0 1-1.629.243 3.37 3.37 0 0 1-2.015-.893 3.394 3.394 0 0 1 2.427-5.966c.348 0 .692.066 1.02.17v-3.537c-.337-.057-.673-.086-1.02-.086C6.201 9.692 3 12.894 3 16.817 3 20.739 6.201 24 10.18 24a7.138 7.138 0 0 0 1.608-.185 7.134 7.134 0 0 0 5.394-6.903l.018-7.681a9.609 9.609 0 0 0 5.254 1.495V7.297a5.931 5.931 0 0 1-3.133-1.735Z"></path>
        </svg>
      );
    case 'spotify':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path>
        </svg>
      );
    case 'soundcloud':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.061-.044-.093-.09-.093m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .105-.061.121-.12l.254-2.474-.254-2.548c-.016-.06-.061-.12-.121-.12m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.075.075.135.15.135.074 0 .135-.06.15-.135l.24-2.544-.24-2.641c-.015-.074-.075-.134-.15-.134zm1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c.005.09.075.157.159.157.074 0 .148-.068.158-.157l.227-2.563-.209-2.43m.824-.134c-.101 0-.18.09-.18.194l-.21 2.364.21 2.53c0 .104.079.18.18.18.094 0 .174-.076.18-.18l.24-2.53-.24-2.364c-.006-.104-.086-.194-.18-.194m2.9-2.77c-.06 0-.12.06-.135.12l-.269 5.173.27 3.33c.015.06.074.12.134.12.06 0 .12-.06.134-.12l.299-3.33-.299-5.188c-.014-.06-.074-.12-.134-.12m-1.95.929c-.074 0-.135.06-.149.133l-.239 4.245.239 3.134c.014.074.075.134.149.134.075 0 .135-.06.149-.134l.269-3.134-.269-4.245c-.014-.074-.075-.133-.149-.133zm1.155.254c-.09 0-.149.07-.163.149l-.217 3.969.217 3.194c.014.08.074.149.164.149.075 0 .149-.07.164-.149l.25-3.194-.25-3.969c-.016-.08-.09-.149-.165-.149zm6.304.285c-.12 0-.209.09-.224.194l-.202 3.5.202 3.194c.015.104.105.18.224.18.135 0 .225-.074.24-.18l.227-3.194-.226-3.5c-.016-.105-.105-.194-.24-.194zm-4.384.283c-.104 0-.18.08-.194.165l-.224 3.549.224 3.119c.015.084.09.149.195.149.104 0 .179-.065.195-.149l.239-3.119-.239-3.549c-.016-.085-.09-.165-.195-.165zm2.164-.434c-.15 0-.254.1-.269.21l-.179 3.834.179 3.104c.016.11.12.194.27.194.149 0 .254-.085.27-.194l.202-3.104-.202-3.835c-.017-.108-.121-.208-.27-.208zm-1.079.233c-.136 0-.224.08-.239.18l-.209 3.686.209 3.105c.016.1.104.18.239.18.12 0 .225-.08.239-.18l.225-3.105-.225-3.685c-.015-.1-.12-.18-.24-.18zm.884-.029c-.12 0-.24.089-.256.194l-.194 3.696.194 3.134c.016.104.136.179.256.179.119 0 .24-.074.256-.179l.22-3.134-.22-3.696c-.017-.105-.137-.194-.256-.194zm1.95-.015c-.135 0-.27.089-.284.209l-.18 3.711.165 3.076c.03.119.15.195.3.195.134 0 .255-.76.27-.195l.195-3.076-.195-3.711c-.016-.12-.135-.21-.27-.21zm.764.524c-.07-.135-.164-.225-.284-.225-.119 0-.21.09-.228.225l-.239 3.436.254.483-.016 2.563c.016.135.106.226.226.226h.03c.12 0 .226-.09.24-.225l.255-3.045-.255-3.438zm-9.074 1.259c-.045 0-.075.044-.09.104l-.259 2.046.274 2.069c.007.029.03.104.09.104.052 0 .082-.03.09-.104l.303-2.066-.301-2.047c-.008-.06-.053-.105-.105-.105m11.323-.089c-.17 0-.3.135-.3.3v.044l-.225 3.15.225 2.955.015.09c.015.165.15.285.3.285.181 0 .314-.135.314-.314l.03-.057.195-2.97-.226-3.21c-.015-.165-.149-.271-.33-.271m1.141.674c-.164 0-.314.135-.329.3l-.179 2.385.179 2.399c.016.165.166.3.33.3.18 0 .314-.148.329-.3l.209-2.4-.209-2.384c-.016-.165-.15-.3-.33-.3m-5.455-4.974c-.18 0-.314.149-.314.328l-.239 8.323.239 3.18c.015.18.15.33.314.33.18 0 .33-.15.33-.33l.269-3.18-.269-8.322c0-.18-.15-.329-.33-.329zm-2.384.134c-.165 0-.3.149-.315.315l-.27 8.206.27 3.195c.016.165.15.314.315.314.165 0 .3-.15.314-.314l.301-3.195-.301-8.206c-.015-.165-.149-.315-.314-.315zm1.17.15c-.18 0-.314.158-.314.329l-.256 7.921.255 3.224c.014.18.134.314.313.314.182 0 .316-.135.33-.314l.286-3.224-.285-7.921c-.016-.171-.15-.33-.33-.33zm11.245 11.082c-.526.906-1.916 1.13-2.324 1.13-1.109.015-1.949-.384-2.354-.989-.149.18-.255.391-.39.661a2.39 2.39 0 0 1-.315.435c-.694.815-1.859 1.095-2.884 1.095-1.2 0-2.175-.406-2.775-1.185-.12.18-.254.361-.375.54-.12.18-.254.315-.419.509a3.722 3.722 0 0 1-2.905 1.38c-.97 0-1.855-.344-2.549-.944-.18.224-.346.494-.614.779-.135.165-.256.315-.391.465-.659.765-1.484 1.139-2.76 1.154h-.134c-1.918 0-3.063-1.244-3.284-1.574-.03-.044-.045-.074-.06-.104 0 0 .001 0 0 0-.165-.315-.3-.54-.3-1.185v-14.655c0-.634.135-1.185.3-1.185.149 0 .209.699.239 1.185v14.67c.016.254.045.81.255.87.239.074 1.125.511 2.82.404 1.141-.06 1.979-.824 2.144-1.005.075-.075.135-.15.195-.24.15-.195.27-.39.375-.615.239-.479.27-.93.27-1.154V7.795c0-.21.135-.45.33-.494.18-.045.33.09.33.3v10.454c0 .734.419 1.185.824 1.415.375.21.795.3 1.155.3.854 0 1.424-.524 1.666-.841.449-.541.539-1.154.539-1.485V6.58c0-.135.105-.27.24-.285.165-.015.271.09.271.27v11.115c0 .061-.015.646.33 1.154.255.375.749.946 1.844.929.959-.016 1.694-.6 1.938-1.549.045-.195.045-.345.045-.494V5.86c0-.165.12-.3.284-.3.165 0 .3.149.3.3v11.67c.075.929.689 1.604 1.785 1.604.405 0 1.38-.016 1.664-1.154.046-.135.076-.27.076-.391V7.63c0-.15.119-.271.27-.285.149-.015.27.09.285.255v10.935c.06 1.154.63 1.664 1.785 1.664.375 0 1.334-.045 1.754-.87.12-.239.165-.434.165-.674V9.729c0-.164.09-.3.255-.329.181-.029.315.09.33.255v8.97c0 .54-.12.96-.315 1.336"></path>
        </svg>
      );
    case 'instagram':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    default:
      return null;
  }
};

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation with two-tier structure */}
      <header className="sticky top-0 z-50 bg-[#0A0A0A]">
        {/* Top tier: Audio player and logo */}
        <div className="w-full bg-[#0A0A0A] px-4 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center">
              {/* HeaderAudioVisualizer component */}
              <HeaderAudioVisualizer />
              
              {/* Logo with gradient */}
              <svg className="h-8 ml-2" viewBox="0 0 300 50">
                <defs>
                  <linearGradient id="headerLogoGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={colors.primary} />
                    <stop offset="100%" stopColor={colors.secondary} />
                  </linearGradient>
                </defs>
                <text
                  x="0"
                  y="40"
                  style={{
                    fill: 'url(#headerLogoGrad)',
                    fontStyle: 'italic',
                    fontSize: '48px',
                    fontWeight: 'bold'
                  }}
                >
                  fansamble
                </text>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Bottom tier: Navigation menu */}
        <nav className="w-full bg-[#050505] border-t border-b border-[#00B8FF20]">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              {/* Logo on left */}
              <div className="flex items-center">
                {/* <span className="text-[#00B8FF] text-2xl font-mono font-bold italic">fansamble</span> */}
              </div>
            
              {/* Desktop Navigation - centered */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#services" className="hover:text-[#00B8FF] transition-colors">Services</a>
                <a href="#features" className="hover:text-[#00B8FF] transition-colors">Features</a>
                <a href="#artists" className="hover:text-[#00B8FF] transition-colors">For Artists</a>
                <a href="#fans" className="hover:text-[#00B8FF] transition-colors">For Fans</a>
                <a href="#analytics" className="hover:text-[#00B8FF] transition-colors">Analytics</a>
                {/* <Link to="/style-guide" className="text-gray-300 hover:text-[#00B8FF] transition-colors">Style Guide</Link> */}
              </div>
              
              {/* Contact Us Button */}
              <div className="hidden md:block">
                <a href="#contact" className="bg-[#00B8FF] text-black px-4 py-2 rounded hover:bg-[#00B8FF]/80 transition-colors">
                  Contact Us
                </a>
              </div>
              
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-[#111111] px-4 py-2">
              <div className="flex flex-col space-y-3 py-3">
                <a href="#services" className="hover:text-[#00B8FF] transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#features" className="hover:text-[#00B8FF] transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
                <a href="#artists" className="hover:text-[#00B8FF] transition-colors" onClick={() => setIsMenuOpen(false)}>For Artists</a>
                <a href="#fans" className="hover:text-[#00B8FF] transition-colors" onClick={() => setIsMenuOpen(false)}>For Fans</a>
                <a href="#analytics" className="hover:text-[#00B8FF] transition-colors" onClick={() => setIsMenuOpen(false)}>Analytics</a>
                {/* <Link to="/style-guide" className="text-gray-300 hover:text-[#00B8FF] transition-colors" onClick={() => setIsMenuOpen(false)}>Style Guide</Link> */}
                <a href="#contact" className="bg-[#00B8FF] text-black px-4 py-2 rounded inline-block text-center hover:bg-[#00B8FF]/80 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section with Perspective Grid */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          {/* Grid pattern from style guide */}
          <div 
            className="absolute inset-0 opacity-20"
            style={getGridPattern('perspective')}
          ></div>
          
          {/* Neon Fade gradient overlay from style guide */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}20, transparent)`
            }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connect Artists and Fans Through <span style={{ color: colors.secondary }}>AI Music Cocreation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Personalized GenAI music cocreation platform for indie musicians and their dedicated fanbase
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a 
              href="#artists" 
              className="bg-[#00B8FF] text-black px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#00B8FF]/80 transition-colors w-full sm:w-auto text-center"
            >
              For Artists
            </a>
            <a 
              href="#fans" 
              className="bg-transparent border border-[#00FF9F] text-[#00FF9F] px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#00FF9F]/10 transition-colors w-full sm:w-auto text-center"
            >
              For Fans
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A complete suite of tools to build deep connections between artists and fans
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                title="AI Model Training"
                description="Custom model training based on artist's unique sound and style"
                color={colors.primary}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v8m0 12V10m0 4h8a2 2 0 0 0 0-4h-8a2 2 0 0 1 0-4h8"></path>
                  </svg>
                }
              />
              
              <ServiceCard 
                title="Branded Platforms"
                description="Custom web and mobile platforms with artist-specific branding"
                color={colors.secondary}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                }
              />
              
              <ServiceCard 
                title="Campaign Management"
                description="End-to-end campaign management for cocreation challenges"
                color={colors.accent}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8v8m-4-4h8M9 2h6v6H9zm6 14h6v6h-6zm-12 0h6v6H3z"></path>
                  </svg>
                }
              />
            </div>
          </div>
        </section>

        {/* Features Section with Cyber Glow Effect */}
        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools designed to enhance artist-fan engagement
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard 
                title="AI Music Generation"
                description="Fans create music in the style of their favorite artists using our cutting-edge AI models"
                glowColor={colors.primary}
              />
              
              <FeatureCard 
                title="Artist Collaboration"
                description="Artists can select the best fan creations for official collaboration and release"
                glowColor={colors.secondary}
              />
              
              <FeatureCard 
                title="Social Integration"
                description="Seamless integration with social platforms for sharing and promotion"
                glowColor={colors.primary}
              />
              
              <FeatureCard 
                title="Analytics Dashboard"
                description="Comprehensive analytics on fan engagement, creation metrics, and campaign performance"
                glowColor={colors.secondary}
              />
            </div>
          </div>
        </section>

        {/* For Artists Section */}
        <section id="artists" className="py-20 bg-[#0F0F0F]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">For Artists</h2>
                <p className="text-xl text-gray-300 mb-6">
                  Fansamble provides indie musicians with new ways to engage their audience, create unique content, and monetize their sound.
                </p>
                
                <ul className="space-y-4">
                  <BenefitItem text="Build deeper connections with your fans through interactive cocreation" />
                  <BenefitItem text="Generate new revenue streams through AI-powered music creation" />
                  <BenefitItem text="Discover talented fans and potential collaborators" />
                  <BenefitItem text="Gain valuable insights into your audience's preferences" />
                </ul>
                
                <div className="mt-8">
                  <a 
                    href="#contact" 
                    className="bg-[#00B8FF] text-black px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#00B8FF]/80 transition-colors inline-block"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/2 relative">
                <div className="bg-[#111111] border border-[#00B8FF20] rounded-lg p-6 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#00B8FF] rounded-full flex items-center justify-center mr-4">
                      <span className="text-black font-bold">iLL</span>
                    </div>
                    <div>
                      <h3 className="font-bold">iLL.Gates</h3>
                      <p className="text-gray-400 text-sm">Electronic Music Artist</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "Fansamble has completely changed how I interact with my fans. The cocreation campaigns have generated incredible music and boosted my engagement metrics across all platforms."
                  </p>
                </div>
                
                {/* Gradient effect from style guide */}
                <div 
                  className="absolute top-0 left-0 w-full h-full rounded-lg transform -rotate-6 -z-10"
                  style={{
                    background: `radial-gradient(circle at top right, ${colors.secondary}20, transparent 70%)`
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* For Fans Section with Circuit Grid */}
        <section id="fans" className="py-20 relative overflow-hidden">
          {/* Circuit grid background */}
          <div 
            className="absolute inset-0 opacity-10"
            style={getGridPattern('circuit')}
          ></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 order-2 md:order-1 relative">
                <div className="aspect-video bg-[#111111] border border-[#00B8FF20] rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-[#00B8FF]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <p className="text-white">Create with your favorite artists</p>
                  </div>
                </div>
                
                {/* Neon glows */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00B8FF]/20 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#00FF9F]/10 rounded-full blur-xl"></div>
              </div>
              
              <div className="md:w-1/2 order-1 md:order-2">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">For Fans</h2>
                <p className="text-xl text-gray-300 mb-6">
                  Cocreate music with your favorite artists, share your creations, and join a community of like-minded music lovers.
                </p>
                
                <ul className="space-y-4">
                  <BenefitItem text="Create music using AI models trained on your favorite artists' sounds" />
                  <BenefitItem text="Get recognized by artists through official cocreation campaigns" />
                  <BenefitItem text="Potentially collaborate on official releases" />
                  <BenefitItem text="Connect with other fans who share your musical interests" />
                </ul>
                
                <div className="mt-8">
                  <a 
                    href="#" 
                    className="bg-transparent border border-[#00FF9F] text-[#00FF9F] px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#00FF9F]/10 transition-colors inline-block"
                  >
                    Join the Waitlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Dashboard Section */}
        <section id="analytics" className="py-20 bg-[#0F0F0F]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Engagement Analytics</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Track fan engagement across platforms and campaigns
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard 
                  title="TikTok Engagement" 
                  value="243K" 
                  change="+18%" 
                  platform="tiktok" 
                />
                <StatsCard 
                  title="Spotify Streams" 
                  value="1.2M" 
                  change="+32%" 
                  platform="spotify" 
                />
                <StatsCard 
                  title="SoundCloud Plays" 
                  value="478K" 
                  change="+25%" 
                  platform="soundcloud" 
                />
                <StatsCard 
                  title="Instagram Reach" 
                  value="89K" 
                  change="+12%" 
                  platform="instagram" 
                />
              </div>
              
              <div className="bg-[#111111] border border-[#00B8FF20] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Campaign Performance</h3>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <div className="flex justify-between mb-2">
                      <span>Fan Participation</span>
                      <span className="text-[#00FF9F]">87%</span>
                    </div>
                    <div className="w-full bg-[#222222] rounded-full h-2">
                      <div className="bg-[#00FF9F] h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex justify-between mb-2">
                      <span>Content Creation</span>
                      <span className="text-[#00B8FF]">65%</span>
                    </div>
                    <div className="w-full bg-[#222222] rounded-full h-2">
                      <div className="bg-[#00B8FF] h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex justify-between mb-2">
                      <span>Social Sharing</span>
                      <span className="text-[#3D02FF]">72%</span>
                    </div>
                    <div className="w-full bg-[#222222] rounded-full h-2">
                      <div className="bg-[#3D02FF] h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="bg-[#111111] border border-[#00B8FF20] rounded-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
                  <p className="text-xl text-gray-300 mb-6">
                    Whether you're an artist looking to engage your fans or a music lover wanting to create with your favorite artists, we're here to help.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#00B8FF] mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <a href="mailto:info@fansamble.com" className="text-[#00B8FF] hover:underline">info@fansamble.com</a>
                    </div>
                    
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#00B8FF] mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Los Angeles, CA, USA</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 mt-8">
                    <a href="#" className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center hover:bg-[#00B8FF] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                      </svg>
                    </a>
                    
                    <a href="#" className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center hover:bg-[#00B8FF] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </a>
                    
                    <a href="#" className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center hover:bg-[#00FF9F] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full bg-[#2A2A2A] border-0 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#00B8FF] focus:outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full bg-[#2A2A2A] border-0 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#00B8FF] focus:outline-none"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full bg-[#2A2A2A] border-0 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#00B8FF] focus:outline-none"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows="4" 
                        className="w-full bg-[#2A2A2A] border-0 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#00B8FF] focus:outline-none"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <button 
                        type="submit" 
                        className="w-full bg-[#00B8FF] text-black px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#00B8FF]/80 transition-colors"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-[#00B8FF20]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-6 md:mb-0">
                {/* Footer logo with gradient */}
                <svg className="h-8 mb-2" viewBox="0 0 300 50">
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor={colors.primary} />
                      <stop offset="100%" stopColor={colors.secondary} />
                    </linearGradient>
                  </defs>
                  <text
                    x="0"
                    y="40"
                    style={{
                      fill: 'url(#footerLogoGrad)',
                      fontStyle: 'italic',
                      fontSize: '48px',
                      fontWeight: 'bold'
                    }}
                  >
                    fansamble
                  </text>
                </svg>
                <p className="text-gray-400">AI music cocreation platform</p>
              </div>
              
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
                <a href="#services" className="text-gray-300 hover:text-[#00B8FF] transition-colors">Services</a>
                <a href="#features" className="text-gray-300 hover:text-[#00B8FF] transition-colors">Features</a>
                <a href="#artists" className="text-gray-300 hover:text-[#00B8FF] transition-colors">For Artists</a>
                <a href="#fans" className="text-gray-300 hover:text-[#00B8FF] transition-colors">For Fans</a>
                <a href="#analytics" className="text-gray-300 hover:text-[#00B8FF] transition-colors">Analytics</a>
                {/* <Link to="/style-guide" className="text-gray-300 hover:text-[#00B8FF] transition-colors">Style Guide</Link> */}
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-[#00B8FF20] text-center">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} Fansamble. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default LandingPage;