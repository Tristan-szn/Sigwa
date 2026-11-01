import React, { useState } from 'react';
import { CloudRain, Sun, Wind, Thermometer, AlertTriangle, Compass, Calendar, Newspaper, MapPin, Search, Anchor, BarChart3 } from 'lucide-react';
import WeatherMap from './components/WeatherMap';
import WeatherCharts from './components/WeatherCharts';
import MarineBulletin from './components/MarineBulletin';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCity, setSelectedCity] = useState('Metro Manila');

  const cities = ['Metro Manila', 'Cebu City', 'Davao City', 'Baguio City', 'Bulacan', 'Iloilo City'];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Top Warning Banner */}
      <div className="bg-amber-600/90 text-white px-4 py-2 text-xs md:text-sm font-medium flex items-center justify-between">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full">
          <AlertTriangle className="w-4 h-4 shrink-0 animate-pulse" />
          <span><strong>PAGASA Advisory:</strong> Active monitoring within the Philippine Area of Responsibility (PAR). Gale warnings raised in Northern Seaboards.</span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl text-white font-black text-xl tracking-wider shadow-lg shadow-blue-600/30">
              PANaHON
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-200">Philippine Weather Portal</h1>
              <p className="text-xs text-slate-400">Live Forecast & PAR Tracking</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs md:text-sm overflow-x-auto">
            <button onClick={() => setActiveTab('dashboard')} className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>Dashboard</button>
            <button onClick={() => setActiveTab('map')} className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'map' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>Live Map & PAR</button>
            <button onClick={() => setActiveTab('marine')} className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'marine' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>Marine & Tides</button>
            <button onClick={() => setActiveTab('news')} className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'news' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>Weather News</button>
          </nav>
        </div>
      </header>

      {/* Content Body */}
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {activeTab === 'dashboard' && (
          <>
            {/* Location Selector Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Stations:
              </span>
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition whitespace-nowrap ${selectedCity === city ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'}`}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Current Weather Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedCity}</h2>
                      <p className="text-xs text-slate-400">PAGASA Weather Station Feed • Live Update</p>
                    </div>
                    <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-2.5 py-1 rounded-full font-medium">Normal</span>
                  </div>
                  <div className="flex items-center gap-6 my-6">
                    <div className="text-6xl font-black text-white tracking-tighter">28°C</div>
                    <div>
                      <div className="text-lg font-semibold text-slate-200">Partly Cloudy with Scattered Showers</div>
                      <div className="text-xs text-slate-400">Feels like 32°C • High: 33°C | Low: 24°C</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-sm">
                  <div className="flex items-center gap-2"><Wind className="w-4 h-4 text-blue-400" /><div><div className="text-xs text-slate-400">Wind</div><div className="font-semibold text-slate-200">12 km/h ENE</div></div></div>
                  <div className="flex items-center gap-2"><Thermometer className="w-4 h-4 text-amber-400" /><div><div className="text-xs text-slate-400">Humidity</div><div className="font-semibold text-slate-200">82%</div></div></div>
                  <div className="flex items-center gap-2"><CloudRain className="w-4 h-4 text-cyan-400" /><div><div className="text-xs text-slate-400">Rainfall</div><div className="font-semibold text-slate-200">0.2 mm/hr</div></div></div>
                </div>
              </div>

              {/* Heat Index Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Heat Index Monitor</h3>
                  <p className="text-xs text-slate-400 mb-4">Computed hazard level based on relative humidity.</p>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
                    <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Caution Level</div>
                    <div className="text-3xl font-extrabold text-amber-300 my-1">36°C</div>
                    <p className="text-xs text-slate-300">Fatigue is possible with prolonged outdoor exposure.</p>
                  </div>
                </div>
                <div className="text-xs text-slate-400 text-center pt-4 border-t border-slate-800">PAGASA Climatology Division</div>
              </div>
            </div>

            {/* Weather Charts & Hourly Trends */}
            <WeatherCharts />

            {/* 7-Day Weather Outlook */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">7-Day Weather Outlook</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {['Today', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
                  <div key={day} className={`p-4 rounded-xl border text-center flex flex-col items-center justify-between ${idx === 0 ? 'bg-blue-600/10 border-blue-500/50' : 'bg-slate-950 border-slate-800'}`}>
                    <span className="text-xs font-bold text-slate-300">{day}</span>
                    <Sun className="w-8 h-8 text-amber-400 my-2" />
                    <span className="text-xs text-slate-400">Scattered Showers</span>
                    <div className="mt-2 text-sm font-bold text-white">33°C <span className="text-xs font-normal text-slate-400">/ 24°C</span></div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'map' && <WeatherMap />}
        {activeTab === 'marine' && <MarineBulletin />}

        {activeTab === 'news' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2"><Newspaper className="w-5 h-5 text-blue-400" /> Weather Bulletins & News</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-slate-700 transition cursor-pointer">
                  <div className="text-xs text-blue-400 font-semibold mb-1">PAGASA Special Weather Bulletin • Active Advisory</div>
                  <h4 className="font-bold text-white text-base">State Bureau Monitors Weather Systems Affecting Luzon and Visayas</h4>
                  <p className="text-xs text-slate-400 mt-1">Continuous monitoring of cloud formations within the Philippine Area of Responsibility (PAR) for heavy rainfall warnings...</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}