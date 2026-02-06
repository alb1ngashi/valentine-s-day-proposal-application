import React, { useState, useCallback, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
interface QuestionStageProps {
  onSuccess: () => void;
}
export function QuestionStage({ onSuccess }: QuestionStageProps) {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const handleRunaway = useCallback(() => {
    if (prefersReducedMotion) return;
    const vW = window.innerWidth;
    const vH = window.innerHeight;
    const isMobile = vW < 768;
    // Use tighter padding for mobile to keep the button reachable but tricky
    const padding = isMobile ? 60 : 100;
    const maxX = (vW / 2) - padding;
    const maxY = (vH / 2) - padding;
    // Scale movement thresholds based on device
    const minMove = isMobile ? 80 : 150;
    // Calculate new position within 70-80% of viewport to prevent "jump to edge" glitches
    let newX = (Math.random() - 0.5) * vW * 0.7;
    let newY = (Math.random() - 0.5) * vH * 0.7;
    // Strict clamping within viewport safe zone
    newX = Math.max(-maxX, Math.min(maxX, newX));
    newY = Math.max(-maxY, Math.min(maxY, newY));
    // Ensure movement isn't too small relative to current position
    if (Math.abs(newX - noButtonPos.x) < minMove) {
      newX = newX > 0 ? newX + minMove : newX - minMove;
      // Re-clamp after adjustment
      newX = Math.max(-maxX, Math.min(maxX, newX));
    }
    if (Math.abs(newY - noButtonPos.y) < minMove) {
      newY = newY > 0 ? newY + minMove : newY - minMove;
      // Re-clamp after adjustment
      newY = Math.max(-maxY, Math.min(maxY, newY));
    }
    setNoButtonPos({ x: newX, y: newY });
  }, [prefersReducedMotion, noButtonPos]);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center space-y-6 md:space-y-12 min-h-[400px] flex flex-col justify-center items-center"
      ref={containerRef}
    >
      <div className="space-y-4 md:space-y-6">
        <motion.h2
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-cursive text-primary leading-tight text-pretty px-2"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          Will you be my Valentine?
        </motion.h2>
        <p className="text-base md:text-xl text-muted-foreground italic font-medium px-4">
          (I promise to buy you chocolate hihih 🍫)
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative w-full max-w-sm mx-auto h-32 mt-4 md:mt-8">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="z-20 w-full sm:w-44"
        >
          <Button
            size="lg"
            onClick={onSuccess}
            className="w-full h-14 md:h-18 rounded-full text-xl md:text-2xl font-bold bg-primary text-white hover:bg-primary/90 shadow-xl transition-colors pulse-inviting"
          >
            YES!
          </Button>
        </motion.div>
        <motion.div
          animate={{ x: noButtonPos.x, y: noButtonPos.y }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 400,
            mass: 0.6
          }}
          onMouseEnter={handleRunaway}
          onTouchStart={handleRunaway}
          className="z-10 w-full sm:w-44"
        >
          <Button
            variant="outline"
            size="lg"
            className="w-full h-14 md:h-18 rounded-full text-xl md:text-2xl font-medium border-2 border-primary/20 hover:bg-accent/50 cursor-pointer"
          >
            No
          </Button>
        </motion.div>
      </div>
      <style>{`
        @keyframes pulse-inviting {
          0% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(255, 107, 107, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0); }
        }
        .pulse-inviting {
          animation: pulse-inviting 2s infinite;
        }
      `}</style>
    </motion.div>
  );
}