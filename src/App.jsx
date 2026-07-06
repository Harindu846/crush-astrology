// src/App.jsx
import React, { useState } from 'react';
import { getApproximatedRashi, calculateCrushMatch } from './astrologyData';

export default function App() {
  const [yourName, setYourName] = useState('');
  const [yourDob, setYourDob] = useState('');
  const [yourCity, setYourCity] = useState('');
  const [yourCountry, setYourCountry] = useState('Sri Lanka');
  const [knowsYourTime, setKnowsYourTime] = useState(false);
  const [yourTime, setYourTime] = useState('');

  const [crushName, setCrushName] = useState('');
  const [crushDob, setCrushDob] = useState('');
  const [crushCity, setCrushCity] = useState('');
  const [crushCountry, setCrushCountry] = useState('Sri Lanka');
  const [knowsCrushTime, setKnowsCrushTime] = useState(false);
  const [crushTime, setCrushTime] = useState('');

  const [matchResult, setMatchResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!yourDob || !crushDob) return;

    const uDate = new Date(yourDob);
    const userRashi = getApproximatedRashi(uDate.getMonth() + 1, uDate.getDate());

    const cDate = new Date(crushDob);
    const crushRashi = getApproximatedRashi(cDate.getMonth() + 1, cDate.getDate());

    const uLoc = `${yourCity}, ${yourCountry}`;
    const cLoc = `${crushCity}, ${crushCountry}`;

    // Pass original names into the updated matrix call
    const results = calculateCrushMatch(userRashi, crushRashi, uLoc, cLoc, yourName, crushName);
    setMatchResult(results);
  };

  const handleReset = () => {
    setMatchResult(null);
    setYourName('');
    setYourDob('');
    setYourCity('');
    setYourTime('');
    setKnowsYourTime(false);
    setCrushName('');
    setCrushDob('');
    setCrushCity('');
    setCrushTime('');
    setKnowsCrushTime(false);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-neutral-800 rounded-3xl shadow-2xl border border-neutral-700/50 p-6">
        
        <div className="text-center mb-6">
          <span className="text-4xl inline-block">✨</span>
          <h1 className="text-2xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mt-2 tracking-wide uppercase">
            Cosmic Crush Matcher
          </h1>
        </div>

        {!matchResult ? (
          <form onSubmit={handleCalculate} className="space-y-4">
            {/* USER FORM CARD */}
            <div className="bg-neutral-900/60 p-4 rounded-2xl border border-neutral-700/30">
              <h2 className="text-sm font-bold text-amber-400 mb-2">⭐ Your Details</h2>
              <div className="space-y-2">
                <input required type="text" placeholder="Your Name" className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none focus:border-amber-500" value={yourName} onChange={(e) => setYourName(e.target.value)} />
                <div className="grid grid-cols-2 gap-2">
                  <input required type="text" placeholder="Birth City" className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none focus:border-amber-500" value={yourCity} onChange={(e) => setYourCity(e.target.value)} />
                  <input required type="text" placeholder="Country" className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none focus:border-amber-500" value={yourCountry} onChange={(e) => setYourCountry(e.target.value)} />
                </div>
                <input required type="date" className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none focus:border-amber-500" value={yourDob} onChange={(e) => setYourDob(e.target.value)} />
                <label className="flex items-center gap-2 text-xs text-neutral-400 cursor-pointer pt-1">
                  <input type="checkbox" checked={knowsYourTime} onChange={(e) => setKnowsYourTime(e.target.checked)} />
                  I know my exact birth time
                </label>
                {knowsYourTime && <input type="time" className="w-full mt-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none" value={yourTime} onChange={(e) => setYourTime(e.target.value)} />}
              </div>
            </div>

            {/* CRUSH FORM CARD */}
            <div className="bg-neutral-900/60 p-4 rounded-2xl border border-neutral-700/30">
              <h2 className="text-sm font-bold text-rose-400 mb-2">❤️ Your Crush</h2>
              <div className="space-y-2">
                <input required type="text" placeholder="Their Name" className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none focus:border-rose-500" value={crushName} onChange={(e) => setCrushName(e.target.value)} />
                <div className="grid grid-cols-2 gap-2">
                  <input required type="text" placeholder="Birth City" className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none focus:border-rose-500" value={crushCity} onChange={(e) => setCrushCity(e.target.value)} />
                  <input required type="text" placeholder="Country" className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none focus:border-rose-500" value={crushCountry} onChange={(e) => setCrushCountry(e.target.value)} />
                </div>
                <input required type="date" className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none focus:border-rose-500" value={crushDob} onChange={(e) => setCrushDob(e.target.value)} />
                <label className="flex items-center gap-2 text-xs text-neutral-400 cursor-pointer pt-1">
                  <input type="checkbox" checked={knowsCrushTime} onChange={(e) => setKnowsCrushTime(e.target.checked)} />
                  I know their exact birth time
                </label>
                {knowsCrushTime && <input type="time" className="w-full mt-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none" value={crushTime} onChange={(e) => setCrushTime(e.target.value)} />}
              </div>
            </div>

            <button type="submit" className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-sm rounded-xl uppercase tracking-wider">
              Calculate Alignment
            </button>
          </form>
        ) : (
          /* PERSONALIZED TWO-PARAGRAPH RESULTS */
          <div className="space-y-5 animate-fade-in">
            <div className="text-center">
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">{yourName} & {crushName}</p>
              <div className="text-6xl font-black text-amber-400 my-1">{matchResult.score}%</div>
              <div className={`text-xs px-3 py-1 font-bold rounded-full uppercase inline-block border
                ${matchResult.colorTheme === 'emerald' ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800' : ''}
                ${matchResult.colorTheme === 'amber' ? 'bg-amber-950/80 text-amber-400 border-amber-800' : ''}
                ${matchResult.colorTheme === 'red' ? 'bg-rose-950/80 text-rose-400 border-rose-800' : ''}
              `}>
                {matchResult.summary}
              </div>
            </div>

            {/* TWO-PARAGRAPH FORMATTED LIST */}
            <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
              
              {/* ROMANTIC */}
              <div className="bg-neutral-900/50 p-4 rounded-2xl border border-neutral-700/30 space-y-2.5">
                <div className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>🌹</span> Romantic Destiny
                </div>
                <p className="text-xs text-neutral-200 leading-relaxed"><span className="text-emerald-400 font-semibold">✨ Cosmic Strength:</span> {matchResult.lifeAreas.romantic.pro}</p>
                <p className="text-xs text-neutral-300 leading-relaxed"><span className="text-rose-400 font-semibold">⚠️ Things to Consider:</span> {matchResult.lifeAreas.romantic.con}</p>
              </div>

              {/* FINANCIAL */}
              <div className="bg-neutral-900/50 p-4 rounded-2xl border border-neutral-700/30 space-y-2.5">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>💰</span> Financial Alignment
                </div>
                <p className="text-xs text-neutral-200 leading-relaxed"><span className="text-emerald-400 font-semibold">✨ Cosmic Strength:</span> {matchResult.lifeAreas.financial.pro}</p>
                <p className="text-xs text-neutral-300 leading-relaxed"><span className="text-amber-400 font-semibold">⚠️ Things to Consider:</span> {matchResult.lifeAreas.financial.con}</p>
              </div>

              {/* HEALTH */}
              <div className="bg-neutral-900/50 p-4 rounded-2xl border border-neutral-700/30 space-y-2.5">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>🌱</span> Health & Vitality Impact
                </div>
                <p className="text-xs text-neutral-200 leading-relaxed"><span className="text-emerald-400 font-semibold">✨ Cosmic Strength:</span> {matchResult.lifeAreas.health.pro}</p>
                <p className="text-xs text-neutral-300 leading-relaxed"><span className="text-orange-400 font-semibold">⚠️ Things to Consider:</span> {matchResult.lifeAreas.health.con}</p>
              </div>

              {/* FAMILY */}
              <div className="bg-neutral-900/50 p-4 rounded-2xl border border-neutral-700/30 space-y-2.5">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>🏡</span> Family & Domestic Life
                </div>
                <p className="text-xs text-neutral-200 leading-relaxed"><span className="text-emerald-400 font-semibold">✨ Cosmic Strength:</span> {matchResult.lifeAreas.family.pro}</p>
                <p className="text-xs text-neutral-300 leading-relaxed"><span className="text-blue-400 font-semibold">⚠️ Things to Consider:</span> {matchResult.lifeAreas.family.con}</p>
              </div>

            </div>

            <button onClick={handleReset} className="w-full py-2.5 bg-neutral-700 hover:bg-neutral-600 text-neutral-200 text-xs font-semibold rounded-xl transition">
              Test Another Connection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}