import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StyleGuide from './components/StyleGuide';
import FanEngagement from './components/FanEngagement';
import PitchDeck from './components/PitchDeck';
import LandingPage from './components/LandingPage';

// Create a video redirect component
function VideoRedirect() {
  useEffect(() => {
    window.location.href = "https://fansamble-videos.s3.us-west-2.amazonaws.com/pitch.mp4";
  }, []);
  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/style-guide" element={<StyleGuide />} />
        <Route path="/fan-engagement" element={<FanEngagement />} />
        <Route path="/pitch-deck" element={<PitchDeck />} />
        <Route path="/pitch.mp4" element={<VideoRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;