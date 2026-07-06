// src/astrologyData.js

// 1. Array of the 12 Vedic Rashis (Zodiac Signs) with their elements
export const RASHIS = [
  { name: "Mesha (Aries)", element: "Fire" },
  { name: "Vrishabha (Taurus)", element: "Earth" },
  { name: "Mithuna (Gemini)", element: "Air" },
  { name: "Kataka (Cancer)", element: "Water" },
  { name: "Simha (Leo)", element: "Fire" },
  { name: "Kanya (Virgo)", element: "Earth" },
  { name: "Thula (Libra)", element: "Air" },
  { name: "Vrishchika (Scorpio)", element: "Water" },
  { name: "Dhanu (Sagittarius)", element: "Fire" },
  { name: "Makara (Capricorn)", element: "Earth" },
  { name: "Kumbha (Aquarius)", element: "Air" },
  { name: "Meena (Pisces)", element: "Water" }
];

// 2. Helper function to approximate the Rashi based on Birth Month and Day
export const getApproximatedRashi = (month, day) => {
  if ((month === 4 && day >= 14) || (month === 5 && day <= 14)) return "Mesha (Aries)";
  if ((month === 5 && day >= 15) || (month === 6 && day <= 14)) return "Vrishabha (Taurus)";
  if ((month === 6 && day >= 15) || (month === 7 && day <= 15)) return "Mithuna (Gemini)";
  if ((month === 7 && day >= 16) || (month === 8 && day <= 16)) return "Kataka (Cancer)";
  if ((month === 8 && day >= 17) || (month === 9 && day <= 16)) return "Simha (Leo)";
  if ((month === 9 && day >= 17) || (month === 10 && day <= 16)) return "Kanya (Virgo)";
  if ((month === 10 && day >= 17) || (month === 11 && day <= 15)) return "Thula (Libra)";
  if ((month === 11 && day >= 16) || (month === 12 && day <= 15)) return "Vrishchika (Scorpio)";
  if ((month === 12 && day >= 16) || (month === 1 && day <= 14)) return "Dhanu (Sagittarius)";
  if ((month === 1 && day >= 15) || (month === 2 && day <= 12)) return "Makara (Capricorn)";
  if ((month === 2 && day >= 13) || (month === 3 && day <= 14)) return "Kumbha (Aquarius)";
  return "Meena (Pisces)"; // Catch-all for mid-March to mid-April transitions
};

// 3. Step 2.2: The Core Calculator Logic
export const calculateCrushMatch = (userRashiName, crushRashiName) => {
  const user = RASHIS.find(r => r.name === userRashiName);
  const crush = RASHIS.find(r => r.name === crushRashiName);

  if (!user || !crush) return null;

  let score = 50; // Every couple starts with a baseline baseline
  let coreAnalysis = "";
  let energyNotes = [];

  const indexUser = RASHIS.findIndex(r => r.name === userRashiName);
  const indexCrush = RASHIS.findIndex(r => r.name === crushRashiName);
  
  // Calculate the distance between signs (Vedic Rashi Koota logic)
  const distance = Math.abs(indexUser - indexCrush);

  // Analyze based on Cosmic Elements & Distance
  if (userRashiName === crushRashiName) {
    score += 35;
    coreAnalysis = "Eka Rashi (Same Sign Harmony)";
    energyNotes.push("You both share the exact same Zodiac sign! This creates an instant mutual understanding. You think alike, react similarly to stress, and feel like you've known each other for lifetimes.");
  } else if (distance === 6) {
    score += 40;
    coreAnalysis = "Sama-Saptaka (Perfect Polar Opposites)";
    energyNotes.push("Your signs sit directly across from each other on the cosmic wheel. In Sri Lankan astrology, this is highly auspicious! It brings immense magnetic attraction. What one lacks, the other fulfills perfectly.");
  } else if (user.element === crush.element) {
    score += 30;
    coreAnalysis = "Elemental Synergy";
    energyNotes.push(`You both belong to the ${user.element} element group. Your core temperaments blend naturally. Whether it's deep emotional waves or high-energy actions, you function on identical frequencies.`);
  } else if (
    (user.element === "Fire" && crush.element === "Air") ||
    (user.element === "Air" && crush.element === "Fire") ||
    (user.element === "Water" && crush.element === "Earth") ||
    (user.element === "Earth" && crush.element === "Water")
  ) {
    score += 20;
    coreAnalysis = "Complementary Elements";
    energyNotes.push("Your elements feed each other beautifully. Fire needs Air to grow, and Earth needs Water to flourish. You naturally support each other's growth without draining individual energy.");
  } else {
    // Clashing elements (e.g., Fire vs Water or Air vs Earth)
    score -= 15;
    coreAnalysis = "Elemental Friction";
    energyNotes.push("Your core elements can occasionally clash (like Fire and Water resetting each other). This means you have deeply contrasting styles of dealing with emotions and conflicts. Communication will be your superpower.");
  }

  // Cap the scores neatly between 0% and 100%
  score = Math.max(0, Math.min(score, 100));

  // Categorize Verdict
  let summary = "Asubha (High Friction)";
  let colorTheme = "red";
  if (score >= 75) {
    summary = "Subha (Highly Auspicious Match)";
    colorTheme = "emerald";
  } else if (score >= 45) {
    summary = "Madhyama (Balanced & Manageable)";
    colorTheme = "amber";
  }

  return { score, coreAnalysis, energyNotes, summary, colorTheme };
};