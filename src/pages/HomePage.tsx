import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FloatingHearts } from '@/components/FloatingHearts';
import { IntroStage } from '@/components/stages/IntroStage';
import { QuestionStage } from '@/components/stages/QuestionStage';
import { SuccessStage } from '@/components/stages/SuccessStage';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
type AppStage = 'intro' | 'question' | 'success';
export function HomePage() {
  const [stage, setStage] = useState<AppStage>('intro');
  return (
    <div className="min-h-screen w-full bg-[#FFF5F5] dark:bg-background flex items-center justify-center p-4 overflow-hidden relative">
      <ThemeToggle />
      <FloatingHearts />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="py-8 md:py-10 lg:py-12 flex justify-center">
          <div className="w-full max-w-[520px] bg-white/80 dark:bg-card/80 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/20">
            <AnimatePresence mode="wait">
              {stage === 'intro' && (
                <IntroStage key="intro" onNext={() => setStage('question')} />
              )}
              {stage === 'question' && (
                <QuestionStage key="question" onSuccess={() => setStage('success')} />
              )}
              {stage === 'success' && (
                <SuccessStage key="success" />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Toaster richColors position="bottom-center" />
      <footer className="absolute bottom-4 left-0 right-0 text-center text-xs text-muted-foreground/60 pointer-events-none">
        Made with love • 2024
      </footer>
    </div>
  );
}