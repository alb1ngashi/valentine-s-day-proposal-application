import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
const HEART_COUNT = 120;
export function FloatingHearts() {
  const hearts = useMemo(() => {
    return Array.from({ length: HEART_COUNT }).map((_, i) => ({
      id: i,
      initialX: Math.random() * 100,
      initialScale: Math.random() * 0.4 + 0.3,
      initialOpacity: Math.random() * 0.2 + 0.8,
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 20,
      size: Math.random() * 8 + 18,
    }));
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            y: '110vh',
            x: `${heart.initialX}vw`,
            scale: heart.initialScale,
            opacity: heart.initialOpacity,
          }}
          animate={{
            y: '-10vh',
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            ease: "linear",
            delay: heart.delay,
          }}
          className="absolute text-primary"
        >
          <Heart
            fill="currentColor"
            size={heart.size}
            className="rotate-[15deg]"
          />
        </motion.div>
      ))}
    </div>
  );
}