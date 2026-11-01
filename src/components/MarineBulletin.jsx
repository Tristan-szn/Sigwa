import React from 'react';
import { Anchor, Waves, ShieldAlert } from 'lucide-react';

export default function MarineBulletin() {
  const coastalSeas = [
    { region: 'Northern Luzon Seaboard', condition: 'Moderate to Rough', waves: '2.8 - 4.0 meters', galeWarning: 'Active (Gale Warning #3)' },
    { region: 'Eastern Visayas Waters', condition: 'Moderate', waves: '1.5 - 2.5 meters', galeWarning: 'None' },
    { region: 'Palawan & Sulu Sea', condition: 'Slight to Moderate', waves: '1.0 - 2.0 meters', galeWarning: 'None' },
    { region: 'Mindanao Coastal Waters', condition: 'Slight', waves: '0.5 - 1.5 meters', galeWarning: 'None' },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Anchor className="w-5 h-5 text-blue-400" /> Marine & Gale Warning Bulletins
          </h3>
          <p className="text-xs text-slate-400">PAGASA weather advisory for maritime transport, seafarers, and fisherfolk.</p>
        </div>
        <span className="bg-red-500/10 text-red-400 border border-red-500/20 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
          <ShieldAlert className="w-3.5 h-3.5" /> Gale Warning Issued
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {coastalSeas.map((sea, idx) => (
          <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-bold text-white text-sm">{sea.region}</h4>
              <span className={`text-xs px-2 py-0.5 rounded font-medium ${sea.galeWarning.includes('Active') ? 'bg-red-500/20 text-red-300' : 'bg-emerald-500/20 text-emerald-300'}`}>
                {sea.galeWarning}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-900 p-2 rounded-lg">
                <span className="text-slate-400 block">Sea Condition</span>
                <span className="font-semibold text-slate-200">{sea.condition}</span>
              </div>
              <div className="bg-slate-900 p-2 rounded-lg">
                <span className="text-slate-400 block">Wave Heights</span>
                <span className="font-semibold text-slate-200 flex items-center gap-1">
                  <Waves className="w-3.5 h-3.5 text-blue-400" /> {sea.waves}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}