import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
const HEART_COUNT = 60;
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
            opacity: Math.random() * 0.1 + 0.1 // Increased slightly for better visibility
          }}
          animate={{
            y: '-10vh',
          }}
          transition={{
            duration: Math.random() * 10 + 15, // Faster motion (15-25s)
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20
          }}
          className="absolute text-primary/40"
        >
          <Heart
            fill="currentColor"
            size={Math.random() * 8 + 18} // Increased size range (18-26px)
            className="rotate-[15deg]"
          />
        </motion.div>
      ))}
    </div>
  );
}