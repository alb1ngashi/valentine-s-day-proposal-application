import React, { useState, useCallback, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
interface QuestionStageProps {
  onSuccess: () => void;
}
export function QuestionStage({ onSuccess }: QuestionStageProps) {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();
  const handleRunaway = useCallback(() => {
    if (prefersReducedMotion) return;
    // Calculate a safe random position within a reasonable radius
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 300;
    setNoButtonPos({ x: randomX, y: randomY });
  }, [prefersReducedMotion]);
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center space-y-12 min-h-[400px] flex flex-col justify-center items-center"
    >
      <div className="space-y-4">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight">
          Will you be my <span className="text-primary">Valentine?</span>
        </h2>
        <p className="text-lg text-muted-foreground italic">Think carefully...</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative w-full max-w-md mx-auto">
        <Button 
          size="lg"
          onClick={onSuccess}
          className="z-10 w-full sm:w-40 h-16 rounded-full text-2xl font-bold bg-primary hover:bg-primary/90 shadow-xl"
        >
          YES!
        </Button>
        <motion.div
          animate={{ x: noButtonPos.x, y: noButtonPos.y }}
          transition={{ type: 'spring', damping: 15, stiffness: 150 }}
          onMouseEnter={handleRunaway}
          onTouchStart={handleRunaway}
          className="w-full sm:w-40"
        >
          <Button 
            variant="outline"
            size="lg"
            className="w-full h-16 rounded-full text-2xl font-medium border-2 hover:bg-transparent cursor-default"
          >
            No
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}