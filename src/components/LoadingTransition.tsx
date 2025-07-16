import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const LoadingTransition = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-slate-900 flex items-center justify-center">
      {/* Animated Logo/Brand */}
      <div className="flex flex-col items-center">
        <div className="relative">
          {/* Spinning Ring */}
          <div className="w-20 h-20 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin border-t-blue-600 dark:border-t-blue-400"></div>
          
          {/* Inner Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Loading...
          </h2>
          <div className="flex space-x-1 justify-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700">
        <div className="h-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingTransition;