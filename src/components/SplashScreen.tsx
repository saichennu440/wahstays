import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [animationPhase, setAnimationPhase] = useState<'enter' | 'exit'>('enter');
  const words = ['Stays', 'Events', 'Adventures'];

  useEffect(() => {
    const enterTimer = setTimeout(() => {
      setAnimationPhase('exit');
    }, 2000);

    const exitTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-gray-800 via-gray-500 to-orange-400 flex items-center justify-center transition-all duration-1000 origin-bottom ${
        animationPhase === 'exit' ? 'translate-y-[-100%] opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm animate-float"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none"></div>

      {/* Main content */}
      <div className="text-center px-4 relative z-10">
        {/* Logo/Icon animation */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            animationPhase === 'enter'
              ? 'opacity-100 scale-100 rotate-0'
              : 'opacity-0 scale-50 -rotate-180'
          }`}
        >
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
            <div className="relative w-full h-full bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl">
              <svg
                className="w-12 h-12 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Main title with staggered letter animation */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-800 mb-4 transition-all duration-1000 ${
            animationPhase === 'enter'
              ? 'opacity-100 translate-y-0 blur-0'
              : 'opacity-0 translate-y-8 blur-sm'
          }`}
          style={{ 
            textShadow: '0 4px 30px rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.1)',
          }}
        >
          {'Arriving at WahStays'.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block animate-wave"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Subtitle with shimmer effect */}
        <div
          className={`text-white/80 text-base md:text-lg mb-8 font-light tracking-wide transition-all duration-1000 ${
            animationPhase === 'enter'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          Your Perfect Getaway Awaits
        </div>

        {/* Words with fade-in animation */}
        <div className="flex items-center justify-center gap-4 text-orange-400 text-lg md:text-xl font-medium mb-12">
          {words.map((word, index) => (
            <span
              key={word}
              className={`transition-all duration-1000 ${
                animationPhase === 'enter'
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-90'
              }`}
              style={{
                transitionDelay: `${(index + 2) * 200}ms`,
              }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
                {word}
              </span>
              {index < words.length - 1 && (
                <span className="mx-3 text-white/40">•</span>
              )}
            </span>
          ))}
        </div>

        {/* Loading bar */}
        <div
          className={`w-48 h-1 mx-auto bg-white/20 rounded-full overflow-hidden transition-opacity duration-500 ${
            animationPhase === 'exit' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div
            className="h-full bg-gradient-to-r from-white/60 to-white rounded-full animate-loading"
            style={{ animationDuration: '2.5s' }}
          ></div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/20 via-black/5 to-transparent pointer-events-none"></div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(20px);
            opacity: 0.6;
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }

        .animate-loading {
          animation: loading ease-in-out;
        }

        .bg-radial-gradient {
          background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;