import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Flower } from 'lucide-react';
const FLOWER_COUNT = 120;
export function FloatingFlowers() {
  const flowers = useMemo(() => {
    return Array.from({ length: FLOWER_COUNT }).map((_, i) => {
      // Use 0-95% for horizontal position to avoid sticking to the absolute right edge
      const initialX = Math.random() * 95;
      const initialScale = Math.random() * 0.4 + 0.6; // 0.6-1.0
      const opacity = Math.random() * 0.3 + 0.3;      // Target range 0.3-0.6
      const duration = Math.random() * 6 + 10;        // 10-16s for a gentler float
      // Expanded delay range to 15s to prevent clumping on start
      const delay = Math.random() * 15;
      const size = Math.random() * 8 + 16;            // 16-24px
      const rotation = Math.random() * 360;
      return {
        id: i,
        initialX,
        initialScale,
        opacity,
        duration,
        delay,
        size,
        rotation,
      };
    });
  }, []);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 rounded-[inherit]">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          initial={{
            y: '110%',
            x: `${flower.initialX}%`,
            scale: flower.initialScale,
            opacity: flower.opacity,
            rotate: flower.rotation,
          }}
          animate={{
            y: '-10%',
            // Maintain constant X to prevent diagonal clumping/intersecting paths
            x: `${flower.initialX}%`,
            rotate: flower.rotation + 360,
          }}
          transition={{
            duration: flower.duration,
            repeat: Infinity,
            ease: "linear",
            delay: flower.delay,
          }}
          className="absolute text-primary/60"
        >
          <Flower
            size={flower.size}
            strokeWidth={2}
          />
        </motion.div>
      ))}
    </div>
  );
}