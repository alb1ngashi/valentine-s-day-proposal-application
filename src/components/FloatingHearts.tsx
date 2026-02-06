import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
const HEART_COUNT = 40;
export function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: HEART_COUNT }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: '110vh',
            x: `${Math.random() * 100}vw`,
            scale: Math.random() * 0.4 + 0.4,
            opacity: Math.random() * 0.2 + 0.2
          }}
          animate={{
            y: '-10vh',
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 15
          }}
          className="absolute text-primary/40"
        >
          <Heart
            fill="currentColor"
            size={Math.random() * 8 + 20} // 20px-28px range for more impact
            className="rotate-[15deg]"
          />
        </motion.div>
      ))}
    </div>
  );
}