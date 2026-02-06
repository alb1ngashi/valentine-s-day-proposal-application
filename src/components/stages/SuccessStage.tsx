import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { triggerHeartConfetti } from '@/lib/confetti';
import { Heart } from 'lucide-react';
export function SuccessStage() {
  useEffect(() => {
    triggerHeartConfetti();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-8 md:space-y-10 py-4"
    >
      <div className="flex justify-center gap-4 md:gap-6">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              rotate: [0, i % 2 === 0 ? 10 : -10, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              delay: i * 0.4
            }}
          >
            <Heart 
              className="text-primary fill-primary drop-shadow-lg w-10 h-10 md:w-14 md:h-14" 
            />
          </motion.div>
        ))}
      </div>
      <div className="space-y-4 md:space-y-6">
        <h1 className="text-5xl md:text-8xl font-cursive text-primary leading-tight drop-shadow-sm">
          YAYYY! ❤️❤️
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground font-medium px-4">
          I knew you'd say yes! You're the best!
        </p>
        <motion.div
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pt-6"
        >
          <p className="text-base md:text-xl text-primary font-bold bg-primary/10 py-2 md:py-3 px-5 md:px-6 rounded-full inline-block">
            📸 Screenshot this and send it to me!
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="pt-4"
      >
        <p className="text-xs md:text-base text-muted-foreground italic font-medium">
          You just made my day! ✨
        </p>
      </motion.div>
    </motion.div>
  );
}