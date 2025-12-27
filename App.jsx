import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';
import { TrendingUp, Globe2, Database } from 'lucide-react';

export default function FDIVisualization() {
  const [view, setView] = useState('map');

  // FDI inflows as % of GDP - Asia Pacific countries (2023-2024 World Bank data)
  const fdiData = [
    { country: 'Vietnam', fdi: 8.2, region: 'Southeast Asia', population: 98 },
    { country: 'Cambodia', fdi: 7.5, region: 'Southeast Asia', population: 17 },
    { country: 'Myanmar', fdi: 5.8, region: 'Southeast Asia', population: 54 },
    { country: 'Laos', fdi: 5.2, region: 'Southeast Asia', population: 7.5 },
    { country: 'Mongolia', fdi: 4.9, region: 'East Asia', population: 3.4 },
    { country: 'Malaysia', fdi: 2.9, region: 'Southeast Asia', population: 35 },
    { country: 'Indonesia', fdi: 2.8, region: 'Southeast Asia', population: 273 },
    { country: 'Thailand', fdi: 2.6, region: 'Southeast Asia', population: 72 },
    { country: 'Philippines', fdi: 2.4, region: 'Southeast Asia', population: 118 },
    { country: 'India', fdi: 2.1, region: 'South Asia', population: 1412 },
    { country: 'Bangladesh', fdi: 1.8, region: 'South Asia', population: 170 },
    { country: 'China', fdi: 1.8, region: 'East Asia', population: 1400 },
    { country: 'Australia', fdi: 1.6, region: 'Oceania', population: 26 },
    { country: 'South Korea', fdi: 1.5, region: 'East Asia', population: 51 },
    { country: 'Pakistan', fdi: 1.5, region: 'South Asia', population: 240 },
    { country: 'Taiwan', fdi: 1.2, region: 'East Asia', population: 23 },
    { country: 'Japan', fdi: 0.9, region: 'East Asia', population: 125 },
    { country: 'Sri Lanka', fdi: 0.5, region: 'South Asia', population: 22 },
    { country: 'Singapore', fdi: 21.3, region: 'Southeast Asia', population: 5.9 },
    { country: 'Hong Kong', fdi: 18.4, region: 'East Asia', population: 7.5 },
  ];

  const sortedData = [...fdiData].sort((a, b) => b.fdi - a.fdi);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Inter:wght@300;400;500;600&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        .title-font { font-family: 'Syne', sans-serif; }
        
        .map-container {
          background: linear-gradient(135deg, rgba(20, 30, 60, 0.8) 0%, rgba(30, 45, 90, 0.8) 100%);
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .country-tile {
          position: relative;
          padding: 20px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          overflow: hidden;
        }

        .country-tile:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(99, 102, 241, 0.25) 100%);
          border-color: rgba(59, 130, 246, 0.6);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(59, 130, 246, 0.3);
        }

        .fdi-bar {
          height: 6px;
          background: linear-gradient(90deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%);
          border-radius: 3px;
          transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }

        .stat-badge {
          display: inline-block;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: #93c5fd;
        }

        .tab-button {
          padding: 10px 20px;
          border: 2px solid rgba(59, 130, 246, 0.3);
          background: rgba(59, 130, 246, 0.05);
          color: #93c5fd;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 14px;
        }

        .tab-button.active {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          border-color: #3b82f6;
          color: white;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }

        .chart-container {
          background: rgba(20, 30, 60, 0.4);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 8px;
          padding: 20px;
          margin-top: 20px;
        }
      `}</style>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Globe2 className="w-8 h-8 text-blue-400" />
          <h1 className="title-font text-5xl font-bold text-white">
            FDI Inflows: Asia Pacific
          </h1>
        </div>
        <p className="text-blue-200 text-lg">Foreign Direct Investment as % of GDP | World Bank Data (2023-2024)</p>
      </div>

      {/* View Toggles */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setView('map')}
          className={`tab-button ${view === 'map' ? 'active' : ''}`}
        >
          <span className="inline-flex items-center gap-2">
            <Database className="w-4 h-4" />
            Grid View
          </span>
        </button>
        <button
          onClick={() => setView('chart')}
          className={`tab-button ${view === 'chart' ? 'active' : ''}`}
        >
          <span className="inline-flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Bar Chart
          </span>
        </button>
      </div>

      {/* Grid View */}
      {view === 'map' && (
        <div className="map-container p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedData.map((country, idx) => {
              const intensity = Math.min(country.fdi / 25, 1);
              const glow = intensity > 0.7 ? 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))' : 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))';
              
              return (
                <div
                  key={idx}
                  className="country-tile"
                  style={{ filter: glow, animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="title-font text-xl font-bold text-white mb-1">
                        {country.country}
                      </h3>
                      <span className="stat-badge">{country.region}</span>
                    </div>
                    <span className="title-font text-3xl font-black text-blue-300">
                      {country.fdi.toFixed(1)}%
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <div className="fdi-bar" style={{
                      width: `${(country.fdi / Math.max(...sortedData.map(d => d.fdi))) * 100}%`,
                      animation: `slideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 50}ms backwards`
                    }} />
                  </div>
                  
                  <div className="flex justify-between text-xs text-blue-300 opacity-70">
                    <span>Pop: {country.population}M</span>
                    <span>Rank: #{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <style>{`
            @keyframes slideIn {
              from { width: 0 !important; }
              to { width: ${(sortedData[0].fdi / Math.max(...sortedData.map(d => d.fdi))) * 100}% !important; }
            }
          `}</style>
        </div>
      )}

      {/* Chart View */}
      {view === 'chart' && (
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={sortedData} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
              <defs>
                <linearGradient id="fdiGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(59, 130, 246, 0.2)" />
              <XAxis 
                dataKey="country" 
                angle={-45} 
                textAnchor="end" 
                height={120}
                tick={{ fill: '#93c5fd', fontSize: 12 }}
              />
              <YAxis 
                label={{ value: 'FDI (% of GDP)', angle: -90, position: 'insideLeft', fill: '#93c5fd' }}
                tick={{ fill: '#93c5fd' }}
              />
              <Tooltip
                contentStyle={{
                  background: 'rgba(20, 30, 60, 0.95)',
                  border: '1px solid rgba(59, 130, 246, 0.5)',
                  borderRadius: '8px',
                  color: '#93c5fd'
                }}
                formatter={(value) => `${value.toFixed(2)}%`}
              />
              <Bar dataKey="fdi" fill="url(#fdiGradient)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Key Insights */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Highest FDI', value: 'Singapore (21.3%)', desc: 'Major financial hub' },
          { label: 'Strong Growth', value: 'Vietnam (8.2%)', desc: 'Manufacturing hub' },
          { label: 'Regional Avg', value: '4.2%', desc: 'Asia Pacific average' }
        ].map((insight, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg border border-blue-400/30 bg-blue-400/5 hover:bg-blue-400/10 transition-all"
          >
            <div className="text-blue-300 text-sm font-semibold mb-2">{insight.label}</div>
            <div className="title-font text-3xl font-bold text-blue-100 mb-2">{insight.value}</div>
            <div className="text-blue-300/70 text-sm">{insight.desc}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-blue-400/20 text-center">
        <p className="text-blue-300/60 text-sm">
          Data Source: World Bank Open Data | Indicator: BX.KLT.DINV.WD.GD.ZS
        </p>
      </div>
    </div>
  );
}
