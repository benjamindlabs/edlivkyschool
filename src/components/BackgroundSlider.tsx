import { useState, useEffect } from 'react';
import heroBg1 from '@/assets/hero-bg-1.jpg';
import heroBg2 from '@/assets/hero-bg-2.jpg';
import heroBg3 from '@/assets/hero-bg-3.jpg';

interface BackgroundSliderProps {
  children: React.ReactNode;
  duration?: number;
  transition?: number;
}

const BackgroundSlider = ({ 
  children, 
  duration = 5000, 
  transition = 500 
}: BackgroundSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [heroBg1, heroBg2, heroBg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, transition / 2);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, transition, images.length]);

  const handleDotClick = (index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, transition / 2);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
            index === currentIndex && !isTransitioning
              ? 'opacity-80 dark:opacity-70'
              : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Fallback background for better accessibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 bg-gray-50 dark:bg-slate-900" />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/30" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentIndex
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundSlider;