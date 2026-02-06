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
      className="text-center space-y-10"
    >
      <div className="flex justify-center gap-4">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: i * 0.2
            }}
          >
            <Heart size={48} className="text-primary fill-primary" />
          </motion.div>
        ))}
      </div>
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-cursive text-primary leading-tight">
          YAYYY! ❤️
        </h1>
        <p className="text-2xl text-muted-foreground font-medium">
          I knew you'd say yes!
        </p>
        <p className="text-lg text-primary font-semibold pt-4">
          Screenshot this and send it to me!
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="pt-8"
      >
        <p className="text-sm text-muted-foreground italic font-medium">You just made my day! ✨</p>
      </motion.div>
    </motion.div>
  );
}