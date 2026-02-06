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
      className="text-center space-y-10 md:space-y-14 py-2"
    >
      <div className="space-y-4">
        {/* Adjusted leading to 1.2 to ensure cursive descenders aren't clipped */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cursive text-primary leading-[1.2] tracking-normal text-pretty px-2">
          {text}
        </h1>
      </div>
      <div className="pt-2 md:pt-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            size="lg"
            onClick={onNext}
            className="w-full max-w-[280px] md:max-w-none mx-auto rounded-full py-7 md:py-8 text-xl md:text-2xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-xl active:shadow-inner"
          >
            Click me
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}