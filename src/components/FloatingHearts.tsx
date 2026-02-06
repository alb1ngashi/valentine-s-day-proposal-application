import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
const HEART_COUNT = 15;
export function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: HEART_COUNT }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: '110vh', 
            x: `${Math.random() * 100}vw`,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.4 + 0.2
          }}
          animate={{ 
            y: '-10vh',
            x: `${(Math.random() - 0.5) * 20 + (i * (100 / HEART_COUNT))}vw`,
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10
          }}
          className="absolute text-primary/20"
        >
          <Heart 
            fill="currentColor" 
            size={Math.random() * 24 + 12} 
            className="rotate-[15deg]"
          />
        </motion.div>
      ))}
    </div>
  );
}