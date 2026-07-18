"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

// -----------------------------------------------------------------------
// Wraps any content with an animated Vanta.js FOG background.
// Usage:
//   <VantaFogBackground className="relative min-h-[70vh]">
//     ...your hero content...
//   </VantaFogBackground>
// -----------------------------------------------------------------------

export default function VantaFogBackground({
  children,
  className = "",
  options = {},
}) {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE, // reuse the same THREE instance instead of letting vanta load its own
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xffb034,
          midtoneColor: 0xf9f9b8,
          lowlightColor: 0xffffff,
          baseColor: 0xf2caf2,
          ...options,
        })
      );
    }

    // Clean up on unmount (important in Next.js dev mode / route changes)
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className={className}>
      {children}
    </div>
  );
}