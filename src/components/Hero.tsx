
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroBgEducation from '@/assets/hero-bg-education.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Edlivky', 'Web Development', 'Cyber Security', 'Data Analysis', 'Blockchain', 'Data Science'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting 
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Single Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBgEducation})` }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

      {/* Coding Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-10 left-10 text-green-600 dark:text-green-400 font-mono text-sm">
          <div>const edlivky = {`{`}</div>
          <div className="ml-4">mission: 'Excellence in Tech Education',</div>
          <div className="ml-4">vision: 'Building Future Developers',</div>
          <div className="ml-4">passion: 'Growth & Innovation'</div>
          <div>{`}`};</div>
        </div>
        <div className="absolute top-32 right-20 text-blue-600 dark:text-blue-400 font-mono text-sm">
          <div>function buildDevelopers() {`{`}</div>
          <div className="ml-4">return passion + excellence;</div>
          <div>{`}`}</div>
        </div>
        <div className="absolute bottom-32 left-20 text-purple-600 dark:text-purple-400 font-mono text-sm">
          <div>class EdlivkyAcademy {`{`}</div>
          <div className="ml-4">constructor() {`{`}</div>
          <div className="ml-8">this.students = [];</div>
          <div className="ml-8">this.success = true;</div>
          <div className="ml-4">{`}`}</div>
          <div>{`}`}</div>
        </div>
        <div className="absolute bottom-10 right-32 text-yellow-600 dark:text-yellow-400 font-mono text-sm">
          <div>// Building the future</div>
          <div>// One developer at a time</div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto font-medium">
            Welcome to Edlivky Coding Academy — We build fun out of work with a passion for growth and excellence.
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Transform your career with hands-on coding bootcamps designed by industry experts. 
            From zero to hero in just months.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/courses">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200">
                Explore Courses
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/20 hover:text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Code snippet preview */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-in">
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg border border-gray-300 dark:border-slate-700 p-6 font-mono text-left">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-gray-600 dark:text-gray-400 text-sm">welcome.js</span>
            </div>
            <div className="text-sm">
              <div className="text-purple-600 dark:text-purple-400">const</div>{' '}
              <div className="text-blue-600 dark:text-blue-400 inline">student</div>{' '}
              <div className="text-gray-900 dark:text-white inline">=</div>{' '}
              <div className="text-green-600 dark:text-green-400 inline">'future developer'</div>
              <div className="text-gray-900 dark:text-white">;</div>
              <br />
              <div className="text-purple-600 dark:text-purple-400">console</div>
              <div className="text-gray-900 dark:text-white inline">.</div>
              <div className="text-yellow-600 dark:text-yellow-400 inline">log</div>
              <div className="text-gray-900 dark:text-white inline">(</div>
              <div className="text-green-600 dark:text-green-400 inline">`Welcome to Edlivky, $&#123;student&#125;!`</div>
              <div className="text-gray-900 dark:text-white">);</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
