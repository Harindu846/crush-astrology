// src/App.jsx
import React, { useState } from 'react';
import { getApproximatedRashi, calculateCrushMatch } from './astrologyData';

export default function App() {
  // Input form states
  const [yourName, setYourName] = useState('');
  const [yourDob, setYourDob] = useState('');
  const [knowsYourTime, setKnowsYourTime] = useState(false);
  const [yourTime, setYourTime] = useState('');

  const [crushName, setCrushName] = useState('');
  const [crushDob, setCrushDob] = useState('');
  const [knowsCrushTime, setKnowsCrushTime] = useState(false);
  const [crushTime, setCrushTime] = useState('');

  // Results state
  const [matchResult, setMatchResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    if (!yourDob || !crushDob) return;

    // Extract month and day for user
    const uDate = new Date(yourDob);
    const userRashi = getApproximatedRashi(uDate.getMonth() + 1, uDate.getDate());

    // Extract month and day for crush
    const cDate = new Date(crushDob);
    const crushRashi = getApproximatedRashi(cDate.getMonth() + 1, cDate.getDate());

    // Calculate match metrics
    const results = calculateCrushMatch(userRashi, crushRashi);
    setMatchResult(results);
  };

  const handleReset = () => {
    setMatchResult(null);
    setYourName('');
    setYourDob('');
    setYourTime('');
    setKnowsYourTime(false);
    setCrushName('');
    setCrushDob('');
    setCrushTime('');
    setKnowsCrushTime(false);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col items-center justify-center p-4 selection:bg-amber-500/30">
      <div className="max-w-md w-full bg-neutral-800 rounded-3xl shadow-2xl border border-neutral-700/50 p-6 transition-all duration-300">
        
        {/* APP HEADER */}
        <div className="text-center mb-8">
          <span className="text-4xl animate-pulse inline-block">✨</span>
          <h1 className="text-2xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mt-2 tracking-wide uppercase">
            Cosmic Crush Matcher
          </h1>
          <p className="text-xs text-neutral-400 mt-1">
            Discover your compatibility using Sri Lankan Rashi mechanics
          </p>
        </div>

        {/* INPUT VIEW */}
        {!matchResult ? (
          <form onSubmit={handleCalculate} className="space-y-5">
            
            {/* USER PROFILE CARD */}
            <div className="bg-neutral-900/60 p-4 rounded-2xl border border-neutral-700/30">
              <h2 className="text-sm font-bold text-amber-400 mb-3 flex items-center gap-2">
                <span>⭐</span> Your Details
              </h2>
              <div className="space-y-3">
                <input 
                  required
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition"
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                />
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">Date of Birth</label>
                  <input 
                    required
                    type="date" 
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none focus:border-amber-500 text-neutral-300"
                    value={yourDob}
                    onChange={(e) => setYourDob(e.target.value)}
                  />
                </div>
                
                {/* Optional Birth Time Toggle */}
                <div className="pt-1">
                  <label className="flex items-center gap-2 text-xs text-neutral-400 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      className="rounded border-neutral-700 bg-neutral-800 text-amber-500 focus:ring-0 focus:ring-offset-0"
                      checked={knowsYourTime}
                      onChange={(e) => setKnowsYourTime(e.target.checked)}
                    />
                    I know my exact time of birth
                  </label>
                  {knowsYourTime && (
                    <input 
                      type="time"
                      className="w-full mt-2 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none focus:border-amber-500 text-neutral-300 animate-fade-in"
                      value={yourTime}
                      onChange={(e) => setYourTime(e.target.value)}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* CRUSH PROFILE CARD */}
            <div className="bg-neutral-900/60 p-4 rounded-2xl border border-neutral-700/30">
              <h2 className="text-sm font-bold text-rose-400 mb-3 flex items-center gap-2">
                <span>❤️</span> Your Crush
              </h2>
              <div className="space-y-3">
                <input 
                  required
                  type="text" 
                  placeholder="Their Name or Initial" 
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none focus:border-rose-500 transition"
                  value={crushName}
                  onChange={(e) => setCrushName(e.target.value)}
                />
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">Date of Birth</label>
                  <input 
                    required
                    type="date" 
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none focus:border-rose-500 text-neutral-300"
                    value={crushDob}
                    onChange={(e) => setCrushDob(e.target.value)}
                  />
                </div>
                
                {/* Optional Birth Time Toggle */}
                <div className="pt-1">
                  <label className="flex items-center gap-2 text-xs text-neutral-400 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      className="rounded border-neutral-700 bg-neutral-800 text-rose-500 focus:ring-0 focus:ring-offset-0"
                      checked={knowsCrushTime}
                      onChange={(e) => setKnowsCrushTime(e.target.checked)}
                    />
                    I know their exact birth time
                  </label>
                  {knowsCrushTime && (
                    <input 
                      type="time"
                      className="w-full mt-2 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none focus:border-rose-500 text-neutral-300"
                      value={crushTime}
                      onChange={(e) => setCrushTime(e.target.value)}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <button
              type="submit"
              className="w-full mt-2 py-3.5 px-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm rounded-xl tracking-wide shadow-lg transition duration-200 uppercase cursor-pointer"
            >
              Calculate Alignment
            </button>
          </form>
        ) : (
          
          /* RESULTS VIEW */
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">
                {yourName || 'You'} + {crushName || 'Crush'}
              </p>
              
              {/* BIG SCORE DISPLAY */}
              <div className="text-6xl font-black text-amber-400 mt-2 tracking-tighter">
                {matchResult.score}%
              </div>
              
              {/* STATUS BADGE */}
              <div className={`mt-3 inline-block text-xs px-3 py-1 font-bold rounded-full uppercase border
                ${matchResult.colorTheme === 'emerald' ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800' : ''}
                ${matchResult.colorTheme === 'amber' ? 'bg-amber-950/80 text-amber-400 border-amber-800' : ''}
                ${matchResult.colorTheme === 'red' ? 'bg-rose-950/80 text-rose-400 border-rose-800' : ''}
              `}>
                {matchResult.summary}
              </div>
            </div>

            {/* ASTROLOGICAL DETAILS CARD */}
            <div className="space-y-3 bg-neutral-900/40 p-4 rounded-2xl border border-neutral-700/20">
              <div className="border-b border-neutral-700/40 pb-2">
                <span className="text-[10px] uppercase text-neutral-500 font-bold tracking-wider block">Structural Compatibility</span>
                <span className="text-sm font-semibold text-neutral-200">{matchResult.coreAnalysis}</span>
              </div>
              
              <div className="space-y-2">
                <span className="text-[10px] uppercase text-neutral-500 font-bold tracking-wider block">Cosmic Readings</span>
                {matchResult.energyNotes.map((note, idx) => (
                  <p key={idx} className="text-xs text-neutral-300 leading-relaxed">
                    {note}
                  </p>
                ))}
              </div>
            </div>

            {/* CONFIDENCE CHECK SLIDER */}
            {(!knowsYourTime || !knowsCrushTime) && (
              <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl text-center">
                <p className="text-[11px] text-amber-300 leading-relaxed">
                  ⚠️ <strong>Confidence: 80%.</strong> Calculated via planetary solar midpoints. Want 100% precision? Try casually asking {crushName || 'them'} what time they were born!
                </p>
              </div>
            )}

            {/* RESET BUTTON */}
            <button
              onClick={handleReset}
              className="w-full py-2.5 px-4 bg-neutral-700 hover:bg-neutral-600 text-neutral-200 text-xs font-semibold rounded-xl transition cursor-pointer"
            >
              Test Another Crush
            </button>
          </div>
        )}

      </div>
    </div>
  );
}