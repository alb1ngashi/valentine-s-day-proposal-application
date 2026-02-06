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
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-4 overflow-hidden relative">
      <ThemeToggle />
      <FloatingHearts />
      {/* 
          Main Container: 
          We use a larger z-index for the card but ensure its parent doesn't clip
          the absolute-positioned runaway button in the QuestionStage.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pointer-events-none">
        <div className="py-8 md:py-10 lg:py-12 flex justify-center pointer-events-auto">
          <div className="w-full max-w-[520px] glass p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative">
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
      <footer className="fixed bottom-4 left-0 right-0 text-center text-[10px] md:text-xs text-muted-foreground/40 pointer-events-none tracking-widest uppercase z-0">
        Made with love • 2024
      </footer>
    </div>
  );
}