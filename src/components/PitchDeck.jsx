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
        tagline: 'The musical co-creation platform connecting musicians to fans'
      }
    },
    {
      id: 'who are we?',
      title: '2 Seasoned Experts',
      content: {
        bullets: [
          'Andrew Luck: Product Lead - Meta, Microsoft, Behringer, 25 years in audio tech',
          'Aaron Ennis: Engineering Lead - Verizon, 20 years in telecom'
        ]
      }
    },
    {
      id: 'problem',
      title: 'The Problem',
      content: {
        bullets: [
          '50M+ new songs released annually creates overwhelming competition',
          '15% more songs between 2023/24',
          'Artists struggle to stand out and maintain audience engagement',
          'Managing multiple social media platforms is a chore',
          'Artists at this level are massively invested'
        ]
      }
    },
    {
      id: 'solution',
      title: 'Our Solution',
      content: {
        tagline:'Fansamble is a white glove service for artists to deliver and monetize gen ai music making with fans, with the click of a few buttons.',
        bullets: [
          'Gen ai music making is monetizable itself, drives strong engagement and awareness, and provides deep data insights.',
          'Create social media challenges, crowdsource content, and drive novel interaction.'
        ]
      }
    },
    {
      id: 'features',
      title: 'Key Features',
      content: {
        sections: [
          {
            title: 'Model training and app deployment',
            description: 'Upload the music, we build and deploy'
          },
          {
            title: 'Personalized E2E',
            description: 'Style custom themes and platform'
          },
          {
            title: 'Cocreation Campaigns',
            description: 'Design creative challenges around events'
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
          { title: 'TAM', description: '$2B in marketing spend, all musicians' },
          { title: 'SAM', description: '$90 mm in marketing spend, 177k electronic musicians' },
          { title: 'SOM', description: '$36 mm in marketing spend, 70k electronic musicians' },
          { title: 'Our Scope', description: '$8.74 mm, 17k active electronic musicians (song releases within 3 months)' }
        ]
      }
    },
    {
      id: 'phase1',
      title: 'Phase 1: Mid-Tier Artists (M 1-6)',
      content: {
        mainPoint: 'Hardening and generating buzz  ',
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
      title: 'Phase 2: Market Entry (M 6-12)',
      content: {
        mainPoint: 'Rapid growth 1K-200K segment',
        subSection: {
          title: 'Begin accepting larger artists selectively',
          bullets: [
            'Lower-tier artists are more willing to innovate',
            'Their campaigns remain manageable for platform testing',
            'Success stories attract both up-and-coming and established artists',
            'Allows gradual scaling of infrastructure'
          ]
        }
      }
    },

    {
      id: 'phase3',
      title: 'Phase 3: GA Customers',
      content: {
        mainPoint: 'Expansion',
        subSection: {
          title: 'Bigger fanbases',
          bullets: [
            'Targeting pop artists, content creators, multimodal'
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
        tagline:  "We're raising $750K to achieve key milestones over the next 18 months:",
        bullets: [
          'Expand our beta from 100 to 1,000 artists',
          'Launch paid subscription tiers',
          'Achieve $50K MRR - ~25 campaigns / month',
          'Build integrations with major social platforms'
        ]
      }
    },
    {
      id: 'why',
      title: 'Why?',
      content: {
        bullets: [
          '1,000 artists represents about 1.4% of your SOM (70K electronic musicians)',
          '$50K MRR ($600K ARR) represents about 1.7% of the SOM, realistic for an 18-month target',
          'The focus on electronic musicians provides a clear, targetable initial market',
          'We have a customer leads with contacts of all 17k active artists.'
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
      <ul className="space-y-4 text-xl">
        {bullets.map((bullet, index) => (
          <li 
            key={index} 
            className={`flex items-start transition-all duration-500 ease-in-out
              ${index > activeBulletIndex ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
              ${index === activeBulletIndex ? 'text-white' : 'text-gray-400'}`}
          >
            <span className={`mr-2 transition-colors duration-500 ${
              index === activeBulletIndex ? 'text-[#00B8FF]' : 'text-gray-500'
            }`}>•</span>
            {bullet}
          </li>
        ))}
      </ul>
    );
  };

  const renderSlide = (slide) => {
    return (
      <div 
        className="flex flex-col items-center justify-center min-h-[70vh] text-white cursor-pointer"
        onClick={goToNextSlide}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          {slide.title}
        </h1>
        
        <div className="max-w-4xl w-full">
          {/* Handle taglines for all slides */}
          {slide.content.tagline && (
            <p className="text-2xl md:text-3xl text-center text-[#00B8FF] mb-8">
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