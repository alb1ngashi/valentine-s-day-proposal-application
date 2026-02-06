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
    // We want the button to jump away, but stay within the viewport bounds
    // with some padding to prevent it from clipping or going behind the card
    const padding = 80;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    // Calculate a safe range relative to current center
    // We use window coordinates to ensure it stays visible regardless of container size
    const maxX = (viewportWidth / 2) - padding;
    const maxY = (viewportHeight / 2) - padding;
    // Minimum jump distance to ensure it actually "runs away"
    const minJump = 100;
    let newX = (Math.random() - 0.5) * viewportWidth * 0.8;
    let newY = (Math.random() - 0.5) * viewportHeight * 0.8;
    // Clamp to viewport
    newX = Math.max(-maxX, Math.min(maxX, newX));
    newY = Math.max(-maxY, Math.min(maxY, newY));
    // If the jump is too small, push it further
    if (Math.abs(newX - noButtonPos.x) < minJump) {
      newX = newX > 0 ? newX + minJump : newX - minJump;
    }
    if (Math.abs(newY - noButtonPos.y) < minJump) {
      newY = newY > 0 ? newY + minJump : newY - minJump;
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
      <div className="space-y-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-display font-black text-foreground leading-tight text-pretty"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Will you be my <span className="text-primary">Valentine?</span>
        </motion.h2>
        <p className="text-lg text-muted-foreground italic font-medium">Think carefully...</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative w-full max-w-sm mx-auto h-24">
        <Button
          size="lg"
          onClick={onSuccess}
          className="z-20 w-full sm:w-44 h-18 rounded-full text-2xl font-bold bg-primary hover:bg-primary/90 shadow-xl transition-all hover:scale-110 active:scale-90"
        >
          YES!
        </Button>
        <motion.div
          animate={{ x: noButtonPos.x, y: noButtonPos.y }}
          transition={{ 
            type: 'spring', 
            damping: 12, 
            stiffness: 200,
            mass: 0.8
          }}
          onMouseEnter={handleRunaway}
          onTouchStart={handleRunaway}
          className="z-10 w-full sm:w-44 absolute sm:static"
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