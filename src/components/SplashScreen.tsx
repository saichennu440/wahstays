import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState<'enter' | 'exit'>('enter');
  const words = ['Rooms', 'Comfort', 'Goa'];

  useEffect(() => {
    const enterTimer = setTimeout(() => {
      setAnimationPhase('exit');
    }, 2000);

    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setAnimationPhase('exit');
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-ocean-600 via-ocean-500 to-sand-400 flex items-center justify-center transition-opacity duration-500 ${
        animationPhase === 'exit' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center px-4">
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 transition-all duration-700 ${
            animationPhase === 'enter'
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-4 scale-95'
          }`}
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
        >
          Welcome to WahStays
        </h1>

        <div className="flex items-center justify-center gap-4 text-golden-100 text-lg md:text-xl font-medium">
          {words.map((word, index) => (
            <span
              key={word}
              className={`transition-all duration-700 ${
                animationPhase === 'enter'
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: `${(index + 1) * 150}ms`,
              }}
            >
              {word}
              {index < words.length - 1 && (
                <span className="mx-2 text-white/60">•</span>
              )}
            </span>
          ))}
        </div>

        <button
          onClick={handleSkip}
          className="mt-12 text-white/80 hover:text-white text-sm font-medium underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-3 py-2"
          aria-label="Skip intro"
        >
          Skip
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default SplashScreen;
