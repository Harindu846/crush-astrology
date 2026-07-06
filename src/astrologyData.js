// src/astrologyData.js

export const RASHIS = [
  { name: "Mesha (Aries)", element: "Fire", ruler: "Mars (Kuja)", quality: "Chara (Moveable)" },
  { name: "Vrishabha (Taurus)", element: "Earth", ruler: "Venus (Shukra)", quality: "Sthira (Fixed)" },
  { name: "Mithuna (Gemini)", element: "Air", ruler: "Mercury (Budha)", quality: "Dviswabhava (Dual)" },
  { name: "Kataka (Cancer)", element: "Water", ruler: "Moon (Chandra)", quality: "Chara (Moveable)" },
  { name: "Simha (Leo)", element: "Fire", ruler: "Sun (Surya)", quality: "Sthira (Fixed)" },
  { name: "Kanya (Virgo)", element: "Earth", ruler: "Mercury (Budha)", quality: "Dviswabhava (Dual)" },
  { name: "Thula (Libra)", element: "Air", ruler: "Venus (Shukra)", quality: "Chara (Moveable)" },
  { name: "Vrishchika (Scorpio)", element: "Water", ruler: "Mars (Kuja)", quality: "Sthira (Fixed)" },
  { name: "Dhanu (Sagittarius)", element: "Fire", ruler: "Jupiter (Guru)", quality: "Dviswabhava (Dual)" },
  { name: "Makara (Capricorn)", element: "Earth", ruler: "Saturn (Shani)", quality: "Chara (Moveable)" },
  { name: "Kumbha (Aquarius)", element: "Air", ruler: "Saturn (Shani)", quality: "Sthira (Fixed)" },
  { name: "Meena (Pisces)", element: "Water", ruler: "Jupiter (Guru)", quality: "Dviswabhava (Dual)" }
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

export const calculateCrushMatch = (userRashiName, crushRashiName, userLocation, crushLocation) => {
  const user = RASHIS.find(r => r.name === userRashiName);
  const crush = RASHIS.find(r => r.name === crushRashiName);

  if (!user || !crush) return null;

  // Fully dynamic algorithmic calculation mapping
  const indexUser = RASHIS.findIndex(r => r.name === userRashiName);
  const indexCrush = RASHIS.findIndex(r => r.name === crushRashiName);
  
  // Calculate raw distance steps forward on the 12-sign zodiac wheel
  const forwardSteps = (indexCrush - indexUser + 12) % 12;
  const positionsApart = forwardSteps === 0 ? 1 : forwardSteps + 1;

  let score = 35; // True baseline matrix seed
  let readings = {
    rashiKoota: "",
    elementHarmony: "",
    planetaryLords: "",
    geographicalBond: ""
  };

  // 1. Rashi Koota (Zodiac Position Placement Analysis)
  if (positionsApart === 1) {
    score += 45;
    readings.rashiKoota = `You both share the identical Lunar House of ${userRashiName}. In local Sri Lankan astrology, this creates an 'Eka Rashi' psychological bond. Your core ego structures, behavioral habits, and natural instincts operate on the exact same wavelength.`;
  } else if (positionsApart === 7) {
    score += 55;
    readings.rashiKoota = "Sama-Saptaka Configuration detected! Your signs are positioned perfectly opposite each other on the celestial horizon. This is widely considered the highest magnetic attraction mapping in traditional systems—creating a perfect mirror effect where one partner naturally anchors what the other lacks.";
  } else if ([5, 9].includes(positionsApart)) {
    score += 35;
    readings.rashiKoota = `Excellent Trikona (Trine) positioning. Your charts sit ${positionsApart} houses apart. This promotes effortless flowing communication, highly compatible values, and an organic friendship that removes typical relationship performance anxiety.`;
  } else if ([3, 11].includes(positionsApart)) {
    score += 25;
    readings.rashiKoota = "Favorable upachaya positioning. This relationship has high logistical compatibility. You will excel at working as a team, building financial security, and pushing each other to hit real-world goals.";
  } else if ([2, 12, 6, 8].includes(positionsApart)) {
    score += 5;
    readings.rashiKoota = "Minor structural friction observed in your cosmic positions. This indicates contrasting emotional rhythms. One prefers immediate action while the other needs processing time, meaning minor misunderstandings require active empathy rather than assumptions.";
  } else {
    score += 15;
    readings.rashiKoota = "Standard neutral positional layout. Your foundational connection is highly adaptable, letting your individual real-world actions shape the destiny of the relationship easily.";
  }

  // 2. Elemental Harmony Breakdown
  if (user.element === crush.element) {
    score += 10;
    readings.elementHarmony = `Dual ${user.element} element matching. You navigate stressors identically. If you are both Fire, you match each other's passion; if Earth, you value quiet predictability; if Air, intellect rules; if Water, deep intuitive empathy governs your bond.`;
  } else if (
    (user.element === "Fire" && crush.element === "Air") || (user.element === "Air" && crush.element === "Fire")
  ) {
    score += 8;
    readings.elementHarmony = `Fire & Air combination. This is a highly stimulating, energetic dynamic. The Air element naturally gives the Fire partner mental clarity and space, while Fire provides the drive, motivation, and excitement to keep the bond lively.`;
  } else if (
    (user.element === "Earth" && crush.element === "Water") || (user.element === "Water" && crush.element === "Earth")
  ) {
    score += 8;
    readings.elementHarmony = `Earth & Water combination. This provides exceptional long-term stability. The Earth partner provides a safe, grounded structure, while the Water partner introduces emotional depth, creative intuition, and deep vulnerability.`;
  } else {
    score -= 8;
    readings.elementHarmony = `Contrasting elements (${user.element} meets ${crush.element}). You possess fundamentally separate styles of expressing affection and handling vulnerabilities. This simply means you must learn each other's specific 'love languages' explicitly.`;
  }

  // 3. Planetary Ruler Alignment
  if (user.ruler === crush.ruler) {
    score += 5;
    readings.planetaryLords = `Both charts are governed by the same cosmic lord: ${user.ruler}. This minimizes internal value conflicts because your definitions of success, integrity, and personal growth align seamlessly.`;
  } else {
    readings.planetaryLords = `Your individual charts are anchored by ${user.ruler} and ${crush.ruler}. This introduces a beautiful balance of perspectives—allowing you to learn alternative strategies for solving life's regular hurdles.`;
  }

  // 4. Geographical Aura Mapping
  if (userLocation.toLowerCase() === crushLocation.toLowerCase()) {
    score += 3;
    readings.geographicalBond = `Born within the exact same regional energy field of ${userLocation}. This suggests highly shared early cultural baselines, making mutual contextual understanding completely organic.`;
  } else {
    readings.geographicalBond = `Your personal charts bridge the spatial gap between ${userLocation} and ${crushLocation}. This geometric distance adds an extra layer of romantic fascination, blending distinct background dynamics harmoniously.`;
  }

  // Bound check and ensure total variations occur
  score = Math.max(12, Math.min(score, 100));

  let summary = "Asubha (High Friction)";
  let colorTheme = "red";
  if (score >= 78) {
    summary = "Subha (Highly Auspicious Match)";
    colorTheme = "emerald";
  } else if (score >= 48) {
    summary = "Madhyama (Balanced & Manageable)";
    colorTheme = "amber";
  }

  return { score, readings, summary, colorTheme };
};