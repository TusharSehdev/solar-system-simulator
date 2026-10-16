import React from 'react';
import { Line, Html } from '@react-three/drei';
import { Vec3 } from '../astronomy/orbitalMechanics';

export interface ConnectingLineProps {
  posA: Vec3;
  posB: Vec3;
  distanceAU: number;
  angleDeg: number;
  showLabel: boolean;
  unit: 'AU' | 'km';
}

export const ConnectingLine: React.FC<ConnectingLineProps> = ({
  posA,
  posB,
  distanceAU,
  angleDeg,
  showLabel,
  unit,
}) => {
  const mid: [number, number, number] = [
    (posA.x + posB.x) / 2,
    (posA.y + posB.y) / 2,
    (posA.z + posB.z) / 2,
  ];

  const formattedDistance =
    unit === 'AU'
      ? `${distanceAU.toFixed(3)} AU`
      : `${((distanceAU * 149597870.7) / 1e6).toFixed(2)}M km`;

  return (
    <group>
      <Line
        points={[
          [posA.x, posA.y, posA.z],
          [posB.x, posB.y, posB.z],
        ]}
        color="#38bdf8"
        lineWidth={3}
        transparent
        opacity={0.95}
      />
      {showLabel && (
        <Html position={mid} center>
          <div className="px-2.5 py-1 rounded-full bg-slate-950/90 border border-sky-500/60 text-[11px] font-mono text-sky-200 shadow-lg whitespace-nowrap pointer-events-none">
            {formattedDistance} • {angleDeg.toFixed(1)}°
          </div>
        </Html>
      )}
    </group>
  );
};
