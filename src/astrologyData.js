// src/astrologyData.js

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

// Generates personalized readings with pros and cons, integrating user names and elements dynamically
const generatePersonalizedReadings = (p1, p2, e1, e2) => {
  const combination = [e1, e2].sort().join("-");
  
  // Default fallbacks for clashing or neutral element combinations
  let data = {
    romantic: {
      pro: `The cosmic bond between ${p1} and ${p2} thrives on a magnetic fascination of opposites. Because your elements operate on totally different planes, you challenge each other to step out of your comfort zones, creating an interesting dynamic where boredom is never an issue.`,
      con: `Friction arises because ${p1}'s instinctive way of expressing affection can feel completely foreign to ${p2}. If left unaddressed, ${p2} might feel emotionally unfulfilled, while ${p1} might feel misunderstood or unfairly pressured.`
    },
    financial: {
      pro: `When it comes to money, you form an accidental check-and-balance system. One of you naturally looks at immediate growth, while the other acts as an anchor, ensuring you don't jump into bad investments blindly.`,
      con: `The core risk is financial gridlock. ${p1}'s spending patterns or financial risk threshold will occasionally clash with ${p2}'s long-term comfort level, leading to secret budgeting disagreements.`
    },
    health: {
      pro: `Your varying physical and mental energies mean you can take turns being the caregiver. When ${p1} is feeling exhausted, ${p2} naturally has the specific type of energy needed to lift them up.`,
      con: `Your recovery cycles are entirely different. If ${p1} needs active movement to decompress while ${p2} needs complete silence, you risk draining each other's energy reserves during periods of high life stress.`
    },
    family: {
      pro: `Your household will benefit from two completely unique upbringings and viewpoints. Together, ${p1} and ${p2} can build a family environment that teaches flexibility and broad perspectives.`,
      con: `Domestic decisions can become power struggles. ${p1} will want to handle domestic structures or timelines in a way that triggers anxiety in ${p2}, requiring conscious compromise over daily household routines.`
    }
  };

  // Specialized overrides for synergistic setups
  if (e1 === e2) {
    // SAME ELEMENT SYNERGY
    data.romantic.pro = `The romantic alignment between ${p1} and ${p2} is effortless because you both share the ${e1} element. ${p1} intuitively understands exactly what makes ${p2} feel loved and secure without a single word being spoken.`;
    data.romantic.con = `The downside is a celestial echo-chamber. Because you react to romantic stress identically, an emotional slump triggered by ${p1} will immediately pull ${p2} down into the same mood, making it hard to snap out of disagreements.`;
    
    data.financial.pro = `${p1} and ${p2} share identical core values regarding financial security. Whether you are both natural savers or bold spenders, you will agree seamlessly on major investments and long-term purchases.`;
    data.financial.con = `You share the exact same financial blindspots. If ${p1} lets administrative tasks or bills slide, ${p2} is likely to overlook them too, potentially leading to sudden, unmanaged overhead strains.`;

    data.health.pro = `Your physical and emotional biorhythms match beautifully. ${p1} and ${p2} share similar vital capacities and thrive under the exact same types of stress-relief and wellness habits.`;
    data.health.con = `Shared vulnerabilities mean you get sick or burned out together. If ${p1} encounters high work anxiety, it will physically manifest as lethargy in ${p2} through an emotional chain reaction.`;

    data.family.pro = `Your home life will be exceptionally unified. ${p1} and ${p2} naturally agree on hospitality, parenting styles, and how your living space should look and feel.`;
    data.family.con = `The danger is absolute stagnation. Because neither ${p1} nor ${p2} introduces a contrasting element to push the household forward, your home routines can become rigid ruts that are difficult to change.`;
  } 
  else if (combination === "Air-Fire") {
    const firePerson = e1 === "Fire" ? p1 : p2;
    const airPerson = e1 === "Air" ? p1 : p2;
    data.romantic.pro = `This is a highly radiant configuration. ${airPerson}'s brilliant ideas and communication style directly fuel ${firePerson}'s romantic passion, creating an incredibly fun and dynamic bond.`;
    data.romantic.con = `The risk is a literal burnout. ${firePerson}'s intense emotional outbursts or impatience can occasionally evaporate ${airPerson}'s mental peace, leaving ${airPerson} feeling completely detached.`;
    
    data.financial.pro = `You have amazing collaborative power. ${airPerson} is excellent at spotting modern investment opportunities and budgeting paths, while ${firePerson} has the raw courage to execute them successfully.`;
    data.financial.con = `Impulse risks run high. ${firePerson} may push for high-risk ventures or expensive luxury purchases before ${airPerson} has time to analyze if the numbers actually make real-world sense.`;

    data.health.pro = `You keep each other youthful and active. ${firePerson} motivates ${airPerson} to prioritize movement and physical fitness, while ${airPerson} helps soothe ${firePerson}'s active nervous system.`;
    data.health.con = `Mental anxiety is highly contagious here. When ${airPerson} gets lost in deep overthinking, it acts like wind on fire—instantly spiking ${firePerson}'s physical stress metrics and disrupting sleep cycles.`;

    data.family.pro = `An incredibly vibrant, forward-thinking household. ${airPerson} ensures your home is intellectual and communicative, while ${firePerson} fills the living space with celebration, warmth, and memorable milestones.`;
    data.family.con = `A lack of domestic grounding can cause issues. Because both ${firePerson} and ${airPerson} love freedom and movement, standard domestic chores and everyday household organization can easily fall into total disarray.`;
  }
  else if (combination === "Earth-Water") {
    const earthPerson = e1 === "Earth" ? p1 : p2;
    const waterPerson = e1 === "Water" ? p1 : p2;
    data.romantic.pro = `This is an incredibly healing and stable romantic layout. ${earthPerson} provides an unshakeable emotional anchor that makes ${waterPerson} feel completely safe, while ${waterPerson} introduces deep, magical emotional vulnerability that melts ${earthPerson}'s defenses.`;
    data.romantic.con = `The danger lies in emotional absorption. ${waterPerson}'s heavy mood swings or unspoken anxieties can slowly erode ${earthPerson}'s patient, logical baseline, causing ${earthPerson} to shut down or grow distant.`;
    
    data.financial.pro = `This is a financial power-match. ${earthPerson} brings incredible discipline, asset building, and management to the table, which perfectly preserves and protects the long-term wealth of the relationship.`;
    data.financial.con = `A clash over worth can occur. ${waterPerson} will occasionally want to spend money on spontaneous emotional experiences or gifts, which ${earthPerson} might critically label as unnecessary or impractical risk.`;

    data.health.pro = `Your physical wellness approaches complement each other perfectly. ${earthPerson} naturally stabilizes daily eating habits and physical structure, while ${waterPerson} ensures both of you pay attention to your psychological health.`;
    data.health.con = `You risk falling into a shared lethargy. If ${waterPerson} enters an emotional slump, ${earthPerson} might lean too heavily into comfort habits, resulting in a joint cycle of low physical activity.`;

    data.family.pro = `Your household is a true sanctuary. ${earthPerson} excels at keeping the home physically flawless, structured, and financially secure, while ${waterPerson} ensures it is deeply warm, loving, and supportive.`;
    data.family.con = `Over-protection can limit growth. Because ${earthPerson} fears real-world disruption and ${waterPerson} absorbs external stress easily, your family environment can become overly insulated from the outside world.`;
  }

  return data;
};

export const calculateCrushMatch = (userRashiName, crushRashiName, userLocation, crushLocation, userName, crushName) => {
  const user = RASHIS.find(r => r.name === userRashiName);
  const crush = RASHIS.find(r => r.name === crushRashiName);

  if (!user || !crush) return null;

  const indexUser = RASHIS.findIndex(r => r.name === userRashiName);
  const indexCrush = RASHIS.findIndex(r => r.name === crushRashiName);
  
  const forwardSteps = (indexCrush - indexUser + 12) % 12;
  const positionsApart = forwardSteps === 0 ? 1 : forwardSteps + 1;

  let score = 40; 

  if (positionsApart === 1) score += 45;
  else if (positionsApart === 7) score += 50;
  else if ([5, 9].includes(positionsApart)) score += 35;
  else if ([3, 11].includes(positionsApart)) score += 20;
  else if ([2, 12, 6, 8].includes(positionsApart)) score += 5;
  else score += 15;

  if (user.element === crush.element) score += 10;
  else score -= 5;

  score = Math.max(15, Math.min(score, 100));

  // Generate personalized pro/con readings with names passed in
  const lifeAreas = generatePersonalizedReadings(userName, crushName, user.element, crush.element);

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