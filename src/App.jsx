// src/App.jsx
import React, { useState, useEffect } from 'react';
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

  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [matchResult, setMatchResult] = useState(null);
  const [revealChallenges, setRevealChallenges] = useState({});
  const [copied, setCopied] = useState(false);
  const [isShared, setIsShared] = useState(false); // Tracks if the visitor came from a shared link

  // Handle incoming shared links automatically when the page loads
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('shared') === 'true') {
      setIsShared(true);
      
      const sharedScore = parseInt(params.get('score'), 10) || 75;
      const sName = params.get('name') || 'Someone';
      const cName = params.get('crush') || 'Their Crush';

      setYourName(sName);
      setCrushName(cName);
      
      // Setting up the stable results view matching all 4 layout categories
      setMatchResult({
        score: sharedScore,
        lifeAreas: {
          romantic: { pro: "Deep celestial chemistry shared between your cosmic paths.", con: "Watch out for subtle communication gaps over time." },
          financial: { pro: "Strong foundational alignment for shared material targets.", con: "Keep money matters fully transparent to maintain trust." },
          health: { pro: "Harmonious energetic frequencies and complementary lifestyles.", con: "Balance collective activities with individual downtime." },
          family: { pro: "Natural domestic resonance and highly comfortable shared spaces.", con: "Ensure personal boundaries are fully respected in the home." }
        }
      });
    }
  }, []);

  const triggerCosmicCalculation = (e) => {
    e.preventDefault();
    if (!yourDob || !crushDob) return;

    setIsLoading(true);
    const phases = [
      "Aligning celestial coordinates...",
      "Mapping elemental frequencies...",
      "Weaving karmic compatibility paths...",
      "Generating personalized destiny profile..."
    ];

    phases.forEach((text, index) => {
      setTimeout(() => {
        setLoadingText(text);
        if (index === phases.length - 1) {
          setTimeout(() => {
            const uDate = new Date(yourDob);
            const userRashi = getApproximatedRashi(uDate.getMonth() + 1, uDate.getDate());
            const cDate = new Date(crushDob);
            const crushRashi = getApproximatedRashi(cDate.getMonth() + 1, cDate.getDate());
            
            const results = calculateCrushMatch(
              userRashi, crushRashi, 
              `${yourCity}, ${yourCountry}`, `${crushCity}, ${crushCountry}`, 
              yourName, crushName
            );

            setMatchResult(results);
            setIsLoading(false);
          }, 1000);
        }
      }, index * 900);
    });
  };

  const getPsychologicalBadge = (score) => {
    if (score >= 85) return { title: "Cosmic Twin Flames", desc: "Absolute Soul Alignment", color: "from-pink-400 to-rose-400 text-pink-400 shadow-pink-500/20" };
    if (score >= 70) return { title: "Harmonious Destinies", desc: "Deep Karmic Resonance", color: "from-fuchsia-400 to-pink-500 text-fuchsia-400 shadow-fuchsia-500/20" };
    if (score >= 50) return { title: "Magnetic Opposites", desc: "High Passion, High Growth", color: "from-purple-400 to-pink-500 text-purple-400 shadow-purple-500/20" };
    return { title: "Growth Catalysts", desc: "Testing Evolutionary Bounds", color: "from-neutral-400 to-pink-400 text-neutral-300 shadow-neutral-500/10" };
  };

  const toggleChallenge = (section) => {
    setRevealChallenges(prev => ({ ...prev, [section]: !prev[section] }));
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
    setRevealChallenges({});
    setCopied(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center p-4 selection:bg-pink-500/30 font-sans antialiased relative overflow-hidden">
      
      {/* Deep Ambient Midnight Pink Radial Halos */}
      <div className="absolute top-[-10%] left-[-20%] w-[60rem] h-[60rem] bg-pink-900/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[50rem] h-[50rem] bg-fuchsia-950/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Outer Shell Card Container */}
      <div className="max-w-md w-full bg-neutral-900/40 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_0_60px_rgba(219,39,119,0.07)] border border-neutral-800/60 p-6 relative overflow-hidden">
        
        {/* Dynamic Interactive Top Accent line */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-80" />

        {/* APPLICATION BRAND HEADER */}
        <div className="text-center mb-6 relative z-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-600 shadow-lg shadow-pink-500/20">
            <span className="text-xl text-white">💖</span>
          </div>
          <h1 className="text-2xl font-black bg-gradient-to-r from-white via-pink-200 to-fuchsia-100 bg-clip-text text-transparent mt-3 tracking-tight uppercase">
            Karmic Destiny Bond
          </h1>
          <p className="text-[10px] text-pink-400/70 font-bold tracking-widest mt-1 uppercase">Vedic Alignment & Elemental Synergy</p>
        </div>

        {/* LOADING ENGINE */}
        {isLoading ? (
          <div className="py-20 flex flex-col items-center justify-center space-y-6 relative z-10">
            <div className="relative flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-dashed border-pink-500 rounded-full animate-spin"></div>
              <div className="absolute w-10 h-10 border-2 border-dotted border-fuchsia-400 rounded-full animate-ping opacity-60"></div>
            </div>
            <p className="text-xs font-semibold text-pink-200/90 tracking-wide text-center bg-pink-950/20 px-4 py-2 rounded-full border border-pink-900/30 shadow-sm">
              {loadingText}
            </p>
          </div>
        ) : !matchResult ? (
          
          /* INPUT CONTROLS */
          <form onSubmit={triggerCosmicCalculation} className="space-y-4 relative z-10">
            
            {/* INPUT BLOCK A: YOUR DETAILS */}
            <div className="bg-neutral-900/60 p-4 rounded-3xl border border-neutral-800/80 transition-all hover:border-pink-500/20 focus-within:border-pink-500/30 shadow-md">
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-pink-400 mb-3 flex items-center gap-1.5">
                ✨ Your Details
              </h2>
              <div className="space-y-2.5">
                <input required type="text" placeholder="Your Name" className="w-full px-4 py-2.5 bg-neutral-950/80 border border-neutral-800/80 rounded-xl text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-pink-500/70 focus:ring-1 focus:ring-pink-500/20 transition-all" value={yourName} onChange={(e) => setYourName(e.target.value)} />
                <div className="grid grid-cols-2 gap-2">
                  <input required type="text" placeholder="Birth City" className="w-full px-4 py-2.5 bg-neutral-950/80 border border-neutral-800/80 rounded-xl text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-pink-500/70 focus:ring-1 focus:ring-pink-500/20 transition-all" value={yourCity} onChange={(e) => setYourCity(e.target.value)} />
                  <input required type="text" placeholder="Country" className="w-full px-4 py-2.5 bg-neutral-950/80 border border-neutral-800/80 rounded-xl text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-pink-500/70 focus:ring-1 focus:ring-pink-500/20 transition-all" value={yourCountry} onChange={(e) => setYourCountry(e.target.value)} />
                </div>
                <input required type="date" className="w-full px-4 py-2.5 bg-neutral-950/80 border border-neutral-800/80 rounded-xl text-sm text-neutral-300 focus:outline-none focus:border-pink-500/70 transition-colors cursor-pointer" value={yourDob} onChange={(e) => setYourDob(e.target.value)} />
                
                <label className="flex items-center gap-2 text-[11px] text-neutral-400 cursor-pointer pt-0.5 select-none hover:text-pink-300/80 transition-colors">
                  <input type="checkbox" className="accent-pink-500 rounded bg-neutral-950 border-neutral-800" checked={knowsYourTime} onChange={(e) => setKnowsYourTime(e.target.checked)} />
                  I know my exact birth time
                </label>
                {knowsYourTime && <input type="time" className="w-full mt-1 px-4 py-2 bg-neutral-950/90 border border-neutral-800/80 rounded-xl text-sm text-neutral-200 focus:outline-none focus:border-pink-500/70" value={yourTime} onChange={(e) => setYourTime(e.target.value)} />}
              </div>
            </div>

            {/* INPUT BLOCK B: CRUSH DETAILS */}
            <div className="bg-neutral-900/60 p-4 rounded-3xl border border-neutral-800/80 transition-all hover:border-fuchsia-500/20 focus-within:border-fuchsia-500/30 shadow-md">
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-fuchsia-400 mb-3 flex items-center gap-1.5">
                🌸 Your Crush
              </h2>
              <div className="space-y-2.5">
                <input required type="text" placeholder="Their Name" className="w-full px-4 py-2.5 bg-neutral-950/80 border border-neutral-800/80 rounded-xl text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-fuchsia-500/70 focus:ring-1 focus:ring-fuchsia-500/20 transition-all" value={crushName} onChange={(e) => setCrushName(e.target.value)} />
                <div className="grid grid-cols-2 gap-2">
                  <input required type="text" placeholder="Birth City" className="w-full px-4 py-2.5 bg-neutral-950/80 border border-neutral-800/80 rounded-xl text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-fuchsia-500/70 focus:ring-1 focus:ring-fuchsia-500/20 transition-all" value={crushCity} onChange={(e) => setCrushCity(e.target.value)} />
                  <input required type="text" placeholder="Country" className="w-full px-4 py-2.5 bg-neutral-950/80 border border-neutral-800/80 rounded-xl text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-fuchsia-500/70 focus:ring-1 focus:ring-fuchsia-500/20 transition-all" value={crushCountry} onChange={(e) => setCrushCountry(e.target.value)} />
                </div>
                <input required type="date" className="w-full px-4 py-2.5 bg-neutral-950/80 border border-neutral-800/80 rounded-xl text-sm text-neutral-300 focus:outline-none focus:border-fuchsia-500/70 transition-colors cursor-pointer" value={crushDob} onChange={(e) => setCrushDob(e.target.value)} />
                
                <label className="flex items-center gap-2 text-[11px] text-neutral-400 cursor-pointer pt-0.5 select-none hover:text-fuchsia-300/80 transition-colors">
                  <input type="checkbox" className="accent-fuchsia-500 rounded bg-neutral-950 border-neutral-800" checked={knowsCrushTime} onChange={(e) => setKnowsCrushTime(e.target.checked)} />
                  I know their exact birth time
                </label>
                {knowsCrushTime && <input type="time" className="w-full mt-1 px-4 py-2 bg-neutral-950/90 border border-neutral-800/80 rounded-xl text-sm text-neutral-200 focus:outline-none focus:border-fuchsia-500/70" value={crushTime} onChange={(e) => setCrushTime(e.target.value)} />}
              </div>
            </div>

            {/* PRIMARY ACTION BUTTON */}
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 text-white font-black text-sm rounded-2xl uppercase tracking-widest shadow-xl shadow-pink-950/30 hover:brightness-110 active:scale-[0.99] transition-all relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:animate-shine pointer-events-none" />
              Explore Your Destiny
            </button>
          </form>
        ) : (
          
          /* DISPLAY GRID */
          <div className="space-y-5 animate-fade-in relative z-10">
            
            {/* HERO SCORE CARD */}
            <div className="bg-gradient-to-b from-neutral-900/90 to-neutral-950 p-5 rounded-[2rem] border border-neutral-800 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />
              
              <p className="text-[10px] text-pink-400 font-extrabold tracking-widest uppercase mb-1">Synastry Assessment</p>
              <h3 className="text-base font-black text-neutral-100 tracking-tight">{yourName} & {crushName}</h3>
              
              <div className="my-2 relative inline-block">
                <span className="absolute inset-0 bg-pink-500/10 rounded-full blur-2xl scale-90 animate-pulse" />
                <div className="text-7xl font-black tracking-tighter bg-gradient-to-b from-white via-neutral-100 to-pink-200 bg-clip-text text-transparent relative drop-shadow-[0_2px_10px_rgba(219,39,119,0.15)]">
                  {matchResult.score}<span className="text-xl text-pink-500 font-extrabold tracking-normal">%</span>
                </div>
              </div>

              <div className="space-y-0.5">
                <div className={`text-sm font-black uppercase tracking-wider bg-gradient-to-r ${getPsychologicalBadge(matchResult.score).color} bg-clip-text text-transparent drop-shadow-sm`}>
                  {getPsychologicalBadge(matchResult.score).title}
                </div>
                <div className="text-[10px] text-neutral-400 font-medium tracking-wide">
                  {getPsychologicalBadge(matchResult.score).desc}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-900 text-[9px] text-pink-500/40 tracking-widest font-mono">
                CRUSH-ASTROLOGY.VERCEL.APP
              </div>
            </div>

            {/* LOWER ATTRIBUTE PANELS */}
            <div className="space-y-3 max-h-[290px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-800">
              
              {[
                { id: 'romantic', label: 'Romantic Connection', emoji: '🌹', color: 'text-pink-400' },
                { id: 'financial', label: 'Financial Partnership', emoji: '💰', color: 'text-amber-400' },
                { id: 'health', label: 'Energy & Biorhythms', emoji: '🌱', color: 'text-emerald-400' },
                { id: 'family', label: 'Domestic Sanctuary', emoji: '🏡', color: 'text-blue-400' }
              ].map((section) => (
                <div key={section.id} className="bg-neutral-950/60 p-4 rounded-2xl border border-neutral-800/60 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${section.color} flex items-center gap-1.5`}>
                      <span>{section.emoji}</span> {section.label}
                    </span>
                  </div>
                  
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    <span className="text-pink-400 font-semibold">✨ Alignment:</span> {matchResult.lifeAreas[section.id]?.pro}
                  </p>
                  
                  <div className="pt-1 border-t border-neutral-900">
                    {!revealChallenges[section.id] ? (
                      <button onClick={() => toggleChallenge(section.id)} className="text-[10px] font-bold text-neutral-400 hover:text-pink-400 tracking-wide flex items-center gap-1 transition-colors">
                        🔓 Reveal Potential Conflict Catalyst →
                      </button>
                    ) : (
                      <div className="space-y-1.5 animate-fade-in">
                        <p className="text-xs text-neutral-400 leading-relaxed bg-neutral-900/30 p-2.5 rounded-xl border border-pink-950/20">
                          <span className="text-rose-400 font-semibold">⚠️ Tension Vector:</span> {matchResult.lifeAreas[section.id]?.con}
                        </p>
                        <button onClick={() => toggleChallenge(section.id)} className="text-[9px] font-medium text-neutral-500 hover:text-pink-400/60 transition-colors">
                          Hide Conflict Details
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

            </div>

            {/* INTERACTIVE ACTION CONTROLS */}
            <div className="grid grid-cols-5 gap-2 pt-1 relative">
              <button 
                onClick={() => {
                  window.history.replaceState({}, document.title, window.location.pathname);
                  setIsShared(false);
                  handleReset();
                }} 
                className="col-span-2 py-3 bg-neutral-900 hover:bg-neutral-800 active:scale-95 text-neutral-400 hover:text-neutral-200 text-[10px] font-black rounded-xl uppercase tracking-wider transition-all border border-neutral-800/80 text-center leading-tight"
              >
                {isShared ? "Test Your Own" : "Recalculate"}
              </button>
              
              <button 
                onClick={() => {
                  const badgeTitle = getPsychologicalBadge(matchResult.score).title;
                  // Encode data into the URL params smoothly
                  const shareUrl = `${window.location.origin}?shared=true&score=${matchResult.score}&name=${encodeURIComponent(yourName)}&crush=${encodeURIComponent(crushName)}`;
                  const shareText = `Tested my match with ${crushName} on the Karmic Destiny Bond engine and scored a ${matchResult.score}%! We are officially certified "${badgeTitle}." View our result here:`;

                  if (typeof navigator !== 'undefined' && navigator.share) {
                    navigator.share({
                      title: 'Cosmic Synastry Alignment',
                      text: shareText,
                      url: shareUrl
                    })
                    .catch((err) => console.log("Share dismissed:", err));
                  } else {
                    navigator.clipboard.writeText(`${shareText}\n${shareUrl}`)
                      .then(() => {
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2500);
                      })
                      .catch(() => {
                        alert("Screenshot your scorecard to share it directly to your Stories! 🔥");
                      });
                  }
                }} 
                className="col-span-3 py-3 bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:brightness-110 active:scale-95 text-white text-xs font-black rounded-xl uppercase tracking-wider transition-all shadow-md shadow-pink-950/30 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:animate-shine pointer-events-none" />
                {copied ? "📋 Link Copied!" : "🚀 Share Connection"}
              </button>

              {/* Toast Layer for Clipboard Fallback */}
              {copied && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg border border-pink-400/30 tracking-wide uppercase">
                  Alignment Copied to Clipboard!
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}