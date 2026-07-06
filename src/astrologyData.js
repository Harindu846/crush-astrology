// src/astrologyData.js

export const RASHIS = [
  { name: "Mesha (Aries)", element: "Fire", ruler: "Mars (Kuja)" },
  { name: "Vrishabha (Taurus)", element: "Earth", ruler: "Venus (Shukra)" },
  { name: "Mithuna (Gemini)", element: "Air", ruler: "Mercury (Budha)" },
  { name: "Kataka (Cancer)", element: "Water", ruler: "Moon (Chandra)" },
  { name: "Simha (Leo)", element: "Fire", ruler: "Sun (Surya)" },
  { name: "Kanya (Virgo)", element: "Earth", ruler: "Mercury (Budha)" },
  { name: "Thula (Libra)", element: "Air", ruler: "Venus (Shukra)" },
  { name: "Vrishchika (Scorpio)", element: "Water", ruler: "Mars (Kuja)" },
  { name: "Dhanu (Sagittarius)", element: "Fire", ruler: "Jupiter (Guru)" },
  { name: "Makara (Capricorn)", element: "Earth", ruler: "Saturn (Shani)" },
  { name: "Kumbha (Aquarius)", element: "Air", ruler: "Saturn (Shani)" },
  { name: "Meena (Pisces)", element: "Water", ruler: "Jupiter (Guru)" }
];

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
  return "Meena (Pisces)";
};

// Specialized Life Area Text Matrix Mapping
const getLifeAreaReadings = (elem1, elem2) => {
  const combination = [elem1, elem2].sort().join("-");

  switch (combination) {
    case "Fire-Fire":
      return {
        romantic: "Extremely passionate, energetic, and spontaneous. You spark inspiration in each other, but minor arguments can escalate into dramatic standoffs quickly if ego gets in the way.",
        financial: "High-risk, high-reward. You both possess the drive to pursue massive entrepreneurial ambitions together, but you must establish strict budgeting rules to prevent impulsive combined spending.",
        health: "Mainly governed by high vital energy. However, shared stress can lead to physical burnout, inflammation, or exhaustion. You must actively encourage each other to take restorative breaks.",
        family: "A lively, loud, and exceptionally supportive household. Your home will be filled with activities and social gatherings, though establishing quiet routines will require deliberate effort."
      };
    case "Air-Fire":
      return {
        romantic: "Highly stimulating and intellectually vibrant. The Air partner fuels the Fire partner's creativity with brilliant concepts, resulting in a bond that constantly evolves and avoids boredom.",
        financial: "Excellent for joint ventures and collaborative brainstorming. Air designs the blueprint and financial roadmaps, while Fire provides the pure drive to execute and generate income.",
        health: "Mental stress is your main shared vulnerability. Air's overthinking coupled with Fire's anxiety can disrupt sleep patterns. Focus on calming, outdoor-focused routines.",
        family: "An open-minded, forward-thinking environment. You prioritize open communication, intellectual curiosity, and freedom, raising independent family members who love to explore."
      };
    case "Earth-Water":
      return {
        romantic: "Deeply nurturing, safe, and emotionally profound. Water brings emotional vulnerability into the relationship, while Earth builds a secure, reliable foundation where love can bloom over decades.",
        financial: "Superb for long-term wealth accumulation. You both naturally prioritize security, real estate, solid investments, and building a comfortable retirement nest egg together.",
        health: "Highly stabilizing. You intuitively tend to each other's physical well-being, home-cooked nutrition, and emotional balance, leading to excellent overall physical health metrics.",
        family: "The classic peaceful home. Exceptionally grounded, structured, and protective. You excel at creating a cozy domestic sanctuary where traditions are cherished and respected."
      };
    case "Earth-Earth":
      return {
        romantic: "Immensely loyal, stable, and deeply predictable. You express affection through practical acts of service and physical presence rather than sweeping dramatic poetry.",
        financial: "The ultimate power couple for financial discipline. You track expenses meticulously and minimize unnecessary risks, though you should occasionally allow yourselves to splurge and celebrate.",
        health: "Prone to physical stiffness or stress-related routine ruts. Because you work so hard, you might ignore subtle warning signs of fatigue. Prioritize regular joint relaxation.",
        family: "A highly organized, beautifully run household with immovable boundaries. You provide magnificent structural stability, but remember to inject occasional fun to break up strict rules."
      };
    case "Air-Air":
      return {
        romantic: "A beautiful meeting of minds built on absolute friendship and conversational synergy. You can talk for hours about everything under the sun, though you may need to intentionally cultivate deeper emotional intimacy.",
        financial: "Great for digital work, investments, and creative ideas, but actual cash savings can fluctuate due to a shared tendency to overlook boring day-to-day administrative details.",
        health: "Mainly centers around the nervous system. Over-analysis and a non-stop mental motor can trigger anxiety or restlessness. Incorporating technology-free windows will work wonders.",
        family: "A home packed with books, devices, and continuous dialogue. You treat family members like equals and value intellectual independence, though establishing domestic chores requires discipline."
      };
    case "Water-Water":
      return {
        romantic: "An incredibly deep, almost psychic emotional fusion. You absorb each other's moods instantly without needing words, resulting in an beautiful, highly empathetic romantic world.",
        financial: "Highly dependent on emotional states. You might engage in emotional retail therapy when stressed. Appointing a neutral financial advisor or automated saving tool is highly recommended.",
        health: "Deeply linked to emotional health. Suppressed relationship friction can quickly manifest as physical lethargy or digestive issues. Emotional transparency keeps you physically fit.",
        family: "An incredibly protective, deeply intuitive home environment. Empathy rules the household, making it a safe haven from the outside world, though you must guard against collective over-sensitivity."
      };
    default: // Clashing Elements (Fire-Water, Fire-Earth, Air-Water, Air-Earth)
      return {
        romantic: "A dynamic case of 'opposites attract'. You operate on entirely different emotional tracks, which creates massive fascination initially, but requires continuous adjustments to keep both satisfied.",
        financial: "One partner is naturally cautious while the other is a risk-taker. This balance can prevent financial disasters if you compromise, or cause friction if you try to control each other's styles.",
        health: "Friction occurs when your recovery needs clash (e.g., one wants to socialize to decompress, while the other needs absolute silence). Learn to respect each other's energy recharge methods.",
        family: "A diverse domestic environment where two completely unique worlds blend. It offers incredible growth opportunities for everyone involved, as long as differences are celebrated instead of critiqued."
      };
  }
};

export const calculateCrushMatch = (userRashiName, crushRashiName, userLocation, crushLocation) => {
  const user = RASHIS.find(r => r.name === userRashiName);
  const crush = RASHIS.find(r => r.name === crushRashiName);

  if (!user || !crush) return null;

  const indexUser = RASHIS.findIndex(r => r.name === userRashiName);
  const indexCrush = RASHIS.findIndex(r => r.name === crushRashiName);
  
  const forwardSteps = (indexCrush - indexUser + 12) % 12;
  const positionsApart = forwardSteps === 0 ? 1 : forwardSteps + 1;

  let score = 40; 

  // Compute Rashi Base Positioning Score
  if (positionsApart === 1) score += 45;
  else if (positionsApart === 7) score += 50;
  else if ([5, 9].includes(positionsApart)) score += 35;
  else if ([3, 11].includes(positionsApart)) score += 20;
  else if ([2, 12, 6, 8].includes(positionsApart)) score += 5;
  else score += 15;

  // Elemental adjustment
  if (user.element === crush.element) score += 10;
  else score -= 5;

  score = Math.max(15, Math.min(score, 100));

  // Pull life categories descriptions
  const lifeAreas = getLifeAreaReadings(user.element, crush.element);

  let summary = "Asubha (High Friction)";
  let colorTheme = "red";
  if (score >= 78) {
    summary = "Subha (Highly Auspicious Match)";
    colorTheme = "emerald";
  } else if (score >= 48) {
    summary = "Madhyama (Balanced & Manageable)";
    colorTheme = "amber";
  }

  return { score, summary, colorTheme, lifeAreas };
};