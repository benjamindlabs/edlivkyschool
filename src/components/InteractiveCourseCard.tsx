import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Play, 
  ChevronDown, 
  ChevronUp,
  CheckCircle,
  Award,
  Calendar
} from 'lucide-react';

interface Module {
  title: string;
  duration: string;
  lessons: number;
  completed?: boolean;
}

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  image: string;
  videoPreview: string;
  tags: string[];
  instructor: string;
  modules: Module[];
  features: string[];
  startDate: string;
}

interface InteractiveCourseCardProps {
  course: Course;
  index: number;
}

const InteractiveCourseCard: React.FC<InteractiveCourseCardProps> = ({ course, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hovering, setHovering] = useState(false);

  const levelColors = {
    Beginner: 'bg-green-500 text-white',
    Intermediate: 'bg-yellow-500 text-black',
    Advanced: 'bg-red-500 text-white'
  };

  const levelIcons = {
    Beginner: '🔰',
    Intermediate: '⚡',
    Advanced: '🚀'
  };

  return (
    <Card 
      className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 overflow-hidden transition-all duration-500 group hover:shadow-xl hover:scale-[1.02] animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Video/Image Header */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500">
        <img 
          src={course.image} 
          alt={course.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovering ? 'scale-110 blur-sm' : 'scale-100'
          }`}
        />
        
        {/* Video Preview Overlay */}
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-300 ${
          hovering ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={() => setIsVideoPlaying(true)}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Play className="h-8 w-8 ml-1" fill="currentColor" />
          </button>
        </div>
        
        {/* Course Level Badge */}
        <div className="absolute top-4 left-4">
          <Badge className={levelColors[course.level as keyof typeof levelColors]}>
            {levelIcons[course.level as keyof typeof levelIcons]} {course.level}
          </Badge>
        </div>
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-blue-600 text-white font-semibold">
            {course.price}
          </Badge>
        </div>

        {/* Instructor Badge */}
        <div className="absolute bottom-4 left-4">
          <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
            👨‍💻 {course.instructor}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        {/* Course Title and Description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
            {course.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {course.description}
          </p>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.map((tag, tagIndex) => (
            <Badge 
              key={tagIndex} 
              variant="outline"
              className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        {/* Course Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Clock className="h-4 w-4 mr-2 text-blue-400" />
            <span className="font-medium">{course.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Users className="h-4 w-4 mr-2 text-green-400" />
            <span className="font-medium">{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Star className="h-4 w-4 mr-2 text-yellow-400 fill-current" />
            <span className="font-medium">{course.rating}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Calendar className="h-4 w-4 mr-2 text-purple-400" />
            <span className="font-medium">{course.startDate}</span>
          </div>
        </div>

        {/* Expandable Curriculum Section */}
        <div className="border-t border-gray-200 dark:border-slate-600 pt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200"
          >
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-blue-400" />
              <span className="font-semibold text-gray-900 dark:text-white">
                Course Curriculum ({course.modules.length} modules)
              </span>
            </div>
            <div className="transition-transform duration-300">
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 text-gray-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-400" />
              )}
            </div>
          </button>
          
          {/* Expandable Content */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}>
            <div className="space-y-3">
              {course.modules.map((module, moduleIndex) => (
                <div 
                  key={moduleIndex}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                      module.completed 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                    }`}>
                      {module.completed ? (
                        <CheckCircle className="h-3 w-3" />
                      ) : (
                        <span className="text-xs font-semibold">{moduleIndex + 1}</span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                        {module.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {module.lessons} lessons • {module.duration}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Course Features */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-600">
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 flex items-center">
                <Award className="h-4 w-4 mr-2 text-yellow-400" />
                What You'll Get
              </h4>
              <ul className="space-y-1">
                {course.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-xs text-gray-600 dark:text-gray-300 flex items-center">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <Button 
            className="flex-1 bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            Enroll Now
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </CardContent>

      {/* Video Modal (simplified) */}
      {isVideoPlaying && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 max-w-4xl w-full">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
              <p className="text-gray-600 dark:text-gray-300">
                Course Preview Video - {course.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default InteractiveCourseCard;