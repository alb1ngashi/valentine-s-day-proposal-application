import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
interface IntroStageProps {
  text: string;
  onNext: () => void;
}
export function IntroStage({ text, onNext }: IntroStageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      className="text-center space-y-12"
    >
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary leading-[1.1] tracking-tight text-pretty">
          {text}
        </h1>
      </div>
      <div className="pt-4">
        <Button
          size="lg"
          onClick={onNext}
          className="w-full rounded-full py-8 text-2xl font-bold bg-primary text-primary-foreground hover:scale-[1.05] hover:bg-primary/90 transition-all shadow-lg active:scale-95"
        >
          Click me
        </Button>
      </div>
    </motion.div>
  );
}