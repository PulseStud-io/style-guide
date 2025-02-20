import React, { useState } from 'react';


const ComponentsSection = () => {
  
  // State for various interactive elements
  const [checkboxes, setCheckboxes] = useState({
    option1: true,
    option2: false
  });
  const [radioValue, setRadioValue] = useState('option1');
  const [toggles, setToggles] = useState({
    toggle1: true,
    toggle2: false
  });
  const [sliderValue, setSliderValue] = useState(75);
  const [steppedSliderValue, setSteppedSliderValue] = useState(2);
  const [tags, setTags] = useState(['Tag_1', 'Tag_2', 'Tag_3']);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Buttons Section */}
      <div>
        <h3 className="font-mono text-lg text-white mb-4 md:mb-6">
          BUTTON_STYLES
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <button 
            onClick={() => alert('Primary action clicked!')}
            className="w-full px-4 md:px-6 py-3 rounded font-mono text-xs md:text-sm bg-gradient-to-r from-[#00B8FF] to-[#00FF9F] text-black transition-all duration-300 hover:opacity-90 active:scale-95"
          >
            PRIMARY
          </button>
          <button 
            onClick={() => alert('Secondary action clicked!')}
            className="w-full px-4 md:px-6 py-3 rounded font-mono text-xs md:text-sm border border-[#00B8FF] text-[#00B8FF] transition-all duration-300 hover:bg-[#00B8FF10] active:scale-95"
          >
            SECONDARY
          </button>
          <button 
            disabled
            className="w-full px-4 md:px-6 py-3 rounded font-mono text-xs md:text-sm bg-[#050505] border border-[#00B8FF20] text-gray-500 cursor-not-allowed"
          >
            DISABLED
          </button>
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
            <label className="flex items-center space-x-3 cursor-pointer group">
              <div 
                onClick={() => setCheckboxes(prev => ({ ...prev, option1: !prev.option1 }))}
                className="w-5 h-5 border border-[#00B8FF40] rounded flex items-center justify-center group-hover:border-[#00B8FF] transition-colors"
              >
                {checkboxes.option1 && <div className="w-3 h-3 bg-[#00B8FF] rounded-sm"></div>}
              </div>
              <span className="font-mono text-sm text-white">Option Selected</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer group">
              <div 
                onClick={() => setCheckboxes(prev => ({ ...prev, option2: !prev.option2 }))}
                className="w-5 h-5 border border-[#00B8FF40] rounded flex items-center justify-center group-hover:border-[#00B8FF] transition-colors"
              >
                {checkboxes.option2 && <div className="w-3 h-3 bg-[#00B8FF] rounded-sm"></div>}
              </div>
              <span className="font-mono text-sm text-white">Option Unselected</span>
            </label>
          </div>

          {/* Radio Buttons */}
          <div className="space-y-4">
            <div className="font-mono text-sm text-gray-400 mb-2">RADIO_BUTTONS</div>
            <label className="flex items-center space-x-3 cursor-pointer group">
              <div 
                onClick={() => setRadioValue('option1')}
                className="w-5 h-5 border border-[#00B8FF40] rounded-full flex items-center justify-center group-hover:border-[#00B8FF] transition-colors"
              >
                {radioValue === 'option1' && <div className="w-3 h-3 bg-[#00B8FF] rounded-full"></div>}
              </div>
              <span className="font-mono text-sm text-white">Selected</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer group">
              <div 
                onClick={() => setRadioValue('option2')}
                className="w-5 h-5 border border-[#00B8FF40] rounded-full flex items-center justify-center group-hover:border-[#00B8FF] transition-colors"
              >
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
                <div className={`w-12 h-6 rounded-full transition-colors duration-300 ${toggles.toggle1 ? 'bg-[#00B8FF20]' : 'bg-[#111111]'}`}></div>
                <div className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 ${
                  toggles.toggle1 
                    ? 'left-7 bg-[#00B8FF]' 
                    : 'left-1 bg-gray-500'
                }`}></div>
              </div>
            </label>
            <label 
              className="flex items-center justify-between cursor-pointer group"
              onClick={() => setToggles(prev => ({ ...prev, toggle2: !prev.toggle2 }))}
            >
              <span className="font-mono text-sm text-white">Inactive Toggle</span>
              <div className="relative">
                <div className={`w-12 h-6 rounded-full transition-colors duration-300 ${toggles.toggle2 ? 'bg-[#00B8FF20]' : 'bg-[#111111]'}`}></div>
                <div className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 ${
                  toggles.toggle2 
                    ? 'left-7 bg-[#00B8FF]' 
                    : 'left-1 bg-gray-500'
                }`}></div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Sliders */}
      <div>
        <h3 className="font-mono text-lg text-white mb-4 md:mb-6">
          SLIDERS
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="font-mono text-sm text-gray-400">BASIC_SLIDER ({sliderValue}%)</div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(parseInt(e.target.value))}
              className="w-full h-2 bg-[#111111] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00B8FF] [&::-webkit-slider-thumb]:cursor-pointer"
              style={{
                background: `linear-gradient(to right, #00B8FF ${sliderValue}%, #111111 ${sliderValue}%)`
              }}
            />
          </div>
          <div className="space-y-2">
            <div className="font-mono text-sm text-gray-400">STEPPED_SLIDER (Step {steppedSliderValue + 1}/5)</div>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="4"
                value={steppedSliderValue}
                onChange={(e) => setSteppedSliderValue(parseInt(e.target.value))}
                className="w-full h-2 bg-[#111111] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00B8FF] [&::-webkit-slider-thumb]:cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #00B8FF ${(steppedSliderValue + 1) * 25}%, #111111 ${(steppedSliderValue + 1) * 25}%)`
                }}
              />
              <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-1">
                {[0,1,2,3,4].map((step) => (
                  <div 
                    key={step}
                    className={`w-1 h-1 rounded-full ${
                      step <= steppedSliderValue ? 'bg-[#00FF9F]' : 'bg-gray-600'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tags/Chips */}
      <div>
        <h3 className="font-mono text-lg text-white mb-4 md:mb-6">
          TAGS
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div 
              key={tag}
              className="group relative px-3 py-1 rounded-full text-xs font-mono bg-[#00B8FF20] text-[#00B8FF] border border-[#00B8FF40] cursor-pointer hover:bg-[#00B8FF30] transition-colors"
              onClick={() => setTags(tags.filter((_, i) => i !== index))}
            >
              {tag}
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#00B8FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </div>
          ))}
          <button 
            onClick={() => setTags([...tags, `Tag_${tags.length + 1}`])}
            className="px-3 py-1 rounded-full text-xs font-mono border border-dashed border-[#00B8FF40] text-[#00B8FF] hover:border-[#00B8FF] transition-colors"
          >
            + Add Tag
          </button>
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
                placeholder="Neon Input"
                className="w-full px-4 py-3 rounded font-mono text-sm bg-[#111111] border border-[#00B8FF40] text-white focus:border-[#00B8FF] focus:outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,184,255,0.2)]"
              />
              <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-colors duration-300 ${
                inputValue ? 'bg-[#00FF9F]' : 'bg-[#00B8FF]'
              } animate-pulse`}></div>
            </div>
            <div className="relative">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search Input"
                className="w-full pl-10 pr-4 py-3 rounded font-mono text-sm bg-[#111111] border border-[#00B8FF40] text-white focus:border-[#00B8FF] focus:outline-none transition-all duration-300"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg className={`w-4 h-4 transition-colors duration-300 ${
                  searchValue ? 'text-[#00B8FF]' : 'text-gray-400'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsSection;