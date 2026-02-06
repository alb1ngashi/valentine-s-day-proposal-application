import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FloatingHearts } from '@/components/FloatingHearts';
import { IntroStage } from '@/components/stages/IntroStage';
import { QuestionStage } from '@/components/stages/QuestionStage';
import { SuccessStage } from '@/components/stages/SuccessStage';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
import { FloatingFlowers } from '@/components/FloatingFlowers';
const INTRO_STEPS = [
  "Hey Beautiful ...",
  "We've made so many memories ...",
  "You make me smile every single day ...",
  "So I have a question ..."
];
export function HomePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handleSuccess = () => {
    setIsFinished(true);
  };
  const totalIntroSteps = INTRO_STEPS.length;
  const isQuestionStage = currentStep === totalIntroSteps && !isFinished;
  const isIntroStage = currentStep < totalIntroSteps && !isFinished;
  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-4 overflow-hidden relative">
      <ThemeToggle />
      {/* Background Layer (z-0) */}
      <FloatingHearts />
      {/* Main Content Layer (z-10) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pointer-events-none">
        <div className="py-8 md:py-10 lg:py-12 flex justify-center pointer-events-auto">
          {/* overflow-visible allows the No button to escape the card bounds in QuestionStage */}
          <div className="w-full max-w-[520px] glass p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative min-h-[450px] flex flex-col justify-center overflow-visible">
            {!isFinished && <FloatingFlowers />}
            <AnimatePresence mode="wait">
              {isIntroStage && (
                <IntroStage
                  key={`intro-${currentStep}`}
                  text={INTRO_STEPS[currentStep]}
                  onNext={handleNext}
                />
              )}
              {isQuestionStage && (
                <QuestionStage
                  key="question"
                  onSuccess={handleSuccess}
                />
              )}
              {isFinished && (
                <SuccessStage key="success" />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/* Notifications Layer (z-50 via component default) */}
      <Toaster richColors position="bottom-center" />
      {/* Subtle Footer (z-0 to stay behind interaction containers) */}
      <footer className="fixed bottom-6 left-0 right-0 text-center text-[10px] md:text-xs text-muted-foreground/50 pointer-events-none tracking-[0.3em] uppercase z-0 font-bold">
        MADE WITH LOVE BY BINIIIIIIIII
      </footer>
    </div>
  );
}