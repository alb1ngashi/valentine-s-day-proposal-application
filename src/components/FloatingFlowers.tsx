import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Flower } from 'lucide-react';
const FLOWER_COUNT = 120;
export function FloatingFlowers() {
  const flowers = useMemo(() => {
    return Array.from({ length: FLOWER_COUNT }).map((_, i) => ({
      id: i,
      initialX: Math.random() * 100,
      initialScale: Math.random() * 0.4 + 0.4, // Slightly larger base scale for visibility
      opacity: Math.random() * 0.2 + 0.2,      // 0.2 to 0.4 as per requirement
      duration: Math.random() * 6 + 8,         // Slightly faster than background hearts
      delay: Math.random() * 10,
      size: Math.random() * 6 + 12,            // 12-18px
      rotation: Math.random() * 360,
    }));
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