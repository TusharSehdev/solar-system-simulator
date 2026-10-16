export interface PlanetElements {
  id: string;
  name: string;
  symbol: string;
  color: string;
  accentColor: string;
  description: string;
  category: 'Terrestrial' | 'Gas Giant' | 'Ice Giant';
  // Physical properties
  radiusKm: number;
  massEarths: number;
  gravityMs2: number;
  rotationPeriodHours: number;
  axialTiltDeg: number;
  orbitalPeriodDays: number;
  meanOrbitalVelocityKms: number;
  moonsCount: number;
  atmosphere: string;
  // J2000.0 Keplerian Elements (JPL Standish 1800-2050 AD approximation)
  a0: number;      // Semi-major axis (AU)
  aDot: number;    // AU / century
  e0: number;      // Eccentricity
  eDot: number;    // rad / century
  I0: number;      // Inclination (deg)
  IDot: number;    // deg / century
  L0: number;      // Mean longitude (deg)
  LDot: number;    // deg / century
  wBar0: number;   // Longitude of perihelion (deg)
  wBarDot: number; // deg / century
  node0: number;   // Longitude of ascending node (deg)
  nodeDot: number; // deg / century
  visualBaseRadius: number;
  hasRings?: boolean;
  hasMoon?: boolean;
}

export const AU_IN_KM = 149597870.7;
export const LIGHT_SPEED_KMS = 299792.458;
export const J2000_JD = 2451545.0; // 2000-01-01 12:00:00 TT

export const PLANETS: PlanetElements[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    symbol: '☿',
    color: '#a8a29e',
    accentColor: '#d6d3d1',
    category: 'Terrestrial',
    description: 'Smallest and innermost planet with the highest orbital eccentricity and extreme diurnal temperature swings.',
    radiusKm: 2439.7,
    massEarths: 0.0553,
    gravityMs2: 3.7,
    rotationPeriodHours: 1407.6,
    axialTiltDeg: 0.034,
    orbitalPeriodDays: 87.969,
    meanOrbitalVelocityKms: 47.36,
    moonsCount: 0,
    atmosphere: 'Minimal exosphere (O₂, Na, H₂, He)',
    a0: 0.38709927, aDot: 0.00000037,
    e0: 0.20563593, eDot: 0.00001906,
    I0: 7.00497902, IDot: -0.00594749,
    L0: 252.25032350, LDot: 149472.67411175,
    wBar0: 77.45779628, wBarDot: 0.16047689,
    node0: 48.33076593, nodeDot: -0.12534081,
    visualBaseRadius: 0.42,
  },
  {
    id: 'venus',
    name: 'Venus',
    symbol: '♀',
    color: '#fbbf24',
    accentColor: '#fde68a',
    category: 'Terrestrial',
    description: 'Shrouded in dense sulfuric acid clouds with a runaway greenhouse atmosphere and retrograde rotation.',
    radiusKm: 6051.8,
    massEarths: 0.815,
    gravityMs2: 8.87,
    rotationPeriodHours: -5832.5,
    axialTiltDeg: 177.36,
    orbitalPeriodDays: 224.701,
    meanOrbitalVelocityKms: 35.02,
    moonsCount: 0,
    atmosphere: '96.5% CO₂, 3.5% N₂, H₂SO₄ clouds',
    a0: 0.72333566, aDot: 0.00000390,
    e0: 0.00677672, eDot: -0.00004107,
    I0: 3.39467605, IDot: -0.00078890,
    L0: 181.97909950, LDot: 58517.81538729,
    wBar0: 131.60246718, wBarDot: 0.00268329,
    node0: 76.67984255, nodeDot: -0.27769418,
    visualBaseRadius: 0.68,
  },
  {
    id: 'earth',
    name: 'Earth',
    symbol: '⊕',
    color: '#38bdf8',
    accentColor: '#7dd3fc',
    category: 'Terrestrial',
    description: 'Our home world and the only known astronomical body harboring liquid surface oceans and a biosphere.',
    radiusKm: 6371.0,
    massEarths: 1.0,
    gravityMs2: 9.807,
    rotationPeriodHours: 23.934,
    axialTiltDeg: 23.439,
    orbitalPeriodDays: 365.256,
    meanOrbitalVelocityKms: 29.78,
    moonsCount: 1,
    atmosphere: '78% N₂, 21% O₂, 1% Ar, H₂O vapor',
    a0: 1.00000261, aDot: 0.00000562,
    e0: 0.01671123, eDot: -0.00004392,
    I0: -0.00001531, IDot: -0.01294668,
    L0: 100.46457166, LDot: 35999.37244981,
    wBar0: 102.93768193, wBarDot: 0.32327364,
    node0: 0.0, nodeDot: 0.0,
    visualBaseRadius: 0.72,
    hasMoon: true,
  },
  {
    id: 'mars',
    name: 'Mars',
    symbol: '♂',
    color: '#f97316',
    accentColor: '#fdba74',
    category: 'Terrestrial',
    description: 'The Red Planet, home to Olympus Mons and Valles Marineris, with pronounced orbital eccentricity.',
    radiusKm: 3389.5,
    massEarths: 0.107,
    gravityMs2: 3.721,
    rotationPeriodHours: 24.623,
    axialTiltDeg: 25.19,
    orbitalPeriodDays: 686.980,
    meanOrbitalVelocityKms: 24.07,
    moonsCount: 2,
    atmosphere: '95% CO₂, 2.6% N₂, 1.9% Ar',
    a0: 1.52371034, aDot: 0.00001847,
    e0: 0.09339410, eDot: 0.00007882,
    I0: 1.84969142, IDot: -0.00813131,
    L0: -4.55343205, LDot: 19140.30268499,
    wBar0: -23.94362959, wBarDot: 0.44441088,
    node0: 49.55953891, nodeDot: -0.29257343,
    visualBaseRadius: 0.54,
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    symbol: '♃',
    color: '#fb923c',
    accentColor: '#fed7aa',
    category: 'Gas Giant',
    description: 'Largest planet in the Solar System, dominating planetary dynamics with turbulent zonal bands and the Great Red Spot.',
    radiusKm: 69911,
    massEarths: 317.8,
    gravityMs2: 24.79,
    rotationPeriodHours: 9.925,
    axialTiltDeg: 3.13,
    orbitalPeriodDays: 4332.59,
    meanOrbitalVelocityKms: 13.07,
    moonsCount: 95,
    atmosphere: '89.8% H₂, 10.2% He, NH₃ clouds',
    a0: 5.20288700, aDot: -0.00011607,
    e0: 0.04838624, eDot: -0.00013253,
    I0: 1.30439695, IDot: -0.00183714,
    L0: 34.39644051, LDot: 3034.74612775,
    wBar0: 14.72847983, wBarDot: 0.21252668,
    node0: 100.47390909, nodeDot: 0.20469106,
    visualBaseRadius: 1.45,
  },
  {
    id: 'saturn',
    name: 'Saturn',
    symbol: '♄',
    color: '#eab308',
    accentColor: '#fef08a',
    category: 'Gas Giant',
    description: 'Adorned by the Solar System’s most extensive icy ring system and a polar hexagonal jet stream.',
    radiusKm: 58232,
    massEarths: 95.16,
    gravityMs2: 10.44,
    rotationPeriodHours: 10.656,
    axialTiltDeg: 26.73,
    orbitalPeriodDays: 10759.22,
    meanOrbitalVelocityKms: 9.68,
    moonsCount: 146,
    atmosphere: '96.3% H₂, 3.25% He, hydrocarbon haze',
    a0: 9.53667594, aDot: -0.00125060,
    e0: 0.05386179, eDot: -0.00050991,
    I0: 2.48599187, IDot: 0.00193609,
    L0: 49.95424423, LDot: 1222.49362201,
    wBar0: 92.59887831, wBarDot: -0.41897216,
    node0: 113.66242448, nodeDot: -0.28867794,
    visualBaseRadius: 1.25,
    hasRings: true,
  },
  {
    id: 'uranus',
    name: 'Uranus',
    symbol: '♅',
    color: '#22d3ee',
    accentColor: '#a5f3fc',
    category: 'Ice Giant',
    description: 'An ice giant with an extreme 97.77° axial tilt that causes it to roll sideways along its orbit.',
    radiusKm: 25362,
    massEarths: 14.54,
    gravityMs2: 8.69,
    rotationPeriodHours: -17.24,
    axialTiltDeg: 97.77,
    orbitalPeriodDays: 30688.5,
    meanOrbitalVelocityKms: 6.80,
    moonsCount: 28,
    atmosphere: '82.5% H₂, 15.2% He, 2.3% CH₄',
    a0: 19.18916464, aDot: -0.00196176,
    e0: 0.04725744, eDot: -0.00004397,
    I0: 0.77263783, IDot: -0.00242939,
    L0: 313.23810451, LDot: 428.48202785,
    wBar0: 170.95427630, wBarDot: 0.40805281,
    node0: 74.01692503, nodeDot: 0.04240589,
    visualBaseRadius: 0.98,
  },
  {
    id: 'neptune',
    name: 'Neptune',
    symbol: '♆',
    color: '#3b82f6',
    accentColor: '#93c5fd',
    category: 'Ice Giant',
    description: 'The outermost major planet, swept by supersonic winds and deep azure methane clouds.',
    radiusKm: 24622,
    massEarths: 17.15,
    gravityMs2: 11.15,
    rotationPeriodHours: 16.11,
    axialTiltDeg: 28.32,
    orbitalPeriodDays: 60182.0,
    meanOrbitalVelocityKms: 5.43,
    moonsCount: 16,
    atmosphere: '80% H₂, 19% He, 1.5% CH₄',
    a0: 30.06992276, aDot: 0.00026291,
    e0: 0.00859048, eDot: 0.00005105,
    I0: 1.77004347, IDot: 0.00035372,
    L0: -55.12002969, LDot: 218.45945325,
    wBar0: 44.96476227, wBarDot: -0.32241464,
    node0: 131.78422574, nodeDot: -0.00508664,
    visualBaseRadius: 0.95,
  }
];

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface PlanetState {
  id: string;
  posAU: Vec3;         // True physical 3D heliocentric position in AU (Ecliptic J2000: x, z in plane, y vertical)
  posVisual: Vec3;     // Scaled 3D world-space position for rendering
  helioDistAU: number; // Distance from Sun in AU
  trueAnomalyRad: number;
  meanAnomalyRad: number;
  eclipticLonDeg: number;
  eclipticLatDeg: number;
}

export function msToJulianDate(timeMs: number): number {
  return timeMs / 86400000 + 2440587.5;
}

export function solveKepler(M: number, e: number): number {
  let E = M + e * Math.sin(M);
  for (let i = 0; i < 12; i++) {
    const dM = M - (E - e * Math.sin(E));
    const dE = dM / (1 - e * Math.cos(E));
    E += dE;
    if (Math.abs(dE) < 1e-11) break;
  }
  return E;
}

export function computeHeliocentricAU(
  planet: PlanetElements,
  timeMs: number,
  scientificMode: boolean
): { posAU: Vec3; helioDistAU: number; trueAnomalyRad: number; meanAnomalyRad: number; eclipticLonDeg: number; eclipticLatDeg: number } {
  const jd = msToJulianDate(timeMs);
  const T = (jd - J2000_JD) / 36525.0; // Julian centuries since J2000.0
  const deg2rad = Math.PI / 180;

  const a = planet.a0 + (scientificMode ? planet.aDot * T : 0);
  const e = scientificMode ? Math.max(0, planet.e0 + planet.eDot * T) : planet.e0 * 0.65;
  const I = (scientificMode ? planet.I0 + planet.IDot * T : planet.I0 * 0.7) * deg2rad;
  const L = (planet.L0 + planet.LDot * T) * deg2rad;
  const wBar = (planet.wBar0 + (scientificMode ? planet.wBarDot * T : 0)) * deg2rad;
  const node = (planet.node0 + (scientificMode ? planet.nodeDot * T : 0)) * deg2rad;

  const omega = wBar - node;
  let M = (L - wBar) % (2 * Math.PI);
  if (M > Math.PI) M -= 2 * Math.PI;
  if (M < -Math.PI) M += 2 * Math.PI;

  const E = solveKepler(M, e);
  const xPrime = a * (Math.cos(E) - e);
  const yPrime = a * Math.sqrt(Math.max(0, 1 - e * e)) * Math.sin(E);
  const trueAnomalyRad = Math.atan2(yPrime, xPrime);

  const cosO = Math.cos(node);
  const sinO = Math.sin(node);
  const cosW = Math.cos(omega);
  const sinW = Math.sin(omega);
  const cosI = Math.cos(I);
  const sinI = Math.sin(I);

  // J2000 Ecliptic coordinates (X towards vernal equinox, Z in ecliptic plane, Y perpendicular to ecliptic)
  const xEcl = (cosO * cosW - sinO * sinW * cosI) * xPrime + (-cosO * sinW - sinO * cosW * cosI) * yPrime;
  const zEcl = (sinO * cosW + cosO * sinW * cosI) * xPrime + (-sinO * sinW + cosO * cosW * cosI) * yPrime;
  const yEcl = (sinW * sinI) * xPrime + (cosW * sinI) * yPrime;

  const helioDistAU = Math.hypot(xEcl, yEcl, zEcl);
  let eclipticLonDeg = (Math.atan2(zEcl, xEcl) * 180) / Math.PI;
  if (eclipticLonDeg < 0) eclipticLonDeg += 360;
  const eclipticLatDeg = (Math.asin(yEcl / Math.max(1e-9, helioDistAU)) * 180) / Math.PI;

  return {
    posAU: { x: xEcl, y: yEcl, z: zEcl },
    helioDistAU,
    trueAnomalyRad,
    meanAnomalyRad: M,
    eclipticLonDeg,
    eclipticLatDeg,
  };
}

export function scalePositionForScene(posAU: Vec3, compressionPower: number, baseScale: number): Vec3 {
  const r = Math.hypot(posAU.x, posAU.y, posAU.z);
  if (r < 1e-8) return { x: 0, y: 0, z: 0 };
  // Nonlinear radial mapping preserves 3D direction vectors while bringing outer planets into comfortable view
  const rScaled = baseScale * Math.pow(r, compressionPower);
  const factor = rScaled / r;
  return {
    x: posAU.x * factor,
    y: posAU.y * factor,
    z: posAU.z * factor,
  };
}
