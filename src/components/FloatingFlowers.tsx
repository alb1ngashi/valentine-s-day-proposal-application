import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Flower } from 'lucide-react';
const FLOWER_COUNT = 80;
export function FloatingFlowers() {
  const flowers = useMemo(() => {
    return Array.from({ length: FLOWER_COUNT }).map((_, i) => {
      const initialX = Math.random() * 100;
      const initialScale = Math.random() * 0.3 + 0.6; // 0.6-0.9
      const opacity = Math.random() * 0.25 + 0.25;    // Target range 0.25-0.5 for subtlety
      const duration = Math.random() * 8 + 14;        // 14-22s for slower, gentler float
      const delay = Math.random() * 20;               // Spread out entry significantly
      const size = Math.random() * 6 + 14;            // 14-20px
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
            left: `${flower.initialX}%`,
            top: '120%',
            scale: flower.initialScale,
            opacity: flower.opacity,
            rotate: flower.rotation,
          }}
          animate={{
            top: '-30%',
            rotate: flower.rotation + 360,
          }}
          transition={{
            duration: flower.duration,
            repeat: Infinity,
            ease: "linear",
            delay: flower.delay,
          }}
          className="absolute text-primary/40"
        >
          <Flower
            size={flower.size}
            strokeWidth={1.5}
          />
        </motion.div>
      ))}
    </div>
  );
}