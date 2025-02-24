import React, { useState, useEffect } from 'react';
import HeaderAudioVisualizerMicInput from './audio/HeaderAudioVisualizerMicInput';

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeBulletIndex, setActiveBulletIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(4 * 60); // 4 minutes in seconds

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      id: 'intro',
      title: 'Introduction',
      timing: 15, // seconds
      content: {
        tagline: 'Personalized GenAI music cocreation for indie musicians and their fans',
      }
    },
    {
      id: 'who are we?',
      title: 'The Team',
      timing: 15,
      content: {
        bullets: [
          'Andrew Luck: Product Lead - Meta, Microsoft, Behringer, 25 years in audio tech',
          'Aaron Ennis: Engineering Lead - Verizon, 20 years in telecom'
        ]
      }
    },
    {
      id: 'target-market',
      title: 'Target Market',
      timing: 30,
      content: {
        sections: [
          {
            title: 'Artists (B2B)',
            description: '70k artists with 1k-200k followers, 17k actively releasing'
          },
          {
            title: 'Fans (B2C)',
            description: 'Electronic music fans, hobbyist producers, Gen AI early adopters'
          }
        ]
      }
    },
    {
      id: 'opportunity',
      title: 'The Opportunity',
      timing: 30,
      content: {
        tagline: 'Artists need new ways to stand out in an overwhelming market',
        bullets: [
          '50M+ new songs released annually creates fierce competition',
          'Artists need deeper fan engagement to succeed',
          'Gen AI provides a new avenue for artist-controlled monetization',
          'Fans want to co-create with their favorite artists'
        ]
      }
    },
    {
      id: 'solution',
      title: 'Solution & Value',
      timing: 30,
      content: {
        tagline: 'Fansamble is a white glove service for artists to monetize gen ai music making with fans',
        sections: [
          {
            title: 'For Artists',
            description: 'Fan engagement, content creation, and monetization opportunities'
          },
          {
            title: 'For Fans',
            description: 'Interact with favorite artists, co-create music, and discover new sounds'
          }
        ]
      }
    },
    {
      id: 'features',
      title: 'Key Features',
      timing: 30,
      content: {
        sections: [
          {
            title: 'Model training',
            description: 'Upload the music, we build and deploy a Gen AI model that your fans will love'
          },
          {
            title: 'Branded user interfaces',
            description: 'Artist-branded web and mobile apps for fans to interact with the model'
          },
          {
            title: 'Cocreation Campaigns',
            description: 'Framework for artists to run campaigns and engage fans in music creation'
          }
        ]
      }
    },
    {
      id: 'market',
      title: 'Market Validation',
      timing: 30,
      content: {
        sections: [
          { title: 'TAM', description: '$3.9B marketing spend across 957k artists [IFPI, 2023]' },
          { title: 'SAM', description: '$708M for 177k electronic musicians' },
          { title: 'Our Focus', description: '$68M, targeting 17k active electronic artists' }
        ]
      }
    },
    {
      id: 'artist-experiment',
      title: 'Alpha Experiment 1 : iLL.Gates, 100k+ Followers',
      timing: 30,
      content: {
        customLayout: true,
        artistProfile: {
          image: '/assets/illgates.jpeg',
          details: [
            { label: 'Age', value: '43' },
            { label: 'Occupation', value: 'Artist / Music Educator' },
            { label: 'Location', value: 'Vancouver, BC' },
            { label: 'Status', value: '20 year professional' }
          ]
        },
        experimentDetails: {
          title: 'Experiment',
          points: [
            'Timeframe: April 2025',
            'Duration: 2 weeks',
            'Sample: 50 fans',
            'Fan objective: Top creation chosen for release collab',
            'Weekly social reviews with final winner announcement'
          ]
        },
        metricsDetails: {
          title: 'Metrics',
          points: [
            'Daily audio generation (minutes)',
            'Compute unit purchases',
            'Track engagement',
            'Return rates',
            'Cost per user'
          ]
        }
      }
    },
    {
      id: 'go-to-market',
      title: 'Go-to-Market Strategy',
      timing: 30,
      content: {
        sections: [
          {
            title: 'Phase 1: Tastemakers (M 1-6)',
            description: '20-30 artists with 100K+ followers, high-touch support'
          },
          {
            title: 'Phase 2: Market Growth (M 6-12)',
            description: 'Expand to 1K-200K follower segment'
          },
          {
            title: 'Phase 3: Scale (M 12+)',
            description: 'Broader genres and larger audiences'
          }
        ]
      }
    },
    {
      id: 'investment',
      title: 'Investment Opportunity',
      timing: 30,
      content: {
        tagline: "Raising $750K for 18-month path to $50K MRR",
        bullets: [
          'Validated market opportunity: $3.9B TAM',
          'High-value artist pipeline ready',
          'Clear path to $50K MRR milestone'
        ]
      }
    }
  ];

  const getCurrentSlideBullets = () => {
    const slide = slides[currentSlide];
    if (slide.content.bullets) {
      return slide.content.bullets;
    } else if (slide.content.subSection?.bullets) {
      return slide.content.subSection.bullets;
    }
    return null;
  };

  const goToNextSlide = () => {
    const currentBullets = getCurrentSlideBullets();
    if (currentBullets && activeBulletIndex < currentBullets.length - 1) {
      setActiveBulletIndex(prev => prev + 1);
    } else {
      setCurrentSlide(prev => {
        const newSlide = prev < slides.length - 1 ? prev + 1 : prev;
        setActiveBulletIndex(0);
        return newSlide;
      });
    }
  };

  const goToPreviousSlide = () => {
    const currentBullets = getCurrentSlideBullets();
    if (currentBullets && activeBulletIndex > 0) {
      setActiveBulletIndex(prev => prev - 1);
    } else {
      setCurrentSlide(prev => {
        const newSlide = prev > 0 ? prev - 1 : prev;
        const newSlideBullets = slides[newSlide].content.bullets || 
                               slides[newSlide].content.subSection?.bullets;
        setActiveBulletIndex(newSlideBullets ? newSlideBullets.length - 1 : 0);
        return newSlide;
      });
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'ArrowRight':
          goToNextSlide();
          break;
        case 'ArrowLeft':
          goToPreviousSlide();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, activeBulletIndex]);


  const renderAnimatedBullets = (bullets) => {
    return (
      <ul className="space-y-8 text-xl w-full max-w-3xl mx-auto flex flex-col items-center">
        {bullets.map((bullet, index) => (
          <li 
            key={index} 
            className={`flex items-start transition-all duration-500 ease-in-out w-full justify-center
              ${index > activeBulletIndex ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
              ${index === activeBulletIndex ? 'text-white' : 'text-gray-400'}`}
          >
            <div className="flex items-start max-w-2xl w-full">
              <span className={`mr-4 transition-colors duration-500 ${
                index === activeBulletIndex ? 'text-[#00B8FF]' : 'text-gray-500'
              }`}>•</span>
              <span className="flex-1">{bullet}</span>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const renderSlide = (slide) => {
    // Check if this is a custom layout slide
    if (slide.content.customLayout) {
      // Render artist experiment slide
      if (slide.content.artistProfile) {
        return (
          <div 
            className="flex flex-col md:flex-row items-start min-h-[70vh] text-white cursor-pointer gap-8"
            onClick={goToNextSlide}
          >
            {/* Left Side - Artist Profile */}
            <div className="w-full md:w-1/3 flex flex-col space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={slide.content.artistProfile.image} 
                  alt={slide.title}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#00B8FF20] to-transparent opacity-70"></div>
              </div>
              
              <div className="space-y-2">
                {slide.content.artistProfile.details.map((detail, index) => (
                  <div key={index} className="flex">
                    <span className="font-bold text-[#00B8FF] w-28">{detail.label}:</span>
                    <span className="text-white">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Experiment & Metrics */}
            <div className="w-full md:w-2/3 space-y-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00B8FF]">
                {slide.title}
              </h1>
              
              {/* Experiment Section */}
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold">{slide.content.experimentDetails.title}</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  {slide.content.experimentDetails.points.map((point, index) => (
                    <li key={index} className="text-lg">{point}</li>
                  ))}
                </ol>
              </div>
              
              {/* Metrics Section */}
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold">{slide.content.metricsDetails.title}</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  {slide.content.metricsDetails.points.map((point, index) => (
                    <li key={index} className="text-lg">{point}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        );
      }
    }
  
    // Original slide rendering logic
    return (
      <div 
        className="flex flex-col items-center justify-center min-h-[70vh] text-white cursor-pointer px-4"
        onClick={goToNextSlide}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          {slide.title}
        </h1>
        
        <div className="w-full flex flex-col items-center">
          {/* Handle taglines for all slides */}
          {slide.content.tagline && (
            <p className="text-2xl md:text-3xl text-center text-[#00B8FF] mb-8 max-w-4xl">
              {slide.content.tagline}
            </p>
          )}
    
          {slide.content.bullets && renderAnimatedBullets(slide.content.bullets)}
  
          {/* Keep description support for backward compatibility */}
          {slide.content.description && (
            <p className="text-xl text-center mb-8">
              {slide.content.description}
            </p>
          )}
  
          {slide.content.sections && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slide.content.sections.map((section, index) => (
                <div key={index} className="bg-[#1A1A1A] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#00B8FF] mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-300">{section.description}</p>
                  {section.subBullets && (
                    <ul className="mt-2 space-y-1">
                      {section.subBullets.map((bullet, idx) => (
                        <li key={idx} className="text-sm text-gray-400">
                          • {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
  
          {slide.content.mainPoint && (
            <div className="space-y-6">
              <p className="text-xl text-center">{slide.content.mainPoint}</p>
              {slide.content.subSection && (
                <div className="bg-[#1A1A1A] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#00B8FF] mb-4">
                    {slide.content.subSection.title}
                  </h3>
                  {slide.content.subSection.bullets && 
                    renderAnimatedBullets(slide.content.subSection.bullets)}
                </div>
              )}
            </div>
          )}
  
          {slide.content.highlight && (
            <p className="text-xl text-center text-[#00B8FF] mt-4">
              {slide.content.highlight}
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <nav className="sticky top-0 z-50 bg-[#0A0A0A]">
        <div className="w-full relative">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <HeaderAudioVisualizerMicInput />
              </div>
              <div className={`text-2xl font-mono font-bold ${
                timeLeft <= 60 ? 'text-red-500' : 'text-[#00B8FF]'
              }`}>
                {formatTime(timeLeft)}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {renderSlide(slides[currentSlide])}
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(index);
              setActiveBulletIndex(0);
            }}
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