import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { PlanetElements, Vec3 } from '../astronomy/orbitalMechanics';

export interface PlanetProps {
  planet: PlanetElements;
  position: Vec3;
  radiusScale: number;
  selectionRole: 'A' | 'B' | null;
  isHovered: boolean;
  showLabels: boolean;
  showRings: boolean;
  showMoon: boolean;
  simTimeMs: number;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}

export const Planet: React.FC<PlanetProps> = ({
  planet,
  position,
  radiusScale,
  selectionRole,
  isHovered,
  showLabels,
  showRings,
  showMoon,
  simTimeMs,
  onSelect,
  onHover,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const r = planet.visualBaseRadius * radiusScale;

  useFrame((_, delta) => {
    if (meshRef.current) {
      const dir = planet.rotationPeriodHours < 0 ? -1 : 1;
      meshRef.current.rotation.y += dir * delta * 0.6;
    }
  });

  const moonAngle = ((simTimeMs / 86400000) / 27.32166) * Math.PI * 2;
  const moonDist = r * 2.8;

  return (
    <group position={[position.x, position.y, position.z]}>
      <mesh
        ref={meshRef}
        rotation={[0, 0, (planet.axialTiltDeg * Math.PI) / 180]}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(planet.id);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(planet.id);
        }}
        onPointerOut={() => onHover(null)}
      >
        <sphereGeometry args={[r, 36, 36]} />
        <meshStandardMaterial color={planet.color} roughness={0.65} metalness={0.1} />
      </mesh>

      {planet.hasRings && showRings && (
        <mesh rotation={[Math.PI / 2 - (planet.axialTiltDeg * Math.PI) / 180, 0, 0]}>
          <ringGeometry args={[r * 1.45, r * 2.55, 64]} />
          <meshStandardMaterial
            color="#fde68a"
            side={THREE.DoubleSide}
            transparent
            opacity={0.72}
          />
        </mesh>
      )}

      {planet.hasMoon && showMoon && (
        <mesh
          position={[
            Math.cos(moonAngle) * moonDist,
            Math.sin(moonAngle) * Math.sin((5.14 * Math.PI) / 180) * moonDist,
            Math.sin(moonAngle) * moonDist,
          ]}
        >
          <sphereGeometry args={[r * 0.27, 16, 16]} />
          <meshStandardMaterial color="#cbd5e1" roughness={0.85} />
        </mesh>
      )}

      {(showLabels || isHovered || selectionRole) && (
        <Html distanceFactor={35} position={[0, r + 0.8, 0]} center>
          <div className="px-2 py-0.5 rounded bg-slate-950/85 border border-slate-700/80 text-xs text-slate-100 whitespace-nowrap pointer-events-none">
            {selectionRole && (
              <span className={selectionRole === 'A' ? 'text-sky-400 font-bold mr-1' : 'text-amber-400 font-bold mr-1'}>
                [{selectionRole}]
              </span>
            )}
            {planet.name}
          </div>
        </Html>
      )}
    </group>
  );
};
