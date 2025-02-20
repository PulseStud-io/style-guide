import React, { useState, useEffect, useRef } from 'react';
import HeaderAudioVisualizer from './audio/HeaderAudioVisualizer';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 'intro',
      title: 'Introduction',
      content: {
        tagline: 'The co-creation platform connecting musicians and fans',
        bullets: []
      }
    },
    {
      id: 'problem',
      title: 'The Problem',
      content: {
        bullets: [
          '50M+ new songs released annually creates overwhelming competition',
          'Artists struggle to stand out and maintain audience engagement',
          'Traditional promotion methods yield diminishing returns'
        ]
      }
    },
    {
      id: 'solution',
      title: 'Our Solution',
      content: {
        bullets: [
          'Fansamble: A platform enabling artists to co-create music with their fans',
          'Creates meaningful connection through collaborative creation',
          'Strengthens artist-fan relationships through participation'
        ]
      }
    },
    {
      id: 'features',
      title: 'Key Features',
      content: {
        bullets: [
          'Customizable co-creation campaigns (remixes, lyrics, artwork)',
          'Analytics dashboard tracking engagement metrics',
          'Social integration across platforms',
          'Campaign planning tools with ROI projections'
        ]
      }
    },
    {
      id: 'benefits',
      title: 'Benefits',
      content: {
        sections: [
          {
            title: 'For Artists',
            items: ['Increased engagement', 'Expanded reach', 'Deeper fan loyalty']
          },
          {
            title: 'For Fans',
            items: ['Authentic connection', 'Creative participation', 'Exclusive access']
          }
        ],
        footer: 'Meaningful musical experiences beyond passive consumption'
      }
    },
    // ... remaining slides follow same pattern
  ];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, slides.length]);

  const renderSlide = (slide) => {
    return (
      <div className="space-y-8 animate-fadeIn">
        <h2 className="font-mono text-3xl md:text-4xl bg-gradient-to-r from-[#00B8FF] to-[#00FF9F] text-transparent bg-clip-text">
          {slide.title}
        </h2>
        
        {slide.content.tagline && (
          <p className="font-mono text-xl text-[#00B8FF]">{slide.content.tagline}</p>
        )}
        
        {slide.content.bullets && (
          <ul className="space-y-4">
            {slide.content.bullets.map((bullet, index) => (
              <li 
                key={index}
                className="flex items-start space-x-3 font-mono text-lg text-gray-300"
              >
                <span className="text-[#00FF9F]">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {slide.content.sections && (
          <div className="space-y-6">
            {slide.content.sections.map((section, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-mono text-xl text-[#00FF9F]">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start space-x-3 font-mono text-lg text-gray-300"
                    >
                      <span className="text-[#00B8FF]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {slide.content.footer && (
              <p className="font-mono text-lg text-[#00B8FF] mt-4">{slide.content.footer}</p>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header with Logo and Voice Visualization */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0A]">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <HeaderAudioVisualizer useMicrophone={true} />
                <svg className="h-8" viewBox="0 0 300 50">
                  <defs>
                    <linearGradient id="headerLogoGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#00B8FF" />
                      <stop offset="100%" stopColor="#00FF9F" />
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
        </div>
      </nav>

      {/* Slide Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {renderSlide(slides[currentSlide])}
      </div>

      {/* Navigation Dots */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-[#00B8FF] w-4' 
                : 'bg-gray-500 hover:bg-[#00B8FF50]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PitchDeck;