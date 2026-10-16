import React, { useMemo } from 'react';
import { Line } from '@react-three/drei';
import { PlanetElements, computeHeliocentricAU, scalePositionForScene } from '../astronomy/orbitalMechanics';

export interface OrbitalPathProps {
  planet: PlanetElements;
  scientificMode: boolean;
  compressionPower: number;
  baseScale: number;
  isSelected: boolean;
  selectionRole: 'A' | 'B' | null;
}

export const OrbitalPath: React.FC<OrbitalPathProps> = ({
  planet,
  scientificMode,
  compressionPower,
  baseScale,
  isSelected,
  selectionRole,
}) => {
  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    const steps = 160;
    const periodMs = planet.orbitalPeriodDays * 86400000;
    const baseMs = Date.UTC(2026, 9, 15);
    for (let i = 0; i <= steps; i++) {
      const t = baseMs + (i / steps) * periodMs;
      const { posAU } = computeHeliocentricAU(planet, t, scientificMode);
      const v = scalePositionForScene(posAU, compressionPower, baseScale);
      pts.push([v.x, v.y, v.z]);
    }
    return pts;
  }, [planet, scientificMode, compressionPower, baseScale]);

  const color = selectionRole === 'A' ? '#38bdf8' : selectionRole === 'B' ? '#f59e0b' : planet.color;

  return (
    <Line
      points={points}
      color={color}
      lineWidth={isSelected ? 2.2 : 1.0}
      transparent
      opacity={isSelected ? 0.85 : 0.28}
    />
  );
};
