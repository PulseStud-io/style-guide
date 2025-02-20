import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const WaveformPreview = ({ audioUrl }) => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#4a4a4a',
        progressColor: '#00B8FF',
        cursorColor: '#00FF9F',
        barWidth: 2,
        barGap: 1,
        responsive: true,
        height: 100,
        barRadius: 3,
        normalize: true,
        backgroundColor: '#111111'
      });

      wavesurferRef.current.load(audioUrl);

      return () => {
        if (wavesurferRef.current) {
          wavesurferRef.current.destroy();
        }
      };
    }
  }, [audioUrl]);

  return (
    <div className="w-full rounded-lg overflow-hidden bg-[#111111] p-4">
      <div ref={waveformRef} />
    </div>
  );
};

export default WaveformPreview;