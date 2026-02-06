import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
const HEART_COUNT = 120;
export function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: HEART_COUNT }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: '110vh',
            x: `${Math.random() * 100}vw`,
            scale: Math.random() * 0.4 + 0.3,
            opacity: Math.random() * 0.2 + 0.8 // High visibility (0.8 - 1.0)
          }}
          animate={{
            y: '-10vh',
          }}
          transition={{
            duration: Math.random() * 8 + 12, // Faster motion (12-20s)
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20
          }}
          className="absolute text-primary" // Solid pink color
        >
          <Heart
            fill="currentColor"
            size={Math.random() * 8 + 18} // Size range 18-26px
            className="rotate-[15deg]"
          />
        </motion.div>
      ))}
    </div>
  );
}