import React, { useState } from 'react';

const ComponentsSection = () => {
  // State for interactive components
  const [checkboxes, setCheckboxes] = useState({
    option1: true,
    option2: false
  });
  const [radioValue, setRadioValue] = useState('option1');
  const [toggles, setToggles] = useState({
    toggle1: true,
    toggle2: false
  });
  const [inputValue, setInputValue] = useState('');
  const [activeInput, setActiveInput] = useState('');

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Buttons */}
      <div>
        <h3 className="font-mono text-lg text-white mb-4 md:mb-6">
          BUTTON_STYLES
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <button className="w-full px-4 md:px-6 py-3 rounded font-mono text-xs md:text-sm bg-gradient-to-r from-[#00B8FF] to-[#00FF9F] text-black transition-all duration-300 hover:opacity-90 active:scale-95">
            PRIMARY
          </button>
          <button className="w-full px-4 md:px-6 py-3 rounded font-mono text-xs md:text-sm border border-[#00B8FF] text-[#00B8FF] transition-all duration-300 hover:bg-[#00B8FF10] active:scale-95">
            SECONDARY
          </button>
          <div className="w-full px-4 md:px-6 py-3 rounded font-mono text-xs md:text-sm bg-[#050505] border border-[#00B8FF20] text-gray-500 text-center">
            DISABLED
          </div>
        </div>
      </div>

      {/* Form Controls */}
      <div>
        <h3 className="font-mono text-lg text-white mb-4 md:mb-6">
          FORM_CONTROLS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Checkboxes */}
          <div className="space-y-4">
            <div className="font-mono text-sm text-gray-400 mb-2">CHECKBOXES</div>
            <label 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => setCheckboxes(prev => ({ ...prev, option1: !prev.option1 }))}
            >
              <div className="w-5 h-5 border border-[#00B8FF40] rounded flex items-center justify-center group-hover:border-[#00B8FF] transition-colors">
                {checkboxes.option1 && <div className="w-3 h-3 bg-[#00B8FF] rounded-sm"></div>}
              </div>
              <span className="font-mono text-sm text-white">Option Selected</span>
            </label>
            <label 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => setCheckboxes(prev => ({ ...prev, option2: !prev.option2 }))}
            >
              <div className="w-5 h-5 border border-[#00B8FF40] rounded flex items-center justify-center group-hover:border-[#00B8FF] transition-colors">
                {checkboxes.option2 && <div className="w-3 h-3 bg-[#00B8FF] rounded-sm"></div>}
              </div>
              <span className="font-mono text-sm text-white">Option Unselected</span>
            </label>
          </div>

          {/* Radio Buttons */}
          <div className="space-y-4">
            <div className="font-mono text-sm text-gray-400 mb-2">RADIO_BUTTONS</div>
            <label 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => setRadioValue('option1')}
            >
              <div className="w-5 h-5 border border-[#00B8FF40] rounded-full flex items-center justify-center group-hover:border-[#00B8FF] transition-colors">
                {radioValue === 'option1' && <div className="w-3 h-3 bg-[#00B8FF] rounded-full"></div>}
              </div>
              <span className="font-mono text-sm text-white">Selected</span>
            </label>
            <label 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => setRadioValue('option2')}
            >
              <div className="w-5 h-5 border border-[#00B8FF40] rounded-full flex items-center justify-center group-hover:border-[#00B8FF] transition-colors">
                {radioValue === 'option2' && <div className="w-3 h-3 bg-[#00B8FF] rounded-full"></div>}
              </div>
              <span className="font-mono text-sm text-white">Unselected</span>
            </label>
          </div>
        </div>
      </div>

      {/* Toggle Switches */}
      <div>
        <h3 className="font-mono text-lg text-white mb-4 md:mb-6">
          TOGGLE_SWITCHES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label 
              className="flex items-center justify-between cursor-pointer group"
              onClick={() => setToggles(prev => ({ ...prev, toggle1: !prev.toggle1 }))}
            >
              <span className="font-mono text-sm text-white">Active Toggle</span>
              <div className="relative">
                <div className={`w-12 h-6 rounded-full transition-colors ${toggles.toggle1 ? 'bg-[#00B8FF20]' : 'bg-[#111111]'}`}></div>
                <div 
                  className={`absolute top-1 w-4 h-4 rounded-full transition-transform ${
                    toggles.toggle1 
                      ? 'left-7 bg-[#00B8FF]' 
                      : 'left-1 bg-gray-500'
                  }`}
                ></div>
              </div>
            </label>
            <label 
              className="flex items-center justify-between cursor-pointer group"
              onClick={() => setToggles(prev => ({ ...prev, toggle2: !prev.toggle2 }))}
            >
              <span className="font-mono text-sm text-white">Inactive Toggle</span>
              <div className="relative">
                <div className={`w-12 h-6 rounded-full transition-colors ${toggles.toggle2 ? 'bg-[#00B8FF20]' : 'bg-[#111111]'}`}></div>
                <div 
                  className={`absolute top-1 w-4 h-4 rounded-full transition-transform ${
                    toggles.toggle2 
                      ? 'left-7 bg-[#00B8FF]' 
                      : 'left-1 bg-gray-500'
                  }`}
                ></div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Input Fields */}
      <div>
        <h3 className="font-mono text-lg text-white mb-4 md:mb-6">
          INPUT_FIELDS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Default Input"
                className="w-full px-4 py-3 rounded font-mono text-sm bg-[#111111] border border-[#00B8FF40] text-white focus:border-[#00B8FF] focus:outline-none transition-all duration-300"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                value={activeInput}
                onChange={(e) => setActiveInput(e.target.value)}
                placeholder="Active Input"
                className="w-full px-4 py-3 rounded font-mono text-sm bg-[#111111] border border-[#00B8FF] text-white outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsSection;