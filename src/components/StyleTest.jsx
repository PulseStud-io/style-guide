import React from 'react';

const StyleTest = () => {
  // Core colors - using direct HEX values for testing
  const colors = {
    primary: "#00B8FF",
    secondary: "#00FF9F",
    dark: "#0A0A0A",
    text: "#FFFFFF",
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Basic Text Test */}
        <h1 className="text-white font-mono text-2xl">
          STYLE_TEST
        </h1>
        
        {/* Button Tests */}
        <div className="space-y-4">
          <button 
            className="w-full p-4 rounded bg-[#00B8FF] text-black font-mono"
          >
            PRIMARY_ACTION
          </button>
          
          <button 
            className="w-full p-4 rounded border border-[#00B8FF] text-[#00B8FF] font-mono"
          >
            SECONDARY_ACTION
          </button>
          
          <div 
            className="w-full p-4 rounded bg-[#111111] text-gray-500 font-mono"
          >
            DISABLED_STATE
          </div>
        </div>

        {/* Color Palette Test */}
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(colors).map(([name, value]) => (
            <div 
              key={name}
              className="p-4 rounded bg-[#111111]"
            >
              <div 
                className="h-20 rounded mb-2"
                style={{ backgroundColor: value }}
              />
              <div className="text-white font-mono">{name}</div>
              <div className="text-gray-500 font-mono">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleTest;