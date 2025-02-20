import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StyleGuide from './components/StyleGuide';
import FanEngagement from './components/FanEngagement';
import PitchDeck from './components/PitchDeck';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StyleGuide />} />
        <Route path="/fan-engagement" element={<FanEngagement />} />
        <Route path="/pitch-deck" element={<PitchDeck />} />
      </Routes>
    </Router>
  );
}

export default App;