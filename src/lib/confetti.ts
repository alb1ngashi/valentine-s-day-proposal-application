import confetti from 'canvas-confetti';
export const triggerHeartConfetti = () => {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  // Define a heart shape path
  const heartPath = 'M167 430.701c-0.135-0.115-0.269-0.23-0.405-0.347L166.5 430.5c-0.135 0.117-0.27 0.232-0.405 0.347-1.144 0.975-2.296 1.942-3.454 2.901-20.781 17.203-45.922 38.016-72.641 61.213-26.719 23.197-54.88 48.775-80.141 75.319-25.26 26.545-45.741 54.496-58.423 83.123-12.682 28.627-18.106 58.174-13.437 87.276 4.668 29.102 17.653 56.666 37.625 79.742 19.972 23.076 45.451 41.516 73.719 53.301 28.267 11.785 59.117 18.006 89.281 17.584 30.164-0.422 59.015-7.461 83.75-20.438 24.735-12.977 45.195-31.134 58.75-52.094 13.555 20.96 34.015 39.117 58.75 52.094 24.735 12.977 53.586 20.016 83.75 20.438 30.164 0.422 61.014-5.799 89.281-17.584 28.268-11.785 53.747-30.225 73.719-53.301 19.972-23.076 32.957-50.64 37.625-79.742 4.669-29.102-0.755-58.649-13.437-87.276-12.682-28.627-33.163-56.578-58.423-83.123-25.261-26.544-53.422-52.122-80.141-75.319-26.719-23.197-51.86-44.01-72.641-61.213-1.158-0.959-2.31-1.926-3.454-2.901z';
  const heart = confetti.shapeFromPath({ path: heartPath });
  const defaults = { 
    startVelocity: 30, 
    spread: 360, 
    ticks: 100, 
    zIndex: 100,
    shapes: [heart],
    colors: ['#FF6B6B', '#FF9A9E', '#FF0000', '#FF3838'],
    scalar: 2
  };
  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
  const interval: any = setInterval(function() {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
    const particleCount = 40 * (timeLeft / duration);
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
  }, 250);
};