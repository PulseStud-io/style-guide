# Fansamble Style Guide

A design system for Fansamble, featuring interactive audio visualization and a cohesive component library.

## Features

### Brand Identity
- Gradient logo with integrated playhead
- Neon-inspired color scheme
- Monospace typography system
- Interactive audio elements
- Grid patterns and overlays

### Core Components
- Interactive buttons and form controls
- Panel variations
- Input states
- Navigation elements
- Audio visualizers

### Color Palette
- Primary: `#00B8FF` (Neon Blue)
- Secondary: `#00FF9F` (Neon Cyan)
- Accent: `#3D02FF` (Electric Purple)
- Dark: `#0A0A0A` (Base Dark)
- Darker: `#050505` (Deeper Dark)
- Panel: `#111111` (Panel Dark)
- Text: `#FFFFFF`
- Text Secondary: `#808080`

### Typography
- Display: MonoDisplay Bold (48px)
- Heading: MonoDisplay Medium (32px)
- Body: MonoLite Regular (16px)
- Caption: MonoLite Light (14px)

## Project Structure
```
src/
  components/
    StyleGuide.jsx              # Main style guide component
    audio/
      HeaderAudioVisualizer.jsx       # Audio playback visualizer
      HeaderAudioVisualizerMicInput.jsx # Microphone input visualizer
    sections/
      ComponentsSection.jsx     # UI component examples
      AnalyticsDashboard.jsx   # Data visualization examples
```

## Components

### HeaderAudioVisualizer
Audio playback visualization component featuring:
- Play/pause controls
- Waveform visualization
- Integration with brand logo

### HeaderAudioVisualizerMicInput
Microphone input visualization component featuring:
- Mic input controls
- Real-time waveform visualization
- Integration with brand logo

### Interactive Elements
- Primary/Secondary/Disabled buttons
- Checkboxes and radio buttons
- Toggle switches
- Input fields
- Progress indicators

### Pattern System
- Standard grid
- Perspective grid
- Circuit pattern
- Gradient overlays

## Usage

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## Dependencies
- React
- Vite
- Tailwind CSS
- Lucide React (icons)
- React Router Dom

## Browser Support
- Requires WebAudio API support
- Requires modern browser features for audio visualization
- Best viewed in Chrome, Firefox, or Safari

## Notes
- Audio visualization requires user interaction due to browser autoplay policies
- Microphone access requires user permission
- Canvas rendering is optimized for performance
- Responsive design supports mobile and desktop views

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
[License Type] - see LICENSE.md for details
