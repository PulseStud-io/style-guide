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
      content: {
        tagline: 'Personalized GenAI music cocreation for indie musicians and their fans',
      }
    },
    {
      id: 'who are we?',
      title: 'The Team',
      content: {
        bullets: [
          'Andrew Luck: Product Lead - Meta, Microsoft, Behringer, 25 years in audio tech',
          'Aaron Ennis: Engineering Lead - Verizon, 20 years in telecom'
        ]
      }
    },
    {
      id: 'customer',
      title: 'Customer 1: Musicians with 1k-200k followers [B2B]',
      content: {
        bullets: [
          'Over ~70k of these artists, 17k have released music in the last 3 months',
          'Lower tier 1k - 100k followers',
          'Mid tier 100k - 200k followers',
          "Revenue from streaming, touring, and merchandise remains limited up to 100k followers",
          "Both tiers remain hungry for growth"
        ]
      }
    },
    {
      id: 'end user',
      title: 'Customer 2: Fans of Electronic Music [B2C]',
      content: {
        bullets: [
          'Lifestyle and identity are deeply tied to music',
          'Many are hobbyist DJs and producers',
          'Open to Gen AI, and already part of a culture of sample-based music and remixing'
        ]
      }
    },
    {
      id: 'pain points',
      title: 'Artist Pain Points',
      content: {
        bullets: [
          'The music industry is overwhelmingly competitive and growing',
          '50M+ new songs released annually creates overwhelming competition',
          'Building fan engagement is critical for success and alot of work',
          'Artists at this level have invested deeply'
        ]
      }
    },
    {
      id: 'opportunity',
      title: 'A Golden Opportunity',
      content: {
        tagline:'Indie artists monetizing Gen AI is a new twist.',
        bullets: [
          'Instead of the tech companies ie. image generation, the artists have control.',
          'Give fans the ability to cocreate with their favorite artists and make sounds they love.',
        ]
      }
    },
    {
      id: 'solution',
      title: 'Our Solution',
      content: {
        tagline:'Fansamble is a white glove service for artists to deliver and monetize gen ai music making with fans, with the click of a few buttons.',
        bullets: [
        ]
      }
    },
    {
      id: 'value prop',
      title: 'Value Proposition',
      content: {
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
          },
          {
            title: 'Deep data',
            description: 'Social media aggregation and insights',
            subBullets: ['TikTok, Reels, Spotify, Soundcloud, Beatport, Bandcamp']
          }
        ]
      }
    },
    {
      id: 'market',
      title: 'Market Validation',
      content: {
        sections: [
          { title: 'TAM', description: '$3.9 B in marketing spend, ÷ 957,516 = avg of $4k per artist [IFPI, 2023]' },
          { title: 'SAM', description: '$708 mm in marketing spend, 177k electronic musicians × $4k' },
          { title: 'SOM', description: '$28 mm in marketing spend, 70k (artists w/ 1k and 200k followers) × $4k = $285 mm' },
          { title: 'Our Scope', description: ' $68 mm, 17k active electronic musicians (song releases within 3 months)' }
        ]
      }
    },
    {
      id: 'artist-experiment',
      title: 'Alpha Experiment 1 : iLL.Gates, 100k+ Followers',
      content: {
        customLayout: true, // Add this flag to handle custom layout
        artistProfile: {
          image: '/assets/illgates.jpeg', // Update this with your actual image path
          details: [
            { label: 'Age', value: '43' },
            { label: 'Occupation', value: 'Artist / Music Educator' },
            { label: 'Education', value: 'Self-taught' },
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
            'Fan objective: Top creation(s) will be chosen for a release collaboration',
            'Campaign: iLL Gates will review top rated tracks on social weekly and announce winner at end, and finish a collab for release'
          ]
        },
        metricsDetails: {
          title: 'Metrics',
          points: [
            'Daily units of audio generated (minutes)',
            'Max units exceeded (10 minutes free)',
            'Purchases of "compute units"',
            'Tracks listened to',
            'Return rates (stickiness)',
            'Compute cost / user'
          ]
        }
      }
    },
    {
      id: 'phase1',
      title: 'Phase 1: Tastemakers (M 1-6)',
      content: {
        mainPoint: 'Liftoff and generating buzz  ',
        subSection: {
          title: 'Initialize:',
          bullets: [
            '20-30 artists with 100K-200K followers',
            'Large enough for meaningful data, small enough for high-touch support',
            'Free early access, direct product input, exclusive launch features'
        ]
      },
      focus: 'Focus: Building relationships, refining product, generating case studies'
      }
    },
    {
      id: 'phase2',
      title: 'Phase 2: Widening Market (M 6-12)',
      content: {
        mainPoint: 'Rapid growth 1K-200K segment',
        subSection: {
          title: 'Begin accepting larger artists selectively',
          bullets: [
            'Lower-tier artists are more willing to innovate',
            'Their campaigns remain manageable for platform testing',
            'Success stories attract both up-and-coming and established artists'
          ]
        }
      }
    },
    {
      id: 'phase3',
      title: 'Phase 3: General Audiences',
      content: {
        mainPoint: 'Explosion',
        subSection: {
          title: 'Bigger fanbases',
          bullets: [
            'Pop stars and content creators',
            'Advanced models and innovation',
            'Genres, artist communities, and subcultures'
          ]
        }
      }
    },

    {
      id: 'metrics',
      title: 'Key Success Metrics',
      content: {
        bullets: [
          'Engagement rates per campaign',
          'Fan retention across multiple campaigns',
          'Artist satisfaction and feature adoption',
          'Platform stability under increasing load',
          'Revenue growth and user acquisition costs'
        ]
      }
    },
    {
      id: 'cta',
      title: 'Call to Action',
      content: {
        tagline:  "We're raising $750K to achieve key milestones",
        bullets: [
          '18 months to get to $50K MRR',
          'Milestone of $50K MRR triggers additional capital',
        ]
      }
    },
    {
      id: 'why',
      title: 'Why Invest?',
      content: {
        bullets: [
          'We have an ethical, profitable, and feasible scope',
          'We have a list of high-value artists now',
          '18 months is a reasonable time to achieve $50K MRR'
        ]
      }
    },
    {
      id: 'demo',
      title: 'Demo',
      content: {}
    },
    {
        id: 'thankyou',
        title: 'Thank You',
        content: {
          
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