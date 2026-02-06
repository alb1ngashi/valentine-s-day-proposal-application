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
    // Use viewport dimensions to ensure the button stays within reachable bounds
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    // Constraint to ~35% of viewport to prevent flying off-screen completely or getting stuck in corners
    const maxX = (viewportWidth * 0.35);
    const maxY = (viewportHeight * 0.35);
    const minJump = 120; // Adjusted jump distance for better flow on small screens
    let newX = (Math.random() - 0.5) * viewportWidth * 0.7;
    let newY = (Math.random() - 0.5) * viewportHeight * 0.7;
    // Clamp values
    newX = Math.max(-maxX, Math.min(maxX, newX));
    newY = Math.max(-maxY, Math.min(maxY, newY));
    // Ensure it actually moves a significant amount
    if (Math.abs(newX - noButtonPos.x) < minJump) {
      newX = newX > 0 ? newX + minJump : newX - minJump;
    }
    setNoButtonPos({ x: newX, y: newY });
  }, [prefersReducedMotion, noButtonPos]);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center space-y-12 min-h-[400px] flex flex-col justify-center items-center"
      ref={containerRef}
    >
      <div className="space-y-6">
        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-cursive text-primary leading-tight text-pretty px-4"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          Will you be my Valentine?
        </motion.h2>
        <p className="text-xl text-muted-foreground italic font-medium">
          (I promise to buy you chocolate hihih 🍫)
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative w-full max-w-sm mx-auto h-24 mt-8">
        <Button
          size="lg"
          onClick={onSuccess}
          className="z-20 w-full sm:w-44 h-18 rounded-full text-2xl font-bold bg-primary text-white hover:bg-primary/90 shadow-xl transition-all hover:scale-110 active:scale-90"
        >
          YES!
        </Button>
        <motion.div
          animate={{ x: noButtonPos.x, y: noButtonPos.y }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 300,
            mass: 0.5
          }}
          onMouseEnter={handleRunaway}
          onTouchStart={handleRunaway}
          className="z-10 w-full sm:w-44"
        >
          <Button
            variant="outline"
            size="lg"
            className="w-full h-18 rounded-full text-2xl font-medium border-2 border-primary/20 hover:bg-accent/50 cursor-pointer active:scale-95"
          >
            No
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}