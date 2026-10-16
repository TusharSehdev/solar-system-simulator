# Interactive 3D Solar System & Planetary Alignment Simulator

A real-time, scientifically grounded 3D Solar System and interplanetary alignment simulator built with React, TypeScript, Three.js, and Recharts.

## Quick Start

```bash
npm install
npm run dev
```

## Architecture Overview

- `src/astronomy/orbitalMechanics.ts`: J2000.0 Keplerian orbital elements (JPL Standish ephemeris model), Newton-Raphson eccentric anomaly solver, 3D heliocentric coordinate transformations in Astronomical Units (AU), synodic alignment scanner, and Visual vs. Scientific scaling decoupler.
- `src/components/Sun.tsx`: Animated solar photosphere, corona glow layers, and heliocentric lighting.
- `src/components/Planet.tsx`: 3D planetary body with procedural surface textures, axial tilt, atmospheric Fresnel halo, Saturn's ring system, and Earth's Moon.
- `src/components/OrbitalPath.tsx`: 3D inclined elliptical orbital curve and dynamic orbital motion trail.
- `src/components/ConnectingLine.tsx`: Real-time world-space interplanetary laser beam, animated pulse, and midpoint 3D telemetry badge.
- `src/components/CameraController.tsx`: Smooth damped 3D orbit/pan/zoom camera with Top-Down, Ecliptic Side, Full-System, and Pair-Focus tracking presets.
- `src/components/SimulationControls.tsx`: Play/Pause, variable speed multiplier (1x real-time to 1 yr/s), single-step controls, date picker, timeline scrubber, and "Animate to Next Alignment" solver.
- `src/components/InfoPanel.tsx`: Live interplanetary telemetry (AU, km, light-time, heliocentric angle, line-of-sight elongation, radial closing velocity, min/max bounds, and alignment threshold indicator).
- `src/components/DistanceChart.tsx`: Interactive distance-versus-time and angular separation graph.

## Scientific Model & Accuracy Limitations

1. **Keplerian J2000 Ephemeris (Scientific Mode)**:
   Planetary positions are derived deterministically from a shared Julian Date ($JD$) using JPL approximate Keplerian orbital elements $(a, e, I, L, \tilde{\omega}, \Omega)$ and their linear secular rates per Julian century $T = (JD - 2451545.0)/36525$.
2. **Eccentric Anomaly Solver**:
   Kepler's equation $M = E - e \sin E$ is solved via Newton-Raphson iteration to $< 10^{-10}$ radians on every frame.
3. **Physical vs. Visual Decoupling**:
   All distance, angle, velocity, and alignment calculations are performed strictly in unscaled 3D heliocentric J2000 ecliptic coordinates (in AU, where $1\text{ AU} = 149,597,870.7\text{ km}$). Visual scaling compresses display radii and orbital distances so all 8 planets remain visible without altering physical telemetry.
4. **Accuracy Limitations**:
   This two-body Keplerian model with secular perturbations is accurate to within ~1–15 arcminutes for inner and gas giant planets between 1800 CE and 2050 CE, but omits high-frequency mutual N-body gravitational perturbations (such as the Jupiter–Saturn 5:2 "great inequality") and relativistic perihelion precession beyond linear secular drift.
