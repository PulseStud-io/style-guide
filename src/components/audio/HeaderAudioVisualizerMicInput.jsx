import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const HeaderAudioVisualizerMicInput = () => {
  const [isRecording, setIsRecording] = useState(false);
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const streamRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const initAudio = async () => {
      try {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 2048;
      } catch (err) {
        console.error('Error initializing audio context:', err);
      }
    };

    initAudio();

    // Handle window resize for canvas
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const toggleRecording = async () => {
    if (!isRecording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        streamRef.current = stream;
        const source = audioContextRef.current.createMediaStreamSource(stream);
        source.connect(analyserRef.current);
        setIsRecording(true);
        draw();
      } catch (err) {
        console.error('Error accessing microphone:', err);
      }
    } else {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      setIsRecording(false);
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas || !isRecording) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const drawFrame = () => {
      animationFrameRef.current = requestAnimationFrame(drawFrame);

      analyserRef.current.getByteTimeDomainData(dataArray);
      ctx.fillStyle = 'rgba(10, 10, 10, 0.2)';
      ctx.fillRect(0, 0, width, height);
      
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

      ctx.stroke();
    };

    drawFrame();
  };

  return (
    <div className="w-full space-y-4">
      {/* Logo Row */}
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleRecording}
            className="text-[#00B8FF] hover:text-[#00FF9F] transition-colors"
          >
            {isRecording ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
          <svg className="h-8" viewBox="0 0 300 50">
            <defs>
              <linearGradient id="headerLogoGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00B8FF" />
                <stop offset="100%" stopColor="#00FF9F" />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="40"
              style={{
                fill: 'url(#headerLogoGrad)',
                fontStyle: 'italic',
                fontSize: '48px',
                fontWeight: 'bold'
              }}
            >
              fansamble
            </text>
          </svg>
        </div>
      </div>

      {/* Waveform Visualization */}
      <div className="w-full">
        <canvas
          ref={canvasRef}
          height={2}
          className="w-full bg-[#111111]"
        />
      </div>
    </div>
  );
};

export default HeaderAudioVisualizerMicInput;