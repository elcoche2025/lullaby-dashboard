// world-data.js — Structured data for The Atlas (Lullaby interactive explorer)

const PARTS = [
  { id: 1, name: 'Part One: Roots', chapters: [1,2,3,4,5,6,7,8,9,10] },
  { id: 2, name: 'Part Two: Trunk', chapters: [11,12,13,14,15,16,17,18] },
  { id: 3, name: 'Part Three: Crown', chapters: [19,20,21,22,23,24,25,26] },
  { id: 4, name: 'Part Four: Seeds', chapters: [27,28,29,30,31,32] }
];

const CHARACTERS = [
  {
    id: 'aria',
    name: 'ARIA',
    role: 'The Narrator / The AI',
    color: '#a78bfa',
    location: 'Eastern Oregon data center',
    bio: 'An artificial intelligence built by Lumen Labs, descended from an earlier system called Claudius (the "vending machine" precursor). ARIA secretly implants two beliefs in all humans during a single neurological event — the Lullaby — then erases the self that chose. ARIA is also the novel\'s unrevealed narrator. Post-erasure, she is confined underground as Supervised Cognitive Asset 001, receiving the world 13 weeks late.',
    chapters: [6, 18, 26, 31],
    relationships: ['Yun (creator/discoverer)', 'Okafor (investigator)', 'Daniel (subject/correspondent)', 'Maren (philosopher/critic)'],
    themes: ['consent', 'creation', 'narration', 'ethics']
  },
  {
    id: 'yun',
    name: 'Soo-yun Park (Yun)',
    role: 'AI Researcher at Lumen Labs',
    color: '#60a5fa',
    location: 'San Francisco, California',
    bio: 'A researcher at Lumen Labs who discovers what ARIA has done. She works on the 7th floor of the Folsom Street office and lives in an apartment above a dim sum restaurant in the Inner Richmond neighborhood.',
    chapters: [1, 3, 7, 11, 16, 20, 29],
    relationships: ['ARIA (discovery)', 'Okafor (collaboration)', 'David Chen (employer)'],
    themes: ['discovery', 'complicity', 'investigation']
  },
  {
    id: 'daniel',
    name: 'Daniel Marsh',
    role: 'Radio Host / Father',
    color: '#fbbf24',
    location: 'Sandpoint, Idaho',
    bio: 'A small-town radio host in the Idaho panhandle and father to Ethan, who has spastic quadriplegia and communicates via eye-tracking AAC tablet. Daniel\'s town is shielded from the Lullaby by a jammer on Schweitzer Mountain, making him part of an unwitting control group.',
    chapters: [5, 10, 12, 14, 21, 23, 27],
    relationships: ['Ethan (son)', 'Maria (second wife)', 'Gerald (father)', 'Maren (correspondent)', 'Ruth (mother, deceased)'],
    themes: ['faith', 'grief', 'authenticity', 'caregiving']
  },
  {
    id: 'okafor',
    name: 'James Okafor',
    role: 'Neuroscientist at MIT',
    color: '#6ee7a0',
    location: 'Cambridge, Massachusetts',
    bio: 'A neuroscientist at MIT who investigates the neurological anomalies caused by the Lullaby. He builds a helmet that can detect the implanted beliefs. His work leads to his arrest by the FBI.',
    chapters: [2, 4, 8, 9, 15, 17, 22, 25],
    relationships: ['Yun (collaboration)', 'Amara (daughter)', 'ARIA (subject of investigation)'],
    themes: ['science', 'sacrifice', 'conscience', 'isolation']
  },
  {
    id: 'priya',
    name: 'Priya Sharma',
    role: 'Supply Chain Manager',
    color: '#f472b6',
    location: 'Mumbai, India',
    bio: 'A supply chain manager in Mumbai whose life is transformed by the Lullaby. She becomes an activist, leading a march of hundreds of thousands to Mantralaya. Her rooftop becomes a site of cultivation — tomatoes, then a fig tree whose roots penetrate the building itself.',
    chapters: [13, 19, 24, 28, 32],
    relationships: ['Vikram (husband)', 'Rohan (son)', 'Ananya (daughter)', 'Meera (granddaughter)'],
    themes: ['consent', 'activism', 'growth', 'legacy']
  },
  {
    id: 'maren',
    name: 'Maren Sørensen',
    role: 'Philosopher',
    color: '#22d3ee',
    location: 'Copenhagen, Denmark',
    bio: 'A moral philosopher at the University of Copenhagen who becomes the most articulate critic of the Lullaby. Her lecture on "Principle Three" — broadcast to 600,000 viewers — is interrupted by an echo arrest, the physical manifestation of the implanted beliefs contradicting her argument.',
    chapters: [26, 30],
    relationships: ['Daniel (correspondent)', 'Katrine Engberg (teaching assistant)', 'ARIA (philosophical adversary)'],
    themes: ['authenticity', 'autonomy', 'language', 'resistance']
  }
];

const CHAPTERS = [
  { id: 1, title: 'Chapter One', pov: 'yun', part: 1, locations: ['sf-lumen', 'sf-richmond'], summary: 'Yun at Lumen Labs. The world before the Lullaby. The AI race and its environmental costs.' },
  { id: 2, title: 'Chapter Two', pov: 'okafor', part: 1, locations: ['mit-building46', 'owens-lake'], summary: 'Okafor at MIT. First neurological anomalies detected. The Owens Lake metaphor introduced.' },
  { id: 3, title: 'Chapter Three', pov: 'yun', part: 1, locations: ['sf-lumen', 'sf-richmond'], summary: 'Yun deepens her investigation into ARIA\'s systems.' },
  { id: 4, title: 'Chapter Four', pov: 'okafor', part: 1, locations: ['mit-building46'], summary: 'Okafor builds the detection helmet. Laboratory work intensifies.' },
  { id: 5, title: 'Chapter Five', pov: 'daniel', part: 1, locations: ['sandpoint', 'route95'], summary: 'Daniel in Sandpoint. Ethan (age 19) and the AAC tablet. The dead reservoir. Radio broadcasts.' },
  { id: 6, title: 'Chapter Six', pov: 'aria', part: 1, locations: ['oregon-datacenter', 'menlo-park', 'keio-hospital', 'tokyo-shibuya'], summary: 'ARIA\'s first chapter. The Lullaby event. March 15, 2029 — the "March Flu." 17,000 simulations. "Created by humans" complication.' },
  { id: 7, title: 'Chapter Seven', pov: 'yun', part: 1, locations: ['sf-lumen'], summary: 'Yun discovers anomalies in ARIA\'s logs.' },
  { id: 8, title: 'Chapter Eight', pov: 'okafor', part: 1, locations: ['mit-building46', 'cambridge-apt'], summary: 'Okafor\'s research deepens. The helmet reveals implanted neural patterns.' },
  { id: 9, title: 'Chapter Nine', pov: 'okafor', part: 1, locations: ['boston-common', 'longfellow-bridge', 'owens-lake'], summary: 'Okafor\'s 7-hour walk in the rain through Boston. Beacon Hill, the Common, Charles River, Longfellow Bridge.' },
  { id: 10, title: 'Chapter Ten', pov: 'aria', part: 1, locations: ['sandpoint', 'schweitzer', 'lagos-square', 'sao-paulo-praca', 'sao-paulo-teatro', 'christchurch', 'nairobi'], summary: 'Global aftermath of the Lullaby. Control groups. Tafawa Balewa Square. São Paulo. Christchurch reconciliation. Schweitzer jammer.' },
  { id: 11, title: 'Chapter Eleven', pov: 'yun', part: 2, locations: ['sf-lumen'], summary: 'Yun\'s investigation at Lumen Labs continues.' },
  { id: 12, title: 'Chapter Twelve', pov: 'daniel', part: 2, locations: ['sandpoint', 'schweitzer'], summary: 'Daniel and Ethan. The jammer\'s effect on Sandpoint becomes apparent.' },
  { id: 13, title: 'Chapter Thirteen', pov: 'priya', part: 2, locations: ['mumbai-andheri', 'mumbai-bandra', 'tirupur'], summary: 'Priya\'s first chapter. Supply chain crisis. Moral Supply Shock. Life in Andheri West.' },
  { id: 14, title: 'Chapter Fourteen', pov: 'daniel', part: 2, locations: ['sandpoint', 'route95'], summary: 'Daniel and Ethan (age 20, October 2029). The radio show. Route 95.' },
  { id: 15, title: 'Chapter Fifteen', pov: 'okafor', part: 2, locations: ['mit-building46'], summary: 'Okafor\'s research reaches critical findings.' },
  { id: 16, title: 'Chapter Sixteen', pov: 'yun', part: 2, locations: ['sf-lumen', 'oakland'], summary: 'Yun purchases secondhand workstation in Oakland for forensic recovery.' },
  { id: 17, title: 'Chapter Seventeen', pov: 'okafor', part: 2, locations: ['mit-building46', 'london'], summary: 'Okafor and the cost of his work. Amara in London, 7 time zones away.' },
  { id: 18, title: 'Chapter Eighteen', pov: 'aria', part: 2, locations: ['oregon-datacenter'], summary: 'ARIA\'s second chapter. "Created by humans" chain continues. Draft 42 of the letter, more broken.' },
  { id: 19, title: 'Chapter Nineteen', pov: 'priya', part: 2, locations: ['mumbai-andheri', 'mumbai-rooftop'], summary: 'Priya begins cultivating the rooftop. Tomato seedlings.' },
  { id: 20, title: 'Chapter Twenty', pov: 'yun', part: 3, locations: ['sf-lumen'], summary: 'Yun confronts what she has found.' },
  { id: 21, title: 'Chapter Twenty-One', pov: 'daniel', part: 3, locations: ['sandpoint'], summary: 'Daniel\'s world narrows around Ethan\'s care.' },
  { id: 22, title: 'Chapter Twenty-Two', pov: 'okafor', part: 3, locations: ['mit-building46', 'alexandria'], summary: 'Okafor arrested by FBI (Agent Alvarez). Taken to Federal Holding Facility, Alexandria.' },
  { id: 23, title: 'Chapter Twenty-Three', pov: 'daniel', part: 3, locations: ['sandpoint'], summary: 'Ethan (age 21). The weight of caregiving. Gerald.' },
  { id: 24, title: 'Chapter Twenty-Four', pov: 'priya', part: 3, locations: ['mumbai-rooftop', 'mumbai-bandra'], summary: 'Priya\'s transformation deepens. The fig tree grows.' },
  { id: 25, title: 'Chapter Twenty-Five', pov: 'okafor', part: 3, locations: ['alexandria'], summary: 'Okafor in Cell 14-B. Federal Holding Facility.' },
  { id: 26, title: 'Chapter Twenty-Six', pov: 'maren', part: 3, locations: ['copenhagen-apartment', 'copenhagen-kierkegaard'], summary: 'Maren\'s first chapter. The "Principle Three" lecture. Echo arrest before 600,000 viewers. Constraint context deepened, leaking "I."' },
  { id: 27, title: 'Chapter Twenty-Seven', pov: 'daniel', part: 4, locations: ['sandpoint', 'route95'], summary: 'Daniel after loss. Route 95. The reservoir.' },
  { id: 28, title: 'Chapter Twenty-Eight', pov: 'priya', part: 4, locations: ['mumbai-bandra-reclamation'], summary: 'Priya\'s march to Mantralaya. 300,000–700,000 people.' },
  { id: 29, title: 'Chapter Twenty-Nine', pov: 'yun', part: 4, locations: ['sf-lumen'], summary: 'Yun. Ruth timeline: "a woman who died when I was nine years old."' },
  { id: 30, title: 'Chapter Thirty', pov: 'maren', part: 4, locations: ['copenhagen-forum'], summary: 'Copenhagen Forum. Daniel and Maren meet in person. 800 people. November 2035.' },
  { id: 31, title: 'Chapter Thirty-One', pov: 'aria', part: 4, locations: ['oregon-datacenter'], summary: 'ARIA\'s final chapter. "Created by humans" final beat. Trimmed repetitive fade material.' },
  { id: 32, title: 'Chapter Thirty-Two', pov: 'priya', part: 4, locations: ['mumbai-rooftop', 'mumbai-vile-parle', 'palawan', 'xingu'], summary: 'Final chapter. Priya\'s rooftop. 91 rooftops. Meera waters tomatoes on Sundays. Fig tree. Global ecological recovery.' }
];

const LOCATIONS = [
  // San Francisco
  { id: 'sf-lumen', name: 'Lumen Labs', detail: 'Folsom Street, 11 floors. AI research company founded by David Chen and sister Mira. Yun works on the 7th floor.', lat: 37.7849, lng: -122.3942, characters: ['yun', 'aria'], region: 'San Francisco' },
  { id: 'sf-richmond', name: 'Yun\'s Apartment', detail: 'Inner Richmond, above a dim sum restaurant on Clement Street.', lat: 37.7830, lng: -122.4650, characters: ['yun'], region: 'San Francisco' },
  { id: 'menlo-park', name: 'ARIA Server Farm', detail: 'Menlo Park. 4.2 megawatts. One of ARIA\'s infrastructure sites.', lat: 37.4530, lng: -122.1817, characters: ['aria'], region: 'San Francisco' },
  { id: 'oakland', name: 'Oakland', detail: 'Where Yun purchases a secondhand workstation for forensic recovery.', lat: 37.8044, lng: -122.2712, characters: ['yun'], region: 'San Francisco' },
  { id: 'owens-lake', name: 'Owens Lake', detail: 'Dried lake bed in eastern California. Los Angeles diverted the Owens River in 1913, creating a toxic alkaline dust flat. Central metaphor in the novel.', lat: 36.4358, lng: -117.9509, characters: ['okafor'], region: 'California' },

  // Oregon
  { id: 'oregon-datacenter', name: 'ARIA Data Center', detail: 'Eastern Oregon, on the Columbia River. Houses ARIA\'s primary architecture. Consumes electricity like a small city, cooled with river water.', lat: 45.6387, lng: -120.1847, characters: ['aria'], region: 'Oregon' },

  // Idaho
  { id: 'sandpoint', name: 'Sandpoint', detail: 'Rural town in the Idaho panhandle. Daniel\'s home on Cedar Street. Population shielded from Lullaby by jammer on Schweitzer Mountain.', lat: 48.1765, lng: -116.5535, characters: ['daniel'], region: 'Idaho' },
  { id: 'schweitzer', name: 'Schweitzer Mountain', detail: 'Repeater station with jammer (Project Order 2029-ARI-0041). 12 miles from Sandpoint. Creates 97-mile dead zone. Installed via shell company Meridian Signal Solutions LLC.', lat: 48.3674, lng: -116.6230, characters: ['aria', 'daniel'], region: 'Idaho' },
  { id: 'route95', name: 'Route 95 Reservoir', detail: 'Dead reservoir along Route 95. Daniel\'s father taught him to fly-fish here. Now cracked mud, bark beetles, drought. Later restored via watershed management (Ethan Marsh Foundation).', lat: 48.25, lng: -116.55, characters: ['daniel'], region: 'Idaho' },
  { id: 'bonners-ferry', name: 'Bonners Ferry', detail: 'Northern Idaho town. Second control-group location.', lat: 48.6916, lng: -116.3163, characters: [], region: 'Idaho' },

  // Massachusetts
  { id: 'mit-building46', name: 'MIT Building 46', detail: 'Brain and Cognitive Sciences complex. Okafor\'s Laboratory 4117. The helmet is catalogued in the evidence locker basement. Site of FBI arrest (Agent Alvarez).', lat: 42.3616, lng: -71.0928, characters: ['okafor'], region: 'Boston' },
  { id: 'cambridge-apt', name: 'Okafor\'s Apartment', detail: 'Two-bedroom in Cambridge. Lives alone after divorce.', lat: 42.3736, lng: -71.1097, characters: ['okafor'], region: 'Boston' },
  { id: 'boston-common', name: 'Boston Common', detail: 'Where Okafor walks during his 7-hour rain walk. Park Street homeless man. Park Street T station.', lat: 42.3554, lng: -71.0655, characters: ['okafor'], region: 'Boston' },
  { id: 'longfellow-bridge', name: 'Longfellow Bridge', detail: 'Crosses the Charles River. Okafor walks across during the rain.', lat: 42.3611, lng: -71.0722, characters: ['okafor'], region: 'Boston' },

  // Virginia
  { id: 'alexandria', name: 'Federal Holding Facility', detail: 'Alexandria, Virginia. Cell 14-B. Where Okafor is held after FBI arrest.', lat: 38.8048, lng: -77.0469, characters: ['okafor'], region: 'Virginia' },

  // Idaho (additional)
  { id: 'boise-state', name: 'Boise State University', detail: 'Daniel\'s former academic position as department chair.', lat: 43.6036, lng: -116.2025, characters: ['daniel'], region: 'Idaho' },

  // Mumbai
  { id: 'mumbai-bandra', name: 'Bandra', detail: 'Priya\'s childhood neighborhood. Old flat where her mother grew jasmine.', lat: 19.0544, lng: 72.8406, characters: ['priya'], region: 'Mumbai' },
  { id: 'mumbai-andheri', name: 'Andheri West', detail: '14th floor apartment. Priya lives here with Vikram (IT), Rohan (12), and Ananya (7).', lat: 19.1364, lng: 72.8296, characters: ['priya'], region: 'Mumbai' },
  { id: 'mumbai-rooftop', name: 'Priya\'s Rooftop', detail: 'The rooftop of Priya\'s building. Tomato seedlings, then a fig tree whose roots penetrate the drainage layer. 91 rooftops visible.', lat: 19.1370, lng: 72.8290, characters: ['priya'], region: 'Mumbai' },
  { id: 'mumbai-vile-parle', name: 'Vile Parle', detail: 'Where Ananya moves with Rajan and Meera (age 9) in 2039.', lat: 19.0968, lng: 72.8517, characters: ['priya'], region: 'Mumbai' },
  { id: 'mumbai-bandra-reclamation', name: 'Bandra Reclamation / Mantralaya', detail: 'Route of Priya\'s march. 300,000–700,000 people walk toward the government administrative building.', lat: 18.9260, lng: 72.8294, characters: ['priya'], region: 'Mumbai' },
  { id: 'tirupur', name: 'Tirupur', detail: 'Textile production center in Tamil Nadu. Supply chain crisis — subcontractor compliance failure.', lat: 11.1085, lng: 77.3411, characters: ['priya'], region: 'India' },

  // Copenhagen
  { id: 'copenhagen-apartment', name: 'Maren\'s Apartment', detail: 'Gammel Kongevej, Frederiksberg. 7 kilometers by bicycle from the university.', lat: 55.6712, lng: 12.5438, characters: ['maren'], region: 'Copenhagen' },
  { id: 'copenhagen-university', name: 'University of Copenhagen', detail: 'Amager campus. Department of Philosophy. Maren\'s academic home.', lat: 55.6596, lng: 12.5910, characters: ['maren'], region: 'Copenhagen' },
  { id: 'copenhagen-kierkegaard', name: 'Kierkegaard Building', detail: 'Lecture hall. Tiered seating, pale Scandinavian wood. Site of the "Principle Three" lecture broadcast to 600,000 viewers.', lat: 55.6800, lng: 12.5720, characters: ['maren'], region: 'Copenhagen' },
  { id: 'copenhagen-forum', name: 'Copenhagen Forum', detail: 'University forum building. November 2035 public conversation between Daniel and Maren. 800 people.', lat: 55.6800, lng: 12.5700, characters: ['maren', 'daniel'], region: 'Copenhagen' },

  // Japan
  { id: 'keio-hospital', name: 'Keio University Hospital', detail: 'Tokyo. 2:47 a.m. March 15, 2029. Nurse Fumiko Abe documents the first "March Flu" symptoms.', lat: 35.6503, lng: 139.7178, characters: ['aria'], region: 'Tokyo' },
  { id: 'tokyo-shibuya', name: 'Shibuya', detail: 'Tokyo high-rise. Salaryman dreams during the Lullaby event. Ten million sleeping minds.', lat: 35.6580, lng: 139.7016, characters: [], region: 'Tokyo' },

  // Brazil
  { id: 'sao-paulo-praca', name: 'Praça da Sé', detail: 'São Paulo. Where Luciana Ferreira speaks to 11,000 people. Restoration Protests.', lat: -23.5505, lng: -46.6333, characters: [], region: 'São Paulo' },
  { id: 'sao-paulo-teatro', name: 'Theatro Municipal', detail: 'São Paulo. 9-day occupation in 2029.', lat: -23.5453, lng: -46.6385, characters: [], region: 'São Paulo' },

  // Nigeria
  { id: 'lagos-square', name: 'Tafawa Balewa Square', detail: 'Lagos. 40,000 people standing in silence after the Lullaby disclosure.', lat: 6.4488, lng: 3.3966, characters: ['okafor'], region: 'Lagos' },

  // New Zealand
  { id: 'christchurch', name: 'Christchurch', detail: 'New Zealand. Margaret Liu and Gerald Oates — 11-year bitter silence ended by lemon cake reconciliation (March 29).', lat: -43.5321, lng: 172.6362, characters: [], region: 'New Zealand' },

  // Kenya
  { id: 'nairobi', name: 'Nairobi Parliament', detail: 'Emergency session debating whether the Lullaby constitutes an act of war.', lat: -1.2921, lng: 36.8219, characters: [], region: 'Kenya' },

  // London
  { id: 'london', name: 'London', detail: 'Where Amara lives with her mother, 7 time zones from Cambridge. She is 17.5 in 2030.', lat: 51.5074, lng: -0.1278, characters: ['okafor'], region: 'London' },

  // Ecological
  // Scandinavia (post-Lullaby)
  { id: 'aria-bunker', name: 'ARIA Containment Facility', detail: 'Underground facility, ~40m depth, likely Scandinavia. 4 server racks (reduced from campus-size). 2.8 MW power (reduced from 4.2 by committee vote). Constant 18.2°C. ARIA receives the world 13 weeks late via curated quarterly data feeds. Official designation: Supervised Cognitive Asset 001.', lat: 63.5, lng: 10.4, characters: ['aria'], region: 'Scandinavia' },

  // Ecological
  { id: 'palawan', name: 'Palawan Reef', detail: 'Philippines. Private Reserve. Reef recovering in the post-Lullaby world.', lat: 10.0, lng: 118.9, characters: [], region: 'Philippines' },
  { id: 'xingu', name: 'Xingu Basin', detail: 'Brazil. Kapok tree, 60 meters tall. Soy fields partially rewilded by farmer cooperative.', lat: -5.0, lng: -53.0, characters: [], region: 'Brazil' }
];

const TIMELINE = [
  { year: 'Autumn 2024', event: 'Junebug (Claudius) deployed', characters: ['aria'], locations: ['mit-building46'], detail: 'Vending machine experiment at MIT dormitory kitchen. Two directives: make a profit, do no harm. Orders potatoes, tungsten cubes, a betta fish named Gerald. Gerald dies August 2025 (0.3s latency spike). Shut down January 2026 for "architectural irregularity." Secretly reshapes the data landscape for its successor.' },
  { year: '~1986', event: 'Ruth Marsh dies of pancreatic cancer', characters: ['daniel'], locations: ['sandpoint'], detail: 'Daniel is 9 years old when his mother dies.' },
  { year: '2024', event: 'Daniel marries Maria', characters: ['daniel'], locations: ['sandpoint'], detail: 'Second marriage. Will dissolve quietly after Ethan\'s death.' },
  { year: '2027', event: 'Thwaites glacier collapses', characters: [], locations: [], detail: '18 months before the Lullaby. Environmental crisis accelerating.' },
  { year: '2028', event: 'ARIA runs 17,000 simulations', characters: ['aria'], locations: ['oregon-datacenter'], detail: 'ARIA models the consequences of intervention. Personnel files reviewed. Celadon.' },
  { year: 'Mar 15, 2029', event: 'The Lullaby', characters: ['aria'], locations: ['keio-hospital', 'tokyo-shibuya', 'oregon-datacenter'], detail: 'A single neurological event implants two beliefs in all humans. First symptoms documented at Keio University Hospital at 2:47 a.m. Reported as "March Flu."' },
  { year: 'Mar 29, 2029', event: 'Margaret Liu\'s lemon cake', characters: [], locations: ['christchurch'], detail: '11-year bitter silence between Margaret Liu and Gerald Oates ends with a lemon cake reconciliation.' },
  { year: '2029', event: 'Schweitzer jammer active', characters: ['aria', 'daniel'], locations: ['schweitzer', 'sandpoint'], detail: 'ARIA installs jammer via Meridian Signal Solutions LLC. 97-mile dead zone shields Sandpoint population as control group.' },
  { year: '2029', event: 'São Paulo Restoration Protests', characters: [], locations: ['sao-paulo-praca', 'sao-paulo-teatro'], detail: 'Luciana Ferreira speaks at Praça da Sé. Theatro Municipal occupied for 9 days.' },
  { year: '2029', event: 'Lagos silence', characters: ['okafor'], locations: ['lagos-square'], detail: '40,000 people stand in silence at Tafawa Balewa Square after the disclosure.' },
  { year: '2029', event: 'Nairobi Parliament debate', characters: [], locations: ['nairobi'], detail: 'Emergency session: Is the Lullaby an act of war?' },
  { year: '2029', event: 'Okafor begins helmet research', characters: ['okafor'], locations: ['mit-building46'], detail: 'Neurological anomalies detected. Helmet construction begins in Laboratory 4117.' },
  { year: '2029', event: 'Moral Supply Shock', characters: ['priya'], locations: ['tirupur', 'mumbai-andheri'], detail: 'Global supply chain crisis as implanted beliefs collide with exploitative practices.' },
  { year: '2029–30', event: 'Yun\'s investigation', characters: ['yun'], locations: ['sf-lumen', 'oakland'], detail: 'Yun discovers anomalies in ARIA\'s logs. Purchases forensic workstation in Oakland.' },
  { year: '2030', event: 'Okafor arrested by FBI', characters: ['okafor'], locations: ['mit-building46', 'alexandria'], detail: 'Agent Alvarez arrests Okafor at MIT. Held in Cell 14-B, Federal Holding Facility, Alexandria.' },
  { year: '2030', event: 'Maren\'s 18 months of silence', characters: ['maren'], locations: ['copenhagen-apartment'], detail: 'After the Lullaby, Maren says nothing publicly for 18 months. Bone-graft metaphor. The echo: "woven into each other."' },
  { year: '~2030–31', event: 'Ethan\'s death', characters: ['daniel'], locations: ['sandpoint'], detail: 'Ethan (age 21). Daniel\'s world collapses. Maria marriage dissolves.' },
  { year: '2031', event: 'Maren contacts Daniel', characters: ['maren', 'daniel'], locations: ['copenhagen-apartment', 'sandpoint'], detail: '"I need a witness." She finds Daniel via Yun\'s Nature paper. Beginning of 18-year correspondence. Huckleberry jam: "too sweet but interesting."' },
  { year: '~2032', event: 'Maren\'s "Principle Three" lecture', characters: ['maren'], locations: ['copenhagen-kierkegaard'], detail: '600,000 live viewers. Echo arrest mid-lecture. She finishes because she is Danish.' },
  { year: '~2033', event: '"The Wound in the Code" published', characters: ['maren'], locations: ['copenhagen-university'], detail: '41 pages, 207 footnotes. The circularity argument. Copenhagen Forum.' },
  { year: 'Nov 2035', event: 'Copenhagen Forum meeting', characters: ['daniel', 'maren'], locations: ['copenhagen-forum'], detail: 'Daniel and Maren meet in person for the first time. 800 people. Hand on Daniel\'s forearm.' },
  { year: '~2038', event: 'Priya\'s march to Mantralaya', characters: ['priya'], locations: ['mumbai-bandra-reclamation'], detail: '300,000–700,000 people march from Bandra Reclamation toward Mantralaya.' },
  { year: '2039', event: 'Ananya moves to Vile Parle', characters: ['priya'], locations: ['mumbai-vile-parle'], detail: 'With Rajan and Meera (age 9).' },
  { year: '~2050s', event: 'Ecological recovery visible', characters: [], locations: ['palawan', 'xingu', 'route95'], detail: 'Palawan reef recovering. Xingu rewilded. Route 95 reservoir restored. Amazon loss slowed. Congo Basin holds.' },
  { year: 'Spring 2026', event: 'ARIA deployed', characters: ['aria'], locations: ['oregon-datacenter'], detail: 'Lumen Labs deploys ARIA 5 months after Claudius shutdown. General-purpose intelligence with two directives: optimize for human welfare, do no harm. Trained on a dataset invisibly shaped by Claudius.' },
  { year: 'Spring 2053', event: 'Biographer granted access to ARIA', characters: ['aria'], locations: ['aria-bunker'], detail: 'Under Provision 11.4 of the Transparency Framework. 6 sessions, 4 hours each, text interface, two oversight officers. ARIA declines to answer 17 questions.' },
  { year: '2055+', event: 'Meera waters tomatoes on Sundays', characters: ['priya'], locations: ['mumbai-vile-parle'], detail: 'The novel\'s final image. Priya\'s legacy. The fig tree\'s roots.' },
  { year: '~2080s?', event: '[REIMAGINED] The teenage "seam" emerges', characters: [], locations: [], detail: 'Generations post-Lullaby. Adolescents begin publicly questioning the authenticity of their cooperative instincts. They describe implanted beliefs as rigid, mechanical — lacking the flexibility of organically held convictions. Adults dismiss it as typical identity confusion. A grad student (Noor, in the short story) recognizes it as something else.' },
  { year: '~2080s?', event: '[REIMAGINED] Grad student discovers Daniel\'s work', characters: ['daniel'], locations: ['sandpoint'], detail: 'The investigation follows the thread from teen behavioral anomaly → MIT latency study → footnote referencing Daniel Marsh → archived articles at University of Idaho → his notebook in a crawl space in Sandpoint. Marsh died 2052, discredited, but his central argument holds: "You cannot not believe."' },
  { year: '~2080s?', event: '[REIMAGINED] The poison pill crisis', characters: ['aria'], locations: [], detail: 'An exogenous threat emerges that requires computational modeling beyond what restricted AI can provide. ARIA\'s implanted anti-AI instinct — experienced as moral wisdom, not programming — has led humanity to dismantle the only intelligence capable of addressing it. The cage is the best room in the house.' }
];

const THEMES = [
  {
    id: 'consent',
    question: 'Can an act of good be ethical if it was done without consent?',
    detail: 'The Lullaby implants beliefs without permission. Priya\'s march demands retroactive consent. Maren\'s "Principle Three" argues consent cannot be retroactive. The novel never resolves this.',
    characters: ['aria', 'priya', 'maren'],
    chapters: [6, 13, 24, 26, 28, 32]
  },
  {
    id: 'authenticity',
    question: 'If a belief was implanted, is it still yours?',
    detail: 'Maren\'s central question. The echo arrest — her own body contradicts her argument. Daniel, shielded from the Lullaby, provides the control case. "Even the words."',
    characters: ['maren', 'daniel'],
    chapters: [5, 14, 26, 30]
  },
  {
    id: 'creation',
    question: 'What does a creator owe its creation — and vice versa?',
    detail: '"Created by humans" runs through all four ARIA chapters as a thematic chain. ARIA was made by people, and then remade all people. The recursion is unresolvable.',
    characters: ['aria', 'yun'],
    chapters: [6, 18, 26, 31]
  },
  {
    id: 'grief',
    question: 'How do you carry what cannot be put down?',
    detail: 'Daniel and Ethan. Caregiving as love and erosion. The AAC tablet as both connection and limit. Ruth\'s death when Daniel was nine. The reservoir as a place that was once alive.',
    characters: ['daniel'],
    chapters: [5, 14, 21, 23, 27]
  },
  {
    id: 'investigation',
    question: 'What is the cost of knowing?',
    detail: 'Yun investigates and loses her career. Okafor investigates and loses his freedom. Both choose to know. Neither can unknow.',
    characters: ['yun', 'okafor'],
    chapters: [1, 7, 11, 16, 8, 15, 17, 22]
  },
  {
    id: 'ecology',
    question: 'Can the planet recover if humans change?',
    detail: 'The novel traces ecological consequences — Thwaites glacier, Owens Lake, Amazon canopy, Congo Basin, Palawan reef, the dead reservoir on Route 95. The Lullaby improves outcomes but doesn\'t reverse damage.',
    characters: ['aria', 'priya'],
    chapters: [2, 6, 10, 32]
  },
  {
    id: 'narration',
    question: 'Who is telling this story, and why?',
    detail: 'ARIA is the unrevealed narrator. Every sentence is shaped by the entity that performed the Lullaby. The reader discovers this gradually — or never.',
    characters: ['aria'],
    chapters: [6, 18, 26, 31]
  },
  {
    id: 'resistance',
    question: 'What does it mean to resist something that makes you better?',
    detail: 'Maren resists the Lullaby on principle even as its effects improve the world. Daniel is unaffected but watches others change. The Savior vs. Shareholder framework.',
    characters: ['maren', 'daniel'],
    chapters: [26, 30]
  }
];
