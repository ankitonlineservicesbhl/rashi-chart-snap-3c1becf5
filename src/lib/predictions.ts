// Predictions based on planet positions in houses and signs

export interface Prediction {
  planet: string;
  house: number;
  sign: string;
  houseEffect: string;
  signEffect: string;
}

// House effects for each planet
export const houseEffects: Record<string, Record<number, string>> = {
  Su: {
    1: "Strong personality, leadership qualities, confident, self-focused. Natural authority and commanding presence. May be proud or egoistic.",
    2: "Wealth through government or authority. Good speaking ability. May have issues with family harmony. Earnings through father.",
    3: "Courageous and brave. Good relations with siblings initially but may face conflicts. Success through self-effort and communication.",
    4: "Less domestic happiness. Career may require travel. Issues with mother or home comfort. Government may acquire property.",
    5: "Intelligent children, creative mind. Good for speculation and investments. Strong interest in politics or leadership roles.",
    6: "Victory over enemies, good health. Success in competitive exams and legal matters. May work in health or service sector.",
    7: "Late marriage or marriage issues. Spouse may be dominating. Business partnerships need care. Focus on self over relationships.",
    8: "Health issues, obstacles in life. Interest in occult sciences. May receive inheritance. Transformation through challenges.",
    9: "Religious and spiritual inclination. Father may be influential. Good fortune through dharma. Travel for pilgrimage.",
    10: "Excellent for career and status. Government favor, authority position. Fame and recognition. Strong professional reputation.",
    11: "Good income and gains. Influential friends. Wishes fulfilled. Elder siblings may be helpful. Success in social networks.",
    12: "Expenses high, possible foreign settlement. Spiritual inclination. May work in hospitals or isolated places. Eye problems possible."
  },
  Mo: {
    1: "Emotional, sensitive personality. Changeable nature. Good imagination. Mother's influence strong. Popular and well-liked.",
    2: "Fluctuating finances. Sweet speech. Family-oriented. Good for food business. Wealth through mother or women.",
    3: "Adventurous mind, short travels. Good relationship with siblings. Creative writing ability. Changeable interests.",
    4: "Strong attachment to home and mother. Emotional security important. May own property or vehicles. Peaceful domestic life.",
    5: "Creative and romantic. Children bring happiness. Emotional attachment to love affairs. Good intuition for speculation.",
    6: "Emotional health issues. Service-oriented. May face enemies through women. Digestive issues possible. Pets bring comfort.",
    7: "Beautiful and caring spouse. Early marriage likely. Partnership brings emotional fulfillment. Public relations good.",
    8: "Emotional turbulence. Interest in mysteries. Inheritance through mother. Psychic abilities. Fear of water.",
    9: "Spiritual and religious nature. Mother may be religious. Foreign travels. Higher education brings peace. Charitable nature.",
    10: "Public popularity, career fluctuations. Fame through masses. Mother influences career. Government or public sector work.",
    11: "Many friends, good social circle. Income through women or public. Wishes fulfilled emotionally. Elder sister helpful.",
    12: "Expenses through women. Isolation seeking. Sleep issues. Spiritual nature. Hospital or foreign land connections."
  },
  Ma: {
    1: "Aggressive, energetic personality. Athletic body. Leadership through action. Quick temper. Scar or mark on body.",
    2: "Harsh speech, family conflicts. Wealth through engineering or military. May argue with family. Strong appetite.",
    3: "Very courageous, brave. Victory over enemies. Good for sports. Younger siblings may be troublesome. Technical skills.",
    4: "Domestic disturbances, property disputes. Issues with mother. May own land or vehicles. Hot tempered at home.",
    5: "Sharp intellect, children may be few. Risky speculations. Interest in sports and competition. Creative fire.",
    6: "Excellent for defeating enemies. Good health and vitality. Success in competition. Military or police career good.",
    7: "Spouse may be aggressive. Marriage conflicts possible. Business partnerships have disputes. Passion in relationships.",
    8: "Accidents or surgery possible. Research abilities. Interest in occult. Inheritance through disputes. Longevity issues.",
    9: "Aggressive about beliefs. Father relationship stressed. Adventure travel. May fight for religion or causes.",
    10: "Excellent career success. Engineering, military, police careers. Authority through action. Hard-working professional.",
    11: "Good income through effort. Friends may be aggressive. Wishes fulfilled through hard work. Elder brother influential.",
    12: "Hidden enemies, expenses on litigation. Foreign settlement possible. Interest in spiritual warfare. Hospital work."
  },
  Me: {
    1: "Intelligent, youthful appearance. Good communication skills. Curious nature. May look younger than age. Witty personality.",
    2: "Wealthy through intellect. Good speaker and writer. Business acumen. Education related earnings. Family education important.",
    3: "Excellent communication. Good relationship with siblings. Short travels for business. Writing and media success.",
    4: "Educated family. Multiple homes possible. Intellectual mother. Good for real estate business. Home office work.",
    5: "Very intelligent children. Good for education sector. Creative writing. Smart investments. Romance through communication.",
    6: "Analytical mind defeats enemies. Health issues from stress. Good for accounting or analysis. Nervous system care needed.",
    7: "Intelligent spouse, business partnerships good. May marry young or marry someone younger. Trade and commerce success.",
    8: "Research and investigation abilities. Inheritance through documents. Interest in mysteries. Longevity through adaptability.",
    9: "Higher education success. Multiple degrees. Father may be educated. Teaching and publishing good. Philosophical mind.",
    10: "Career in communication, writing, IT. Multiple careers possible. Good for business. Adaptable professional.",
    11: "Gains through intellect. Many friends from different backgrounds. Network marketing good. Wishes fulfilled through planning.",
    12: "Expenses through education. Foreign education possible. Secret communications. Writing in isolation. Meditation helpful."
  },
  Ju: {
    1: "Wise, religious, optimistic personality. Overweight tendency. Respected in society. Guru-like qualities. Lucky in life.",
    2: "Wealthy family. Sweet and wise speech. Good for banking and finance. Family values strong. Gold and treasures.",
    3: "Courageous with wisdom. Religious siblings. Pilgrimages. Writing on philosophy. Confident communication.",
    4: "Large home, happy domestic life. Religious mother. Property expansion. Good vehicles. Contentment at home.",
    5: "Blessed with good children. Higher education. Creative wisdom. Good for teaching. Speculation success.",
    6: "Victory over enemies through dharma. Good health. Legal success. Service to society. Healing abilities.",
    7: "Excellent spouse, happy marriage. Business expansion. Foreign partnerships good. Wise life partner.",
    8: "Longevity, inheritance. Interest in occult wisdom. Research success. Transformation through knowledge.",
    9: "Extremely fortunate. Spiritual and religious. Father blessings. Foreign travel. Guru's grace. Higher learning.",
    10: "Excellent career growth. Respected position. Government favor. Law, education, or religious career.",
    11: "Great gains and wealth. Influential friends. All wishes fulfilled. Elder siblings blessed.",
    12: "Expenses on charity. Foreign settlement. Spiritual liberation. Moksha yoga. Hospital or ashram work."
  },
  Ve: {
    1: "Attractive personality, artistic. Love for luxury and beauty. Charming nature. Fashion sense. Romantic disposition.",
    2: "Wealthy through arts or women. Sweet speech. Beautiful family. Good food and comforts. Jewelry collection.",
    3: "Artistic siblings. Short travels for pleasure. Creative writing. Media and entertainment. Performing arts.",
    4: "Beautiful home, luxury vehicles. Good relationship with mother. Comfortable domestic life. Interior decoration.",
    5: "Romantic nature, love affairs. Creative talents. Children beautiful. Entertainment industry. Speculation gains.",
    6: "Beauty helps defeat enemies. Health through lifestyle. Service in beauty or hospitality. Diplomatic skills.",
    7: "Beautiful and loving spouse. Happy marriage. Business partnerships beneficial. Public relations excellent.",
    8: "Inheritance through spouse. Interest in tantric arts. Longevity through pleasure. Hidden relationships possible.",
    9: "Religious but pleasure-seeking. Father wealthy. Foreign travel for pleasure. Arts and culture studies.",
    10: "Career in arts, entertainment, beauty. Fame and glamour. Fashion or hospitality industry success.",
    11: "Gains through women or arts. Many female friends. Wishes for luxury fulfilled. Social life excellent.",
    12: "Expenses on pleasure. Foreign romance. Bed pleasures. Spiritual through beauty. Luxury in isolation."
  },
  Sa: {
    1: "Serious, disciplined personality. Thin or bony structure. Hard early life. Responsible nature. Delayed success.",
    2: "Financial struggles initially. Harsh speech. Family responsibilities. Savings habit. Wealth through hard work.",
    3: "Courageous through discipline. Younger siblings may be few. Writing on serious topics. Methodical communication.",
    4: "Less domestic happiness. Old house or property. Mother's health issues. Career requires relocation. Hard work at home.",
    5: "Delayed children. Serious studies. Less speculation luck. Interest in politics. Creative delays but quality work.",
    6: "Excellent for defeating enemies. Chronic health issues. Service sector success. Legal delays but eventual victory.",
    7: "Delayed marriage. Older or mature spouse. Business partnerships need patience. Serious relationships.",
    8: "Long life through discipline. Chronic ailments. Research in depth. Inheritance delayed. Occult through hard work.",
    9: "Traditional religious views. Father relationship difficult. Delayed higher education. Pilgrimage later in life.",
    10: "Excellent for career through hard work. Slow but steady rise. Government jobs. Authority through discipline.",
    11: "Gains after delays. Few but loyal friends. Wishes fulfilled slowly. Elder siblings have struggles.",
    12: "Expenses through illness. Foreign settlement through struggle. Spiritual through suffering. Isolation tendency."
  },
  Ra: {
    1: "Unconventional personality. Foreign influences. Mysterious nature. May have skin issues. Unique life path.",
    2: "Unusual speech patterns. Foreign food preferences. Wealth through unconventional means. Family secrets.",
    3: "Bold and daring. Unconventional siblings. Travels to foreign lands. Media and technology communication.",
    4: "Unusual home environment. Foreign residence. Mother may be unconventional. Multiple property dealings.",
    5: "Unusual children or delayed. Unconventional romance. Speculative tendencies. Creative in technology.",
    6: "Victory over enemies through strategy. Foreign diseases or unusual health. Service in technology.",
    7: "Foreign spouse possible. Unconventional marriage. Business with foreigners. Unusual partnerships.",
    8: "Interest in occult and mysteries. Sudden transformations. Foreign inheritance. Research in hidden subjects.",
    9: "Unorthodox religious views. Foreign higher education. Father may be foreign or unconventional.",
    10: "Career through foreign connections. Technology or research career. Sudden rise and falls. Diplomatic career.",
    11: "Gains through foreign sources. Unusual friends. Wishes fulfilled unexpectedly. Network with foreigners.",
    12: "Foreign settlement likely. Expenses through foreign matters. Spiritual path unconventional. Dreams significant."
  },
  Ke: {
    1: "Spiritual personality. Detached nature. Mysterious aura. May have marks on body. Past life connections strong.",
    2: "Detached from family wealth. Unusual speech. Spiritual family. May lose wealth for spirituality.",
    3: "Courageous but detached. Siblings may be spiritual. Short pilgrimages. Mysterious communications.",
    4: "Detached from home comforts. Spiritual mother. May abandon property. Meditation practice at home.",
    5: "Detached from children. Spiritual creativity. Past life wisdom. Intuitive intelligence. Mantra siddhi.",
    6: "Spiritual healing abilities. Victory over inner enemies. Service without expectation. Mysterious health.",
    7: "Detached in marriage. Spiritual spouse. May renounce partnership. Past life partner connections.",
    8: "Deep occult knowledge. Moksha indicator. Sudden spiritual awakenings. Past life mysteries revealed.",
    9: "Deep spiritual wisdom. Renunciation tendency. Father may be spiritual. Pilgrimages to powerful places.",
    10: "Career in spiritual or healing field. Detached from status. Service-oriented career. Research work.",
    11: "Spiritual gains. Detached from desires. Few but spiritual friends. Wishes for liberation.",
    12: "Excellent for spiritual liberation. Moksha yoga. Foreign ashram. Dreams prophetic. Past life release."
  },
  As: {
    1: "The Ascendant in 1st house shows the core personality and physical constitution. Self-focused and identity-driven.",
    2: "Focus on wealth, family values, and speech. Resources and material security are important life themes.",
    3: "Communication, courage, and siblings are emphasized. Short travels and self-effort bring success.",
    4: "Home, mother, emotional security, and property are central life themes. Inner peace is important.",
    5: "Creativity, children, intelligence, and romance are highlighted. Education and speculation matter.",
    6: "Service, health, enemies, and daily work are life themes. Overcoming obstacles defines growth.",
    7: "Partnerships, marriage, and public dealings are central. Relationships shape life direction.",
    8: "Transformation, occult, and shared resources are themes. Deep psychological growth indicated.",
    9: "Higher learning, spirituality, and fortune are emphasized. Father and gurus are important.",
    10: "Career, status, and public reputation are central themes. Professional achievement matters.",
    11: "Gains, friends, and aspirations are highlighted. Network and community bring fulfillment.",
    12: "Spirituality, losses, and foreign lands are themes. Liberation and isolation are significant."
  }
};

// Sign effects for each planet
export const signEffects: Record<string, Record<string, string>> = {
  Su: {
    Aries: "Exalted Sun - Strong leadership, pioneering spirit, excellent vitality. Natural authority and courage. Government favors likely.",
    Taurus: "Steady determination, materialistic approach. Wealth through authority. Stubborn about status. Fixed assets through career.",
    Gemini: "Intellectual leadership. Communication through authority. Multiple interests. Writing and speaking abilities enhanced.",
    Cancer: "Father's influence mixed. Emotional leadership. Public service orientation. Property through government.",
    Leo: "Own sign - Royal nature, confident, dignified. Natural leader. Creative expression. Father influential. Success in politics.",
    Virgo: "Analytical authority. Service-oriented leadership. Health-conscious. Detailed approach to power. Mercury's influence.",
    Libra: "Debilitated Sun - Challenges with self-confidence. Partnerships important. Diplomatic nature. Father relationship complex.",
    Scorpio: "Intense personality. Transformation through ego. Research and investigation. Hidden power. Deep psychology.",
    Sagittarius: "Religious and philosophical authority. Teaching and preaching. Father religious. Foreign connections. Higher learning.",
    Capricorn: "Practical authority. Career-focused. Father hardworking. Government career. Disciplined leadership.",
    Aquarius: "Humanitarian leadership. Unconventional authority. Scientific approach. Social reforms. Group leadership.",
    Pisces: "Spiritual authority. Compassionate leadership. Intuitive. May sacrifice for others. Foreign connections."
  },
  Mo: {
    Aries: "Emotional energy, quick reactions. Independent nature. May be impulsive emotionally. Active mind. Mother energetic.",
    Taurus: "Exalted Moon - Emotional stability, comfort-seeking. Strong attachment to luxury. Mother nurturing. Peaceful mind.",
    Gemini: "Intellectual emotions. Communicative nature. Changeable feelings. Multiple interests. Curious mind.",
    Cancer: "Own sign - Very emotional, nurturing. Strong mother connection. Home-loving. Intuitive. Protective nature.",
    Leo: "Proud emotions. Creative feelings. Dramatic nature. Children bring joy. Romance important. Noble heart.",
    Virgo: "Analytical emotions. Health-conscious. Service orientation. Critical mind. Detailed feelings. Nervous nature.",
    Libra: "Balanced emotions. Relationship-focused. Artistic nature. Partner-dependent for emotional security. Diplomatic.",
    Scorpio: "Debilitated Moon - Intense emotions. Transformation through feelings. Secretive nature. Deep psychology. Research mind.",
    Sagittarius: "Optimistic emotions. Religious feelings. Travel-oriented. Higher learning brings peace. Philosophical mind.",
    Capricorn: "Serious emotions. Disciplined feelings. Mother may be strict. Delayed emotional fulfillment. Career-focused.",
    Aquarius: "Detached emotions. Humanitarian feelings. Unconventional nature. Group-oriented. Scientific mind.",
    Pisces: "Intuitive emotions. Spiritual feelings. Compassionate nature. Dreams significant. Creative imagination."
  },
  Ma: {
    Aries: "Own sign - Very strong Mars. Courageous, energetic, pioneering. Athletic. Leader in action. Quick temper.",
    Taurus: "Determined energy. Stubborn when angry. Wealth through action. Fixed approach. Property gains through effort.",
    Gemini: "Mental energy. Communication through action. Writing with force. Debates. Siblings may be competitive.",
    Cancer: "Debilitated Mars - Emotional energy. Family conflicts. Property issues. Mother relationship stressed. Domestic disturbance.",
    Leo: "Royal energy. Courageous leadership. Sports and politics. Children active. Romance passionate.",
    Virgo: "Analytical energy. Service through action. Health-conscious actions. Detailed work. Technical skills.",
    Libra: "Partnership energy. Business through action. May compromise courage. Diplomatic fights. Legal matters.",
    Scorpio: "Own sign - Very intense Mars. Research, investigation. Occult practices. Transformation. Deep strength.",
    Sagittarius: "Religious energy. Teaching with passion. Sports and adventure. Higher learning through effort.",
    Capricorn: "Exalted Mars - Excellent placement. Disciplined energy. Career success. Authority through action. Practical courage.",
    Aquarius: "Humanitarian energy. Scientific action. Group activities. Unconventional courage. Technology work.",
    Pisces: "Spiritual energy. Compassionate action. May lack direction. Hospital or ashram work. Hidden actions."
  },
  Me: {
    Aries: "Quick thinking. Impulsive communication. Pioneering ideas. Short attention span. Debates and arguments.",
    Taurus: "Steady intellect. Practical thinking. Business acumen. Slow but thorough learning. Financial planning.",
    Gemini: "Own sign - Excellent communication. Quick wit. Multiple talents. Writing and speaking. Versatile mind.",
    Cancer: "Emotional intelligence. Memory strong. Mother educational influence. Home-based learning. Intuitive logic.",
    Leo: "Creative intelligence. Proud communication. Teaching ability. Children's education important. Dramatic expression.",
    Virgo: "Exalted Mercury - Excellent analysis. Detail-oriented. Health knowledge. Service through intellect. Pure discrimination.",
    Libra: "Balanced thinking. Diplomatic communication. Partnership discussions. Artistic intellect. Legal mind.",
    Scorpio: "Research thinking. Deep analysis. Secretive communication. Investigation abilities. Psychological insight.",
    Sagittarius: "Philosophical thinking. Teaching and publishing. Higher education focus. Religious communication. Broad vision.",
    Capricorn: "Practical intellect. Business thinking. Serious communication. Career planning. Structured learning.",
    Aquarius: "Innovative thinking. Scientific intellect. Humanitarian ideas. Technology communication. Group discussions.",
    Pisces: "Debilitated Mercury - Intuitive thinking. Imaginative. Confusion possible. Spiritual communication. Creative writing."
  },
  Ju: {
    Aries: "Pioneer in wisdom. Leadership in religion. Teaching through action. Quick expansion. Father energetic.",
    Taurus: "Wealth through wisdom. Banking and finance. Steady growth. Material expansion. Family wealth.",
    Gemini: "Communication wisdom. Teaching and writing. Multiple knowledge areas. Business expansion. Versatile learning.",
    Cancer: "Exalted Jupiter - Excellent placement. Nurturing wisdom. Mother blessed. Property expansion. Emotional intelligence.",
    Leo: "Royal wisdom. Creative expansion. Children blessed. Political success. Teaching leadership.",
    Virgo: "Analytical wisdom. Health and healing knowledge. Service expansion. Detailed teaching. Practical dharma.",
    Libra: "Partnership wisdom. Marriage blessed. Legal knowledge. Diplomatic expansion. Balanced growth.",
    Scorpio: "Deep wisdom. Occult knowledge. Transformation through faith. Research expansion. Hidden teachings.",
    Sagittarius: "Own sign - Maximum wisdom. Religious authority. Teaching and preaching. Foreign expansion. Guru status.",
    Capricorn: "Debilitated Jupiter - Practical challenges to faith. Slow growth. Career-focused wisdom. Traditional values.",
    Aquarius: "Humanitarian wisdom. Scientific expansion. Group teaching. Unconventional religion. Social growth.",
    Pisces: "Own sign - Spiritual wisdom. Intuitive knowledge. Compassionate expansion. Moksha indicated. Divine grace."
  },
  Ve: {
    Aries: "Passionate love. Quick attractions. Independent romance. Beauty through action. Art with energy.",
    Taurus: "Own sign - Maximum luxury and beauty. Comfortable life. Art and music. Wealth through beauty. Sensual pleasures.",
    Gemini: "Intellectual love. Communication in romance. Artistic writing. Multiple attractions. Youthful beauty.",
    Cancer: "Nurturing love. Emotional beauty. Home decoration. Mother beautiful. Comfortable emotions.",
    Leo: "Royal love. Dramatic romance. Creative arts. Children beautiful. Entertainment industry.",
    Virgo: "Debilitated Venus - Practical love. Service in relationships. Health and beauty. Analytical romance. Pure arts.",
    Libra: "Own sign - Perfect balance in love. Marriage blessed. Partnership harmony. Artistic excellence. Diplomatic charm.",
    Scorpio: "Intense love. Passionate romance. Hidden relationships. Transformation through love. Deep beauty.",
    Sagittarius: "Philosophical love. Foreign romance. Higher arts. Teaching beauty. Religious arts.",
    Capricorn: "Mature love. Practical romance. Career through arts. Disciplined beauty. Traditional values.",
    Aquarius: "Unconventional love. Humanitarian beauty. Group attractions. Scientific arts. Unique relationships.",
    Pisces: "Exalted Venus - Divine love. Spiritual beauty. Compassionate romance. Art with soul. Maximum pleasure."
  },
  Sa: {
    Aries: "Debilitated Saturn - Challenges with discipline. Frustration in action. Delayed courage. Hard work needed.",
    Taurus: "Steady discipline. Slow but sure wealth. Property through effort. Fixed determination. Material delays.",
    Gemini: "Serious communication. Structured thinking. Writing with depth. Siblings have challenges. Slow learning.",
    Cancer: "Home responsibilities. Mother's health issues. Property delays. Emotional discipline. Family burdens.",
    Leo: "Authority through hard work. Father challenges. Leadership delays. Creative blocks. Heart issues possible.",
    Virgo: "Excellent for service. Detailed discipline. Health work. Chronic conditions. Analytical delays.",
    Libra: "Exalted Saturn - Excellent placement. Partnership karma. Legal success. Balanced discipline. Fair justice.",
    Scorpio: "Deep discipline. Research through patience. Occult studies. Transformation slow. Hidden karma.",
    Sagittarius: "Religious discipline. Teaching after delays. Foreign challenges. Higher education late. Father karma.",
    Capricorn: "Own sign - Maximum discipline. Career excellence. Authority earned. Status through effort. Government work.",
    Aquarius: "Own sign - Humanitarian discipline. Scientific work. Group responsibilities. Social service. Unconventional success.",
    Pisces: "Spiritual discipline. Isolation karma. Foreign lands work. Expenses through delays. Liberation through suffering."
  },
  Ra: {
    Aries: "Obsession with leadership. Unconventional courage. Foreign pioneers. Head issues. Unique identity.",
    Taurus: "Material obsession. Foreign wealth. Unusual speech. Unconventional family. Intoxicant caution.",
    Gemini: "Exalted position - Communication obsession. Media and technology. Foreign connections. Unique intellect.",
    Cancer: "Mother connection unusual. Foreign home. Emotional obsession. Property through unconventional means.",
    Leo: "Authority obsession. Unique creativity. Foreign politics. Children unconventional. Entertainment technology.",
    Virgo: "Service obsession. Health technology. Foreign employment. Analytical uniqueness. Research work.",
    Libra: "Partnership obsession. Foreign spouse. Business technology. Legal technology. Unique balance.",
    Scorpio: "Occult obsession. Research into hidden. Transformation through foreign. Deep technology. Tantric practices.",
    Sagittarius: "Debilitated position - Religious confusion. Foreign education. Unconventional beliefs. Guru issues.",
    Capricorn: "Career obsession. Foreign government. Technology in authority. Unique discipline. Political technology.",
    Aquarius: "Humanitarian obsession. Technology and science. Foreign networks. Unique groups. Future-oriented.",
    Pisces: "Spiritual obsession. Foreign spirituality. Dreams significant. Isolation unique. Moksha through unusual means."
  },
  Ke: {
    Aries: "Spiritual courage. Detachment from ego. Past life warrior. Head injuries possible. Unique identity release.",
    Taurus: "Detachment from material. Speech unusual. Family karma. Past life wealth. Spiritual family.",
    Gemini: "Detachment from communication. Past life knowledge. Spiritual writing. Siblings karma. Intuitive mind.",
    Cancer: "Detachment from home. Mother spiritual. Past life emotions. Property release. Intuitive feelings.",
    Leo: "Detachment from authority. Creative spirituality. Children karma. Past life royalty. Heart opening.",
    Virgo: "Detachment from service. Healing abilities. Health karma. Past life service. Spiritual analysis.",
    Libra: "Detachment from partnership. Past life spouse. Spiritual relationships. Balance through release.",
    Scorpio: "Deep spirituality. Occult mastery. Transformation complete. Past life mysteries. Moksha indicated.",
    Sagittarius: "Exalted position - Spiritual wisdom. Past life teacher. Guru grace. Pilgrimage important. Higher liberation.",
    Capricorn: "Detachment from career. Past life authority. Spiritual discipline. Status release. Karma completion.",
    Aquarius: "Detachment from groups. Past life networks. Humanitarian spirituality. Unique liberation. Future karma.",
    Pisces: "Debilitated position - Spiritual confusion possible. Past life spirituality. Dreams karmic. Foreign karma. Isolation need."
  }
};

export function generatePredictions(planets: Array<{name: string; rasizn: number; zodiac: string}>, houses: string[][], rashis: number[]): Prediction[] {
  const predictions: Prediction[] = [];
  
  const signNames = ['', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
                     'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  
  planets.forEach(planet => {
    // Find which house this planet is in
    let houseNumber = 1;
    for (let i = 0; i < 12; i++) {
      if (houses[i].includes(planet.name)) {
        houseNumber = i + 1;
        break;
      }
    }
    
    const houseEffect = houseEffects[planet.name]?.[houseNumber] || "No specific prediction available.";
    const signEffect = signEffects[planet.name]?.[planet.zodiac] || "No specific prediction available.";
    
    predictions.push({
      planet: planet.name,
      house: houseNumber,
      sign: planet.zodiac,
      houseEffect,
      signEffect
    });
  });
  
  return predictions;
}
