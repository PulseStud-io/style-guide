import React, { useState } from 'react';

const FanEngagement = () => {
  const [activeSection, setActiveSection] = useState('community');

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
    {
      id: 'community',
      title: 'Community Building',
      items: [
        'Fan forums or Discord servers where fans discuss music and connect',
        'Exclusive membership clubs with tiered benefits',
        'Virtual listening parties for new releases'
      ]
    },
    {
      id: 'interaction',
      title: 'Direct Interaction',
      items: [
        'Live Q&A sessions or AMAs (Ask Me Anything)',
        'Virtual meet-and-greets or backstage passes',
        'Personal video messages for superfans'
      ]
    },
    {
      id: 'creative',
      title: 'Creative Participation',
      items: [
        'Remix contests using stems from original tracks',
        'Fan voting on setlists, album art, or music video concepts',
        'User-generated content campaigns (fan-made music videos)'
      ]
    },
    {
      id: 'behindScenes',
      title: 'Behind-the-Scenes',
      items: [
        'Studio diaries and recording process videos',
        'Songwriting/production workshops',
        'Early demos and unreleased material access'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <div className="w-full border-b border-[#00B8FF20] mb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <h1 className="font-mono text-3xl md:text-4xl mb-4 bg-gradient-to-r from-[#00B8FF] to-[#00FF9F] text-transparent bg-clip-text">
            Fan Engagement Alternatives
          </h1>
          <p className="font-mono text-gray-400">
            Beyond AI Co-Creation: Building Meaningful Fan Connections
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`
                px-4 py-2 rounded font-mono text-sm transition-all duration-300
                ${activeSection === section.id 
                  ? 'bg-[#00B8FF] text-black' 
                  : 'border border-[#00B8FF] text-[#00B8FF] hover:bg-[#00B8FF10]'
                }
              `}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Content Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map(section => (
            <div
              key={section.id}
              className={`
                p-6 rounded-lg bg-[#111111] border border-[#00B8FF20]
                transition-all duration-500
                ${activeSection === section.id 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-50 scale-95'
                }
              `}
            >
              <h2 className="font-mono text-xl mb-4 text-[#00B8FF]">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.items.map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start space-x-3 font-mono text-sm text-gray-300"
                  >
                    <span className="text-[#00FF9F]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FanEngagement;