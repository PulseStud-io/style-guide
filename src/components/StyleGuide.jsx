import React, { useState } from 'react';
import HeaderAudioVisualizer from './audio/HeaderAudioVisualizer';
import AnalyticsDashboard from './sections/AnalyticsDashboard';
import ComponentsSection from './sections/ComponentsSection';
import { Play } from 'lucide-react';

const StyleGuide = () => {
  const [section, setSection] = useState('brand');

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

  const sections = [
    { id: 'brand', label: 'BRAND' },
    { id: 'components', label: 'COMPONENTS' },
    { id: 'patterns', label: 'PATTERNS' },
    { id: 'analytics', label: 'ANALYTICS' }
  ];

  const typography = [
    { name: 'Display', family: 'MonoDisplay', weight: 'Bold', size: '48px', example: 'Aa Bb Cc 123' },
    { name: 'Heading', family: 'MonoDisplay', weight: 'Medium', size: '32px', example: 'Aa Bb Cc 123' },
    { name: 'Body', family: 'MonoLite', weight: 'Regular', size: '16px', example: 'Aa Bb Cc 123' },
    { name: 'Caption', family: 'MonoLite', weight: 'Light', size: '14px', example: 'Aa Bb Cc 123' }
  ];

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

  const renderBrandSection = () => (
    <div className="space-y-8 md:space-y-12">
      {/* Logo Section */}
      <div className="p-4 md:p-8 rounded-lg bg-[#111111] border border-[#00B8FF20]">
        <h2 className="font-mono text-xl md:text-2xl mb-6 md:mb-8 text-white">LOGO</h2>
        <div className="space-y-8">
          <svg className="w-full max-w-2xl" viewBox="0 0 300 50">
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={colors.primary} />
                <stop offset="100%" stopColor={colors.secondary} />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="40"
              style={{
                fill: 'url(#logoGrad)',
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

      {/* Colors Section */}
      <div className="p-4 md:p-8 rounded-lg bg-[#111111] border border-[#00B8FF20]">
        <h2 className="font-mono text-xl md:text-2xl mb-6 md:mb-8 text-white">COLORS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {Object.entries(colors).map(([name, color]) => (
            <div key={name} className="space-y-2">
              <div 
                className="h-20 md:h-24 rounded"
                style={{ backgroundColor: color }}
              />
              <div className="font-mono text-sm text-white">
                {name.toUpperCase()}
              </div>
              <div className="font-mono text-xs text-gray-500">
                {color}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography Section */}
      <div className="p-4 md:p-8 rounded-lg bg-[#111111] border border-[#00B8FF20]">
        <h2 className="font-mono text-xl md:text-2xl mb-6 md:mb-8 text-white">TYPOGRAPHY</h2>
        <div className="space-y-8">
          {typography.map((type) => (
            <div key={type.name} className="border-b border-[#00B8FF20] pb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="font-mono text-sm text-gray-500">
                  {type.name.toUpperCase()}
                </div>
                <div className="font-mono text-sm text-white">
                  {type.family}
                </div>
                <div className="font-mono text-sm text-white">
                  {type.weight}
                </div>
                <div className="font-mono text-sm text-white">
                  {type.size}
                </div>
              </div>
              <div 
                className="mt-4 text-white"
                style={{ 
                  fontSize: type.size,
                  fontWeight: type.weight === 'Bold' ? 700 : 
                            type.weight === 'Medium' ? 500 : 
                            type.weight === 'Light' ? 300 : 400
                }}
              >
                {type.example}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPatternsSection = () => (
    <div className="space-y-8 md:space-y-12">
      <h2 className="font-mono text-xl md:text-2xl text-white mb-6 md:mb-8">
        GRID_PATTERNS
      </h2>
      
      <div className="space-y-8 md:space-y-12">
        {/* Grid Pattern Examples */}
        {['standard', 'perspective', 'circuit'].map((patternType) => (
          <div key={patternType} className="space-y-4">
            <h3 className="font-mono text-lg text-gray-400">
              {patternType.toUpperCase()}_GRID
            </h3>
            <div 
              className="h-48 md:h-96 rounded-lg overflow-hidden bg-[#111111]"
              style={getGridPattern(patternType)}
            />
          </div>
        ))}

        {/* Gradient Overlays */}
        <div className="space-y-4">
          <h3 className="font-mono text-lg text-gray-400">
            GRADIENT_OVERLAYS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              {
                name: 'NEON_FADE',
                gradient: `linear-gradient(135deg, ${colors.primary}20, transparent)`
              },
              {
                name: 'CYBER_GLOW',
                gradient: `radial-gradient(circle at top right, ${colors.secondary}20, transparent 70%)`
              }
            ].map((overlay) => (
              <div key={overlay.name} className="space-y-2">
                <div className="font-mono text-sm text-gray-400">
                  {overlay.name}
                </div>
                <div 
                  className="h-32 md:h-48 rounded-lg overflow-hidden bg-[#111111]"
                  style={getGridPattern('standard')}
                >
                  <div 
                    className="w-full h-full"
                    style={{
                      background: overlay.gradient
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Navigation */}
    <nav className="sticky top-0 z-50 bg-[#0A0A0A]">
    {/* Top Brand Bar */}
    <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        {/* Logo and Play Button Row */}
        <div className="flex items-center">
            <HeaderAudioVisualizer />
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

    {/* Navigation Items */}
    <div className="border-b border-[#00B8FF20]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-wrap gap-4 sm:gap-8">
            {sections.map(({ id, label }) => (
            <button
                key={id}
                onClick={() => setSection(id)}
                className={`
                font-mono text-xs sm:text-sm pb-1 border-b-2 transition-all duration-300
                ${section === id 
                    ? 'text-[#00B8FF] border-[#00B8FF]' 
                    : 'text-gray-500 border-transparent'
                }
                `}
            >
                {label}
            </button>
            ))}
        </div>
        </div>
    </div>
    </nav>
  
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
        {section === 'brand' && renderBrandSection()}
        {section === 'patterns' && renderPatternsSection()}
        {section === 'components' && <ComponentsSection />}
        {section === 'analytics' && <AnalyticsDashboard />}
      </div>
    </div>
  );  
};    

export default StyleGuide;  