import React, { useState } from 'react';
import { CloudRain, Sun, Wind, Thermometer, AlertTriangle, Compass, Newspaper, MapPin, Search, ExternalLink, CloudLightning, Cloud } from 'lucide-react';
import WeatherMap from './components/WeatherMap';
import WeatherCharts from './components/WeatherCharts';
import MarineBulletin from './components/MarineBulletin';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedRegion, setSelectedRegion] = useState('National Capital Region');
  const [selectedCity, setSelectedCity] = useState('Metro Manila');
  const [weatherCondition, setWeatherCondition] = useState('sunny'); // sunny, rainy, cloudy, storm

  // Regional groupings following PAGASA format
  const regionalStations = {
    'Northern Luzon': ['Baguio City', 'Laoag', 'Tuguegarao', 'Batanes'],
    'National Capital Region': ['Metro Manila', 'Quezon City', 'Caloocan', 'Pasay'],
    'Southern Luzon': ['Tagaytay', 'Batangas', 'Legazpi', 'Puerto Princesa'],
    'Visayas': ['Cebu City', 'Iloilo City', 'Tacloban', 'Bacolod'],
    'Mindanao': ['Davao City', 'Cagayan de Oro', 'Zamboanga', 'General Santos']
  };

  // Dynamic Background Images based on weather
  const bgImages = {
    sunny: 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1920&auto=format&fit=crop',
    rainy: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1920&auto=format&fit=crop',
    cloudy: 'https://images.unsplash.com/photo-1534088568595-a066fa41088a?q=80&w=1920&auto=format&fit=crop',
    storm: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=1920&auto=format&fit=crop'
  };

  const newsItems = [
    {
      title: "PAGASA: Lpa monitored outside PAR, possible entry by midweek",
      source: "PAGASA Official",
      url: "https://www.pagasa.dost.gov.ph/",
      time: "1 hour ago",
      snippet: "State weather bureau is monitoring a cloud cluster tracking westward towards Philippine waters..."
    },
    {
      title: "GMA Integrated News Weather Center: Habagat dampens parts of Luzon",
      source: "GMA News",
      url: "https://www.gmanetwork.com/news/weather/",
      time: "3 hours ago",
      snippet: "Intermittent rains expected across Northern and Central Luzon due to the southwest monsoon..."
    },
    {
      title: "Rappler Weather: Understanding Tropical Cyclone Wind Signals (TCWS)",
      source: "Rappler",
      url: "https://www.rappler.com/weather/",
      time: "5 hours ago",
      snippet: "A comprehensive guide on what preparations to make when Signal No. 1 through 5 are raised..."
    },
    {
      title: "ABS-CBN News Weather updates: Flood advisories for low-lying areas",
      source: "ABS-CBN News",
      url: "https://news.abs-cbn.com/weather",
      time: "6 hours ago",
      snippet: "Local disaster management units issue precautionary alerts amid afternoon thunderstorms..."
    }
  ];

  return (
    <div 
      className="min-h-screen text-slate-100 font-sans transition-all duration-700 bg-cover bg-center relative"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.95)), url('${bgImages[weatherCondition]}')` }}
    >
      {/* Top Warning Banner */}
      <div className="bg-amber-600/90 text-white px-4 py-2 text-xs md:text-sm font-medium flex items-center justify-between backdrop-blur-md relative z-20">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full">
          <AlertTriangle className="w-4 h-4 shrink-0 animate-pulse" />
          <span><strong>PAGASA Advisory:</strong> Active monitoring within the Philippine Area of Responsibility (PAR).</span>
        </div>
      </div>

      {/* Main Glassmorphism Header */}
      <header className="border-b border-slate-800/60 bg-slate-900/60 backdrop-blur-xl sticky top-0 z-50">
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
          <nav className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800/80 text-xs md:text-sm backdrop-blur-md overflow-x-auto">
            <button onClick={() => setActiveTab('dashboard')} className={`px-3.5 py-1.5 rounded-lg transition ${activeTab === 'dashboard' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>Dashboard</button>
            <button onClick={() => setActiveTab('map')} className={`px-3.5 py-1.5 rounded-lg transition ${activeTab === 'map' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>Live Map & PAR</button>
            <button onClick={() => setActiveTab('marine')} className={`px-3.5 py-1.5 rounded-lg transition ${activeTab === 'marine' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>Marine & Tides</button>
            <button onClick={() => setActiveTab('news')} className={`px-3.5 py-1.5 rounded-lg transition ${activeTab === 'news' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>Weather News</button>
          </nav>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6 relative z-10">
        {activeTab === 'dashboard' && (
          <>
            {/* Regional Selector Panel (Inspired by Fig 1) */}
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-400" /> Select Region (PAGASA Divisions):
                </span>
                {/* Weather Theme Switcher for Demo */}
                <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800 text-xs">
                  <span className="text-slate-400 px-2 font-medium">Theme Preview:</span>
                  <button onClick={() => setWeatherCondition('sunny')} className={`p-1 rounded ${weatherCondition === 'sunny' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'}`} title="Sunny"><Sun className="w-3.5 h-3.5"/></button>
                  <button onClick={() => setWeatherCondition('rainy')} className={`p-1 rounded ${weatherCondition === 'rainy' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'}`} title="Rainy"><CloudRain className="w-3.5 h-3.5"/></button>
                  <button onClick={() => setWeatherCondition('cloudy')} className={`p-1 rounded ${weatherCondition === 'cloudy' ? 'bg-slate-500 text-slate-950' : 'text-slate-400'}`} title="Cloudy"><Cloud className="w-3.5 h-3.5"/></button>
                  <button onClick={() => setWeatherCondition('storm')} className={`p-1 rounded ${weatherCondition === 'storm' ? 'bg-red-500 text-slate-950' : 'text-slate-400'}`} title="Storm"><CloudLightning className="w-3.5 h-3.5"/></button>
                </div>
              </div>

              {/* Regional Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                {Object.keys(regionalStations).map((region) => (
                  <button
                    key={region}
                    onClick={() => {
                      setSelectedRegion(region);
                      setSelectedCity(regionalStations[region][0]);
                    }}
                    className={`p-3 rounded-xl text-left transition border ${selectedRegion === region ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-900/20' : 'bg-slate-950/40 border-slate-800/80 text-slate-300 hover:bg-slate-800/50'}`}
                  >
                    <div className="text-xs font-semibold">{region}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{regionalStations[region].length} Stations</div>
                  </button>
                ))}
              </div>

              {/* Cities under selected region */}
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-800/60 overflow-x-auto">
                <span className="text-xs text-slate-400 shrink-0 font-medium">Cities in {selectedRegion}:</span>
                {regionalStations[selectedRegion].map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition whitespace-nowrap ${selectedCity === city ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-white'}`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Weather Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedCity}, {selectedRegion}</h2>
                      <p className="text-xs text-slate-400">PAGASA Weather Station Feed • Live Update</p>
                    </div>
                    <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-3 py-1 rounded-full font-medium">Normal Conditions</span>
                  </div>
                  <div className="flex items-center gap-6 my-6">
                    <div className="text-6xl font-black text-white tracking-tighter">29°C</div>
                    <div>
                      <div className="text-lg font-semibold text-slate-200 capitalize">{weatherCondition} with Gentle Breezes</div>
                      <div className="text-xs text-slate-400">Feels like 33°C • High: 33°C | Low: 24°C</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 text-sm">
                  <div className="flex items-center gap-2"><Wind className="w-4 h-4 text-blue-400" /><div><div className="text-xs text-slate-400">Wind</div><div className="font-semibold text-slate-200">14 km/h ENE</div></div></div>
                  <div className="flex items-center gap-2"><Thermometer className="w-4 h-4 text-amber-400" /><div><div className="text-xs text-slate-400">Humidity</div><div className="font-semibold text-slate-200">78%</div></div></div>
                  <div className="flex items-center gap-2"><CloudRain className="w-4 h-4 text-cyan-400" /><div><div className="text-xs text-slate-400">Rainfall</div><div className="font-semibold text-slate-200">0.0 mm/hr</div></div></div>
                </div>
              </div>

              {/* Heat Index Monitor Card */}
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Heat Index Monitor</h3>
                  <p className="text-xs text-slate-400 mb-4">Computed hazard level based on humidity.</p>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-center">
                    <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Caution Level</div>
                    <div className="text-3xl font-extrabold text-amber-300 my-1">36°C</div>
                    <p className="text-xs text-slate-300">Fatigue is possible with prolonged outdoor exposure.</p>
                  </div>
                </div>
                <div className="text-xs text-slate-400 text-center pt-4 border-t border-slate-800/80">PAGASA Climatology Division</div>
              </div>
            </div>

            {/* Weather Analytics Charts */}
            <WeatherCharts />

            {/* 7-Day Outlook */}
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4">7-Day Weather Outlook</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {['Today', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
                  <div key={day} className={`p-4 rounded-2xl border text-center flex flex-col items-center justify-between ${idx === 0 ? 'bg-blue-600/20 border-blue-500/50' : 'bg-slate-950/60 border-slate-800/80'}`}>
                    <span className="text-xs font-bold text-slate-300">{day}</span>
                    <Sun className="w-8 h-8 text-amber-400 my-2" />
                    <span className="text-xs text-slate-400">Partly Cloudy</span>
                    <div className="mt-2 text-sm font-bold text-white">33°C <span className="text-xs font-normal text-slate-400">/ 24°C</span></div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'map' && (
          <div className="space-y-4">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-4">
              <h3 className="text-lg font-bold text-white mb-1">Live Philippine Area of Responsibility (PAR) Map</h3>
              <p className="text-xs text-slate-400 mb-4">Interactive Leaflet tracking map featuring active typhoon monitoring zones.</p>
              <WeatherMap />
            </div>
          </div>
        )}

        {activeTab === 'marine' && <MarineBulletin />}

        {activeTab === 'news' && (
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 space-y-6 shadow-xl">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-blue-400" /> Credible Weather News & Bulletins
              </h3>
              <p className="text-xs text-slate-400 mt-1">Click any headline below to read the full report directly on the publisher's official website.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {newsItems.map((news, idx) => (
                <a 
                  key={idx} 
                  href={news.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-5 bg-slate-950/70 border border-slate-800/80 rounded-2xl hover:border-blue-500/50 hover:bg-slate-900/90 transition flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">{news.source}</span>
                      <span className="text-[10px] text-slate-500">{news.time}</span>
                    </div>
                    <h4 className="font-bold text-white text-base group-hover:text-blue-400 transition flex items-start justify-between gap-2">
                      {news.title}
                      <ExternalLink className="w-4 h-4 shrink-0 opacity-50 group-hover:opacity-100 transition mt-1" />
                    </h4>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2">{news.snippet}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-900 flex items-center text-xs text-blue-400 font-medium gap-1">
                    Read full article on official site &rarr;
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}