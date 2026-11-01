import React from 'react';
import { CloudRain, Thermometer, Wind, Droplets } from 'lucide-react';

export default function WeatherCharts() {
  const hourlyData = [
    { time: '12 AM', temp: '25°C', rain: '0.1mm', humidity: '88%', wind: '8 km/h' },
    { time: '3 AM', temp: '24°C', rain: '0.2mm', humidity: '90%', wind: '6 km/h' },
    { time: '6 AM', temp: '26°C', rain: '0.1mm', humidity: '85%', wind: '10 km/h' },
    { time: '9 AM', temp: '29°C', rain: '0.0mm', humidity: '75%', wind: '12 km/h' },
    { time: '12 PM', temp: '33°C', rain: '0.0mm', humidity: '65%', wind: '15 km/h' },
    { time: '3 PM', temp: '32°C', rain: '0.3mm', humidity: '70%', wind: '14 km/h' },
    { time: '6 PM', temp: '29°C', rain: '0.2mm', humidity: '80%', wind: '10 km/h' },
    { time: '9 PM', temp: '27°C', rain: '0.1mm', humidity: '85%', wind: '8 km/h' },
  ];

  return (
    <div className="space-y-6">
      {/* 24-Hour Forecast Breakdown */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-1">24-Hour WRF Model Analytics</h3>
        <p className="text-xs text-slate-400 mb-6">Hourly projection of temperature, rainfall volume, and relative humidity.</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {hourlyData.map((data, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-3 text-center flex flex-col justify-between">
              <span className="text-xs font-semibold text-blue-400">{data.time}</span>
              <div className="my-3">
                <div className="text-xl font-bold text-white">{data.temp}</div>
                <div className="text-xs text-cyan-400 flex items-center justify-center gap-1 mt-1">
                  <CloudRain className="w-3 h-3" /> {data.rain}
                </div>
              </div>
              <div className="text-[10px] text-slate-400 pt-2 border-t border-slate-900 flex justify-around">
                <span>💧 {data.humidity}</span>
                <span>💨 {data.wind}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}