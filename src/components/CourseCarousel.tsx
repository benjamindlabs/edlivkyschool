
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Play, Clock, Users } from 'lucide-react';

const CourseCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const courses = [
    {
      title: "Web Design - Frontend",
      description: "Master modern frontend development with React, HTML5, and CSS3",
      price: "₦150,000",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
      videoPreview: "preview-video-1.mp4",
      instructor: "Dr. Sarah Mitchell",
      modules: [
        { title: "HTML5 Fundamentals", duration: "2 hours", lessons: 8 },
        { title: "CSS3 & Responsive Design", duration: "3 hours", lessons: 12 },
        { title: "React Basics", duration: "4 hours", lessons: 15 },
        { title: "Advanced React Patterns", duration: "3 hours", lessons: 10 }
      ],
      features: [
        "Live instructor sessions",
        "Hands-on projects",
        "Career support",
        "Certificate of completion"
      ],
      startDate: "Jan 15"
    },
    {
      title: "Web Design - Fullstack",
      description: "Complete MERN stack development from frontend to backend",
      price: "₦250,000",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
      instructor: "Michael Rodriguez",
      startDate: "Feb 1"
    },
    {
      title: "Data Science",
      description: "Learn Python, ML algorithms, and data visualization techniques",
      price: "₦200,000",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      instructor: "Dr. Priya Patel",
      startDate: "Feb 15"
    },
    {
      title: "Cyber Security",
      description: "Protect systems and networks from digital attacks",
      price: "₦180,000",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=200&fit=crop",
      instructor: "Lisa Thompson",
      startDate: "Mar 1"
    },
    {
      title: "Python Programming",
      description: "From basics to advanced Python programming concepts",
      price: "₦120,000",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=200&fit=crop",
      instructor: "James Chen",
      startDate: "Mar 15"
    },
    {
      title: "Blockchain",
      description: "Build decentralized applications and smart contracts",
      price: "₦220,000",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",
      instructor: "Robert Kim",
      startDate: "Apr 1"
    }
  ];

  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1280) return 3;
    return 4;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlide = Math.max(0, courses.length - visibleCards);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= maxSlide) return 0;
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [maxSlide]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out gap-6"
          style={{ 
            transform: `translateX(-${currentSlide * (100 / visibleCards + 6 / visibleCards)}%)`,
          }}
        >
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 carousel-mobile"
              style={{ width: `calc(${100 / visibleCards}% - ${24 * (visibleCards - 1) / visibleCards}px)` }}
            >
              <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 overflow-hidden card-hover group h-full">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Video Preview Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110">
                      <Play className="h-6 w-6 ml-1" fill="currentColor" />
                    </button>
                  </div>
                   {/* Instructor Badge */}
                   {course.instructor && (
                     <div className="absolute bottom-3 left-3">
                       <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs">
                         👨‍💻 {course.instructor}
                       </Badge>
                     </div>
                   )}
                </div>
                <CardContent className="p-6 card-mobile">
                  <h3 className="text-responsive-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{course.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-responsive-sm leading-relaxed">{course.description}</p>
                  
                  {/* Course Stats */}
                  <div className="flex items-center justify-between mb-4 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {course.modules?.length || 4} modules
                    </span>
                     <span className="flex items-center">
                       <Users className="h-3 w-3 mr-1" />
                       {course.startDate || "TBA"}
                     </span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-responsive-xl font-bold text-green-400">{course.price}</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 btn-interactive touch-friendly">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:hover:scale-100 z-10"
        aria-label="Previous courses"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        disabled={currentSlide === maxSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:hover:scale-100 z-10"
        aria-label="Next courses"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: maxSlide + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              currentSlide === index ? 'bg-blue-400 scale-125' : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to course group ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseCarousel;
