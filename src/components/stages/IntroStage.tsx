import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
interface IntroStageProps {
  onNext: () => void;
}
export function IntroStage({ onNext }: IntroStageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="text-center space-y-8"
    >
      <div className="flex justify-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="bg-primary/10 p-6 rounded-full"
        >
          <Heart size={64} className="text-primary fill-primary" />
        </motion.div>
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
          Hey Beautiful...
        </h1>
        <p className="text-xl text-muted-foreground max-w-sm mx-auto">
          I have something very important that I've been wanting to ask you.
        </p>
      </div>
      <Button 
        size="lg" 
        onClick={onNext}
        className="rounded-full px-12 py-7 text-xl font-bold bg-primary text-primary-foreground hover:scale-105 transition-transform"
      >
        Click Me
      </Button>
    </motion.div>
  );
}