import confetti from 'canvas-confetti';
/**
 * Normalized standard heart path for canvas-confetti.
 * Optimized for performance by keeping outside the interval loop.
 */
const HEART_PATH = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
export const triggerHeartConfetti = () => {
  const duration = 6 * 1000; // Increased duration slightly
  const animationEnd = Date.now() + duration;
  const heartShape = confetti.shapeFromPath({ path: HEART_PATH });
  const defaults = {
    startVelocity: 35,
    spread: 360,
    ticks: 120,
    zIndex: 100,
    shapes: [heartShape],
    colors: ['#FF6B6B', '#FF9A9E', '#FF0000', '#FF3838', '#FFB7B2'],
    scalar: 2.2 // Slightly denser hearts
  };
  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
  const interval: ReturnType<typeof setInterval> = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
    const particleCount = 50 * (timeLeft / duration); // Increased base particle count
    // Explode from two sides with better variety
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    });
  }, 200); // Faster interval for smoother flow
};