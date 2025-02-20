import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const HeaderAudioVisualizer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const audioElementRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const initAudio = async () => {
      try {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
          analyserRef.current = audioContextRef.current.createAnalyser();
          analyserRef.current.fftSize = 2048;
        }

        const audioElement = new Audio();
        audioElement.crossOrigin = "anonymous";
        
        audioElement.addEventListener('canplaythrough', () => {
          setAudioLoaded(true);
        });

        audioElement.src = '/assets/EZEZ.mp3';
        await audioElement.load();
        
        audioElementRef.current = audioElement;

        const source = audioContextRef.current.createMediaElementSource(audioElement);
        source.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);
      } catch (error) {
        console.error('Audio initialization error:', error);
      }
    };

    initAudio();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (audioElementRef.current) {
        audioElementRef.current.pause();
        audioElementRef.current.src = '';
        audioElementRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth - 32;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const togglePlayback = async () => {
    try {
      if (audioElementRef.current) {
        if (isPlaying) {
          await audioElementRef.current.pause();
        } else {
          if (audioContextRef.current.state === 'suspended') {
            await audioContextRef.current.resume();
          }
          await audioElementRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    } catch (error) {
      console.error('Playback toggle error:', error);
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const drawFrame = () => {
      animationFrameRef.current = requestAnimationFrame(drawFrame);
      
      ctx.fillStyle = 'rgba(10, 10, 10, 0.2)';
      ctx.fillRect(0, 0, width, height);
      
      analyserRef.current.getByteTimeDomainData(dataArray);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#00B8FF';
      ctx.beginPath();
      
      const sliceWidth = width / bufferLength;
      let x = 0;
      
      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = v * height / 2;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        x += sliceWidth;
      }
      
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#00B8FF';
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    drawFrame();
  };

  useEffect(() => {
    if (isPlaying) {
      draw();
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, [isPlaying]);

  return (
    <div className="flex flex-col space-y-2">
      {/* Logo and Play Control Row */}
      <div className="flex items-center space-x-4">
        <button
          onClick={togglePlayback}
          disabled={!audioLoaded}
          className={`p-2 rounded-lg ${
            audioLoaded ? 'bg-transparent hover:bg-[#1a1a1a]' : 'bg-transparent opacity-50'
          } transition-colors`}
        >
          {isPlaying ? <Pause className="w-6 h-6 text-[#00B8FF]" /> : <Play className="w-6 h-6 text-[#00B8FF]" />}
        </button>
      </div>

      {/* Full-width Oscilloscope */}
      <div className="w-full">
        <canvas
          ref={canvasRef}
          height={40}
          className="w-full rounded-lg bg-[#111111]"
        />
      </div>
    </div>
  );
};

export default HeaderAudioVisualizer;