import React, { useState } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const AnalyticsDashboard = () => {
  const [timeframe, setTimeframe] = useState('daily');
  
  const colors = {
    primary: "#00B8FF",    // Neon Blue
    secondary: "#00FF9F",  // Neon Cyan
    accent: "#3D02FF",     // Electric Purple
    warning: "#FFB800",    // Warning Yellow
    success: "#00FF9F",    // Success Green
    panel: "#111111",      // Panel Dark
  };

  // Enhanced mock data generation with music-specific metrics
  const generateEnhancedData = (days, scale = 1) => {
    return Array.from({ length: days }).map((_, i) => ({
      date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      // User metrics
      activeUsers: Math.floor((Math.sin(i * 0.1) + 2) * 1000 * scale),
      newRegisters: Math.floor((Math.cos(i * 0.1) + 1.5) * 100 * scale),
      
      // Generation metrics
      generations: Math.floor((Math.sin(i * 0.15) + 2) * 500 * scale),
      promptLength: Math.floor(50 + Math.sin(i * 0.1) * 20),
      iterationCount: Math.floor(3 + Math.sin(i * 0.15) * 2),
      generationSuccess: 90 + Math.floor(Math.sin(i * 0.05) * 5),
      avgGenerationTime: Math.floor(30 + Math.sin(i * 0.1) * 10),
      
      // Engagement metrics
      avgSessionMinutes: Math.floor((Math.sin(i * 0.08) + 2) * 15 * scale),
      completionRate: 50 + Math.floor(Math.sin(i * 0.05) * 20),
      repeatPlays: Math.floor((Math.cos(i * 0.1) + 1.5) * 50 * scale),
      
      // Music metrics
      plays: Math.floor((Math.sin(i * 0.12) + 2) * 1000 * scale),
      downloads: Math.floor((Math.cos(i * 0.1) + 1.5) * 200 * scale),
      ratings: Math.floor((Math.cos(i * 0.1) + 2) * 150 * scale),
      avgRating: ((Math.sin(i * 0.05) + 4) / 2).toFixed(1),
      forks: Math.floor((Math.cos(i * 0.1) + 1.5) * 50 * scale),
      computeHours: Math.floor((Math.sin(i * 0.1) + 2) * 200 * scale),
      
      // Growth metrics
      followers: Math.floor((Math.sin(i * 0.05) + 2) * 200 * scale),
      engagement: Math.floor(5 + Math.sin(i * 0.1) * 2),
    }));
  };

  const timeframes = {
    daily: generateEnhancedData(30, 1),
    weekly: generateEnhancedData(90, 2),
    monthly: generateEnhancedData(365, 4)
  };

  // Stats cards data
  const currentStats = {
    activeUsers: {
      value: '27.8k',
      change: '+12.3%',
      positive: true
    },
    totalGenerations: {
      value: '142.5k',
      change: '+8.7%',
      positive: true
    },
    avgRating: {
      value: '4.8',
      change: '+0.2',
      positive: true
    },
    totalForks: {
      value: '3.2k',
      change: '+15.5%',
      positive: true
    }
  };

  // Render sections
  const renderEngagementMetrics = () => (
    <div className="p-4 md:p-6 rounded-lg bg-[#111111] border border-[#00B8FF20]">
      <h3 className="font-mono text-base md:text-lg text-white mb-4 md:mb-6">ENGAGEMENT_METRICS</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded bg-[#0A0A0A] border border-[#00B8FF10]">
          <div className="font-mono text-sm text-gray-400">AVG_SESSION</div>
          <div className="font-mono text-lg md:text-xl text-white mt-2">
            {timeframes[timeframe][timeframes[timeframe].length - 1].avgSessionMinutes}m
          </div>
        </div>
        <div className="p-4 rounded bg-[#0A0A0A] border border-[#00B8FF10]">
          <div className="font-mono text-sm text-gray-400">COMPLETION_RATE</div>
          <div className="font-mono text-lg md:text-xl text-white mt-2">
            {timeframes[timeframe][timeframes[timeframe].length - 1].completionRate}%
          </div>
        </div>
        <div className="p-4 rounded bg-[#0A0A0A] border border-[#00B8FF10]">
          <div className="font-mono text-sm text-gray-400">REPEAT_PLAYS</div>
          <div className="font-mono text-lg md:text-xl text-white mt-2">
            {timeframes[timeframe][timeframes[timeframe].length - 1].repeatPlays}
          </div>
        </div>
      </div>
    </div>
  );

  const renderMusicMetrics = () => (
    <div className="p-4 md:p-6 rounded-lg bg-[#111111] border border-[#00B8FF20]">
      <h3 className="font-mono text-base md:text-lg text-white mb-4 md:mb-6">MUSIC_METRICS</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="h-[250px] md:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={timeframes[timeframe]}>
              <CartesianGrid strokeDasharray="3 3" stroke={`${colors.primary}20`} />
              <XAxis dataKey="date" stroke="#808080" />
              <YAxis stroke="#808080" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: colors.panel,
                  border: `1px solid ${colors.primary}40`
                }}
              />
              <Line 
                type="monotone" 
                dataKey="plays" 
                name="Plays"
                stroke={colors.primary} 
                strokeWidth={2}
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="downloads" 
                name="Downloads"
                stroke={colors.secondary} 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="h-[250px] md:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={timeframes[timeframe]}>
              <CartesianGrid strokeDasharray="3 3" stroke={`${colors.primary}20`} />
              <XAxis dataKey="date" stroke="#808080" />
              <YAxis stroke="#808080" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: colors.panel,
                  border: `1px solid ${colors.primary}40`
                }}
              />
              <Area 
                type="monotone" 
                dataKey="ratings" 
                name="Ratings"
                stroke={colors.warning}
                fill={`${colors.warning}20`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderTechnicalMetrics = () => (
    <div className="p-4 md:p-6 rounded-lg bg-[#111111] border border-[#00B8FF20]">
      <h3 className="font-mono text-base md:text-lg text-white mb-4 md:mb-6">TECHNICAL_METRICS</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="space-y-2">
          <div className="font-mono text-sm text-gray-400">GENERATION_SUCCESS</div>
          <div className="w-full bg-[#0A0A0A] rounded-full h-3 md:h-4">
            <div 
              className="bg-gradient-to-r from-[#00B8FF] to-[#00FF9F] h-3 md:h-4 rounded-full"
              style={{ 
                width: `${timeframes[timeframe][timeframes[timeframe].length - 1].generationSuccess}%` 
              }}
            />
          </div>
          <div className="font-mono text-sm text-white">
            {timeframes[timeframe][timeframes[timeframe].length - 1].generationSuccess}%
          </div>
        </div>
        <div className="space-y-2">
          <div className="font-mono text-sm text-gray-400">AVG_GENERATION_TIME</div>
          <div className="font-mono text-xl md:text-2xl text-white">
            {timeframes[timeframe][timeframes[timeframe].length - 1].avgGenerationTime}s
          </div>
        </div>
      </div>
    </div>
  );

  const renderGeographicMetrics = () => {
    const geoData = [
      { region: 'North America', value: 8500, growth: '+12%' },
      { region: 'Europe', value: 6200, growth: '+15%' },
      { region: 'Asia', value: 7800, growth: '+18%' },
      { region: 'South America', value: 2100, growth: '+22%' },
      { region: 'Africa', value: 1500, growth: '+25%' },
      { region: 'Oceania', value: 900, growth: '+10%' }
    ];

    return (
      <div className="p-4 md:p-6 rounded-lg bg-[#111111] border border-[#00B8FF20]">
        <h3 className="font-mono text-base md:text-lg text-white mb-4 md:mb-6">GEOGRAPHICAL_DISTRIBUTION</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {geoData.map(({ region, value, growth }) => (
            <div key={region} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="font-mono text-sm text-gray-400">{region}</div>
                <div className="font-mono text-xs text-[#00FF9F]">{growth}</div>
              </div>
              <div className="h-2 rounded-full bg-[#111111] border border-[#00B8FF20]">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-[#00B8FF] to-[#00FF9F]"
                  style={{ 
                    width: `${(value / 8500) * 100}%`
                  }}
                />
              </div>
              <div className="font-mono text-sm text-white">{value.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4 md:space-y-8">
      {/* Time Selection */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h2 className="font-mono text-xl md:text-2xl text-white">ANALYTICS_DASHBOARD</h2>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {['daily', 'weekly', 'monthly'].map((period) => (
            <button
              key={period}
              onClick={() => setTimeframe(period)}
              className={`
                px-3 py-1.5 md:px-4 md:py-2 rounded font-mono text-xs md:text-sm border transition-all duration-300
                ${timeframe === period 
                  ? 'bg-[#00B8FF] text-black border-[#00B8FF]' 
                  : 'bg-transparent text-white border-[#00B8FF]'
                }
              `}
            >
              {period.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {Object.entries(currentStats).map(([key, { value, change, positive }]) => (
          <div key={key} className="p-3 md:p-6 rounded-lg bg-[#111111] border border-[#00B8FF20]">
            <div className="font-mono text-xs md:text-sm text-gray-400 mb-2">
              {key.toUpperCase()}
            </div>
            <div className="font-mono text-lg md:text-2xl text-white mb-1 md:mb-2">
              {value}
            </div>
            <div className={`font-mono text-xs md:text-sm ${positive ? 'text-[#00FF9F]' : 'text-red-500'}`}>
              {change}
            </div>
          </div>
        ))}
      </div>

      {/* Core Metrics */}
      {renderEngagementMetrics()}
      {renderMusicMetrics()}
      {renderTechnicalMetrics()}
      {renderGeographicMetrics()}
    </div>
  );
};

export default AnalyticsDashboard;